import express ,{ Request, Response } from "express";
const router = express;
const routes = router();
routes.get("/", (req: Request, res: Response) => {
  res.send({
    user: {
      name: "joao",
      idade: 31,
    },
  });
});

export default routes;
