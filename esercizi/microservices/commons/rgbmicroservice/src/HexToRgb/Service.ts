import * as convert from "color-convert";
import { Hex, Rgb } from "../types/colorsType";

export function convertFromHexToRgb(color: Hex): Rgb {
  const colorToConvert: Hex = color;
  console.log("colore iniziale:" + colorToConvert);
  const convertedColor = convert.hex.rgb(colorToConvert);
  console.log("colore convertito:" + convertedColor);
  return convertedColor;
}
