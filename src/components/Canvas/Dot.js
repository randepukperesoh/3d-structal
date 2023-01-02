import React from 'react';


export default function Dot({position}){
    return(
    <mesh position={position} >
        <sphereGeometry args={[ 0.03, 64, 32]} />
        <meshStandardMaterial color={"blue"} />
    </mesh>
)}