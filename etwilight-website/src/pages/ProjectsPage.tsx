const ProjectsPage = () => {
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
      <h1 style={{ fontSize: "2rem" }}>Projects</h1>
      <ul style={{ paddingLeft: "1rem", fontSize: "1.125rem" }}>
        <li>• SmartRide – route planning app with Capacitor and web platform</li>
        <li>• Orchestral arrangements – including Der Rosenkavalier adaptations</li>
        <li>• GOAT Bound Theory – mathematical research on domain adaptation</li>
      </ul>
    </main>
  );
};

export default ProjectsPage;
