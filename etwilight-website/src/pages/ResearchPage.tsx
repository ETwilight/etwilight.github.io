const ResearchPage = () => {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "65ch",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>Research</h1>
      <p>
        I study theoretical aspects of machine learning, including:
        sequential Rademacher complexity, out-of-distribution generalization, and optimal transport.
      </p>
      <p>
        Current work focuses on trustworthy ML through the lens of invariance and geometry.
      </p>
    </main>
  );
};

export default ResearchPage;
