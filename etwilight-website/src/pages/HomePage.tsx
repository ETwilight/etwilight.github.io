import { useEffect, useState } from "react";
import { useThemeLang } from "@/hooks/useThemeLang";
import quotes from "@/assets/quotes.json";
import homePhoto from "@/assets/photos/home.jpg";

type QuoteLang = {
  text: string | null;
  source: string | null;
};

type Quote = {
  lang: {
    en: QuoteLang;
    zh: QuoteLang;
    de: QuoteLang;
  };
};

const welcomeText = {
  en: "Welcome to my personal website! I hope you enjoy it.",
  zh: "欢迎来到我的个人网站！希望你喜欢。",
  de: "Willkommen auf meiner persönlichen Website! Ich hoffe, es gefällt dir."
};

const HomePage = () => {
  const { lang } = useThemeLang();
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex] as Quote);
    }
  }, []);

  const getQuoteForLang = (): QuoteLang | null => {
    if (!quote) return null;
    const q = quote.lang[lang as keyof typeof quote.lang];
    if (q && q.text) return q;

    if (quote.lang.en?.text) return quote.lang.en;
    if (quote.lang.de?.text) return quote.lang.de;
    if (quote.lang.zh?.text) return quote.lang.zh;

    return null;
  };

  const displayQuote = getQuoteForLang();

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        marginTop: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "80%",
          maxWidth: "80rem",
          gap: "3rem",
        }}
      >
        <div
          style={{
            flex: "3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={homePhoto}
            alt="Portrait"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        </div>

        <div
          style={{
            flex: "2",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              textAlign: "left",
              lineHeight: "1.4",
              marginTop: "4rem",
            }}
          >
            <div style={{ fontSize: "3rem", fontFamily: '"Noto Serif SC","Source Han Serif SC","Songti SC",serif' }}>
              <span style={{ marginRight: "0.25rem" }}>
                <ruby>郭<rt style={{ fontSize: "1rem", fontFamily: '"Times New Roman", serif' }}>Guō</rt></ruby>
              </span>

              <span style={{ marginRight: "0.25rem" }}>
                <ruby>培<rt style={{ fontSize: "1rem", fontFamily: '"Times New Roman", serif' }}>Péi</rt></ruby>
              </span>

              <span>
                <ruby>扬<rt style={{ fontSize: "1rem", fontFamily: '"Times New Roman", serif' }}>Yáng</rt></ruby>
              </span>
            </div>


            <div
              style={{
                fontSize: "2rem",
                marginTop: "0.5rem",
                fontFamily: "Georgia, serif",
              }}
            >
              BRIAN GUO
            </div>
          </div>

          {/* quote 块 */}
          <div
            style={{
              marginTop: "4rem",
              marginBottom: "4rem",
              fontSize: "1.125rem",
              fontStyle: "italic",
              lineHeight: "1.5",
            }}
          >
            {displayQuote && (
              <>
                <p
                  style={{
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  &ldquo;{displayQuote.text}&rdquo;
                </p>
                <p
                  style={{
                    margin: 0,
                    marginTop: "0.5rem",
                    fontSize: "0.875rem",
                    textAlign: "right",
                  }}
                >
                  — {displayQuote.source}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <h1
        style={{
          marginTop: "3rem",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        {welcomeText[lang as keyof typeof welcomeText] || welcomeText.en}
      </h1>
    </main>
  );
};

export default HomePage;
