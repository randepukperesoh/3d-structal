import React from 'react';
import './Bars.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {useSelector} from 'react-redux'

export default function NodeBar() {
    
    const columnDefs = ([
        { field: 'ok', maxWidth: 50, checkboxSelection: true},
        { field: 'id', editable: false, maxWidth: 60 },
        { field: 'x', editable: false, maxWidth: 60 },
        { field: 'y', editable: false, maxWidth: 60 },
        { field: 'z', editable: false, maxWidth: 60 }
    ])
    const nodes = useSelector(state => state.nodes.nodes);
    function c(){

    }
    return (
        <div>
            <div className="ag-theme-alpine" style={{ width: '100%', height: '40vh' }}>
                <AgGridReact rowSelection={'multiple'} rowData={nodes} columnDefs={columnDefs}/>
            </div>
            <button onClick={c} className='inpBtn'>add</button>
        </div>
    )
}
