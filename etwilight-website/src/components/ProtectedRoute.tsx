import { Navigate } from "react-router-dom";
import navItems from "@/assets/navItems.json";
import { ReactNode } from "react";

const isDev = import.meta.env.MODE === "development";

type ProtectedRouteProps = {
  path: string;
  children: ReactNode;
};

export default function ProtectedRoute({ path, children }: ProtectedRouteProps) {
  // 在 navItems.json 中查找对应条目
  const item = (navItems as { path: string; display: boolean }[]).find(
    (i) => i.path === path,
  );

  const allow = item?.display ?? true;

  if (allow || isDev) {
    return <>{children}</>;
  }

  // 屏蔽页面 → 进入 404
  return <Navigate to="/404" replace />;
}
