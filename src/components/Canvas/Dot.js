import React, { useEffect, useState } from 'react';
import { Html } from "@react-three/drei";

export default function Dot({pos , id}){
    
    const [position, setPosition] = useState( pos )

    useEffect( () => { setPosition( pos ) }, [ pos ])

    return(
    <mesh position={position}>
        <sphereGeometry args={[ 0.01, 64, 32]} />
        <meshStandardMaterial color={"blue"} />
        <Html distanceFactor={10}>
            <div> {id} </div>
      </Html>
    </mesh>
)}