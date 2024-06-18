import { useEffect } from "react";
import { Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { Point } from "../Point";
import { markerEnum } from "../../commons/markerEnum";

interface MapProps {
    center:[number, number]
} 



export const UserMaker:React.FC<MapProps> = ({ center }) => {
    const map = useMap();
    const [lat, long] = center

    useEffect(() => {
        if (center) {
            console.log('[CENTER POSITION]', center)
            map.setView(center, 16);
        }
    }, [center, map]);

    return (
        <>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {center && <Marker position={center} icon={markerEnum.user} >
              <Popup>
              <Point 
                type='profile'
                name={"Denny Erikson"}
                category={`NR | ${lat} | ${long}`}
                imageUrl={"https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/425062474_717766377088334_1006773237687223858_n.jpg?ccb=11-4&oh=01_Q5AaIPSJMDUcPmBzO_y6-cV49K9vk2fRVzgJ2-8lRsaSuLiR&oe=667DB509&_nc_sid=e6ed6c&_nc_cat=109"}
                location={center}
              />
              </Popup>
            </Marker>}
        </>
    );
};