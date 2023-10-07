import React from "react";
import Link from "../atoms/Link";

type Props = {
  projectLocation: string;
  title: string;
  link?: string;
  image?: string;
};

const ProjectTeaserCard: React.FC<Props> = ({
  link = "0#",
  image = "https://via.placeholder.com/900x1600",
  projectLocation = "City",
  title = "Project",
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="project__teaser-card"
    >
      <div className="project__teaser-card__filter" />
      <div className="project__teaser-card__content">
        <span className="kicker text-overline">{projectLocation}</span>
        <h2 className="title text-headlines-h3-deco">{title}</h2>
        <Link
          className="link overlay-link"
          href={link}
          text="Mehr Erfahren"
          level="secondary-alt"
        />
      </div>
    </div>
  );
};

export default ProjectTeaserCard;
