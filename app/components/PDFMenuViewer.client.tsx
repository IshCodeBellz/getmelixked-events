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

  return (
    <div className="bg-graphite rounded-xl p-6 shadow-lg flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-3 text-white">{name}</h3>
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <>
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

          {numPages && numPages > 1 && (
            <div className="flex items-center gap-2 mt-2">
              <button
                type="button"
                className="px-2 py-1 bg-brand-400 rounded text-white disabled:opacity-50"
                onClick={() => setPageNumber((n) => Math.max(n - 1, 1))}
                disabled={pageNumber <= 1}
              >
                Prev
              </button>
              <span className="text-white">
                Page {pageNumber} of {numPages}
              </span>
              <button
                type="button"
                className="px-2 py-1 bg-brand-400 rounded text-white disabled:opacity-50"
                onClick={() =>
                  numPages && setPageNumber((n) => Math.min(n + 1, numPages))
                }
                disabled={!!numPages && pageNumber >= numPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
