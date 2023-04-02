import React, { useState } from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

import allStates from "../assets/data/allstates.json";

import { Link, redirect } from "react-router-dom";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

// 这里有个bug 在点击每个州的时候 会出现黑框 而且还是在不同图层上
const MapChart = () => {
    const handleMapClick = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
        // alert("geo.id")
      };
      const [hoveredId, setHoveredId] = useState(null);
      const [fillColors, setFillColors] = useState({});
      const [geographyStates, setGeographyStates] = useState({});
  return (
    <ComposableMap projection="geoAlbersUsa" onClick={handleMapClick}>
        {/* {hoveredId && (
          <div >
            {hoveredId}
          </div>
        )} */}
      <Geographies geography={geoUrl} >
        {({ geographies }) => (
          <>
            {geographies.map(geo => (
              <Link to={"/detail/"+geo.id} key={geo.rsmKey}>
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                // fill="#DDD"
                fill={fillColors[geo.id] || "#DDD"}
                // fill={geographyStates[geo.id]?.isHovered ? "#552" : "#DDD"}
                // fill = {geo.id == 1 ? "#000" : "#DDD"}

                // 这里是点击事件 添加每个州的详细信息
                // onClick={handleMapClick}
                onClick={(event) => {
                    console.log(`/detail/${geo.id}`);
                    // console.log(geo.name);
                  }}

                  onMouseEnter={() => {
                    setHoveredId(geo.id);
                    console.log("hover: " + geo.id);
                    

                    setFillColors({[geo.id]: "#555" });
                    // setFillColors({ ...fillColors, [geo.id]: "#555" });
                    
                    console.log(fillColors);

                    // setGeographyStates({
                    //   ...geographyStates,
                    //   [geo.id]: {
                    //     ...geographyStates[geo.id],
                    //     isHovered: true,
                    //     fill: "#552"
                    //   }
                    // });
                  }}
                  onMouseLeave={() => {
                    console.log("leave: " + geo.id);
                    setHoveredId(null);
                    // setFillColors({ ...fillColors, [geo.id]: "#DDD" });
                    // setFillColors({ ...fillColors, [geo.id]: undefined });
                    // const newFillColors:any = Object.assign({}, fillColors);
                    // delete newFillColors[geo.id];  // 删除目标地理区域的 fill 颜色
                    // setFillColors(newFillColors);
                      // setFillColors({});


                      // setGeographyStates({
                      //   ...geographyStates,
                      //   [geo.id]: {
                      //     ...geographyStates[geo.id],
                      //     isHovered: false,
                      //     fill: undefined
                      //   }
                      // });

                  }}
              />
              </Link>
            ))}
            {/* {geographies.map(geo => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find(s => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                        connectorProps={{}}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })} */}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;