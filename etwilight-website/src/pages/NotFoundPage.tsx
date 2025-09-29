import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

function generateRandomLatinLine(length: number): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return Array.from({ length }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length)),
  ).join("");
}

export default function NotFoundPage() {
  const navigate = useNavigate();

  // 组件挂载时生成一次随机 5 行字符串
  const lines = useMemo(
    () => Array.from({ length: 5 }, () => generateRandomLatinLine(30)),
    [],
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <div className="text-left font-mono text-sm leading-relaxed">
        {lines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
}
