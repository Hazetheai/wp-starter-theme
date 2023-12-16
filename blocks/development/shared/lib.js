export const colors = {
  primary: "var(--color-green-dark, #0f4533ff)",
  secondary: "var(--color-green-light, #ebf4efff)",
  white: "var(--color-white, #fff)",
  black: "var(--color-black, #000)",
  grey: "var(--color-grey, #e4e4e4)",
};

export function getLowestFraction(x0) {
  let eps = 1.0e-2;
  let h, h1, h2, k, k1, k2, a, x;

  x = x0;
  a = Math.floor(x);
  h1 = 1;
  k1 = 0;
  h = a;
  k = 1;

  while (x - a > eps * k * k) {
    x = 1 / (x - a);
    a = Math.floor(x);
    h2 = h1;
    h1 = h;
    k2 = k1;
    k1 = k;
    h = h2 + a * h1;
    k = k2 + a * k1;
  }

  return { numerator: h, denominator: k };
}
