import React, { useState} from 'react';
import './Bars.css';
import Grid from './Grid/Grid'
import {useSelector, useDispatch} from 'react-redux'
import {addNode} from '../store/Slice';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


export default function NodeBar() {
    const nodes = useSelector(state => state.nodes.nodes);
    
    const [x, xSet] = useState();
    const [y, ySet] = useState();
    const [z, zSet] = useState();

    const dispatch = useDispatch()
    
    const columnDefs = ([
        { field: 'id', editable: false, maxWidth: 70 },
        { field: 'x', editable: true, maxWidth: 70 },
        { field: 'y', editable: true, maxWidth: 70 },
        { field: 'z', editable: true, maxWidth: 70 }
    ])

    return (
        <div>
            <form className='Bar'>
                <input onChange={(e) => xSet(e.target.value)} className='pointInput'></input>
                <input onChange={(e) => ySet(e.target.value)} className='pointInput'></input>
                <input onChange={(e) => zSet(e.target.value)} className='pointInput'></input>
                <button type='button' onClick={() => dispatch(addNode({x, y, z}))} className='inpBtn'>Add </button>
            </form>
            <Grid getData={useSelector(state => state.nodes.nodes)}/>
            <div className="ag-theme-alpine" style={{ width: '100%', height: '80vh' }}>
                <AgGridReact rowData={nodes} columnDefs={columnDefs} />
            </div>
        </div>
    )
}
