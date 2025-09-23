const HomePage = () => {
  return (
    <main
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", textAlign: "center" }}>
        Welcome to My Personal Website
      </h1>
      <p style={{ maxWidth: "90%", textAlign: "center", fontSize: "1.125rem" }}>
        Explore who I am — a researcher, conductor, and creative technologist. Navigate to each
        section to learn more.
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          fontSize: "1.125rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        <li>→ Bio</li>
        <li>→ Blog</li>
        <li>→ Research</li>
        <li>→ Music</li>
        <li>→ Projects</li>
      </ul>
    </main>
  );
};

export default HomePage;
