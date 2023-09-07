"use client";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const dummyMarkers = [
  { id: 1, lat: 31.5708, lng: 74.3152, name: "Marker 1" },
  { id: 2, lat: 30.1575, lng: 71.5249, name: "Marker 2" },
  { id: 3, lat: 31.4504, lng: 73.135, name: "Marker 3" },
  { id: 4, lat: 31.5204, lng: 74.3587, name: "Marker 4" },
];

const customIcon = L.icon({
  iconUrl: "/assets/foot.png",
  iconSize: [46, 46],
  iconAnchor: [16, 32],
});

function LeafletMap() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("alldata")) || [];
    const markerCounts = {};
    storedData.forEach((item) => {
      const key = `${item.latitude},${item.longitude}`;
      markerCounts[key] = (markerCounts[key] || 0) + 1;
    });
    // const storedMarkers = storedData.map(item => ({
    //   lat: item.latitude,
    //   lng: item.longitude,
    // }));
    // console.log(storedMarkers)
    // setMarkers(storedMarkers);
    const storedMarkers = Object.keys(markerCounts).map((key) => {
      const [lat, lng] = key.split(",").map(parseFloat);
      return {
        lat,
        lng,
        count: markerCounts[key],
      };
    });

    setMarkers(storedMarkers);
  }, []);

  return (
    <MapContainer
      style={{
        marginLeft: "10px",
        marginRight: "30px",
        width: "100%",
        height: "40rem",
      }}
      center={[30.3753, 69.3451]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker
          key={`${marker.lat}-${marker.lng}`}
          position={[marker.lat, marker.lng]}
          icon={customIcon}
        >
          <Popup>{`Cases: ${marker.count}`}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default LeafletMap;
