import { useGeolocated } from 'react-geolocated';
import './App.css';
import 'leaflet/dist/leaflet.css'
import { MapStatic } from './components/MapStatic';
import { pointEnum } from './commons/pointEnum';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Modal } from './components/Modal';
import MovimentIcon from '../src/assets/icons/moviment-icon.svg'
import {ImageSlider} from './components/ImageSlider';
import { useModal } from './hooks/useModal';

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
  const {isOpen, toggleModal} = useModal()

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
  
    const images = [
      points[0].imageUrl,
      points[0].imageUrl,
      points[0].imageUrl,
    ];

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

      <Modal show={isOpen} onClose={toggleModal}>
        <CardContentModal>        
          <ImageSlider images={images} isOpen={isOpen} />
       
          <div className='detais'>            
            <h2>HoverBoard</h2>
            <p>Esse ai é o HoverBoard um brinquedo que você só encontra no NR! Tem coragem de dar o 360°?</p>
          </div>
          <hr/>

          <CardDistance>
            <img src={MovimentIcon} alt='icon'/>
            <span>A 200 metros, aproximadamente 3 minutos</span>
          </CardDistance>


          <ContainerPosition>
            <div>
              <MapStatic 
                type='detail'
                coords={points[1].location}
                points={[points[1]]}
              />
            </div>
            <button>Ver rota para HoverBoard</button>
          </ContainerPosition>

        </CardContentModal>
      </Modal>
      </div>
    );
  }
export default App;

export const ContainerPosition = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #B3DAE2;
    margin-bottom:48px;

    width: 100%;
    height: 210px;

    margin-top:24px;
    border-radius: 24px;
    background-color: #E6F7FB;

    > div {
      /* position: absolute;
      top:0;
      left:0; */
      width: 100%;
      height: 160px;
      border-radius: 24px;
    }

    > button {
      all: unset;
      margin-bottom: 16px;
      cursor: pointer;
      font-weight: 500;
      font-size: 14px;
      color: #2E3190;
    }
`

export const CardContentModal = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content: flex-start;
  
    .detais {
      text-align: left;
      h2 {
        font-size: 24px;
        color:#4F4F54;        
      }

      p {
        font-size:14px;
        text-align: left;
        margin-top: -8px;
        color:#9797A1;
      }
    }

`
export const CardDistance = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: flex-start;
  width: 100%;

  gap: 8px;

  img {
    width: 26px;
    height: 26px;
  }

  span {
    font-size: 14px;
    font-weight: 300;
    color:#C6C6D3;
    white-space: nowrap;
  }
`