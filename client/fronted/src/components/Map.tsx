import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface Terror {
  _id: string;
  region: string;
  count: number;
  lat: number;
  long: number;
}

interface MapProps {
  data: Terror[];
}
const Map = ({ data }: MapProps) => {
  const filteredData = data.filter(
    (region) => region.lat !== null && region.long !== null
  );

  const centerPosition: [number, number] =
    filteredData.length > 0
      ? [filteredData[0].lat as number, filteredData[0].long as number]
      : [0, 0];

  return (
    <MapContainer center={centerPosition} zoom={6} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {filteredData.map((region, index) => (
        <Marker key={index} position={[region.lat as number, region.long as number]}>
          <Popup>
            <strong>{region.region + " "}</strong>
            <br />
            נפגעים: {region.count}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}        


export default Map;
