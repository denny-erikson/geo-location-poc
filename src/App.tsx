import { useGeolocated } from 'react-geolocated';
import './App.css';
import 'leaflet/dist/leaflet.css'
import { MapStatic } from './components/MapStatic';
import { pointEnum } from './commons/pointEnum';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Modal } from './components/Modal';
import MovimentIcon from '../src/assets/icons/moviment-icon.svg'

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
          !currentMemoPosition && (
            <MapStatic 
              coords={[-22.833486575651985, -45.777636125781335]}
              points={points}
            />
          )
        }

      <Modal show={true} onClose={()=>{}}>
        <CardContentModal>

        <h2>HoverBoard</h2>
        <p>Esse ai é o HoverBoard um brinquedo que você só encontra no NR! Tem coragem de dar o 360°?</p>
        <hr/>

        <CardDistance>
          <img src={MovimentIcon} alt='icon'/>
          <span>A 200 metros, aproximadamente 3 minutos</span>
        </CardDistance>

        </CardContentModal>
      </Modal>
      </div>
    );
  }
export default App;

export const CardContentModal = styled.div`

  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content: space-between;

  p {
    text-align: left;
  }

`
export const CardDistance = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-around;
  width: 100%;

  gap: 8px;

  img {
    width: 22px;
    height: 22px;
  }

  span {
    font-size: 12px;
    font-weight: 300;
    color:#C6C6D3;
  }
`