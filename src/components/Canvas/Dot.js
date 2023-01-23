import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectionNode, addKernel, changeNode } from '../store/Slice';
import { useGesture } from '@use-gesture/react';

export default function Dot({ pos , id}){
    const selectedNode = useSelector(state => state.nodes.selectedNode)
    const config = useSelector(state => state.nodes.config)
    const dispatch = useDispatch();

    const [position, setPosition] = useState( pos )

    const bindDotPos = useGesture({
        
        //onDragStart: () => dispatch(changeConfig({camera: false})),
        onDrag: (params) => config.mouseType === 'node' ? dispatch(changeNode( {id: id, x: position[0], y: Math.round(-params.offset[1] / 10), z: position[2]} )) : null,
        //onDragEnd: () => dispatch(changeConfig({camera: true}))
        onClick: config.mouseType === 'kernel' ? createKernel : null
    })
    
    useEffect( () => { setPosition( pos ) }, [ pos ])

    function createKernel () {
        if (config.mouseType === 'kernel') {
            dispatch(selectionNode({id: id}))
            if( (selectedNode !== id) & (selectedNode !== null) ) {
                dispatch(addKernel({start: selectedNode.node, end: id}))
            }
        }
        if( config.mouseType === 'camera') bindDotPos()
    }

    return(
    <mesh {...bindDotPos()} position={position}>
        <sphereGeometry args={[ 0.09, 64, 32]} />
        <meshStandardMaterial color={"blue"} />
        
    </mesh>
)}