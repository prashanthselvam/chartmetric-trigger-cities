'use client';

import * as React from 'react';
import Head from 'next/head';
import Map from 'react-map-gl/maplibre';

const TriggerCitiesMap = () => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    if (mapRef.current) {
      console.log(mapRef.current);
      window.global.map = mapRef.current;
    }
  }, [mapRef.current]);

  return (
    <>
      <Head>
        <link href="https://unpkg.com/maplibre-gl@4.5.0/dist/maplibre-gl.css" rel="stylesheet" />
      </Head>
      <Map
        onDrag={() => (window.map = mapRef.current)}
        ref={mapRef}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 2,
        }}
        style={{ width: '100%', height: 720 }}
        mapStyle="https://raw.githubusercontent.com/datacult/chartmetric-trigger-cities/main/map_style.json"
        scrollZoom={false}
      />
    </>
  );
};

export default TriggerCitiesMap;
