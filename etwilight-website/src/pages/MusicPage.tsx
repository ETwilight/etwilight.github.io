const MusicPage = () => {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "65ch",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>Music</h1>
      <p>
        I'm the founder and conductor of URFO — an independent orchestra rooted in musical freedom
        and high artistic standards.
      </p>
      <p>
        I focus on detailed timbral control, narrative structure, and emotionally immersive performance.
      </p>
      <p>
        → <a href="https://unrestrainedconcert.github.io" target="_blank">Visit URFO</a>
      </p>
    </main>
  );
};

export default MusicPage;
