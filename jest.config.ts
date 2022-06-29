import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["/node_modules/", "/demo/", "/demo-yalc/"],
    modulePathIgnorePatterns: ["/demo/", "/demo-yalc/"],
  };
};
