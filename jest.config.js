/** @type {import('jest').Config} */
const config = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/support/setupTests.ts"],
};

module.exports = config;
