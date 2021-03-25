import { convertFromHexToRgb } from "../service/Service";
import { Express } from "express";
import { Hex, Rgb } from "../types/colorsType";

//url chiamata
const url = `/HexService/FromHexToRgb`;

class HttpController {
  constructor(server: Express) {
    server.get(url, (req, res) => {
      if (req.query.color != undefined) {
        const color = JSON.parse(req.query.color.toString()) as Hex;
        const convertedColor: Rgb = convertFromHexToRgb(color);
        res.send(convertedColor);
      }
    });
  }
}

export default HttpController;
