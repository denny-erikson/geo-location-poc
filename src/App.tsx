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
        {
          currentMemoPosition && (
            <MapStatic 
              coords={[-22.833486575651985, -45.777636125781335]}
              points={points}
            />
          )
        }
      </div>
    );
  }
export default App;