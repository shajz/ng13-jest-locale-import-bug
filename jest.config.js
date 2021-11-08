module.exports = {
  resolver: "jest-preset-angular/build/resolvers/ng-jest-resolver.js",
  transformIgnorePatterns: ["node_modules/(?!@angular)"],
  transform: {
    "^.+\\.(ts|js|mjs|html|svg)$": "jest-preset-angular",
  },
  testEnvironment: "jsdom",
  testRunner: "jest-jasmine2",
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],
  globals: {
    "ts-jest": {
      stringifyContentPathRegex: "\\.html?$",
      tsconfig: "tsconfig.spec.json",
    },
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  modulePathIgnorePatterns: ["<rootDir>/dist"],
  coverageDirectory: "results",
  collectCoverageFrom: [
    "<rootDir>/src/app/**/*.ts",
    "!<rootDir>/src/app/**/*.module.ts",
    "!<rootDir>/src/app/**/index.ts",
  ],
  coveragePathIgnorePatterns: ["/node_modules/"],
  snapshotSerializers: [
    "jest-preset-angular/build/serializers/ng-snapshot",
    "jest-preset-angular/build/serializers/html-comment",
  ],
};
