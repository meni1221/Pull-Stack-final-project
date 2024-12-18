import express, { IRouter, Request, Response } from "express";
import { login, logout } from "../services/authService";
import { handleError } from "../../utils/ErrorHandle";
import { verifyUserToRef } from "../../helpers/jwt";

const router: IRouter = express.Router();

router.post("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.body;
    const RealUser = await login(user, res);
    res.json(RealUser);
  } catch (error: any) {
    console.error(error.message);
    handleError(res, error.status, error.message);
  }
});

router.post("/logout", (req: Request, res: Response): void => {
  try {
    logout(res);
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error: any) {
    console.error(error.message);
  }
});

router.post(
  "/refreshUser",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const FoundUser = await verifyUserToRef(req, res);
      console.log(FoundUser);
      res.json(FoundUser);
    } catch (error: any) {
      console.error(error.message);
      handleError(res, error.status, error.message);
    }
  }
);

export default router;
