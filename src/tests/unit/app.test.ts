import { Server } from "http";
import { AddressInfo } from "net";
import supertest, { SuperTest, Test } from "supertest";

import { makeApp } from "../../app";
import { makeRouter } from "../../router/makeRouter";
import { poker } from "../../services/deck/makeDeck";
import { IAppServices } from "../../config/types/interfaces";

describe("App", () => {
  let testReq: SuperTest<Test>;
  let app: Server;
  const testServices: IAppServices = {
    port: 5678,
    router: makeRouter(),
  };

  beforeAll(() => {
    app = makeApp(testServices);
    testReq = supertest(app);
  });

  afterAll(() => {
    app.close();
  });

  describe("Make App Func", () => {
    test("check if server is listening", () => {
      const got = app.listening;
      expect(got).toBe(true);
    });

    test("check if server is listening on 5678", () => {
      const addy = app.address() as AddressInfo;
      const got = addy.port;
      expect(got).toBe(5678);
    });
  });

  describe("/ route", () => {
    test("GET on / route should return status 200", async () => {
      const got = await testReq.get("/");
      expect(got.status).toBe(200);
    });
  });

  describe("/deck route", () => {
    test("GET on /deck route should return status 200", async () => {
      const got = await testReq.get("/deck/npoker");
      expect(got.status).toBe(200);
    });

    test("GET on /deck route should return deck", async () => {
      const res = await testReq.get("/deck/npoker");
      const got = res.body;
      const want = poker.makeDeck();
      expect(got.deck).toStrictEqual(want);
    });
  });
});
