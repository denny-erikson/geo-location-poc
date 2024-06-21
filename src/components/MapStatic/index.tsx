import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet"
import { Point } from "../Point";
import { UserMaker } from "../UserMarker";



interface MapContainer {
  coords: number[]
  points: any[]
  type?: "detail"
}

export const MapStatic = ({type, coords, points}: MapContainer) => {
    const [latitude, longitude] = coords
    const styleDetail = {
      width: "100%",
      height: "160px",
      borderRadius: "24px",
    }
    const isDetail = type==="detail"
    const isStyleDetail =  isDetail ? styleDetail : {height:"100vh", width:"100%"}
    return (
        <MapContainer
            zoomControl={!isDetail}
            touchZoom={!isDetail}
            dragging={!isDetail}            
            style={isStyleDetail}
          >
            {
              points.map((point)=> { 
                const [lat, long] = point.location
                return (
                  <Marker key={point.name} position={[lat, long]} icon={point.icon}>
                  {point.slug !== "camping" && <Popup>
                      <Point 
                        type='marker'
                        name={point.name}
                        category={point.category}
                        imageUrl={point.imageUrl}
                        location={[lat, long]}
                      />
                    </Popup>}
                  </Marker>
              )})
            }
            <UserMaker type={type} center={[latitude, longitude]}/>
          </MapContainer>
    )
}