import express, { IRouter, Request, Response } from "express";
import { getDeadliestTerrorism } from "../services/dataService";
import { handleError } from "../../utils/ErrorHandle";

const router: IRouter = express.Router();

router.get(
  "/api/analysis/deadliest-attack-types/",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const terrorism = await getDeadliestTerrorism();
      res.json(terrorism);
    } catch (error: any) {
      handleError(res, error.status || 404, error.message);
    }
  }
);

export default router;
