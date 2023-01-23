import React, {useState} from 'react'
import { changeConfigGridYX, changeConfigGridYZ, changeConfigMeshSize } from '../store/Slice';
import { useSelector, useDispatch } from 'react-redux'

export default function ParamsBar() {
    const config = useSelector(state => state.nodes.config)
    const dispatch = useDispatch()

    function cgahngeMeshSize(e) {
        dispatch(changeConfigMeshSize({ meshDivisions: e.target.value }));
    }

    return(
        <div>
            <div><label> Size Mesh {config.meshDivisions}</label> <input onChange={(e) => { cgahngeMeshSize(e) }} type={"range"} min="2" max="40" step="2" defaultValue={config.meshDivisions} /></div> 
            <div><label> Y Z Grid</label> <input defaultChecked={config.yzGrid} onChange={(e) => { dispatch(changeConfigGridYZ({ yzGrid :e.target.checked }))}} type={'checkbox'}/></div>
            <div><label> Y X Grid</label> <input defaultChecked={config.yxGrid} onChange={(e) => { dispatch(changeConfigGridYX({ yxGrid :e.target.checked }))}} type={'checkbox'}/></div>
        </div>
    )
}