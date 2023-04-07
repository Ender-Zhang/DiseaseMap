/*
 * @Author: Ender-Zhang YUZ302@pitt.edu
 * @Date: 2023-04-03 15:48:17
 * @LastEditors: Ender-Zhang YUZ302@pitt.edu
 * @LastEditTime: 2023-04-03 19:59:09
 * @FilePath: \DiseaseMap\diseasemap\src\components\mapComponent.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from "react";
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

import diseasedata from "../assets/data/diseasedata.json";

import Box from '@mui/material/Box';

// const fs = require('fs');

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
const MapChart = (props: {
  name: any; t: any; onMessage: (arg0: string) => void
}) => {


    const handleMapClick = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
        // alert("geo.id")
      };
      const [hoveredId, setHoveredId] = useState(null);
      const [fillColors, setFillColors] = useState({});
      const [geographyStates, setGeographyStates] = useState({});
  
      // const [timer, setTimer] = useState(0);
    // 回传信息
    var t = props.t;

    const [message, setMessage] = useState("");

    const diseasedata = props.name;



    const handleMessage = () => {
      props.onMessage(hoveredId);
      console.log("message: " + hoveredId);
      console.log(fillColors);
    };

    const [sd, setSd] = useState(1);

    useEffect(() => {
      console.log('Component updated!');
      handleMessage();
      if (diseasedata == "456" && t > sd){
        setFillColors({55: "#724", 20: "#724"});
        // setTimer(1);
        setSd(t);

      }
      else if (diseasedata == "123" && t > sd){
        setFillColors({35: "#724", 45: "#724", 12: "#724"});
        // setTimer(1);
        setSd(t);

      }
      // else if (timer == 1){
      //   setFillColors({});
      //   console.log("asdfasdfad")
      //   // console.log(fillColors);
      // }
    }, [hoveredId, props]);
    
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


                  }}

                  onMouseEnter={() => {
                    setHoveredId(geo.id);
                    console.log("hover: " + geo.id);

                    // setMessage(geo.id);
                    handleMessage();

                    setFillColors({[geo.id]: "#555" });
                    // setFillColors({ ...fillColors, [geo.id]: "#555" });
                    
                    // console.log(fillColors);

                  }}
                  // onMouseLeave={() => {
                  //   // console.log("leave: " + geo.id);
                  //   setHoveredId(null);
                  //   handleMessage();
                  // }}
              />
              </Link>
            ))}
            {geographies.map(geo => {
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
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
    // </Box>
  );
};

export default MapChart;