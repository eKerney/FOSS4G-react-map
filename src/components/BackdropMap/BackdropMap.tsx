import React, { FC, useState } from 'react';
import styles from './BackdropMap.module.css';
import {
  FullScreenControl,
  LayerProps,
  NavigationControl,
  StaticMap,
  InteractiveMap,
} from "react-map-gl";

const BackdropMap = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.75,
    longitude: -122.44,
    zoom: 8,
  });
  
  return (
    <div className={styles.BackdropMap} data-testid="BackdropMap">
    <InteractiveMap
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  </div>
  )
  
  };

export default BackdropMap;
