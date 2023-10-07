import React from "react";
import Link from "../atoms/Link";
import classNames from "classnames";
import Icon from "../atoms/Icon";

type Props = {
  image?: string;
  title?: string;
  link?: { url: string; label: string };
  description?: string;
  large?: boolean;
};

const MagazineTeaserCard: React.FC<Props> = ({
  description = "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
  image = "https://via.placeholder.com/900x1600",
  link = { url: "0#", label: "Mehr Erfahren" },
  title = "Aenean commodo ligula eget.",
  large = false,
}) => {
  return (
    <div
      className={classNames(
        "magazine__teaser-card",
        large && "magazine__teaser-card--lg"
      )}
    >
      <div className="magazine__teaser-card__image">
        <Link level="image" href={link.url}>
          <img src={image} alt="Magazine Teaser" />
        </Link>
      </div>
      <div className="magazine__teaser-card__content">
        <h2 className="title text-headlines-h4 hide-for-desktop">{title}</h2>
        <Link href={link.url} level="basic" className="show-for-desktop">
          <div className="flex">
            <h2 className="title text-headlines-h4">{title}</h2>
            <Icon className="show-for-desktop" type="extended-right-desktop" />
            <Icon className="hide-for-desktop" type="extended-right-mobile" />
          </div>
        </Link>
        <p className="text-copy-3">{description}</p>
        <Link
          href={link.url}
          text={link.label}
          level="secondary"
          className="hide-for-desktop"
        />
      </div>
    </div>
  );
};

export default MagazineTeaserCard;
