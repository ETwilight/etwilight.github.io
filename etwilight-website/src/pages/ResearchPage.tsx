import CircleHead from "@/components/CircleHead";
import headImg from "@/assets/photos/head.jpg";
import SchoolIcon from "@/assets/icons/research/school.svg?react";
import ClockIcon from "@/assets/icons/research/clock.svg?react";
import PersonIcon from "@/assets/icons/research/person.svg?react";
import UlLink from "@/components/UlLink";
import researchEntriesRaw from "@/assets/research/entries.json";

type ResearchEntry = {
  id: string;
  role: string;
  projectTitle: string;
  institution: string;
  location: string;
  start: string;
  end: string;
  supervisor: string;
  description: string;
  url?: string;
};

const researchEntries = researchEntriesRaw as ResearchEntry[];

const ResearchPage = () => {
  return (
    <main
      style={{
        padding: "2rem",
        margin: "0 auto",
        maxWidth: "100rem",
        display: "grid",
        gridTemplateColumns: "minmax(18rem, 24rem) 1fr",
        gap: "2rem",
        alignItems: "start",
      }}
    >
      {/* Left column */}
      <aside
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <CircleHead
          size={"12rem"}
          src={headImg}
          shadow="0 0.5rem 2rem rgba(0,0,0,0.25)"
        />

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Brian Guo
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <SchoolIcon style={{ width: "1rem", height: "1rem" }} />
            <UlLink href="https://illinois.edu">
              <span style={{ fontSize: "1rem", opacity: 0.75 }}>
                University of Illinois Urbana–Champaign
              </span>
            </UlLink>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <ClockIcon style={{ width: "1rem", height: "1rem" }} />
            <span style={{ fontSize: "1rem", opacity: 0.75 }}>
              Senior Undergrad, Exp. Graduation: May 2026
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <PersonIcon style={{ width: "1rem", height: "1rem" }} />
            <span style={{ fontSize: "1rem", opacity: 0.75 }}>
              Advised by{" "}
              <UlLink href="https://hanzhaoml.github.io" always>
                Prof. Han Zhao
              </UlLink>{" "}
              and{" "}
              <UlLink href="https://chenyuen0103.github.io/" always>
                Dr. Yuen Chen
              </UlLink>
            </span>
          </div>
        </div>
      </aside>

      {/* Right column */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          minWidth: "20rem",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Research
        </h1>

        <section
          style={{
            display: "grid",
            gap: "0.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              margin: 0,
            }}
          >
            Research Focus
          </h2>
          <p style={{ margin: 0 }}>
            I work on trustworthy machine learning and its theoretical
            foundations, with a focus on learning under distribution shift,
            Gradual Domain Adaptation, and the expressive power and stability of
            modern learning systems.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gap: "0.75rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              margin: 0,
            }}
          >
            Research Experience
          </h2>

          {researchEntries.map((entry) => {
            const Wrapper = entry.url ? "a" : "div";

            return (
              <Wrapper
                key={entry.id}
                href={entry.url}
                target={entry.url ? "_blank" : undefined}
                rel={entry.url ? "noopener noreferrer" : undefined}
                style={{
                  padding: "0.75rem",
                  borderRadius: "0.75rem",
                  background:
                    "color-mix(in srgb, currentColor 10%, transparent)",
                  display: "grid",
                  gap: "0.5rem",
                  textDecoration: "none",
                  color: "inherit",
                  cursor: entry.url ? "pointer" : "default",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "1.125rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {entry.projectTitle}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.95rem",
                      opacity: 0.8,
                    }}
                  >
                    {entry.role} · {entry.institution} ({entry.location}) ·{" "}
                    {entry.start} – {entry.end} · {entry.supervisor}
                  </p>
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                  }}
                >
                  {entry.description}
                </p>
              </Wrapper>
            );
          })}
        </section>

        {/* <section
          style={{
            display: "grid",
            gap: "0.25rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              margin: 0,
            }}
          >
            Publications
          </h2>
          <p
            style={{
              margin: 0,
              opacity: 0.7,
            }}
          >
            Coming soon.
          </p>
        </section> */}
      </section>

      {/* Responsive */}
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
