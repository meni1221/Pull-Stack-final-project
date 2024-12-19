import express, { IRouter, Request, Response } from "express";
import {
  DeadliestTerrorism,
  HighCasualtyArea,
} from "../src/controllers/dataContoller";
import { handleError } from "../utils/ErrorHandle";

const router: IRouter = express.Router();

router.get("/api/analysis/deadliest-attack-types/", DeadliestTerrorism);
router.get("/api/analysis/highest-casualty-regions/", HighCasualtyArea);
// router.get("/api/analysis/incident-trends/", const);
// router.get("/api/relationships/top-groups/", const);
// router.get("/api/relationships/groups-by-year/", const);
// router.get("/api/relationships/top-groups/", const);

router.use((req: Request, res: Response) => {
  handleError(res, 404, "page is not found");
});

export default router;
