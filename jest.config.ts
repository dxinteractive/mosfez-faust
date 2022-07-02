import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["/node_modules/", "/dev/"],
    modulePathIgnorePatterns: ["/dev/"],
  };
};
