import chai from "chai";
import chaiHttp from "chai-http";
import * as config from "../../server-config.json";
import { testData } from "../HexToRgb/Service.test";

chai.config.includeStack = true;
const should = chai.should();
chai.use(chaiHttp);
//#il cancelletto non viene riconosciuto
describe("TEST REST API HexToRgb", () => {
  const url =
    process.env.npm_config_rgb2hex_test_url ||
    `http://localhost:${config.port}`;
  console.log("Test URL: " + url);

  testData.forEach((test) => {
    it(`Happy Path`, (done) => {
      chai
        .request(url)
        .get("/HexService/FromHexToRgb")
        .query(`color=${test.input}`)
        .end((err, res) => {
          should.not.exist(err);
          res.should.have.status(200);
          res.body.should.deep.equal(test.expected);
          done();
        });
    });
  });
});
