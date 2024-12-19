import Terror, { ITerror } from "../models/terror";
import { handleBadRequest } from "../../utils/ErrorHandle";

const getDeadliestTerrorism = async () => {
  try {
    const Terrorism = await Terror.aggregate([
      {
        $group: {
          _id: "$attacktype1_txt",
          total: { $sum: { $sum: ["$nkill", "$nwound"] } },
        },
      },
      {
        $sort: {
          total: -1,
        },
      },
    ]);

    return Terrorism;
  } catch (error: any) {
    return handleBadRequest("MongoDB", error);
  }
};
const getHighCasualtyArea = async () => {
  try {
    const Terrorism = await Terror.aggregate([
      {
        $project: {
          region: "$region_txt",
          total_casualties: {
            $add: [{ $ifNull: ["$nwound", 0] }, { $ifNull: ["$nkill", 0] }],
          },
        },
      },
      {
        $group: {
          _id: "$region",
          average_casualties: { $avg: "$total_casualties" },
        },
      },
      {
        $project: {
          region: "$_id",
          average_casualties: 1,
        },
      },
      {
        $sort: { average_casualties: -1 },
      },
    ]);
    return Terrorism
  } catch (error: any) {
    return handleBadRequest("MongoDB", error);
  }
};

export { getDeadliestTerrorism,getHighCasualtyArea };
