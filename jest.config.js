/* eslint-disable no-undef */

/** 
 * @type {import('ts-jest').JestConfigWithTsJest} 
 **/
const config = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {
      tsconfig: "renderer/tsconfig.json"
    }],
  },
  moduleNameMapper: {
    /**
     * Ensure these paths match the paths specified in the 
     * renderer's tsconfig.json file.
     */
    "@/components/(.*)": "<rootDir>/renderer/components/$1",
    "@/lib/(.*)": "<rootDir>/renderer/lib/$1",
    "@/utils/(.*)": "<rootDir>/renderer/utils/$1"
  },
};

module.exports = config
