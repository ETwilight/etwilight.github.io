const AboutPage = () => {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "60rem",
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>About</h1>
      <p>
        I am a researcher in Trustworthy Machine Learning, specialized in out-of-distribution generalization.
        I am currently working with Prof. Han Zhao at the University of Illinois at Urbana-Champaign as a senior undergraduate student.
        I also have a broad interest over deep learning and reinforcement learning, especially their theoretical aspects.
        My long term goal is to develop a unified theory of trustworthiness that can guide and evaluate existing and new machine-learning algorithms.
      </p>
      <p>
        I am also an amateur conductor, proudly serving as the Music Director of UnRestrained Festival Orchestra,
        a student-run orchestra in Shanghai that hopes to explore a wide variety of classical music in depth while bringing classical music to a broader audience.
      </p>
      <p>
        Outside of researching and conducting, I enjoy playing the piano, developing websites, and cycling. I also have a passion for language, both learning new ones and diving deep into the field of linguistics.
      </p>
    </main>
  );
};

export default AboutPage;
