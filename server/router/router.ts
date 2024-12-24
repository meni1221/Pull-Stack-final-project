import express, { IRouter, Request, Response } from "express";
import {
  DeadliestTerrorism,
  HighCasualtyArea,
  IncidentByDate,
  TerrorOrgByRegions,
  TerrorOrgByYear,
  DeadliestRegionsByGroup,
  addTerrorEvent,
  getRegionsName,
} from "../src/controllers/dataContoller";
import { handleError } from "../utils/ErrorHandle";

const router: IRouter = express.Router();

router.get("/api/analysis/deadliest-attack-types/", DeadliestTerrorism);
router.get("/api/analysis/highest-casualty-regions/", HighCasualtyArea);
router.get("/api/analysis/incident-trends/", IncidentByDate);
router.get("/api/relationships/top-groups", TerrorOrgByRegions);
router.get("/relationships/groups-by-year", TerrorOrgByYear);
router.get("/relationships/deadliest-regions", DeadliestRegionsByGroup);
router.get("api/getRegionsName", getRegionsName);
router.post("/addEvent", addTerrorEvent);

router.use((req: Request, res: Response) => {
  handleError(res, 404, "page is not found");
});

export default router;
