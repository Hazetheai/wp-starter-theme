/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { useBlockProps, RichText } from "@wordpress/block-editor";

import { Breadcrumbs } from "./edit";

import ball from "./images/model-icons/ball.png";
import balloon from "./images/model-icons/balloon.png";
import blume from "./images/model-icons/blume.png";
import buch from "./images/model-icons/buch.png";
import dackel from "./images/model-icons/dackel.png";
import regenbogen from "./images/model-icons/regenbogen.png";
import sonne from "./images/model-icons/sonne.png";
import stift from "./images/model-icons/stift.png";

const modelIcons = {
  ball,
  balloon,
  buch,
  dackel,
  blume,
  regenbogen,
  sonne,
  stift,
};

export default function Save({ attributes }) {
  const blockProps = useBlockProps.save({
    className: `module-hero module-palette-${attributes.background.name}`,
  });

  // const threeDataProps = {};
  // const keyF = (name) => `data-${name}`;

  // Object.keys(attributes).forEach(
  //   (key) => (threeDataProps[keyF(key)] = attributes[key])
  // );
  console.log("attributes", attributes);
  return (
    <section {...blockProps}>
      <div className="container block-theme">
        <div className="py-xl hide-for-tablet"></div>
        <div className="row">
          <img
            className="fallback-image fallback-image--one"
            alt={attributes.model.name}
            src={modelIcons[attributes.model.name]}
          />
          <div className="col-12 no-sp-y space-module ">
            <Breadcrumbs
              activeLinks
              links={[
                {
                  url: `/${attributes.misc_data.slug}`,
                  title: attributes.misc_data.title,
                  currentPage: true,
                },
              ]}
            />
            <div className="pb-2xs"></div>

            <RichText.Content
              tagName="h1"
              className="title text-h2 hero-title"
              value={attributes.title}
            />
            <div className="pb-s"></div>
            <p className="text-subline subtitle">{attributes.subtitle}</p>
          </div>
        </div>
      </div>
      <div
        className="three-scene visually-hidden"
        data-model-name={attributes.model.name}
      />
    </section>
  );
}
