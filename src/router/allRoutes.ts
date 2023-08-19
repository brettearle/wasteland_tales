import { Router, Request, Response } from "express";

interface IMakeRouter {
  get?:
    | ((req: Request, res: Response) => void)
    | ((req: Request, res: Response) => any);
  post?:
    | ((req: Request, res: Response) => void)
    | ((req: Request, res: Response) => any);
  put?:
    | ((req: Request, res: Response) => void)
    | ((req: Request, res: Response) => any);
  delete?:
    | ((req: Request, res: Response) => void)
    | ((req: Request, res: Response) => any);
}

function makeRouter(path: string, methods: IMakeRouter): Router {
  const router = Router();
  if (methods.get) {
    router.get(path, methods.get);
  }
  if (methods.post) {
    router.post(path, methods.post);
  }
  if (methods.put) {
    router.put(path, methods.put);
  }
  if (methods.delete) {
    router.delete(path, methods.delete);
  }
  return router;
}

export { makeRouter };
