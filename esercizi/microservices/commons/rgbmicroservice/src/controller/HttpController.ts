import { convertFromHexToRgb } from "../HexToRgb/Service";
import { Express } from "express";
import { Hex, Rgb } from "../types/colorsType";

//url chiamata
const url = `/HexService/FromHexToRgb`;

class HttpController {
  constructor(server: Express) {
    server.get(url, (req, res) => {
      if (req.query.color != undefined && req.query.color != null) {
        console.log("colore = " + JSON.stringify(req.query));
        const color = req.query.color as Hex;
        console.log("colore in input = " + color);
        const convertedColor: Rgb = convertFromHexToRgb(color);
        res.send(convertedColor);
      } else {
        res.send("color souldn't be undefined");
      }
    });
  }
}

export default HttpController;
