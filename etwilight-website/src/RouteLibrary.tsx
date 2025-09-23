// src/RouteLibrary.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage.tsx";
import BlogPage from "@/pages/BlogPage.tsx";
import ResearchPage from "@/pages/ResearchPage.tsx";
import MusicPage from "@/pages/MusicPage.tsx";
import ProjectsPage from "@/pages/ProjectsPage.tsx";
import BioPage from "@/pages/BioPage.tsx";

const RouteLibrary = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/music" element={<MusicPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/bio" element={<BioPage />} />
    </Routes>
  );
};

export default RouteLibrary;
