/// <reference types="react-scripts" />

declare const process: {
  env: {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
  };
};
