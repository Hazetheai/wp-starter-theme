/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  let blockProps = useBlockProps.save({
    className: `module-freeform-content block-theme`,
  });

  return (
    <section className={`module-palette-${attributes?.background?.name}`}>
      <div {...blockProps}>{/* Saved Block */}</div>
    </section>
  );
}
