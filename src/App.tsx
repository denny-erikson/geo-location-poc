import { useGeolocated } from 'react-geolocated';
import './App.css';
import 'leaflet/dist/leaflet.css'
import { MapStatic } from './components/MapStatic';
import { pointEnum } from './commons/pointEnum';

function App() {
  const {
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled
  } = useGeolocated({
    positionOptions:{
      enableHighAccuracy:true,

    },
    userDecisionTimeout:1000,
  })

  const points = Object.values(pointEnum) 


  if(!isGeolocationAvailable){
    return <div>Não foi possivel carregar sua localização</div>
  }

  if(!isGeolocationEnabled){
    return <div>Localização ativa</div>
  }


  return (
    <div className="App">
      <h1>poc geolocation react-ts</h1>
      {
        coords && (
          <MapStatic 
            coords={[coords.latitude, coords.longitude]}
            points={points}
            />
        )
      }
    </div>
  );
}

export default App;
