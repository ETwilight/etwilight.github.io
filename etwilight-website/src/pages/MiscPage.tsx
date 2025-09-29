const MiscPage = () => {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "70ch",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>Miscellaneous</h1>
      <ul style={{ paddingLeft: "1rem", fontSize: "1.125rem" }}>
        <li>• Code tooling – Conda + Bash + PowerShell environment management</li>
        <li>• Language learning – multilingual site and internationalization logic</li>
        <li>• Cycling – long-distance rides and daily explorations on two wheels</li>
      </ul>
    </main>
  );
};

export default MiscPage;
