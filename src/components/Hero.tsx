import { hero, profile } from "@/data/profile";
import { ExternalLink } from "./ExternalLink";

export function Hero() {
  return (
    <section className="wrap hero" aria-labelledby="hero-title">
      <div className="hero-top">
        <div className="hero-head">
          <div className="eyebrow">{hero.eyebrow}</div>
          <h1 className="hero-title" id="hero-title">
            {hero.titleTop}
            <br />
            <span>{hero.titleAccent}</span>
          </h1>
        </div>
        <div className="hero-visual">
          {hero.apps.map((app) => (
            <a
              key={app.href}
              className={`hero-app app-${app.side}`}
              href={app.href}
              aria-label={`${app.label} 프로젝트로 이동`}
            >
              <img src={app.src} width={app.width} height={app.height} alt="" decoding="async" />
              <span className="app-tag">
                {"live" in app && app.live ? <i /> : null}
                {app.tag}
              </span>
            </a>
          ))}
          <figure className="hero-portrait">
            <img
              src={profile.photo.src}
              width={profile.photo.width}
              height={profile.photo.height}
              alt={`${profile.name} 프로필 사진`}
              fetchPriority="high"
            />
          </figure>
        </div>
      </div>
      <div className="hero-bottom">
        <div>
          <h2>{hero.greeting}</h2>
          <p>
            {hero.intro[0]}
            <br />
            {hero.intro[1]}
          </p>
        </div>
        <div className="hero-aside">
          <div className="name">
            {profile.name} <small>@{profile.handle}</small>
          </div>
          <p>
            {profile.school[0]}
            <br />
            {profile.school[1]}
          </p>
          <div className="hero-links">
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <a href="#work">프로젝트 살펴보기</a>
          </div>
        </div>
      </div>
    </section>
  );
}
