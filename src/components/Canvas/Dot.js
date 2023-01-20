import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectionNode, addKernel } from '../store/Slice';

export default function Dot({pos , id}){
    const selectedNode = useSelector(state => state.nodes.selectedNode)
    const config = useSelector(state => state.nodes.config)
    const [position, setPosition] = useState( pos )
    const dispatch = useDispatch();

    useEffect( () => { setPosition( pos ) }, [ pos ])

    function createKernel () {
        if (config.mouseType === 'kernel') {
            dispatch(selectionNode({id: id}))
            if( (selectedNode !== id) & (selectedNode !== null) ) {
                dispatch(addKernel({start: selectedNode.node, end: id}))
            }
        }
    }

    return(
    <mesh onClick={() => {createKernel()}} position={position}>
        <sphereGeometry args={[ 0.01, 64, 32]} />
        <meshStandardMaterial color={"blue"} />
        
    </mesh>
)}