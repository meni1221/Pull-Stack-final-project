import express, { IRouter, Request, Response } from "express";
import { getDeadliestTerrorism, getHighCasualtyArea } from "../services/dataService";
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

router.get(
  "/api/analysis/highest-casualty-regions/",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const terrorism = await getHighCasualtyArea();
      res.json(terrorism);
    } catch (error: any) {
      handleError(res, error.status || 404, error.message);
    }
  }
);


export default router;
