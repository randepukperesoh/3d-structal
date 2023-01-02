import React from 'react';
import * as THREE from 'three'

export default function Kernel ({points}){
    
    let nodes = points;
    nodes = nodes.map(elem => {
        return new THREE.Vector3(...elem.slice(1)) 
    })

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(nodes)

    return(
        <group position={[0, 0, 0]}>
            <line geometry={lineGeometry}>
                <lineBasicMaterial attach="material" color={'#9c88ff'} linewidth={20} linecap={'round'} linejoin={'round'} />
            </line>
        </group>
    
)}