/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { background, items, options } = attributes;

  let blockProps = useBlockProps.save({
    className: `module-accordian`,
  });

  return (
    <section
      className={`module-accordian module-palette-${background?.name} block-theme`}
    >
      <div {...blockProps}>
        <div className="container">
          <div className="row">
            <div className="col-2"></div>{" "}
            <div className="col-8 tabs">
              {items.map((item, idx) => {
                const id = `rd${idx + 1}`;
                return (
                  <div key={item.question} className={`tab ui-element`}>
                    <input
                      type={options.multiple ? "checkbox" : "radio"}
                      id={id}
                      name="rd"
                    />
                    <label className="tab-label flex-between" htmlFor={id}>
                      {item.question}
                      <svg
                        className="open"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9 17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H11V3C11 2.44771 10.5523 2 10 2C9.44771 2 9 2.44771 9 3V9H3C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H9V17Z"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        className="closed"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 10C2 9.44772 2.44772 9 3 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H3C2.44772 11 2 10.5523 2 10Z"
                          fill="currentColor"
                        />
                      </svg>
                    </label>
                    <RichText.Content
                      value={item.answer}
                      className="tab-content"
                      tagName="p"
                    />
                  </div>
                );
              })}
            </div>
            <div className="col-2"></div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
