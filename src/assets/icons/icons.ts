import L from 'leaflet';

import marker from '../icons/pin_yellow.svg';
import UserLocationIcon from '../icons/user_location.svg';

export const MarkerIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor: [-0, -0],
    iconSize: [32, 32],
});

export const UserLocation = new L.Icon({
    iconUrl: UserLocationIcon,
    iconRetinaUrl: UserLocationIcon,
    popupAnchor: [-0, -0],
    iconSize: [32, 32],
});