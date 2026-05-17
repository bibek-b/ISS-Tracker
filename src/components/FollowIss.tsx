// this component allows the map to follow iss

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import type { FollowIssProps } from "../types";

const FollowIss = ({ coordinates }: FollowIssProps) => {
  const map = useMap();

  useEffect(() => {
    map.panTo([coordinates.latitude, coordinates.longitude], {
      animate: true,
      duration: 0.8,
    });
  }, [coordinates, map]);
  return null;
};

export default FollowIss;
