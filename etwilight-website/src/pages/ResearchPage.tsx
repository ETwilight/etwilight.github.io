// src/pages/ResearchPage.tsx
import CircleHead from "@/components/CircleHead";
import headImg from "@/assets/photos/head.jpg";
import SchoolIcon from "@/assets/icons/research/school.svg?react";
import ClockIcon from "@/assets/icons/research/clock.svg?react";
import PersonIcon from "@/assets/icons/research/person.svg?react";
import UlLink from "@/components/UlLink";

const ResearchPage = () => {
  return (
    <main
      style={{
        padding: "2rem",
        margin: "0 auto",
        maxWidth: "100rem", // 给两栏留够宽度（响应式单位）
        display: "grid",
        gridTemplateColumns: "minmax(18rem, 24rem) 1fr", // 左固定区 + 右自适应
        gap: "2rem",
        alignItems: "start",
      }}
    >
      {/* 左栏：头像 + 姓名 + 学校 */}
      <aside
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <CircleHead size={"12rem"} src={headImg} shadow="0 0.5rem 2rem rgba(0,0,0,0.25)" />
        
        {/* 名字依旧居中 */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.2 }}>Brian Guo</div>
        </div>

        {/* 下面这些左对齐 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <SchoolIcon style={{ width: "1rem", height: "1rem" }} />
            <UlLink href="https://illinois.edu">
              <span style={{ fontSize: "1rem", opacity: 0.75 }}>University of Illinois Urbana–Champaign</span>
            </UlLink>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ClockIcon style={{ width: "1rem", height: "1rem" }} />
            <span style={{ fontSize: "1rem", opacity: 0.75 }}>Senior Undergrad, Exp. Graduation: May 2026</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <PersonIcon style={{ width: "1rem", height: "1rem" }} />
            <span style={{ fontSize: "1rem", opacity: 0.75 }}>
              Advised by&nbsp;
              <UlLink href="hanzhaoml.github.io" always>
                Prof. Han Zhao
              </UlLink>
              &nbsp;and&nbsp;
              <UlLink href="https://chenyuen0103.github.io/" always>
                Dr. Yuen Chen
              </UlLink>
            </span>
          </div>
        </div>
      </aside>


      {/* 右栏：研究内容 */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          minWidth: "20rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", lineHeight: 1.2, margin: 0 }}>Research</h1>

        <section style={{ display: "grid", gap: "0.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", margin: 0 }}>Research Focus</h2>
          <p style={{ margin: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>

        <section style={{ display: "grid", gap: "0.75rem" }}>
          <h2 style={{ fontSize: "1.5rem", margin: 0 }}>Current Projects</h2>

          <article
            style={{
              padding: "0.75rem",
              borderRadius: "0.75rem",
              background: "color-mix(in srgb, currentColor 10%, transparent)",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "1.125rem" }}>
              Lore ipsum dolor sit amet
            </h3>
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>

          <article
            style={{
              padding: "0.75rem",
              borderRadius: "0.75rem",
              background: "color-mix(in srgb, currentColor 10%, transparent)",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "1.125rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>

        </section>

        <section style={{ display: "grid", gap: "0.25rem" }}>
          <h2 style={{ fontSize: "1.5rem", margin: 0 }}>Publications</h2>
          <p style={{ margin: 0, opacity: 0.7 }}>Coming soon.</p>
        </section>
      </section>

      {/* 窄屏自适应为单列 */}
      <style>
        {`
          @media (max-width: 56rem) {
            main {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </main>
  );
};

export default ResearchPage;
