import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MARKER_ICON_URL = {
  school: "https://cdn-icons-png.flaticon.com/512/167/167707.png",
  collage: "https://cdn-icons-png.flaticon.com/512/8074/8074794.png",
};

const MapComponent = ({ mapData }) => {
  const { lat = 20, lng = 20, icon = "school" } = mapData;
  const initialPosition = [lat, lng];

  const [markerPosition, setMarkerPosition] = useState(initialPosition);
  const [map, setMap] = useState(null);
  const markerRef = useRef(null);

  const handleMarkerClick = (event) => {
    const { lat, lng } = event.latlng;
    setMarkerPosition([lat, lng]);
  };

  useEffect(() => {
    if (map && markerRef.current) {
      markerRef.current.setLatLng(markerPosition);
      map.setView(markerPosition, map.getZoom());
    }
  }, [markerPosition, map]);

  const customIcon = new L.Icon({
    iconUrl: MARKER_ICON_URL[icon],
    iconSize: [32, 42],
    iconAnchor: [16, 32],
    shadowAnchor: [14, 62],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      center={initialPosition}
      zoom={8}
      style={{ height: "400px",width:"700px",marginTop:"6%" }}
      whenCreated={(mapInstance) => setMap(mapInstance)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
        position={markerPosition}
        icon={customIcon}
        onClick={handleMarkerClick}
        ref={markerRef}
      >
        <Popup>
          Latitude: {markerPosition[0]}
          <br />
          Longitude: {markerPosition[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;



