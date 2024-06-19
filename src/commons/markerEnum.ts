import L, { Icon } from 'leaflet';
import CompassIcon from '../assets/icons/compass-nr.svg'

export enum MarkerType {
  USER='user',
  OTHER='other',
  COMPASS='compass',
}

type MarkerTypes = {
  [key in MarkerType]: Icon;
}

export const markerEnum: MarkerTypes = {
  user: new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  }),
  other: new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  }),
  compass: new L.Icon({
    iconUrl: CompassIcon,
    iconSize: [56, 56],
    iconAnchor: [56, 56],
    popupAnchor: [1, -34],
  })
}






