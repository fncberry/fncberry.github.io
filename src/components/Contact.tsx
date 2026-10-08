import { contact, profile } from "@/data/profile";
import { EmailActions } from "./CopyEmailButton";
import { ExternalLink } from "./ExternalLink";

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="kicker">{contact.kicker}</div>
        <h2 id="contact-title">
          {contact.title[0]}
          <br />
          {contact.title[1]}
        </h2>
        <p>{contact.lead}</p>
        <EmailActions email={profile.email} />
        <div className="socials">
          {contact.socials.map((s) => (
            <ExternalLink key={s.href} href={s.href}>
              {s.label}
            </ExternalLink>
          ))}
        </div>
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
