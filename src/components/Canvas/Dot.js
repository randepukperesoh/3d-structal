import React, { useState } from 'react';
import { Html } from "@react-three/drei";

export default function Dot({pos , id}){
    
    const [position, setPosition] = useState(pos)

    return(
    <mesh onClick={(e) => {console.log(e)}} position={position}>
        <sphereGeometry args={[ 0.01, 64, 32]} />
        <meshStandardMaterial color={"blue"} />
        <Html distanceFactor={10}>
            <div> {id} </div>
      </Html>
    </mesh>
)}