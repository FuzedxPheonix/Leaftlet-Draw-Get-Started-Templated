# Introduction to Using React Leaflet Maps

The goal of this small project is to start using [leaflet JS](https://leafletjs.com/) and be able to draw custom objects in a interactive map using [Leaflet Draw API](https://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html#leaflet-1-0-examples) in a React Type Script Project.

The goal of this project is to give you an idea of how to get start using Leaflet at an accerlate path. This is not a beginner guide for those new to React so if you are still learning both React and TypeScript please continue learning more before using this guide. 

# Tutorial Step by Step
## Step 0: Installing Req & IDE Env
Please use a IDE this will help you developing this project easier. I am using Visual Studio Code. 

Run this script command in your console or terminal to create your React TypeScript Project
- `npx create-react-app leaflet_draw_example --template typescript`

This command will create your starter code to your project and will get you started with your project. **I do understand that there could be a different versions of TypeScript, React, and Node being used and this is something I will not account for.**

After you created your project please install both Leaflet Draw and Leaflet to your project. 

- `npm install leaflet`
- `npm i leaflet-draw`
- `npm i @types/leaflet-draw`
- `npm i @types/leaflet`

Current versions being useed as of 1/24/2021 is 
- leaflet 1.71
- leaflet draw 1.0

## Step 1 

After installing tjhe npm packages. The template project will provide a file called `tsconfig.json`. Please open the file and within the file add the following to the compilerOptions. This would allow you to add typescript values that you do not need to define.
- `noImplicitAny": false`

It should look something like the following:
```
{
  "compilerOptions": {
    "noImplicitAny": false,
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
.....
```
## Step 1.1 Basic Configures
Within the public directory there will be a file called `index.html`. Open the file and add the following tags to the head.

```
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>

    <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>
```
This will get us the Leaflet CSS and the JavaScript Needed. 

Within the src directory. Open the file `App.css` and place the following css Style to it. 

```
#mapid { height: 500px; width: 800px;}
```
This will make the map display within our application. 

Within the file of `App.tsx` you must have imported the headers in order to run the application. The imports are the following:

```
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import L from "leaflet";
import "leaflet-draw/dist/leaflet.draw.css";
var leafletDraw = require('leaflet-draw');

```

## Step 1.2 Getting Started with Code

In the directory file src open a file called `App.tsx` and within the file delete the following code. 
```
  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
```

Then adding the following code. 

```
<div id="mapid"></div>
```
This will display the map in the div. 

## Step 1.3 Load Map
Within the function App() you will add a useEffect which will display and load the a basic mapp as seen as Leaflet [Quick Start](https://leafletjs.com/examples/quick-start/). The following code show be displayed within the function App.
```
useEffect(() => {
     var map = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); });
```
This will now give you the basic start in React TypeScript to view the map using Leaflet.

# Step 2 Adding Draw Features

We are going to start adding the Draw API. To do this we will add the draw control which shows all the draw options. 

```
// FeatureGroup is to store editable layers
    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems
        }
    });
    map.addControl(drawControl);
```
This will create the toolbar and the options you can use to create complex shapes. After adding the draw features you will be able to create shapes.

# Step 3
This is the end of the simple guide that was updated and more detailed in step by step on how use this tool in React and TypeScript. 

Run `npm start` to start the application.