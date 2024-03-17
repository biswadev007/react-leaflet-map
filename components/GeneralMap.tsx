'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import { Location } from '@/types';

import 'leaflet/dist/leaflet.css';

const iconPerson = new Icon({
  iconUrl:
    'https://cdn.iconscout.com/icon/free/png-512/free-location-3079544-2561454.png?f=webp&w=512',
  iconSize: [30, 30],
});

const GeneralMap: React.FC<{ locations: Location[] }> = ({ locations }) => {
  return (
    <MapContainer center={[12.9892, 77.6218]} zoom={10}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {!!locations.length ? (
        <MarkerClusterGroup>
          {locations.map((location) => (
            <Marker
              key={location?.placeId}
              icon={
                new Icon({
                  iconUrl: location.icon,
                  iconSize: [25, 25],
                })
              }
              position={location.latLong}
            >
              <Popup>{location?.displayName}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      ) : null}
    </MapContainer>
  );
};

export default GeneralMap;
