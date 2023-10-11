/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { useBlockProps } from "@wordpress/block-editor";
import ProjectTeaserCard from "../../../shared/components/molecules/ProjectTeaserCard";
import image from "./image-placeholder.png";
import MagazineTeaserCard from "../../../shared/components/molecules/MagazineTeaserCard";
import ProjectIntro from "../../../shared/components/molecules/ProjectIntro";
import SectionIntro from "../../../shared/components/molecules/SectionIntro";
import CenteredIntro from "../../../shared/components/molecules/CenteredIntro";
import MagazinIntro from "../../../shared/components/molecules/MagazinIntro";
import MagazinArticleHeader from "../../../shared/components/molecules/MagazinArticleHeader";
import Quote from "../../../shared/components/molecules/Quote";
import CopyBlock from "../../../shared/components/molecules/CopyBlock";
import PartnerCard from "../../../shared/components/molecules/PartnerCard";
import ProjectContactCTA from "../../../shared/components/molecules/ProjectContactCTA";
export default function Save({ attributes }) {
  let blockProps = useBlockProps.save({
    className: `module-molecules block-theme`,
  });

  return (
    <section className={`module-palette-${attributes?.background?.name}`}>
      <div {...blockProps}>{/* Saved Block */}</div>
      <h1>Molecules</h1>
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
      <div style={{ margin: 48 }} className="container">
        <ProjectContactCTA.Save attributes={attributes} />
        <PartnerCard.Save attributes={attributes} />
        <CopyBlock.Save attributes={attributes} />
        <CopyBlock.Save namespace="copy_block_2" attributes={attributes} />
        <ProjectTeaserCard.Save attributes={attributes} />
        <MagazineTeaserCard.Save attributes={attributes} />

        <ProjectIntro.Save attributes={attributes} />
        <SectionIntro.Save attributes={attributes} />
        <CenteredIntro.Save attributes={attributes} />

        <MagazinIntro.Save attributes={attributes} />
        <MagazinArticleHeader.Save attributes={attributes} />
        <Quote.Save attributes={attributes} />
      </div>
    </section>
  );
}
