import express, { IRouter, Request, Response } from "express";
import {
  getDeadliestRegionsByGroup,
  getDeadliestTerrorism,
  getHighCasualtyArea,
  getIncidentByDate,
  getTerrorOrgByRegions,
  getTerrorOrgByYear,
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


  const IncidentByDate =  
  async (req: Request, res: Response): Promise<void> => {
    try {
      const yearStart = Number(req.query.yearStart);
        const yearEnd = Number(req.query.yearEnd);
        const monthStart = Number(req.query.monthStart);
        const monthEnd = Number(req.query.monthEnd);
        const dateToSearch = { yearStart, yearEnd, monthStart, monthEnd };
      const terrorism = await getIncidentByDate(dateToSearch);
      res.json(terrorism);
    } catch (error: any) {
      handleError(res, error.status || 404, error.message);
    }
  }


   const TerrorOrgByRegions = async (req: Request, res: Response) => {
    try {
      const regionName = req.query.regionName as string;
      const limit = Number(req.query.limit);
      const TerrorEvents = await getTerrorOrgByRegions(regionName, limit);
      if (!TerrorEvents) {
        res.status(404).json({ msg: "Terror Events not found" });
        return;
      }
      res.json(TerrorEvents);
    } catch (error) {
      res.status(500).json({ msg: "Server error " + error });
    }
  };
  
   const TerrorOrgByYear = async (req: Request, res: Response) => {
    try {
      const year = Number(req.query.year);
      const TerrorEvents = await getTerrorOrgByYear(year);
      if (!TerrorEvents) {
        res.status(404).json({ msg: "Terror Events not found" });
        return;
      }
      res.json(TerrorEvents);
    } catch (error) {
      res.status(500).json({ msg: "Server error " + error });
    }
  };
  
   const DeadliestRegionsByGroup = async (req: Request, res: Response) => {
      try {
        const nameGroup = (req.query.nameGroup as string)
        const TerrorEvents = await getDeadliestRegionsByGroup(nameGroup);
        if (!TerrorEvents) {
          res.status(404).json({ msg: "Terror Events not found" });
          return;
        }
        res.json(TerrorEvents);
      } catch (error) {
        res.status(500).json({ msg: "Server error " + error });
      }
    };

export {DeadliestTerrorism,HighCasualtyArea,IncidentByDate,TerrorOrgByRegions,TerrorOrgByYear,DeadliestRegionsByGroup};
