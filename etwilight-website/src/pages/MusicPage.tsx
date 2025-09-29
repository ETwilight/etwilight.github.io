import ConcertMap from "@/components/ConcertMap";

const MusicPage = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        minHeight: "100vh",
        padding: "3rem 6%",
        gap: "8%",
        boxSizing: "border-box",
      }}
    >
      {/* Left Column: Performer (Conductor + Piano) */}
      <div
        style={{
          width: "44%",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        {/* As a conductor */}
        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h1 style={{ fontSize: "2rem" }}>As a conductor</h1>
          <p>
            I am the founder and Music Director of URFO — an independent orchestra
            rooted in musical freedom and high artistic standards. I emphasize detailed
            timbral control, narrative structure, and emotionally immersive performance.
          </p>
          <p>
            →{" "}
            <a
              href="https://unrestrainedconcert.github.io"
              target="_blank"
              rel="noreferrer"
            >
              Visit URFO
            </a>
          </p>
        </section>

        {/* As a piano player */}
        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h1 style={{ fontSize: "2rem" }}>As a piano player</h1>
          <p>
            I am deeply drawn to romanticism and 20th-century piano repertoire,
            especially Chopin, Brahms, Ravel, and Prokofiev. I have performed works such as
            Chopin Piano Concerto No. 1, Ravel Piano Trio, and Prokofiev Piano Concerto No. 2.
          </p>
        </section>
      </div>

      {/* Right Column: Listener */}
      <div
        style={{
          width: "44%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h1 style={{ fontSize: "2rem" }}>As a listener</h1>
        <p>
          Here's a map of the concert halls where I heard each orchestra live
          for the first time. Here's a map of the concert halls where I heard each orchestra live
          for the first time.
        </p>
        <div
          style={{
            height: "70vh",
            width: "100%",
            borderRadius: "0.75rem",
            overflow: "hidden",
          }}
        >
          <ConcertMap />
        </div>
      </div>
    </main>
  );
};

export default MusicPage;
