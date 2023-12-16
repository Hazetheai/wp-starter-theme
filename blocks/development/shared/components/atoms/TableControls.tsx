import classnames from "classnames";
import React from "react";
interface TableControlsProps {
  id: string;
  controlType?: "filter" | "filter-button";
  text?: string;
  items?: { label: string; value: string }[];
  disabled?: boolean;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
const TableControls: React.FC<TableControlsProps> = ({
  id,
  controlType = "filter",
  text = "Alle",
  items = [],
  disabled = false,
  buttonProps = {},
}) => {
  return (
    <>
      {controlType === "filter" && (
        <div id={id} className="flex-flex-col table-filter">
          <button
            {...buttonProps}
            disabled={disabled}
            className={classnames(
              "table-filter__button text-button",
              disabled && "disabled"
            )}
          >
            {text}
            <svg
              className="table-filter__button-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="13"
              viewBox="0 0 24 13"
              fill="none"
            >
              <path
                d="M12 12.5L24 0.500002L-8.58275e-07 0.5L12 12.5Z"
                fill="#708573"
              />
            </svg>
          </button>
          <ul className="table-filter__items">
            {items.map((item) => (
              <li className="table-filter__item">
                <button
                  data-table-filter-value={item.value}
                  className="text-button"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {controlType === "filter-button" && (
        <button
          {...buttonProps}
          id={id}
          disabled={disabled}
          className={classnames(
            "button text-button",
            disabled && "disabled",
            buttonProps.className
          )}
        >
          Filter Löschen
        </button>
      )}
    </>
  );
};

export default TableControls;
