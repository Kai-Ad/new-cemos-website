// src/app/research/page.tsx
import ProjectGallery from "@/components/ProjectGallery";

export default function ResearchPage() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-heading">Our Research</h1>
        <p className="mt-4 max-w-2xl mx-auto opacity-80">
          Explore our key research areas and discover the innovative projects driving the future of polymer electronics.
        </p>
      </div>
      
      <ProjectGallery />
    </div>
  );
}