import { contact, profile } from "@/data/profile";
import { EmailActions } from "./CopyEmailButton";
import { ExternalLink } from "./ExternalLink";

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div>
          <div className="kicker">{contact.kicker}</div>
          <h2 id="contact-title">
            {contact.title[0]}
            <br />
            {contact.title[1]}
          </h2>
          <p>{contact.lead}</p>
          <EmailActions email={profile.email} />
        </div>
        <ul className="contact-links" aria-label="다른 연락 채널">
          {contact.socials.map((s) => (
            <li key={s.href}>
              <ExternalLink href={s.href}>
                <strong>{s.label}</strong>
                <span>{s.handle}</span>
                <i aria-hidden="true">↗</i>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="wrap footer">
      <span>© 2026 FNCBERRY / {profile.name}</span>
      <ExternalLink href="https://github.com/fncberry/fncberry">PROFILE ON GITHUB</ExternalLink>
      <a href="#">맨 위로</a>
    </footer>
  );
}
