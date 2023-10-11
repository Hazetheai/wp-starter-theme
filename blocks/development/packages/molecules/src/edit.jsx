/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import {
  BlockControls,
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";
import { ColorPalette, PanelBody, ToolbarGroup } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import MagazinIntro from "../../../shared/components/molecules/MagazinIntro";
import "../../../shared/editor-style.scss";
import { colors } from "../../../shared/lib";
import "./editor-style.css";
import ProjectTeaserCard from "../../../shared/components/molecules/ProjectTeaserCard";
import image from "./image-placeholder.png";
import MagazineTeaserCard from "../../../shared/components/molecules/MagazineTeaserCard";
import ProjectIntro from "../../../shared/components/molecules/ProjectIntro";
import SectionIntro from "../../../shared/components/molecules/SectionIntro";
import CenteredIntro from "../../../shared/components/molecules/CenteredIntro";
import MagazinArticleHeader from "../../../shared/components/molecules/MagazinArticleHeader";
import Quote from "../../../shared/components/molecules/Quote";
import CopyBlock from "../../../shared/components/molecules/CopyBlock";
import PartnerCard from "../../../shared/components/molecules/PartnerCard";
import ProjectContactCTA from "../../../shared/components/molecules/ProjectContactCTA";

export default function Edit({ attributes, setAttributes, isSelected }) {
  const { background } = attributes;

  const blockProps = useBlockProps({
    className: `module-palette-${background?.name}`,
  });

  const onChangeColor = (value) => {
    setAttributes({
      ...attributes,
      background: {
        color: value,
        name: Object.keys(colors).find((el) => colors[el] === value),
      },
    });
  };

  return (
    <div key="render" {...blockProps}>
      {/* <InspectorControls>
        <PanelBody title={__("General", "bhb-bayern")} initialOpen>
          <ColorPalette
            colors={Object.keys(colors).map((el) => ({
              name: el,
              color: colors[el],
            }))}
            value={background.color}
            style={{ width: "200px" }}
            onChange={onChangeColor}
            disableCustomColors={true}
          />
        </PanelBody>
      </InspectorControls> */}
      <BlockControls>
        <ToolbarGroup>{/* Block controls */}</ToolbarGroup>
      </BlockControls>
      <h2>Grid</h2>
      <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
        <div class="grid-item">10</div>
        <div class="grid-item">11</div>
        <div class="grid-item">12</div>
        <div class="grid-item">13</div>
        <div class="grid-item">14</div>
        <div class="grid-item">15</div>
        <div class="grid-item">16</div>
        <div class="grid-item">17</div>
        <div class="grid-item">18</div>
        <div class="grid-item">19</div>
        <div class="grid-item">20</div>
        <div class="grid-item">21</div>
        <div class="grid-item">22</div>
      </div>
      <ProjectContactCTA
        attributes={attributes}
        setAttributes={setAttributes}
      />
      <PartnerCard attributes={attributes} setAttributes={setAttributes} />
      <CopyBlock attributes={attributes} setAttributes={setAttributes} />
      <CopyBlock
        namespace="copy_block_2"
        attributes={attributes}
        setAttributes={setAttributes}
      />
      <ProjectTeaserCard
        attributes={attributes}
        setAttributes={setAttributes}
      />
      <MagazineTeaserCard
        attributes={attributes}
        setAttributes={setAttributes}
      />
      <ProjectIntro attributes={attributes} setAttributes={setAttributes} />
      <SectionIntro attributes={attributes} setAttributes={setAttributes} />
      <CenteredIntro attributes={attributes} setAttributes={setAttributes} />

      <MagazinIntro attributes={attributes} setAttributes={setAttributes} />
      <MagazinArticleHeader
        attributes={attributes}
        setAttributes={setAttributes}
      />
      <Quote setAttributes={setAttributes} attributes={attributes} />
    </div>
  );
}
