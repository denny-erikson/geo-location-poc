import L, { Icon } from 'leaflet';
import MarkerImageIcon from '../../assets/icons/marker-image.svg';
import { ReactNode } from "react";

/* interface MarkerImageProps { 
    image: string;  // A URL da imagem a ser exibida no centro
    children?: ReactNode;
} */


export const MarkerImage = (image:string): L.Icon<L.IconOptions> => {
    // Criando um container para encapsular o Maker e seus filhos
    const iconContainer = document.createElement('div');
    iconContainer.innerHTML = `
        <div style="
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            background-image: url(${MarkerImageIcon});
            background-size: cover;
            background-position: center;
        ">
            <img src="${image}" style="max-width: 100%; max-height: 100%;"/>
        </div>
    `;

    return new L.Icon({
        iconUrl: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(iconContainer.innerHTML),
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50],
    });
};
