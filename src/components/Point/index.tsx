import L from "leaflet";
import IconNavigation from '../../assets/icons/icon-navigation.svg'
import { CardProfile, Container } from "./styles";


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
    const locationString = location?.join(', ') || '';
    const cleanedLocationString = locationString.replace(/\d{6}$/, '...');

    if(type === "profile") return (
        <CardProfile>
            <img src={imageUrl} alt={`${name}`}/>
            <div>
                <span>{name}</span>
                <span>Visitante</span>
                <span>NR School </span>
                <div>
                    <div className="dot"/>
                    {/* crie um regex para remover o numero de caracteres de location */}                   

                    <span>{cleanedLocationString}</span>
                </div>
            </div>
        </CardProfile>
    )
    return (
        <Container>            
            <img src={imageUrl} alt={`${name}`}/>
            <div>
                <span>{name}</span>
                <span>{category}</span>
                 <button>
                    <img src={IconNavigation}/> {` `}
                    Ir para {name}
                </button>
            </div>
        </Container>
    )
}

