import React, { useState } from 'react';
import './Bars.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {useSelector, useDispatch} from 'react-redux'
import { addKernel } from '../store/Slice';

export default function NodeBar() {
    const kernels = useSelector(state => state.nodes.kernels);  

    let [ start, startSet] = useState(0);
    let [ end, endSet] = useState(0);
    
    const dispatch = useDispatch();

    const columnDefs = ([
        { field: 'start', maxWidth: 100, editable: false},
        { field: 'end', maxWidth: 100, editable: false }
    ])

    return (
        <div className='barDiv'>
            <form className='Bar'>
                <input defaultValue={0} onChange={(e) => startSet(e.target.value)} className='pointInput'></input>
                <input defaultValue={0} onChange={(e) => endSet(e.target.value)} className='pointInput'></input>
                <button type='button' onClick={() => dispatch(addKernel({start, end}))} className='inpBtn'>Add </button>
            </form>
            <div className="ag-theme-alpine" style={{ width: '100%', height: '40vh' }}>
                <AgGridReact rowSelection={'multiple'} rowData={kernels} columnDefs={columnDefs}/>
            </div>    
        </div>
    )
}
