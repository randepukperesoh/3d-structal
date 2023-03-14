import React, {  } from 'react';
import { selectNode } from '../store/Slice';
import {useDispatch, useSelector} from 'react-redux'
import { Line } from '@react-three/drei'
import DistributedForces from '../workload/DistributedForces';
import Moment from '../workload/Moment';
import ConcentratedForces from '../workload/ConcentratedForces';

export default function Kernel ({ kernel}){
    const dispatch = useDispatch();
    
    const {id,start, end, isSelected, concentratedForces, distributedForces, moment} = kernel;
    
    let points = useSelector(state => state.nodes.nodes)
     
    let nodes = [points[start], points[end]] 
    
    nodes = nodes.map(node => {  
        return [node.x, node.y, node.z]
    })

    const concentratedRes = concentratedForces.map( (obj, i) => {
        return <ConcentratedForces key={i+'conForces'} obj={obj} position={nodes}/>
    })

    const momentRes = moment.map( (obj, i) => {
        return <Moment key={i+'moment'} position={nodes} indient={obj.indient}/>
    })
    
    const distributedRes = distributedForces.map( (obj, i) => {
            return <DistributedForces key={i+'disForces'} s={start} e={end} obj={obj} />
    })

    return(
        <mesh onClick={(e) => dispatch(selectNode( { id: id, type: 'kernel', e: e } ) ) }>
            <Line
            lineWidth={3}
            color={isSelected ? 'yellow': 'blue'}
            points={nodes} 
            />
            {concentratedRes}
            {momentRes}
            {distributedRes}
        </mesh>  
)}