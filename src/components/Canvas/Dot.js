import React from 'react';
import Number from './Number';

export default function Dot({position , id}){
    return(
    <mesh position={position} >
        <Number char={id}/>
        <sphereGeometry args={[ 0.03, 64, 32]} />
        <meshStandardMaterial color={"blue"} />
    </mesh>
)}