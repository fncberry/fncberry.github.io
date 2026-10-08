import type { OrgLogo as OrgLogoData } from "@/data/types";

export function OrgLogo({ logo }: { logo: OrgLogoData }) {
  if (logo.kind === "mono") {
    return (
      <div className="org-logo mono" aria-hidden="true">
        {logo.text}
      </div>
    );
  }
  return (
    <div className={`org-logo ${logo.variant ?? ""}`.trim()}>
      <img src={logo.src} alt={logo.alt} loading="lazy" />
    </div>
  );
}
