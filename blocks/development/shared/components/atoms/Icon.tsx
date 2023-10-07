import React from "react";

interface IconProps {
  type:
    | "burger-closed"
    | "burger-open"
    | "alert"
    | "chevron-up-dark"
    | "chevron-up-light"
    | "extended-left-mobile"
    | "extended-out-desktop"
    | "extended-out-mobile"
    | "extended-right-desktop"
    | "extended-right-mobile"
    | "short-large-right-desktop-1512"
    | "short-large-right-desktop"
    | "short-left-desktop"
    | "short-left-mobile"
    | "short-out-desktop"
    | "short-right-desktop"
    | "short-right-mobile"
    | "simple-down-desktop"
    | "simple-down-mobile"
    | "simple-top-desktop"
    | "simple-top-mobile"
    | "back-to-top";
  stroke?: string;
  fill?: string;
  className?: string;
  width?: string;
  height?: string;
}

const Icon: React.FC<IconProps> = ({
  type,
  stroke = "#708573",
  fill = "none",
  className = "",
  width,
  height,
}) => {
  switch (type) {
    case "back-to-top":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "48"}
          height={height || "48"}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width={width || "47"}
            height={height || "47"}
            fill={fill}
          />
          <path d="M40 32L24 16L8 32" stroke={stroke} />
          <rect
            x="0.5"
            y="0.5"
            width={width || "47"}
            height={height || "47"}
            stroke={stroke}
          />
        </svg>
      );
    case "burger-closed":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "20"}
          height={height || "20"}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 2H20" stroke={stroke} />
          <path d="M0 10H20" stroke={stroke} />
          <path d="M0 18H20" stroke={stroke} />
        </svg>
      );

    case "burger-open":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "21"}
          height={height || "20"}
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 2.5L20 17.5" stroke={stroke} />
          <path d="M1 17.5L20 2.5" stroke={stroke} />
        </svg>
      );
    case "alert":
      return (
        <svg
          className={className}
          data-icon-name={type}
          xmlns="http://www.w3.org/2000/svg"
          width={width || "20"}
          height={height || "20"}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47717 15.5228 0 10 0C4.47717 0 0 4.47717 0 10C0 15.5228 4.47717 20 10 20ZM9 13V15H11V13H9ZM11 8.42859V5H9V8.42859L9.47766 12H10.5223L11 8.42859Z"
            fill="#0F4533"
          />
        </svg>
      );
    case "chevron-up-dark":
      return (
        <svg
          className={className}
          data-icon-name={type}
          xmlns="http://www.w3.org/2000/svg"
          width={width || "34"}
          height={height || "18"}
          viewBox="0 0 34 18"
          fill="none"
        >
          <path d="M33 17L17 1L1 17" stroke={stroke} />
        </svg>
      );

    case "chevron-up-light":
      return (
        <svg
          className={className}
          data-icon-name={type}
          xmlns="http://www.w3.org/2000/svg"
          width={width || "34"}
          height={height || "18"}
          viewBox="0 0 34 18"
          fill="none"
        >
          <path d="M33 17L17 1L1 17" stroke={stroke} />
        </svg>
      );

    case "extended-left-mobile":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "41"}
          height={height || "12"}
          viewBox="0 0 41 12"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41 6.09998H1M1 6.09998L7 11.1M1 6.09998L7 1.09998"
            stroke={stroke}
          />
        </svg>
      );

    case "extended-out-desktop":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "15"}
          height={height || "15"}
          viewBox="0 0 15 15"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.00005 14L14 1M14 1H5.51003M14 1V9.49" stroke={stroke} />
        </svg>
      );

    case "extended-out-mobile":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "12"}
          height={height || "12"}
          viewBox="0 0 12 12"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00004 11L11 1M11 1H4.46925M11 1V7.53077"
            stroke={stroke}
          />
        </svg>
      );

    case "extended-right-desktop":
      return (
        <svg
          className={className}
          data-icon-name={type}
          xmlns="http://www.w3.org/2000/svg"
          width={width || "119"}
          height={height || "37"}
          viewBox="0 0 119 37"
          fill="none"
        >
          <path
            d="M0 18.1H118M118 18.1L100.3 35.8M118 18.1L100.3 0.400024"
            stroke={stroke}
          />
        </svg>
      );

    case "extended-right-mobile":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "35"}
          height={height || "12"}
          viewBox="0 0 35 12"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 6.09998H33.3333M33.3333 6.09998L28.3333 11.1M33.3333 6.09998L28.3333 1.09998"
            stroke={stroke}
          />
        </svg>
      );

    case "short-large-right-desktop-1512":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "77"}
          height={height || "25"}
          viewBox="0 0 77 25"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12.35H30.8M30.8 12.35L19.25 23.9M30.8 12.35L19.25 0.799988"
            stroke={stroke}
          />
        </svg>
      );

    case "short-large-right-desktop":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "118"}
          height={height || "37"}
          viewBox="0 0 118 37"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 18.7H47.2M47.2 18.7L29.5 36.4M47.2 18.7L29.5 1"
            stroke={stroke}
          />
        </svg>
      );

    case "short-left-desktop":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "41"}
          height={height || "14"}
          viewBox="0 0 41 14"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 7.09998H1M1 7.09998L7 13.1M1 7.09998L7 1.09998"
            stroke={stroke}
          />
        </svg>
      );

    case "short-left-mobile":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "41"}
          height={height || "12"}
          viewBox="0 0 41 12"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3334 6.09998H1.00004M1.00004 6.09998L6.00004 11.1M1.00004 6.09998L6.00004 1.09998"
            stroke={stroke}
          />
        </svg>
      );

    case "short-out-desktop":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "14"}
          height={height || "14"}
          viewBox="0 0 14 14"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13L10.0001 3.99994M10.0001 3.99994H1.51005M10.0001 3.99994V12.4899"
            stroke={stroke}
          />
        </svg>
      );

    case "short-right-desktop":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "40"}
          height={height || "14"}
          viewBox="0 0 40 14"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 7H16M16 7L10 13M16 7L10 1" stroke={stroke} />
        </svg>
      );

    case "short-right-mobile":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "40"}
          height={height || "12"}
          viewBox="0 0 40 12"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 6.09998H13.3333M13.3333 6.09998L8.33333 11.1M13.3333 6.09998L8.33333 1.09998"
            stroke={stroke}
          />
        </svg>
      );

    case "simple-down-desktop":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "50"}
          height={height || "26"}
          viewBox="0 0 50 26"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1.09998L25 25.1L49 1.09998" stroke={stroke} />
        </svg>
      );

    case "simple-down-mobile":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "34"}
          height={height || "18"}
          viewBox="0 0 34 18"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1.09998L17 17.1L33 1.09998" stroke={stroke} />
        </svg>
      );

    case "simple-top-desktop":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "50"}
          height={height || "26"}
          viewBox="0 0 50 26"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M49 25.1L25 1.09997L1 25.1" stroke={stroke} />
        </svg>
      );

    case "simple-top-mobile":
      return (
        <svg
          className={className}
          data-icon-name={type}
          width={width || "34"}
          height={height || "18"}
          viewBox="0 0 34 18"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M33 17.1L17 1.09998L1 17.1" stroke={stroke} />
        </svg>
      );
  }
};

export default Icon;
