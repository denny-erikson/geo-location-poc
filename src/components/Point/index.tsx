import L from "leaflet";
import { ReactNode } from "react"
import styled from "styled-components"
import IconNavigation from '../../assets/icons/icon-navigation.svg'


const itemMarker = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

interface PointProps {
    type: "profile" | "marker"
    name?: string
    category?:string
    imageUrl?: string
    location?: [
      number, number
    ],
    icon? : any
}

export const Point = ({name, category, imageUrl, location, type}: PointProps) =>{
    return (
        <Container>
            <img src={imageUrl} alt={`${name}`}/>
            <div>
                <span>{name}</span>
                <span>{category}</span>
                {type==="marker" && <button>
                    <img src={IconNavigation}/> {` `}
                    Ir para {name}
                </button>}
            </div>
        </Container>
    )
}


const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    gap: 12px;

    img {
        width: 56px;
        height: 56px;
        border-radius: 46px;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        span:first-child {
            font-weight: bold;
            font-size:14px;
            color: #1B1D54;
        }

        span{
            color: #717178
        }

        button {
            all: unset;            
            align-items: center;
            justify-content: space-between;
            cursor: pointer;

            padding: 8px 6px;

            color: #2E3190;
            font-weight: bold;   

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 120px;
            
            img {
                margin-top: -5px;
                transform: rotate(27deg);
                height:16px;
                width: 16px;
                margin-right: 4px;
                
            }
        }
    }

`