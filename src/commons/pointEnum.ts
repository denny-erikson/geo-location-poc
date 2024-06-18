import { Icon } from 'leaflet'
import { markerEnum } from "./markerEnum"

type PointType = {
  slug: string
  name: string
  category: string
  imageUrl: string
  location: [number, number]
  icon: Icon
  }

export enum PointEnumType {
  HOVERBOARD= 'hoverBoard'
}

type MarkerTypes = {
  [key in PointEnumType]: PointType
}

export const pointEnum: MarkerTypes = {
 hoverBoard:   {
    slug: 'hoverBoard',
    name: "Hover Board",
    category:"outdoor-recreation",
    imageUrl: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/79519895_3484252381617215_7002000889640648704_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sqQdS0monDoQ7kNvgGfUANw&_nc_ht=scontent-gru2-2.xx&oh=00_AYD_odkC5gznqdQ2H7hBzNAlp-mR8H0ufZqCga8mfg6myg&oe=6697B2A1",
    location: [
      -22.83568225015796, -45.78061578398183
    ],
    icon: markerEnum.other
  }
}





