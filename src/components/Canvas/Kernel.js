import React from 'react';
import * as THREE from 'three';
import { selectNode } from '../store/Slice';
import {useDispatch, useSelector} from 'react-redux'

export default function Kernel ({id, start, end, isSelected}){
    //let [id, start, end, isSelected] = Object.values(startEnd)
    const dispatch = useDispatch();
    const points = useSelector(state => state.nodes.nodes)
    
    let nodes =[points[start], points[end]] 
    //= points.filter( point => {
    //    if(point.id === start){
    //        return point
    //    }
    //    if(point.id === end) {
    //        return point
    //    }
    //})
    //console.log(nodes)
    nodes = nodes.map( node => {
        node = Object.values(node)
        return new THREE.Vector3(...node.slice(1))
    })

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(nodes)
    // onClick={(e) => dispatch(selectNode({ id: id, e:e, type: 'kernel' })) }
    return(
        <mesh onClick={() => {console.log(id + 'kaka')}}>
        <line geometry={lineGeometry}>
            <lineBasicMaterial attach="material" color={isSelected ? 'yellow' : 'blue'} linewidth={20} linecap={'round'} linejoin={'round'} />
        </line>
            </mesh>
    
)}