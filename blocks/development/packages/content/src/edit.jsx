/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import apiFetch from "@wordpress/api-fetch";
import {
  BlockControls,
  InspectorControls,
  __experimentalLinkControl as LinkControl,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
  PlainText,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";

import {
  Button,
  ColorPalette,
  FormFileUpload,
  Modal,
  PanelBody,
  Popover,
  TextControl,
  ToggleControl,
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import classnames from "classnames";
import getYouTubeID from "get-youtube-id";

// import "../../../shared/editor-style.scss";
import { useState } from "react";
import { colors } from "../../../shared/lib";
import "./editor-style.css";

const Bottom = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <g transform="rotate(180 10 10)">
      <path fill="currentColor" d="M17 13V3H3v10h14zM5 17h10v-2H5v2z" />
    </g>
  </svg>
);
const Top = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <path fill="currentColor" d="M17 13V3H3v10h14zM5 17h10v-2H5v2z" />
  </svg>
);

const handleUploadAndMove = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await apiFetch({
      path: "/custom/v1/upload-and-move", // Replace with your custom endpoint
      method: "POST",
      body: formData,
    });
    console.log("response", response);
    // Handle the response and update your block accordingly
  } catch (error) {
    console.error("Error uploading and moving file:", error);
  }
};

export default function Edit({ attributes, setAttributes }) {
  const { mediaPosition, background, video } = attributes;

  const blockProps = useBlockProps({
    className: `module-palette-${attributes?.background?.name}`,
  });

  const [visible, setVisible] = useState(false);

  const onChangeColor = (value) => {
    setAttributes({
      ...attributes,
      background: {
        color: value,
        name: Object.keys(colors).find((el) => colors[el] === value),
      },
    });
  };

  const onChangeContent = (newAttributes) => {
    setAttributes({ ...attributes, ...newAttributes });
  };

  const toolbarControls = [
    {
      icon: "align-pull-left",
      title: __("Show media on left", "bhb-bayern"),
      isActive: mediaPosition === "left",
      onClick: () => setAttributes({ mediaPosition: "left" }),
    },
    {
      icon: Top,
      title: __("Stack at top of a column", "bhb-bayern"),
      isActive: mediaPosition === "top",
      onClick: () => setAttributes({ mediaPosition: "top" }),
    },
    {
      icon: Bottom,
      title: __("Stack at bottom of a column", "bhb-bayern"),
      isActive: mediaPosition === "bottom",
      onClick: () => setAttributes({ mediaPosition: "bottom" }),
    },
    {
      icon: "align-pull-right",
      title: __("Show media on right", "bhb-bayern"),
      isActive: mediaPosition === "right",
      onClick: () => setAttributes({ mediaPosition: "right" }),
    },
  ];

  return (
    <div key="render" {...blockProps}>
      <div className="block-editor-wrapper block-theme row">
        <InspectorControls>
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
        </InspectorControls>
        <BlockControls>
          <Toolbar controls={toolbarControls} />
          <ToolbarGroup label="YT">
            <ToolbarButton
              onClick={(event) => {
                // Dont allow the button to be triggered when the popover is visible
                if (visible) {
                  event.preventDefault();
                  return;
                }
                setVisible(!visible);
              }}
            >
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>YouTube ID</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              {visible && (
                <Popover>
                  <TextControl
                    className="youtube-url__wrapper"
                    label="Youtube ID"
                    value={video.youtubeID}
                    onChange={(value) => {
                      setAttributes({
                        video: { youtubeID: getYouTubeID(value) },
                      });
                    }}
                    type="url"
                  />
                </Popover>
              )}
            </ToolbarButton>
          </ToolbarGroup>
        </BlockControls>
        <ContentRow {...attributes} onChange={onChangeContent} />
      </div>
    </div>
  );
}

