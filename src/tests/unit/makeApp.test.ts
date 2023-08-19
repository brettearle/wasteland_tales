import { Server } from "http";
import { AddressInfo } from "net";
import supertest from "supertest";

import { makeApp } from "../../app";
import { makeRouter } from "../../router/allRoutes";

describe("Make App Func", () => {
  let app: Server;
  beforeAll(() => {
    app = makeApp(5678);
  });
  afterAll(() => {
    app.close();
  });

  test("check if server is listening", () => {
    const got = app.listening;
    expect(got).toBe(true);
  });

  test("check if server is listening on 5678", () => {
    const addy = app.address() as AddressInfo;
    const got = addy.port;
    expect(got).toBe(5678);
  });

  test("makeApp can be called with routerObj and test route /test GET", async () => {
    const testRoutes = makeRouter("/test", {
      get: (req, res) => res.send({ test: "hello" }),
    });
    const testApp = makeApp(5555, testRoutes);
    const got = await supertest(testApp)
      .get("/test")
      .then((res) => {
        return res.body;
      });
    expect(got.test).toBe("hello");
    testApp.close();
  });
});
