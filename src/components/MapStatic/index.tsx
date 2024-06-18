import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet"
import { Point } from "../Point";
import { UserMaker } from "../UserMarker";



interface MapContainer {
  coords: number[]
  points: any[]
}

export const MapStatic = ({coords, points}: MapContainer) => {
    const [latitude, longitude] = coords
    return (
        <MapContainer
            style={{height:"100vh", width:"100%"}}
          >
            <UserMaker center={[latitude, longitude]}/>
            {
              points.map((point)=> { 
                const [lat, long] = point.location
                return (
                  <Marker key={point.name} position={[lat, long]} icon={point.icon}>
                    <Popup>
                      <Point 
                        type='marker'
                        name={point.name}
                        category={point.category}
                        imageUrl={point.imageUrl}
                        location={[lat, long]}
                      />
                    </Popup>
                  </Marker>
              )})
            }
          </MapContainer>
    )
}