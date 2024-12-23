import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useFetch from "../hooks/useFetch";

interface Terror {
  _id: string;
  region: string;
  count: number;
  lat: number;
  long: number;
}
const Map = () => {
  const [terrors, setTerrors] = useState<Terror[]>([]);
  const { data, GET } = useFetch(
    "http://localhost:8181/api/analysis/highest-casualty-regions/"
  );

  useEffect(() => {
    GET();
  }, []);

  useEffect(() => {
    console.log("Data fetched:", data);
    if (data && Array.isArray(data)) {
      setTerrors(data);
    } else {
      console.error("Invalid data format");
    }
  }, [data]);

  if (!data || !Array.isArray(data)) {
    return <div>לא ניתן לטעון את המפה. בדוק את הנתונים.</div>;
  }

  return (
    <MapContainer
      center={[34.83639, 32.08556]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ minHeight: "50vh", minWidth: "50vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {terrors.map((terror) => (
        <Marker
          key={terror._id}
          position={
            terror.lat && terror.long
              ? [terror.lat as number, terror.long as number]
              : [0, 0]
          }
        >
          <Popup>
            <strong>אזור:</strong> {terror.region} <br />
            <strong>נפגעים:</strong> {terror.count || 0} <br />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
