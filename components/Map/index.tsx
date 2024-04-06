"use client";
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import Weather from './weather';

interface Props {
  latitude: number;
  longitude: number;
}

type MyCustomMap = {
  panTo: (latLng: google.maps.LatLngLiteral) => void;
  setZoom: (zoom: number) => void;
};

const Map: React.FC<Props> = ({ latitude, longitude }) => {
  const mapContainerStyle = {
    width: '100%', 
    height: '100%', 
  };

  const [map, setMap] = useState<MyCustomMap | null>(null);

  useEffect(() => {
    if (map) {
      map.panTo({ lat: latitude, lng: longitude });
      map.setZoom(15); // Adjust the zoom level as needed
    }
  }, [map, latitude, longitude]);


  return (
    <div className="w-full h-[700px] relative mb-6">
      <div className='w-full h-full opacity-60'>
        <LoadScript googleMapsApiKey="AIzaSyBwpCKR47OHiBd-ndao3e1qYr1QRltlL4Q">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={{ lat: latitude, lng: longitude }}
            zoom={15} 
            options={{ disableDefaultUI: true }}
          >
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      
      
        <div className=" bg-white/40 backdrop-blur-md shadow-lg rounded-xl w-full  box-border p-6 ">
          <div className='flex gap-3 items-center'>
            <h4 className="text-2xl font-semibold text-primaryho leading-9 font-serif ">Weather</h4>
             <span>/ Dakhla</span>
          </div>
          <Weather latitude={latitude} longitude={longitude}/>
        </div>
      </div>
    </div>
  );
};

export default Map;