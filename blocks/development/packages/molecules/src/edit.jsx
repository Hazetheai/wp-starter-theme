/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import {
  BlockControls,
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";
import { ColorPalette, PanelBody, ToolbarGroup } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import "../../../shared/editor-style.scss";
import { colors } from "../../../shared/lib";
import "./editor-style.css";
import ProjectTeaserCard from "../../../shared/components/molecules/ProjectTeaserCard";
import image from "./image-placeholder.png";
import MagazineTeaserCard from "../../../shared/components/molecules/MagazineTeaserCard";
import ProjectIntro from "../../../shared/components/molecules/ProjectIntro";
import SectionIntro from "../../../shared/components/molecules/SectionIntro";
import CenteredIntro from "../../../shared/components/molecules/CenteredIntro";
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
      {/* <ProjectTeaserCard image={image} /> */}
      {/* <MagazineTeaserCard /> */}
      {/* <ProjectIntro /> */}
      {/* <SectionIntro /> */}
      <CenteredIntro link={{ label: "Mehr Erfahren", url: "0#" }} />
      <CenteredIntro subline="Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem." />
    </div>
  );
}
