import React from "react";
import Link from "../atoms/Link";

type Props = {
  title: string;
  description: string;
  link: {
    url: string;
    label: string;
  };
};

const SectionIntro: React.FC<Props> = ({
  title = "Section",
  description = "Lorem ipsum dolor sit amet consectetur. Faucibus accumsan enim metus elit purus eget. Sed dui diam enim sit sed pulvinar interdum nec. Blandit in viverra tristique facilisi venenatis sem.",
  link = { label: "Zur Übersicht", url: "0#" },
}) => {
  return (
    <div className="section__intro">
      <h2 className="title text-headlines-h1">{title}</h2>
      <div className="section__intro__content">
        <p className="text-copy-2">{description}</p>
        <Link href={link.url} text={link.label} level="secondary" />
      </div>
    </div>
  );
};

export default SectionIntro;
