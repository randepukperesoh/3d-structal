import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  selectNode, addKernel, changeNode, changeConfigCamera, removeNode } from '../store/Slice';
import { useGesture } from '@use-gesture/react';
import { Html } from "@react-three/drei";
import { Icon } from '@iconify/react';
import ConcentratedForces from '../workload/ConcentratedForces';
import Moment from '../workload/Moment';
import Fluid from '../Supports/Fluid';
import Fixed from '../Supports/Fixed';
import Anchorage from '../Supports/Anchorage';
import './Dot.css';

export default function Dot({ pos , id, isSelected }){

    const config = useSelector( state => state.nodes.config )
    const node = useSelector( state => state.nodes.nodes[id])

    const dispatch = useDispatch();

    const [position, setPosition] = useState( pos );
    
    const [contextMenu, setContextMenu] = useState(false);

    const bindDotPos = useGesture({
        onDragStart: () => config.mouseType === 'node' ?  dispatch( changeConfigCamera( { camera: false } ) ) : null,
        onDrag: ( params ) => config.mouseType === 'node' ? dispatch( changeNode( {id: id, y: Math.round( -params.offset[1] / config.divisionSize )})) : null,
        onDragEnd: () => config.mouseType === 'node' ? dispatch( changeConfigCamera( { camera: true } ) ) : null,
        onClick: (e) =>  config.mouseType === 'kernel' ? dispatch(addKernel({id: id})) : select(e),
        onContextMenu:(e) => setContextMenu( !contextMenu )
    })
    
    useEffect( () => { setPosition( pos ) }, [ pos ])

    function select (e){
        e.event.stopPropagation();
        dispatch( selectNode({ id: id, type: 'node', e: e} ) )
    }

    const contextHtml  = () => {
        return (
        <Html>
            <div className="contextWraper">
                <div className='contextRow' onClick={()=>{ dispatch(removeNode({ id: id }))}} >Удалить <Icon icon="material-symbols:delete-outline-sharp" /></div>
                <div className='contextRow' > 
                    <select className='contextDropBox'>
                        <option value="1">Квадрат</option>
                        <option value="2">square</option>
                        <option value="3">Овал</option>
                    </select>
                </div>
                <div className='contextRow' > 
                    <select className='contextDropBox'>
                        <option value="1">0.5</option>
                        <option value="2">1</option>
                        <option value="3">1.5</option>
                        <option value="4">2</option>
                    </select>
                </div>
            </div>
        </Html>
    )}
            
    const arrConcentratedForces = node.concentratedForces.map( (forces, i) => {
        if(forces.value){
            return <ConcentratedForces key={'nodeConcentradetForces'+i} type={'node'} pos={position} obj={forces}/>
        }
    })
    const arrMoment = node.moment.map( (moment, i) => {
        if(moment.value){
            return <Moment key={'nodeMoment>'+i} type={'node'} position={position} />
        }
    })
    
    //console.log(position, node.supports.type)
    return(
        <mesh { ...bindDotPos() } position={ position }>
            <sphereGeometry attach={"geometry"} args={ [ 0.02, 64, 32 ] } />
            <meshStandardMaterial attach={"material"} color={ isSelected ? 'yellow' : 'blue' } />
            { contextMenu ? contextHtml() : null }
            {arrConcentratedForces}
            {arrMoment}
            {node.supports.type == 'SupportFluid' ? <Fluid position={position}/> : node.supports.type == 'SupportAnchorage' ? <Anchorage position={position}/> : node.supports.type == 'SupportFixed' ? <Fixed position={position}/> : null }
        </mesh>
    )
}