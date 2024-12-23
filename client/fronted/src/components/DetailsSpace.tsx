import Map from "./Map";
import DetailsSpaceWithGraph from "../components/DetailsSpaceWithGraph";
import DetailsSpaceByYearsWithGraph from "./DetailsSpaceByYearsWithGraph";
import GroupsByYear from "./GroupsByYear";
import TopTerrorGroupsByRegion from "./TopTerrorGroupsByRegion";

interface Props {
  data: any;
  urlToMakeGetData: string;
}

export default function DetailsSpace({ data, urlToMakeGetData }: Props) {
  if (
    urlToMakeGetData ===
    "http://localhost:8181/api/analysis/deadliest-attack-types"
  ) {
    return <DetailsSpaceWithGraph data={data} />;
  } else if (
    urlToMakeGetData ===
    "http://localhost:8181/api/analysis/highest-casualty-regions"
  ) {
    return <Map data={data} />;
  } else if (
    urlToMakeGetData === "http://localhost:8181/api/analysis/incident-trends"
  ) {
    return (
      <DetailsSpaceByYearsWithGraph urlToMakeGetRequest={urlToMakeGetData} />
    );
  } else if (
    urlToMakeGetData === "http://localhost:8181/api/relationships/top-groups"
  ) {
    return <TopTerrorGroupsByRegion urlToMakeGetRequest={urlToMakeGetData} />;
  }
  if (
    urlToMakeGetData ===
    "http://localhost:8181/api/relationships/groups-by-year"
  ) {
    return <GroupsByYear urlToMakeGetRequest={urlToMakeGetData} />;
  }
  if (
    urlToMakeGetData ===
    "http://localhost:8181/api/analysis/deadliest-attack-types"
  ) {
    return <DetailsSpaceWithGraph data={data} />;
  }
  return <div>DetailsSpace</div>;
}
