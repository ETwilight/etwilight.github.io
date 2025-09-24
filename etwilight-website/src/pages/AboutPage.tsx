const AboutPage = () => {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "60ch",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>About</h1>
      <p>
        Hello! I'm Brian Guo. I combine a passion for orchestral conducting, mathematical
        research, and software creativity.
      </p>
      <p>
        I currently direct the Unrestrained Festival Orchestra (URFO), focus on theoretical
        machine learning, and develop creative applications in music and math.
      </p>
      <p>
        This site presents my work, ideas, and projects — both formal and experimental.
      </p>
    </main>
  );
};

export default AboutPage;
