import React, {  } from 'react';
import * as THREE from 'three';
import { selectNode } from '../store/Slice';
import {useDispatch, useSelector} from 'react-redux'

export default function Kernel ({id, start, end, isSelected}){
    const dispatch = useDispatch();
    
    let points = useSelector(state => state.nodes.nodes)
    
    let nodes =[points[start], points[end]] 

    nodes = nodes.map( node => {
        node = Object.values(node)
        return new THREE.Vector3(...node.slice(1))
    })

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(nodes)
    

    return(
        <mesh onClick={(e) => {e.stopPropagation(); dispatch(selectNode({ id: id, e:e, type: 'kernel' }))} }>
            <line geometry={lineGeometry}>
            < lineBasicMaterial
                attach="material" 
                color={isSelected ? 'yellow' : 'blue'} 
                linewidth={3}
                linecap={'round'} 
                linejoin={'round'} />
            </line>
        </mesh>  
)}