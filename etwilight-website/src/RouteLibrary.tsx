import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage.tsx";
import BlogPage from "@/pages/BlogPage.tsx";
import ResearchPage from "@/pages/ResearchPage.tsx";
import MusicPage from "@/pages/MusicPage.tsx";
import ProjectsPage from "@/pages/ProjectsPage.tsx";
import AboutPage from "@/pages/AboutPage";
import MiscPage from "@/pages/MiscPage.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";
import ProtectedRoute from "@/components/ProtectedRoute";

const RouteLibrary = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/about"
        element={
          <ProtectedRoute path="/about">
            <AboutPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/research"
        element={
          <ProtectedRoute path="/research">
            <ResearchPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/music"
        element={
          <ProtectedRoute path="/music">
            <MusicPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/blog"
        element={
          <ProtectedRoute path="/blog">
            <BlogPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/projects"
        element={
          <ProtectedRoute path="/projects">
            <ProjectsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/misc"
        element={
          <ProtectedRoute path="/misc">
            <MiscPage />
          </ProtectedRoute>
        }
      />

      {/* 显式 404 路径 */}
      <Route path="/404" element={<NotFoundPage />} />

      {/* fallback - 捕获所有未定义路由 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouteLibrary;
