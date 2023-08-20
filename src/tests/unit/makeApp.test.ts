import { Server } from "http";
import { AddressInfo } from "net";
import supertest from "supertest";

import { makeApp } from "../../app";

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
});
