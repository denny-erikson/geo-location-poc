import { useGeolocated } from 'react-geolocated';
import './App.css';
import 'leaflet/dist/leaflet.css'
import { MapStatic } from './components/MapStatic';
import { pointEnum } from './commons/pointEnum';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

function App() {
  const {
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled,
    getPosition
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
      timeout: 1000,
    },
    userDecisionTimeout: 1000,
  });

  const points = Object.values(pointEnum);
  const [lastPosition, setLastPosition] = useState<number[]>([-22.883459, -45.7776131]);

/*   useEffect(() => {
    const intervalId = setInterval(() => {
      getPosition();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [getPosition]); */

  const currentMemoPosition = useMemo(() => {
    if (coords) {
      setLastPosition([coords.latitude, coords.longitude]);
      return [coords.latitude, coords.longitude];
    }
    return lastPosition;
  }, [coords]);

  if (!isGeolocationAvailable) {
    return <div>Não foi possível carregar sua localização</div>;
  }
  
/*     if (!isGeolocationEnabled) {
      return <div>Localização desativada</div>;
    } */
  
    return (
      <div className="App">
        <h1>POC Geolocation React-TS</h1>
        <CardPosition>
          <span>LAST: {lastPosition[0]} | {lastPosition[1]}</span>
          <span>CURRENT: {currentMemoPosition[0]} | {currentMemoPosition[1]}</span>
        </CardPosition>
        {
          currentMemoPosition && (
            <MapStatic 
              coords={points[0].location}
              points={points}
            />
          )
        }
      </div>
    );
  }
export default App;

interface CardPositionProps{
  type?: "current" | "last"
}
export const CardPosition = styled.span<CardPositionProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  > span:last-child{
    color: green;
    font-weight: bold;
  }
`