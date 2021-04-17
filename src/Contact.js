import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { ReactComponent as Phone } from './images/phone.svg'


const center = {
    lat: 8.9898804,
    lng: -79.5078474
};

const Contact = () => {
    const [map, setMap] = React.useState(null)
    
    const onLoad = React.useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback((map) => {
        setMap(null)
    }, [])

    return <div className='contact-wrapper'>
        <h2 className='contact-header'>
            ENCUENTRANOS EN: 
        </h2>
        <div className='contact-right'>
            <LoadScript googleMapsApiKey="AIzaSyDtHk7SQZFR9oeYyZvWgnUFwr17KV5_5gM">
                <GoogleMap
                    mapContainerStyle={{ width: '80%', height: '80%' }}
                    center={center}
                    zoom={17}
                    onload={onLoad}
                    onUnmount={onUnmount}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    </div>
}


export default React.memo(Contact)