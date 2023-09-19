/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function Save({ attributes }) {
  const blockProps = useBlockProps.save({
    className: `module-content module-palette-${attributes.background.name}`,
  });

  return (
    <section {...blockProps}>
      <div className="container">
        <div
          className={`module-content block-theme row ${
            attributes.mediaPosition === "left"
              ? "grid-flex image-left"
              : attributes.mediaPosition === "right"
              ? "grid-flex-reverse image-right"
              : attributes.mediaPosition === "bottom"
              ? "flex-col image-bottom"
              : "flex-col-reverse image-top"
          }`}
        >
          <div
            className={`${
              ["left", "right"].includes(attributes.mediaPosition)
                ? "col-6"
                : "col-12"
            } `}
          >
            <div className="module-content__video-wrapper">
              {attributes.video.url ? (
                <div className="module-content__video-overlay">
                  <button className="button module-content__video-play-button">
                    <svg
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
                  </button>
                  <button className="button module-content__video-fullscreen-button">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="46"
                        height="46"
                        rx="7"
                        fill="white"
                      />
                      <rect
                        x="6"
                        y="6"
                        width="12"
                        height="4"
                        rx="2"
                        fill="black"
                      />
                      <rect
                        x="29.7788"
                        y="6"
                        width="12"
                        height="4"
                        rx="2"
                        fill="black"
                      />
                      <rect
                        x="6"
                        y="18"
                        width="12"
                        height="4"
                        rx="2"
                        transform="rotate(-90 6 18)"
                        fill="black"
                      />
                      <rect
                        x="6"
                        y="42"
                        width="12"
                        height="4"
                        rx="2"
                        transform="rotate(-90 6 42)"
                        fill="black"
                      />
                      <rect
                        x="38"
                        y="18.0151"
                        width="12"
                        height="4"
                        rx="2"
                        transform="rotate(-90 38 18.0151)"
                        fill="black"
                      />
                      <rect
                        x="38"
                        y="42"
                        width="12"
                        height="4"
                        rx="2"
                        transform="rotate(-90 38 42)"
                        fill="black"
                      />
                      <rect
                        x="6"
                        y="38"
                        width="12"
                        height="4"
                        rx="2"
                        fill="black"
                      />
                      <rect
                        x="30"
                        y="38"
                        width="12"
                        height="4"
                        rx="2"
                        fill="black"
                      />
                      <rect
                        x="1"
                        y="1"
                        width="46"
                        height="46"
                        rx="7"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                  <button className="button module-content__video-exit-fullscreen-button">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="46"
                        height="46"
                        rx="7"
                        fill="white"
                      />
                      <rect
                        x="8.4436"
                        y="36.7279"
                        width="40"
                        height="4"
                        rx="2"
                        transform="rotate(-45 8.4436 36.7279)"
                        fill="black"
                      />
                      <rect
                        x="11.272"
                        y="8.4436"
                        width="40"
                        height="4"
                        rx="2"
                        transform="rotate(45 11.272 8.4436)"
                        fill="black"
                      />
                      <rect
                        x="1"
                        y="1"
                        width="46"
                        height="46"
                        rx="7"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                  <video
                    muted
                    loop
                    className="module-content__video-element"
                    poster={attributes.poster.url}
                  >
                    <source src={attributes.video.url} />
                  </video>
                </div>
              ) : attributes.video.youtubeID ? (
                <iframe
                  // width="560"
                  // height="315"
                  src={`https://www.youtube.com/embed/${attributes.video.youtubeID}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : (
                <img
                  alt={attributes.image.alt}
                  src={attributes.image.url}
                  className="image anim__image-reveal--start"
                />
              )}
            </div>
          </div>
          {/* {["left", "right"].includes(attributes.mediaPosition) ? (
            <div
              className="col-1 show-for-tablet"
              style={{
                width: attributes.mediaPosition === "right" ? "0%" : "2.5%",
              }}
            />
          ) : null} */}
          <div
            className={`module-content__content ${
              ["left", "right"].includes(attributes.mediaPosition)
                ? "col-6"
                : "col-12 space-subp"
            } `}
          >
            {" "}
            {attributes.kicker && (
              <span value={attributes.kicker} className="kicker link-small">
                {attributes.kicker}
              </span>
            )}
            {attributes.title && (
              <h3 value={attributes.title} className="title text-h3">
                {attributes.title}
              </h3>
            )}
            <RichText.Content
              tagName="div"
              value={attributes.paragraph}
              className={`paragraph text-copy-regular`}
            />
            {(attributes.cta1?.url || attributes.cta2?.url) && (
              <div className="cta-container">
                {attributes.cta1?.url && (
                  <a
                    download={
                      /(\.jpg|\.png|\.gif|\.pdf)$/i.test(attributes.cta1.url)
                        ? true
                        : false
                    }
                    className="button"
                    href={attributes.cta1.url}
                    rel="noopener noreferrer"
                    target={attributes.cta1.opensInNewTab ? "_blank" : "_self"}
                  >
                    {attributes.cta1?.title}
                  </a>
                )}
              </div>
            )}
            {attributes.scrollButton && (
              <div className="scroll-button-container">
                <button className="scroll-button">
                  {__("Mehr Erfahren", "vite-starter")}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.0711 11.3431L10.7072 17.7071C10.3166 18.0976 9.68347 18.0976 9.29295 17.7071L2.92899 11.3431C2.53846 10.9526 2.53846 10.3195 2.92898 9.92893C3.31951 9.53841 3.95268 9.53841 4.3432 9.92893L9.00005 14.5858L9.00005 3C9.00005 2.44772 9.44777 2 10.0001 2C10.5523 2 11.0001 2.44772 11.0001 3L11.0001 14.5858L15.6569 9.92893C16.0474 9.53841 16.6806 9.53841 17.0711 9.92893C17.4616 10.3195 17.4616 10.9526 17.0711 11.3431Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
