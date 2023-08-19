import { Request, Response } from "express";
import { makeRouter } from "../../router/allRoutes";

describe("ROUTES", () => {
  const methodsObject = {
    get: (req: Request, res: Response) => {
      console.log("GET ");
    },
    post: (req: Request, res: Response) => {
      console.log("POST ");
    },
    put: (req: Request, res: Response) => {
      console.log("PUT ");
    },
    delete: (req: Request, res: Response) => {
      console.log("DELETE ");
    },
  };

  const testRouter = makeRouter("/test", methodsObject);

  test("has /test path", () => {
    const got = testRouter.stack[0].route.path;
    expect(got).toBe("/test");
  });

  test("has a get method", () => {
    const got = testRouter.stack[0].route.methods.get;
    expect(got).toBe(true);
  });

  test("has a post method", () => {
    const got = testRouter.stack[1].route.methods.post;
    expect(got).toBe(true);
  });

  test("has a put method", () => {
    const got = testRouter.stack[2].route.methods.put;
    expect(got).toBe(true);
  });

  test("has a Delete method", () => {
    const got = testRouter.stack[3].route.methods.delete;
    expect(got).toBe(true);
  });
});
