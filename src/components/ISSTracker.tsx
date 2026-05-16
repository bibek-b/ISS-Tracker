import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import issImg from "../assets/space-station.png";

/*
Map Zoom Levels
1   = whole Earth
2   = continents visible
4   = countries visible
6   = cities visible
10  = streets
15+ = buildings
*/

const IISIcon = L.icon({
  iconUrl: issImg,
  iconSize: [50, 50],
});

const ISSTracker = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  //fetch iis data
  useEffect(() => {
    const fetchISSData = async () => {
      try {
        const res = await fetch(
          "https://api.wheretheiss.at/v1/satellites/25544",
        );
        const data = await res.json();

        const { latitude, longitude } = data;

        setCoordinates({ latitude, longitude });
      } catch (error) {
        console.log(error);
        alert("Failed to fetch ISS data");
      }
    };

    fetchISSData();

    const intervalId = setInterval(() => {
      fetchISSData();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <MapContainer
      center={[coordinates.latitude, coordinates.longitude]}
      zoom={3}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={[coordinates.latitude, coordinates.longitude]}
        icon={IISIcon}
      >
        <Popup>ISS Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default ISSTracker;
