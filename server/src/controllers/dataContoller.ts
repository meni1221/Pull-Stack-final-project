import express, { IRouter, Request, Response } from "express";
import {
  getDeadliestTerrorism,
  getHighCasualtyArea,
} from "../services/dataService";
import { handleError } from "../../utils/ErrorHandle";

const router: IRouter = express.Router();

const DeadliestTerrorism = async (req: Request, res: Response): Promise<void> => {
  try {
    const terrorism = await getDeadliestTerrorism();
    res.json(terrorism);
  } catch (error: any) {
    handleError(res, error.status || 404, error.message);
  }
};

const HighCasualtyArea =
  async (req: Request, res: Response): Promise<void> => {
    try {
      const terrorism = await getHighCasualtyArea();
      res.json(terrorism);
    } catch (error: any) {
      handleError(res, error.status || 404, error.message);
    }
  }


// router.get(
//   "/api/analysis/incident-trends/",
//   async (req: Request, res: Response): Promise<void> => {
//     try {
//       const terrorism = await getIncidentByDate();
//       res.json(terrorism);
//     } catch (error: any) {
//       handleError(res, error.status || 404, error.message);
//     }
//   }
// );

export {DeadliestTerrorism,HighCasualtyArea};
