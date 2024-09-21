
import Footer from "@/components/footer/CustomFooter";
import React from "react";

const ProjectPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">ProjectPage</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
