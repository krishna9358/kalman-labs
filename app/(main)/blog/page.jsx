import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">BlogPage 123</h1>
      <Link href="/">Home</Link>
    </div>
  );
};

export default BlogPage;
