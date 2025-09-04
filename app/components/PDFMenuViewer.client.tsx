"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF.js worker (browser only)
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

export default function PDFMenuViewer({
  name,
  file,
}: {
  name: string;
  file: string;
}) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalPage, setModalPage] = useState(1);

  // Small preview click handler
  const handleOpenModal = () => {
    setShowModal(true);
    setModalPage(pageNumber);
  };

  // Modal close handler
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="bg-graphite rounded-xl p-6 shadow-lg flex flex-col items-center cursor-pointer"
        onClick={handleOpenModal}
      >
        <h3 className="text-xl font-semibold mb-3 text-white">{name}</h3>
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <Document
            file={file}
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages);
              setPageNumber(1);
              setError(null);
            }}
            onLoadError={() => setError("Could not load PDF.")}
            loading={<span className="text-white">Loading PDF...</span>}
            className="mb-4"
          >
            <Page
              pageNumber={pageNumber}
              width={300}
              renderAnnotationLayer
              renderTextLayer
            />
          </Document>
        )}
        <span className="mt-2 text-brand-400 text-sm">Click to enlarge</span>
      </div>

      {/* Modal for enlarged PDF */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-graphite rounded-xl p-8 shadow-2xl relative max-w-3xl w-full flex flex-col items-center">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-brand-400"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-white">{name}</h3>
            <Document
              file={file}
              onLoadSuccess={({ numPages }) => {
                setNumPages(numPages);
                setModalPage(1);
                setError(null);
              }}
              onLoadError={() => setError("Could not load PDF.")}
              loading={<span className="text-white">Loading PDF...</span>}
              className="mb-4"
            >
              <Page
                pageNumber={modalPage}
                width={600}
                renderAnnotationLayer
                renderTextLayer
              />
            </Document>
            {numPages && numPages > 1 && (
              <div className="flex items-center gap-2 mt-4">
                <button
                  type="button"
                  className="px-3 py-2 bg-brand-400 rounded text-white disabled:opacity-50"
                  onClick={() => setModalPage((n) => Math.max(n - 1, 1))}
                  disabled={modalPage <= 1}
                >
                  Prev
                </button>
                <span className="text-white">
                  Page {modalPage} of {numPages}
                </span>
                <button
                  type="button"
                  className="px-3 py-2 bg-brand-400 rounded text-white disabled:opacity-50"
                  onClick={() =>
                    numPages && setModalPage((n) => Math.min(n + 1, numPages))
                  }
                  disabled={!!numPages && modalPage >= numPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
