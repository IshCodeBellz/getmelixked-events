import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Welcome to Our Blog!",
    date: "2024-06-10",
    excerpt: "Discover the latest updates, tips, and stories from our team.",
  },
  {
    id: 2,
    title: "How to Get the Most Out of Our Events",
    date: "2024-06-05",
    excerpt: "Maximize your experience with these helpful event tips.",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {blogPosts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-2">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
