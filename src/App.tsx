import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import L from "leaflet";
import "leaflet-draw/dist/leaflet.draw.css";

var leafletDraw = require('leaflet-draw');


function App() {
  useEffect(() => {
    var map = L.map('mapid').setView([51.505, -0.09], 13);
   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map); 
  
   
  // FeatureGroup is to store editable layers
  var drawnItems = new L.FeatureGroup();
  map.addLayer(drawnItems);
  var drawControl = new L.Control.Draw({
      edit: {
          featureGroup: drawnItems
      }
  });
  map.addControl(drawControl);
  
  
  });

  return (
    
     <div id="mapid"></div>
    
  );
}

export default App;
