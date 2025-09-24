import { Link } from "react-router-dom";

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
        Brian Guo
      </h1>
      <p style={{ maxWidth: "90%", textAlign: "center", fontSize: "1.125rem" }}>
        Explore who I am — a researcher, conductor, and creative technologist.
        Navigate to each section to learn more.
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
        <li>
          <Link to="/bio">→ Bio</Link>
        </li>
        <li>
          <Link to="/blog">→ Blog</Link>
        </li>
        <li>
          <Link to="/research">→ Research</Link>
        </li>
        <li>
          <Link to="/music">→ Music</Link>
        </li>
        <li>
          <Link to="/projects">→ Projects</Link>
        </li>
      </ul>
    </main>
  );
};

export default HomePage;
