import React, { useState, useEffect } from 'react';
import './Bars.css';
import {useSelector, useDispatch} from 'react-redux'
import {addNode , changeNode, changeConfigMouseType} from '../store/Slice';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import LoadsNode from './LoadsNode'
import { Icon } from '@iconify/react';


export default function NodeBar() {

    const data = useSelector(state => state.nodes.nodes);
    const config = useSelector(state => state.nodes.config.mouseType)
    
    const [nodes, setNodes] = useState(data);

    useEffect(() => { setNodes(data) }, [data])

    const [x, xSet] = useState();
    const [y, ySet] = useState();
    const [z, zSet] = useState();

    const dispatch = useDispatch()
    
    const columnDefs = ([
        { field: 'id', editable: false, maxWidth: 70 },
        { field: 'x', editable: true, valueSetter: setRow, maxWidth: 70 },
        { field: 'y', editable: true, valueSetter: setRow, maxWidth: 70 },
        { field: 'z', editable: true, valueSetter: setRow, maxWidth: 70 }
    ])

    function setRow(e) {
        
        nodes.forEach( (node, i) => {
            if (e.colDef.field === 'x'){
                if(i === e.data.id-1){
                dispatch(changeNode( {id: e.data.id, x: e.newValue, y: e.data.y, z: e.data.z} ))
                }
            }
            if (e.colDef.field === 'y'){
                if(i === e.data.id-1){
                dispatch(changeNode( {id: e.data.id, x: e.data.x, y: e.newValue, z: e.data.z} ))
                }
            }
            if (e.colDef.field === 'z'){
                if(i === e.data.id-1){
                dispatch(changeNode( {id: e.data.id, x: e.data.x, y: e.data.y, z: e.newValue } ))
                }
            }
        })
    }

    const loadsArr = data.map( (node, i) => {
        if(node.isSelected){
            return <LoadsNode
                        node={node}
                        key={i*Math.random()*10 + 'loads'}
                        />  
        }
    })
    
    function push () {
        dispatch(addNode({x, y, z}))
    }

    return (
        <div className='barDiv'>
            <form className='Bar'>
                <input onChange={(e) => xSet(e.target.value)} className='pointInput'></input>
                <input onChange={(e) => ySet(e.target.value)} className='pointInput'></input>
                <input onChange={(e) => zSet(e.target.value)} className='pointInput'></input>
                <button type='button' onClick={() => push()} className='inpBtn'>Add </button>
            </form>
            <div className='mouseType flex'>
                <Icon className={config === 'camera' ? 'selectMT' : '' } onClick={() => {dispatch(changeConfigMouseType( {mouseType : 'camera'} ) ) } } icon="material-symbols:photo-camera-outline" width="40" />
                <Icon className={config === 'node' ? 'selectMT' : '' } onClick={() => {dispatch(changeConfigMouseType( {mouseType : 'node'} ) ) }} icon="carbon:dot-mark" width="40" />
                <Icon className={config === 'kernel' ? 'selectMT' : '' } onClick={() => {dispatch(changeConfigMouseType( {mouseType : 'kernel'} ) ) } } icon="streamline:interface-hierarchy-1-node-organization-links-structure-link-nodes-network-hierarchy" width="35" />
                
            </div>
            <div className='gridWrapper'>
                <div className="ag-theme-alpine" style={{ width: '100%', height: '40vh' }}>
                    <AgGridReact
                    rowData={nodes}
                    columnDefs={columnDefs} />
                </div>
            </div>
            {loadsArr}
        </div>
    )
}
