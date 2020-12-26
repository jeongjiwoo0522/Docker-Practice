import express, { Request, Response, NextFunction } from "express";
import { makeChat, showChatList, showInfo } from "./router";

interface ExtendRequest extends Request {
  [key: string]: any;
}

interface ExtendResponse extends Response {
  [key: string]: any;
}

interface BusinessLogic {
  (req: ExtendRequest, res: ExtendResponse, next: NextFunction): any;
}

const router: express.Router = express.Router();

router.get("/chat", showChatList);
router.post("/chat", makeChat);
router.get("/info", showInfo);

export default router;
export { BusinessLogic };