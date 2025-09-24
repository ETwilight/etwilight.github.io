// src/RouteLibrary.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage.tsx";
import BlogPage from "@/pages/BlogPage.tsx";
import ResearchPage from "@/pages/ResearchPage.tsx";
import MusicPage from "@/pages/MusicPage.tsx";
import ProjectsPage from "@/pages/ProjectsPage.tsx";
import AboutPage from "@/pages/AboutPage";
import MiscPage from "@/pages/MiscPage.tsx";

const RouteLibrary = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/music" element={<MusicPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/misc" element={<MiscPage />} />
    </Routes>
  );
};

export default RouteLibrary;
