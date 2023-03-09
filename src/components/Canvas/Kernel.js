import React, {  } from 'react';
import { selectNode } from '../store/Slice';
import {useDispatch, useSelector} from 'react-redux'
import { Line } from '@react-three/drei'
import DistributedForces from '../workload/DistributedForces';
import Moment from '../workload/Moment';

export default function Kernel ({ kernel}){
    const dispatch = useDispatch();
    
    const {id,start, end, isSelected, concentratedForces, distributedForces, moment} = kernel;
    
    let points = useSelector(state => state.nodes.nodes)
     
    let nodes = [points[start], points[end]] 

    nodes = nodes.map(node => {  
        return [node.x, node.y, node.z]
    })

    return(
        <mesh onClick={(e) => dispatch(selectNode( { id: id, type: 'kernel', e: e } ) ) }>
            <Line
            lineWidth={3}
            color={isSelected ? 'yellow': 'blue'}
            points={nodes} 
            />
            {moment ? <Moment/> : null }
            {distributedForces.value ? <DistributedForces s={start} e={end} obj={distributedForces} /> : null }
        </mesh>  
)}