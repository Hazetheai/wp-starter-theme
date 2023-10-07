import React from "react";
import Link from "../atoms/Link";

type Props = {
  overline: string;
  description: string;
  subline?: string;
  link?: {
    url: string;
    label: string;
  };
};

const CenteredIntro: React.FC<Props> = ({
  description = `Nachhaltigkeit. Individualität. Kreativität. Das sind die Stützpfeiler, die unseren Bauprojekten das Besondere verleihen.
  Fest im jeweiligen Standort verwurzelt, entwickeln wir visionäre Neubauimmobilien mit Flair und viel Raum für die Gemeinschaft – und für Sie. Lernen wir uns kennen!`,
  overline = "bauen mit herzblut",
  link,
  subline,
}) => {
  return (
    <div className="centered-intro">
      <h4 className="overline text-overline">{overline}</h4>
      <h3 className="description text-copy-2">{description}</h3>
      {subline && <p className="subline text-copy-3">{subline}</p>}
      {link && <Link href={link.url} text={link.label} level="primary" />}
    </div>
  );
};

export default CenteredIntro;
