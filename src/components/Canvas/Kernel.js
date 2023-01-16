import React from 'react';
import * as THREE from 'three'
import {useSelector} from 'react-redux'

export default function Kernel ({startEnd}){
    let [id, start, end] = Object.values(startEnd)

    const points = useSelector(state => state.nodes.nodes)
    
    let nodes = points.filter( point => {
        if(point.id === start){
            return point
        }
        if(point.id === end) {
            return point
        }
    })

    nodes = nodes.map( node => {
        node = Object.values(node)
        return new THREE.Vector3(...node.slice(1))
    })

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(nodes)
    
    return(
        <group position={[0, 0, 0]}>
            <line geometry={lineGeometry}>
                <lineBasicMaterial attach="material" color={'#9c88ff'} linewidth={20} linecap={'round'} linejoin={'round'} />
            </line>
        </group>
    
)}