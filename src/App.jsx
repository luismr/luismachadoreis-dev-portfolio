import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";
import SEO from "./components/SEO";

const SOCIAL_LINKS = {
  github: "https://github.com/luismr",
  instagram: "https://instagram.com/luismachadoreis",
  linkedin: "https://linkedin.com/in/luismachadoreis",
  resume: "https://github.com/luismr/resume",
};

function App() {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const PROJECTS = [
    {
      id: "pudim",
      title: t("projects.pudim.title"),
      url: "https://pudim.dev",
      description: t("projects.pudim.description"),
      image: "/pudim-dev.svg",
    },
    {
      id: "carimbo",
      title: t("projects.carimbo.title"),
      url: "https://carimbo.vip",
      description: t("projects.carimbo.description"),
      image: "/carimbo-vip.png",
    },
    {
      id: "singularideas",
      title: t("projects.singularideas.title"),
      url: "https://singularideas.com.br",
      description: t("projects.singularideas.description"),
      image: "/singularideas-com-br.png",
    },
    {
      id: "github",
      title: t("projects.github.title"),
      url: "https://github.com/luismr",
      description: t("projects.github.description"),
      image: "/github.png",
    },
  ];

  return (
    <div className="app">
      <SEO />
      <div className="app-shell">
        <nav className="language-selector-wrapper" aria-label="Language selector">
          <LanguageSelector />
        </nav>
        {/* HERO */}
        <header className="hero" role="banner">
          <div className="hero-text">
            <p className="hero-greeting">{t("hero.greeting")}</p>
            <h1 className="hero-title">Luis Machado Reis</h1>
            <p className="hero-subtitle">
              {t("hero.subtitle")}
            </p>

            <p className="hero-location">
              {t("hero.location")}
              <span className="hero-location-dot">{t("hero.locationDot")}</span> {t("hero.workingGlobally")}
            </p>

            <p className="hero-summary">
              {t("hero.summary", { years: "20+" })}
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={SOCIAL_LINKS.resume}
                target="_blank"
                rel="noreferrer"
              >
                {t("hero.viewResume")}
              </a>
              <a
                className="btn btn-outline"
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {t("hero.connectLinkedIn")}
              </a>
            </div>
          </div>

          <aside className="hero-profile-card">
            <div className="profile-image-wrapper">
              <img
                src="/luis-profile.png"
                alt="Luis Machado Reis"
                className="profile-image"
              />
            </div>
            <div className="profile-info">
              <p className="profile-name">Luis Machado Reis</p>
              <p className="profile-role">
                {t("profile.role1")}
              </p>
              <p className="profile-role">
                {t("profile.role2")}
              </p>
            </div>
            <div className="profile-social">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
            </div>
          </aside>
        </header>

        <main>
          {/* WHAT I DO */}
          <section className="section" aria-labelledby="what-i-do-heading">
          <h2 id="what-i-do-heading" className="section-title">{t("sections.whatIDo")}</h2>

          <div className="cards-grid">
            <div className="card">
              <h3>{t("whatIDo.engineeringLeadership.title")}</h3>
              <p>
                {t("whatIDo.engineeringLeadership.description")}
              </p>
            </div>
            <div className="card">
              <h3>{t("whatIDo.cloudSystems.title")}</h3>
              <p>
                {t("whatIDo.cloudSystems.description")}
              </p>
            </div>
            <div className="card">
              <h3>{t("whatIDo.innovationDevOps.title")}</h3>
              <p>
                {t("whatIDo.innovationDevOps.description")}
              </p>
            </div>
            <div className="card card-fun">
              <h3>{t("whatIDo.pudimMastery.title")}</h3>
              <p>
                {t("whatIDo.pudimMastery.description")}
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="section" aria-labelledby="featured-projects-heading">
          <h2 id="featured-projects-heading" className="section-title">{t("sections.featuredProjects")}</h2>

          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <article key={project.id} className="project-card-wrapper">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card"
                  aria-label={`${project.title} - ${project.description}`}
                >
                <div className="project-header">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  )}
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <span className="project-link">{t("projects.visitSite")}</span>
              </a>
              </article>
            ))}
          </div>
        </section>
        </main>

        {/* FOOTER */}
        <footer className="footer" role="contentinfo">
          <p>
            {t("footer.copyright", { year: currentYear })}{" "}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
            >
              {t("footer.github")}
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
