import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import issImg from "../assets/space-station.png";
import FollowIss from "./FollowIss";
import type { CoordinatesType } from "../types";

/*
Map Zoom Levels
1   = whole Earth
2   = continents visible
4   = countries visible
6   = cities visible
10  = streets
15+ = buildings
*/

const ISSIcon = L.icon({
  iconUrl: issImg,
  iconSize: [50, 50],
});

// function

const ISSTracker = () => {
  const [coordinates, setCoordinates] = useState<CoordinatesType>({
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

    //fetch iis real time data every 3 sec
    const intervalId = setInterval(() => {
      fetchISSData();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  //check actual coordinates arrived? if not show simple loader
  if (
  coordinates.latitude === 0 &&
  coordinates.longitude === 0
) {
  return <h1 className="absolute top-[45%] left-[45%] text-3xl">Loading...</h1>;
}
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

      <FollowIss coordinates={coordinates} />

      <Marker
        position={[coordinates.latitude, coordinates.longitude]}
        icon={ISSIcon}
      >
        <Popup>ISS Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default ISSTracker;
