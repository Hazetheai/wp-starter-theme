import React from "react";

type Props = {
  title: { top: string; bottom: string };
  subtitle: string;
};

const ProjectIntro: React.FC<Props> = ({
  title = { top: "BAUKULTUR", bottom: "Seit 1976" },
  subtitle = "Unsere Projekte",
}) => {
  return (
    <div className="project__intro">
      <h1 className="title text-display-3">
        <span className="title__top">{title.top}</span>
        {/* <br /> */}
        <span className="title__bottom text-display-3--strong">
          {title.bottom}
        </span>
      </h1>
      <h2 className="title text-copy-2">{subtitle}</h2>
    </div>
  );
};

export default ProjectIntro;
