import { useThemeLang } from "@/hooks/useThemeLang";

const AboutPage = () => {
  const { lang } = useThemeLang();

  const content = {
    en: {
      title: "About",
      p1: "I am a researcher in Trustworthy Machine Learning, specialized in out-of-distribution generalization. I am currently researching with Prof. Han Zhao at the University of Illinois at Urbana-Champaign as a senior undergraduate student. I also have a broad interest over deep learning and reinforcement learning, especially their theoretical aspects. My long term goal is to develop a unified theory of trustworthiness that can guide and evaluate existing and new machine-learning algorithms.",
      p2: "I am also an amateur conductor, proudly serving as the Music Director of UnRestrained Festival Orchestra, a student-run orchestra in Shanghai that hopes to explore a wide variety of classical music in depth while bringing classical music to a broader audience.",
      p3: "Outside of researching and conducting, I enjoy playing the piano, developing websites, and cycling. I also have a passion for language, both learning new ones and diving deep into the field of linguistics.",
    },
    zh: {
      title: "关于",
      p1: "我是一名可信机器学习方向的研究者，专注于分布外泛化。我目前在伊利诺伊大学香槟分校就读本科，跟随Han Zhao教授与Yuen Chen博士进行研究。我也对深度学习和强化学习的理论方面有广泛兴趣。我的长期目标是建立一个可信度的统一理论，用于指导和评估现有和新的机器学习算法。",
      p2: "我同时也是一名业余指挥，担任上海 UnRestrained Festival Orchestra 的音乐总监。该乐团由学生自主运营，致力于深入探索各种古典音乐，同时将古典音乐带给更广泛的听众。",
      p3: "在科研和指挥之外，我喜欢弹钢琴、开发网站和骑行。我也对语言学充满热情，不仅喜欢学习新语言，也喜欢深入研究语言学领域。",
    },
    de: {
      title: "Über mich",
      p1: "Ich bin ein Forscher im Bereich Trustworthy Machine Learning, spezialisiert auf Out-of-Distribution-Generalisation. Zurzeit arbeite ich als Senior-Undergraduate mit Prof. Han Zhao an der University of Illinois at Urbana-Champaign. Darüber hinaus interessiere ich mich allgemein für Deep Learning und Reinforcement Learning, insbesondere für deren theoretische Aspekte. Mein langfristiges Ziel ist es, eine einheitliche Theorie der Vertrauenswürdigkeit zu entwickeln, die bestehende und neue Machine-Learning-Algorithmen leiten und bewerten kann.",
      p2: "Außerdem bin ich ein Amateurdirigent und derzeit Musikdirektor des UnRestrained Festival Orchestra in Shanghai, einem von Studenten geführten Orchester, das verschiedene klassische Musikwerke in der Tiefe erforschen und zugleich einem breiteren Publikum näherbringen möchte.",
      p3: "Neben Forschung und Dirigieren spiele ich gerne Klavier, entwickle Webseiten und fahre Rad. Zudem habe ich eine Leidenschaft für Sprachen – sowohl neue zu lernen als auch tief in die Linguistik einzutauchen.",
    },
  };

  const t = content[lang];

  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "60rem",
        margin: "0 auto",
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>{t.title}</h1>
      <p style={{ textAlign: "left" }}>{t.p1}</p>
      <p style={{ textAlign: "left" }}>{t.p2}</p>
      <p style={{ textAlign: "left" }}>{t.p3}</p>
    </main>
  );
};

export default AboutPage;
