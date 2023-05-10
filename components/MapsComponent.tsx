"use client";

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const MapsComponent = () => {
  const { isLoaded } = useLoadScript({
    // @ts-ignore
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

function Map() {
  const center = useMemo(
    () => ({ lat: 41.71713199464514, lng: 44.778196701222775 }),
    []
  );
  return (
    <GoogleMap
      zoom={17}
      center={center}
      mapContainerClassName={"w-full h-screen col-span-3 pb-10"}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default MapsComponent;
