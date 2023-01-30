import Head from "next/head";
import styles from "../styles/Home.module.css";
import Map from "@/components/Map";
import ControlPanel from "@/components/ControlPanel";
import RasterLayer from "@/components/Map/RasterLayer";
import { GetStaticProps } from "next";
import { Layer, Source } from "react-map-gl";

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Map
          initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 3.5,
          }}
        >
          <Source type="geojson" data={props.zones}>
            <Layer
              type="fill"
              paint={{
                "fill-color": {
                  property: "id",
                  stops: [
                    [0, "#3288bd"],
                    [1, "#66c2a5"],
                    [2, "#abdda4"],
                    [3, "#e6f598"],
                    [4, "#ffffbf"],
                    [5, "#fee08b"],
                    [6, "#fdae61"],
                    [7, "#f46d43"],
                    [8, "#d53e4f"],
                  ],
                },
                "fill-opacity": 0.8,
              }}
            />
          </Source>
          <Source
            type="image"
            url="https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif"
            coordinates={[
              [-80.425, 46.437],
              [-71.516, 46.437],
              [-71.516, 37.936],
              [-80.425, 37.936],
            ]}
          >
            <Layer
              type="raster"
              paint={{
                "raster-fade-duration": 0,
              }}
            />
          </Source>
        </Map>
        <ControlPanel />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const hbuData = await import("@/public/data/hbu-2021.json").then(
    (mod) => mod.default
  );
  const zones = await import("@/public/data/riskzones.json").then(
    (mod) => mod.default
  );
  return {
    props: {
      hbuData,
      zones,
    },
  };
};
