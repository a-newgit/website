module.exports = {
  extends: ["eslint:recommended", "plugin:astro/recommended"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      globals: {
        ImageMetadata: "readonly",
      },
    },
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
    },
    {
      files: ["netlify/edge-functions/**/*.js"],
      globals: {
        Deno: "readonly",
      },
    },
  ],
  env: { node: true, browser: true },
};
