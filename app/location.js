"use client";

import styles from "./page.module.scss";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Spin } from "antd";

export function Location() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded)
        return <Spin className={styles.map_container} size="large" />;
    return (
        <div className={styles.location}>
            <Map />
        </div>
    );
}

function Map() {
    const center = useMemo(() => ({ lat: -27.436539, lng: -55.883616 }), []);

    return (
        <GoogleMap
            zoom={15}
            center={center}
            mapContainerClassName={styles.map_container}
        >
            <Marker position={center}></Marker>
        </GoogleMap>
    );
}
