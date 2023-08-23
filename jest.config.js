/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/test-jest/get.spec.ts", "**/test-jest/post.spec.ts", "**/test-jest/put.spec.ts","**/test-jest/patch.spec.ts","**/test-jest/delete.spec.ts" ],
  testTimeout:50000,
};