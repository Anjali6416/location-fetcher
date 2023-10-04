// import React, { useState, useEffect, useRef } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// const MARKER_ICON_URL = {
//   school: "https://cdn-icons-png.flaticon.com/512/167/167707.png",
//   collage: "https://cdn-icons-png.flaticon.com/512/8074/8074794.png",
// };

// const MapComponent = ({ mapData }) => {
//   const { lat, lng, icon = "school" } = mapData;
//   const initialPosition = [lat, lng];

//   const [markerPosition, setMarkerPosition] = useState(initialPosition);
//   const [map, setMap] = useState(null);
//   const markerRef = useRef(null);

//   const handleMarkerClick = (event) => {
//     const { lat, lng } = event.latlng;
//     setMarkerPosition([lat, lng]);
//   };

//   useEffect(() => {
//     if (map && markerRef.current) {
//       markerRef.current.setLatLng(markerPosition);
//       map.setView(markerPosition, map.getZoom());
//     }
//   }, [markerPosition, map]);

//   const customIcon = new L.Icon({
//     iconUrl: MARKER_ICON_URL[icon],
//     iconSize: [32, 42],
//     iconAnchor: [16, 32],
//     shadowAnchor: [14, 62],
//     popupAnchor: [0, -32],
//   });

//   return (
//     <MapContainer
//       center={initialPosition}
//       zoom={8}
//       style={{ height: "400px",width:"700px",marginTop:"6%" }}
//       whenCreated={(mapInstance) => setMap(mapInstance)}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />

//       <Marker
//         position={markerPosition}
//         icon={customIcon}
//         onClick={handleMarkerClick}
//         ref={markerRef}
//       >
//         <Popup>
//           Latitude: {markerPosition[0]}
//           <br />
//           Longitude: {markerPosition[1]}
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default MapComponent;
import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MARKER_ICON_URL = {
  school: "https://cdn-icons-png.flaticon.com/512/167/167707.png",
  collage: "https://cdn-icons-png.flaticon.com/512/8074/8074794.png",
};

const MapComponent = ({ mapData }) => {
  const { lat = 28.603087, lng = 77.3671873, icon = "school" } = mapData;
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Ensure the map container is not already initialized
    if (!mapRef.current) {
      const map = L.map("map").setView([lat, lng], 12);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const customIcon = new L.Icon({
        iconUrl: MARKER_ICON_URL[icon],
        iconSize: [32, 42],
        iconAnchor: [16, 32],
        shadowAnchor: [14, 62],
        popupAnchor: [0, -32],
      });

      const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
      markerRef.current = marker;
      mapRef.current = map;
    } else {
      mapRef.current.setView([lat, lng], 12);
      if (markerRef.current) {
        markerRef.current.removeFrom(mapRef.current);
      }
      const customIcon = new L.Icon({
        iconUrl: MARKER_ICON_URL[icon],
        iconSize: [32, 42],
        iconAnchor: [16, 32],
        shadowAnchor: [14, 62],
        popupAnchor: [0, -32],
      });

      const marker = L.marker([lat, lng], { icon: customIcon }).addTo(
        mapRef.current
      );
      markerRef.current = marker;
    }
  }, [mapData]);

  return (
    <div id={`map`} style={{ height: "600px", width: "80%", margin: "auto", boxShadow:"0 0 10px black", borderRadius: '10px' }} />
  );
};

export default MapComponent;
