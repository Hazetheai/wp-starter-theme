export const envConfig = {
  isDev: process.env.NODE_ENV === "development" || !!import.meta.env.DEV,
};

const logConfig = { all: false };

export function globalLog(...args) {
  if (envConfig.isDev && logConfig.all) {
    console.log(...args);
  }
}
