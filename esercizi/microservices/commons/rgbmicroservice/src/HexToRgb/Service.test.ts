import chai from "chai";
import { Hex, testFromHexToRgb } from "../types/colorsType";
import { convertFromHexToRgb } from "./Service";

chai.config.includeStack = true;
const should = chai.should();

export const testData: testFromHexToRgb[] = [
  {
    input: "fff",
    expected: [255, 255, 255],
  },
];

describe("test per hex to rgb", () => {
  testData.forEach((test) => {
    it(`Happy path test one`, () => {
      convertFromHexToRgb(test.input).should.deep.equal(test.expected);
    });
  });
});
