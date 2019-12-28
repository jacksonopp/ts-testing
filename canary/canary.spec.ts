import { hello, returnFunc } from "./canary";
import { expect } from "chai";
import "mocha";

describe("canary functions", () => {
   // should return true
   it("should return true", () => {
      expect(true).to.equal(true);
   });

   // hello world
   it("should return hello world", () => {
      const result = hello();
      expect(result).to.equal("hello world!");
   });
   // return an input
   it("should return an input", () => {
      const hello = returnFunc("hello");
      const world = returnFunc("world");

      expect(hello).to.equal("hello");
      expect(world).to.equal("world");
   });
});
