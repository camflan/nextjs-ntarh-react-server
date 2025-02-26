import { defineConfig } from "vitest/config";

const conditions = ["react-server"];

export default defineConfig({
  resolve: {
    conditions,
  },
  ssr: {
    resolve: {
      conditions,
    },
  },

  test: {
    include: ["./src/**/__tests__/*.{test,spec}.ts?(x)"],
    environment: "jsdom",
  },
});
