/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { v4 as uuidv4 } from "uuid";
import {
  BlockControls,
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  Button,
  ColorPalette,
  Icon,
  IconButton,
  PanelBody,
  SelectControl,
  ToolbarGroup,
  __experimentalInputControl as InputControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { colors } from "../../../shared/lib";
import "./editor-style.css";

export default function Edit({ attributes, setAttributes, isSelected }) {
  const { background, form, subjects } = attributes;

  const blockProps = useBlockProps({
    className: `module-palette-${background?.name} `,
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
      <div className="block-editor-wrapper block-theme row flex-between items-start">
        <InspectorControls>
          <PanelBody title={__("General", "vite-starter")} initialOpen>
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
          <ToolbarGroup>{/* Block controls */}</ToolbarGroup>
        </BlockControls>

        <div className="col-6">
          <SelectControl
            value={form}
            options={[{ value: "contact", label: "Kontakt" }]}
            label={__("Form", "vite-starter")}
            onChange={(newForm) => setAttributes({ form: newForm })}
          />
          {subjects.map((subject) => {
            return (
              <>
                <div style={{ paddingTop: 20 }} />
                <div key={subject.title} className="flex items-end">
                  <InputControl
                    label="Betreff"
                    labelPosition="top"
                    value={subject.title}
                    type="text"
                    isPressEnterToChange
                    onChange={(nextValue) => {
                      setAttributes({
                        subjects: subjects.map((subj) => {
                          if (subj.id !== subject.id) {
                            return subj;
                          }

                          return { ...subject, title: nextValue };
                        }),
                      });
                    }}
                  />
                  <div style={{ padding: "0 5px 3px 5px" }}>
                    <Icon icon="arrow-right-alt" />
                  </div>
                  <InputControl
                    label="Email"
                    labelPosition="top"
                    value={subject.email}
                    type="email"
                    isPressEnterToChange
                    onChange={(nextValue) => {
                      setAttributes({
                        subjects: subjects.map((subj) => {
                          if (subj.id !== subject.id) {
                            return subj;
                          }

                          return { ...subject, email: nextValue };
                        }),
                      });
                    }}
                  />
                  <IconButton
                    variant="secondary"
                    icon={"remove"}
                    onClick={() =>
                      setAttributes({
                        subjects: subjects.filter(
                          (subj) => subj.id !== subject.id
                        ),
                      })
                    }
                  />
                </div>
              </>
            );
          })}

          <IconButton
            icon="insert"
            style={{ marginTop: 20 }}
            onClick={() =>
              setAttributes({
                subjects: subjects.concat({
                  title: "",
                  email: "",
                  id: uuidv4(),
                }),
              })
            }
            variant="primary"
          />
        </div>
        <div className="col-6">
          <span className="link-small text-color-alt">
            {__("Telefonnummer", "vite-starter")}
          </span>
          <address className="text-h3 text-color-heading">
            {__("0234/6234039", "vite-starter")}
          </address>
          <address className="copy-regular">
            {__("Unsere Telefonzeiten: Mo-Fr 10 – 17 Uhr", "vite-starter")}
          </address>
        </div>
      </div>
    </div>
  );
}
