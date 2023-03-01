import React, {  } from 'react';
import * as THREE from 'three';
import { selectNode } from '../store/Slice';
import { Text } from "@react-three/drei";
import {useDispatch, useSelector} from 'react-redux'
import { Line } from '@react-three/drei'

export default function Kernel ({id, start, end, isSelected}){
    const dispatch = useDispatch();
    
    let points = useSelector(state => state.nodes.nodes)
     
    let nodes =[points[start], points[end]] 

    nodes = nodes.map(node => {  
        return [node.x, node.y, node.z]
    })

    return(
        <mesh onClick={(e) => dispatch(selectNode( { id: id, type: 'kernel', e:e } ) ) }>
            <Line
            lineWidth={3}
            color={isSelected ? 'yellow': 'blue'}
            points={nodes} 
            />
        </mesh>  
)}