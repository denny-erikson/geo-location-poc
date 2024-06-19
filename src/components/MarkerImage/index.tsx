import styled from "styled-components";
import L, { Icon } from 'leaflet';
import MarkerImageIcon from '../../assets/icons/marker-image.svg';
import { ReactNode } from "react";

interface MarkerImageProps { 
    image: any | string
    children?: ReactNode
 }

const Maker = styled.div<MarkerImageProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;  /* Ajuste conforme necessário */
    height: 50px; /* Ajuste conforme necessário */
    background-image: url(${MarkerImageIcon});
    background-size: cover;
    background-position: center;
`;

export const MarkerImage = ({ image, children }: MarkerImageProps):Icon => {
    return new L.Icon({
        iconUrl: <Maker image={image}/> as any,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      })
};

