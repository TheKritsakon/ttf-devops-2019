import chai from "chai";
import { Hex, testFromHexToRgb } from "../types/colorsType";
import { convertFromHexToRgb } from "./Service";

chai.config.includeStack = true;
const should = chai.should();

export const testData: testFromHexToRgb[] = [
  {
    input: "#ffff",
    expected: [255, 255, 255],
  },
];

describe("test per hex to reg", () => {
  testData.forEach((test) => {
    it(`test case description`, () => {
      convertFromHexToRgb(test.input).should.deep.equal(test.expected);
    });
  });
});
