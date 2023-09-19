/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { __ } from "@wordpress/i18n";

import { BlockControls } from "@wordpress/block-editor";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { registerFormatType, toggleFormat } from "@wordpress/rich-text";

/**
 * Block constants
 */
const name = "vitestarter/rich-text-list";

const ListButton = ({ isActive, value, onChange }) => {
  const onToggle = () => {
    onChange(
      toggleFormat(value, {
        type: name,
      })
    );
  };
  return (
    <BlockControls>
      <ToolbarGroup>
        <ToolbarButton
          icon="editor-ul"
          title={__("List", "bhb-bayern")}
          onClick={onToggle}
          isActive={isActive}
        />
      </ToolbarGroup>
    </BlockControls>
  );
};

export const richTextList = {
  name,
  title: __("List", "bhb-bayern"),
  tagName: "ul",
  className: null,
  //   attributes: {
  //     style: "style",
  //   },
  edit: ListButton,
};

export function registerFormats() {
  [richTextList].forEach(({ name, ...settings }) =>
    registerFormatType(name, settings)
  );
}
