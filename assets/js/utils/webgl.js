import { clamp } from "three/src/math/MathUtils";

export function rToDeg(radians) {
  return (radians * 180) / Math.PI;
}

export function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

export const mapVal2Range = (value, oldRange, newRange) => {
  var newValue =
    ((value - oldRange[0]) * (newRange[1] - newRange[0])) /
      (oldRange[1] - oldRange[0]) +
    newRange[0];
  return Math.min(Math.max(newValue, newRange[0]), newRange[1]);
};

export const mapHtmlPosTo3D = ({
  selector,
  widthRange = [-1, 1],
  //   widthScale = 10,
  //   widthMult = 7,
  heightRange = [-3, 3],
  heightScale = 10,
  heightMult = 7,
  doc,
}) => {
  const element = (doc || document).querySelector(selector);

  const distanceFromLeft = element.getBoundingClientRect().left * 4;

  const mappedWidth = mapVal2Range(
    clamp(distanceFromLeft, 0, 400),
    [0, window.innerWidth],
    widthRange
  );
  const mappedWidthR = mapVal2Range(
    window.innerWidth - clamp(distanceFromLeft, 0, 400),
    [0, window.innerWidth],
    widthRange
  );

  const heightFraction = (element.offsetHeight / heightScale) * heightMult;
  const mappedHeight = mapVal2Range(
    heightFraction,
    [0, element.offsetHeight],
    heightRange
  );

  return { mappedWidth, mappedWidthR, mappedHeight };
};

export const getHeroModel = ({
  selector = ".wp-block-vitestarter-hero",
  dataAttr = "[data-model-name]",
  doc,
}) => {
  const doco = doc || document;
  // console.log("doco", doco);
  const { modelName = null } = doco.querySelector(dataAttr)?.dataset ?? {};
  if (!modelName) return null;
  // console.log("modelName", modelName);
  const { mappedWidth, mappedHeight, mappedWidthR } = mapHtmlPosTo3D({
    selector,
  });

  return [
    {
      modelName,
      mappedHeight,
      mappedWidth,
      // Bring the regular hero models in a little closer
      mappedWidthR: mappedWidthR * 0.8,
      selector,
      element: doco.querySelector(selector),
    },
  ];
};

export const getHomepageHeroModels = ({
  selectorPrefix = ".model-pos--",
  dataAttr = "[data-scene]",
  doc,
}) => {
  const doco = doc || document;
  // console.log("doco", doco);
  const _sceneData = doco.querySelector(dataAttr)?.dataset;

  const sceneData = JSON.parse(_sceneData?.scene);

  const models = Object.keys(sceneData).map((key) => {
    const { mappedWidth, mappedWidthR, mappedHeight } = mapHtmlPosTo3D({
      selector: `${selectorPrefix}${key}`,
    });

    return {
      modelName: sceneData[key]?.name,
      mappedHeight,
      mappedWidth,
      mappedWidthR,
      selector: `${selectorPrefix}${key}`,
      element: (doc || document).querySelector(`${selectorPrefix}${key}`),
    };
  });

  return models;
};

export const throttle = (callback, interval) => {
  let enableCall = true;

  return (...args) => {
    if (!enableCall) return;

    enableCall = false;
    callback.apply(this, args);
    setTimeout(() => (enableCall = true), interval);
  };
};