const ContentRow = (props) => {
  const {
    image,
    video,
    poster,
    kicker,
    title,
    paragraph,
    cta1,
    scrollButton,
    onChange,
    mediaPosition,
  } = props;

  const [isEditingCTA, setIsEditingCTA] = useState(false);

  return (
    <>
      <div
        className={`${
          mediaPosition === "left"
            ? "flex"
            : mediaPosition === "right"
            ? "flex-reverse"
            : mediaPosition === "bottom"
            ? "flex-col"
            : "flex-col-reverse"
        } block-theme ${
          mediaPosition === "left"
            ? "image-left"
            : mediaPosition === "right"
            ? "image-right"
            : ""
        } module-content__editor-wrapper`}
      >
        <InspectorControls>
          <PanelBody title={__("Aktionspunkte", "bhb-bayern")} initialOpen>
            <ToggleControl
              label="Einen Button zum Herunterscrollen hinzufügen?"
              help={scrollButton ? "Button hinzugefügt." : ""}
              checked={scrollButton}
              onChange={() => onChange({ scrollButton: !scrollButton })}
            />
          </PanelBody>
        </InspectorControls>
        <BlockControls>
          <ToolbarGroup>
            <MediaUploadCheck>
              <MediaUpload
                addToGallery={true}
                onSelect={(media) => {
                  if (media.thumb) {
                    onChange({
                      video: { url: media.url, alt: media.alt },
                      image: { url: null, alt: null },
                    });
                  } else {
                    onChange({
                      image: { url: media.url, alt: media.alt },
                      video: { url: null, alt: null },
                    });
                  }
                }}
                accept="image/*,video/*"
                allowedTypes={["image", "video"]}
                value={video || image}
                render={({ open }) => (
                  <ToolbarButton
                    icon="cover-image"
                    onClick={open}
                    title={__("Bild Bearbeiten", "bhb-bayern")}
                  ></ToolbarButton>
                )}
              />
            </MediaUploadCheck>
            {video.url && (
              <MediaUploadCheck>
                <MediaUpload
                  addToGallery={true}
                  onSelect={(media) => {
                    onChange({ poster: { url: media.url, alt: media.alt } });
                  }}
                  accept="image/*"
                  allowedTypes={["image"]}
                  value={poster}
                  render={({ open }) => (
                    <ToolbarButton
                      icon={"media-video"}
                      onClick={open}
                      title={__("Video Bild Bearbeiten", "bhb-bayern")}
                    ></ToolbarButton>
                  )}
                />
              </MediaUploadCheck>
            )}
            {poster.url && (
              <ToolbarButton
                icon={"remove"}
                title={__("Video Bild Löschen", "bhb-bayern")}
                onClick={() => onChange({ poster: { url: null, alt: null } })}
              ></ToolbarButton>
            )}
          </ToolbarGroup>
        </BlockControls>

        {(video.url || image.url || video.youtubeID) && (
          <figure
            className={classnames(
              mediaPosition === "left"
                ? "image-left"
                : mediaPosition === "right"
                ? "image-right"
                : "",
              video.url && "video"
            )}
          >
            {video.url ? (
              <div className="module-content__video-wrapper">
                <div className="module-content__video-overlay">
                  <svg
                    className="module-content__video-play-button"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.59738 3.26386L15.3473 8.31623C16.6438 9.06397 16.6438 10.935 15.3473 11.6845L6.59738 16.7369C5.30085 17.4846 3.68018 16.5499 3.68018 15.0527V4.94798C3.68018 3.45079 5.30085 2.51441 6.59738 3.26386Z"
                      fill="black"
                    />
                  </svg>
                  <video
                    controls
                    muted
                    loop
                    poster={poster.url}
                    className="module-content__video-element"
                  >
                    <source src={video.url} />
                  </video>
                </div>
              </div>
            ) : video.youtubeID ? (
              <iframe
                width="315"
                height="200"
                src={`https://www.youtube.com/embed/${video.youtubeID}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            ) : (
              <img src={image.url} alt={image.alt} />
            )}
          </figure>
        )}
        {!(image.url || video.url || video.youtubeID) && (
          <MediaPlaceholder
            labels={{
              title: "Media",
              instructions: __(
                "Ein Video oder Bild hinzufügen.",
                "bhb-bayern"
              ),
            }}
            onSelect={(media) => {
              if (media.thumb) {
                onChange({
                  video: { url: media.url, alt: media.alt },
                  image: { url: null, alt: null },
                });
              } else {
                onChange({
                  image: { url: media.url, alt: media.alt },
                  video: { url: null, alt: null },
                });
              }
            }}
            accept="image/*,video/*"
            allowedTypes={["image", "video"]}
            style={{ marginRight: "3rem", maxWidth: "50%" }}
          />
        )}

        <div className="flex-row">
          <PlainText
            tagName="span"
            value={kicker}
            placeholder={__("Kicker here", "bhb-bayern")}
            className="kicker"
            onChange={(content) => onChange({ kicker: content })}
          />
          <PlainText
            tagName="h3"
            value={title}
            placeholder={__("Title here", "bhb-bayern")}
            className="title"
            onChange={(content) => onChange({ title: content })}
          />
          <RichText
            tagName="div"
            value={paragraph}
            placeholder={__("Text here", "bhb-bayern")}
            // multiline="li"
            className="paragraph"
            onChange={(content) => {
              let result = content.replace(/<ul>(.*?)<\/ul>/gs, (match, p1) => {
                const items = p1
                  .split("<br>")
                  .filter(Boolean)
                  .map((item) => `<li>${item.trim()}</li>`)
                  .join("");
                return `<ul>${items}</ul>`;
              });

              onChange({ paragraph: result });
            }}
          />
          <div className="cta-section">
            {cta1.url && (
              <Button variant="primary">
                {__(cta1.title, "bhb-bayern")}
              </Button>
            )}
            <Button icon="edit" onClick={() => setIsEditingCTA(true)} />
            {isEditingCTA ? (
              <Modal
                focusOnMount //focus on the first element in the modal
                shouldCloseOnEsc
                shouldCloseOnClickOutside
                overlayClassName="my-extra-modal-overlay-class"
                cardTitle={__("Bearbeiten Sie den Hyperlink", "bhb-bayern")}
                onRequestClose={() => setIsEditingCTA(false)}
              >
                <div
                  className=""
                  style={{ maxHeight: "2rem", paddingBottom: "3.5em" }}
                >
                  {__("Bearbeiten Sie den Hyperlink", "bhb-bayern")}
                  <PlainText
                    value={cta1?.title}
                    tagName="p"
                    style={{ border: "2px solid black" }}
                    className="link-small"
                    onChange={(nextValue) => {
                      onChange({ cta1: { ...cta1, title: nextValue } });
                    }}
                  />
                </div>
                <LinkControl
                  searchInputPlaceholder={__("Suche hier...", "bhb-bayern")}
                  value={cta1}
                  settings={[
                    {
                      id: "opensInNewTab",
                      title: "In einem neuen Browser-Tab öffnen?",
                    },
                  ]}
                  onChange={(value) => {
                    onChange({
                      cta1: {
                        ...value,
                        title: cta1?.title || value.title,
                      },
                    });
                  }}
                  suggestionsQuery={{ type: "post", subtype: "page" }}
                />

                <div className="flex-between">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      onChange({ cta1: { title: "", url: "" } });
                      setIsEditingCTA(false);
                    }}
                  >
                    {__("Löschen", "bhb-bayern")}
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setIsEditingCTA(false);
                    }}
                  >
                    {__("Speichern", "bhb-bayern")}
                  </Button>
                </div>
              </Modal>
            ) : null}
            {cta1.url ? null : (
              <FormFileUpload
                accept="image/*"
                onChange={(e) => {
                  onChange({
                    cta1: {
                      ...cta1,
                      url: `/wp-content/uploads/gutenberg-uploads/${e.target.files[0].name}`,
                    },
                  });

                  setTimeout(() => {
                    setIsEditingCTA(true);
                    handleUploadAndMove(e.target.files[0]);
                    console.log(`Uploaded`);
                  }, 700);
                }}
                render={({ openFileDialog }) => (
                  <div>
                    <Button variant="secondary" onClick={openFileDialog}>
                      {__("Datei hochladen", "bhb-bayern")}
                    </Button>
                  </div>
                )}
              />
            )}
          </div>

          {scrollButton && (
            <Button variant="secondary" className={"scroll-button"}>
              {__("Mehr Erfahren", "bhb-bayern")}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
