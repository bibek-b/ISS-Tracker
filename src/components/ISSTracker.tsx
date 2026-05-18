import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import issImg from "../assets/IssImage.png";
import FollowIss from "./FollowIss";
import type { CoordinatesType } from "../types";
import Loader from "./Loader";

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
  iconSize: [75, 75],
});

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
  if (coordinates.latitude === 0 && coordinates.longitude === 0) {
    return <Loader />
  }
  return (
    <MapContainer
      center={[coordinates.latitude, coordinates.longitude]}
      zoom={4}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>'
        url={`https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=${import.meta.env.VITE_MAP_KEY}`}
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
