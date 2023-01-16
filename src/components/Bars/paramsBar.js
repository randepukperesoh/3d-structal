import React, {useState} from 'react'
import {changeConfig} from '../store/Slice';
import {useSelector, useDispatch} from 'react-redux'

export default function ParamsBar() {
    const config = useSelector(state => state.nodes.config)
    const dispatch = useDispatch()

    const [ meshDivisions, setMeshDivisions ] = useState(config.meshDivisions)
    const [ yzGrid, setYZGrid] = useState(config.yzGrid)
    const [ yxGrid, setYXGrid] = useState(config.yxGrid)

    dispatch(changeConfig({ meshDivisions: meshDivisions, yzGrid: yzGrid, yxGrid: yxGrid}))

    return(
        <div>
            <div><label> Size Mesh {meshDivisions}</label> <input onChange={(e) => {setMeshDivisions(e.target.value) }} type={"range"} min="2" max="40" step="1" defaultValue={config.meshDivisions} /></div> 
            <div><label> Y Z Grid</label> <input defaultChecked={yzGrid} onChange={(e) => { setYZGrid(e.target.checked)}} type={'checkbox'}/></div>
            <div><label> Y X Grid</label> <input defaultChecked={yxGrid} onChange={(e) => { setYXGrid(e.target.checked)}} type={'checkbox'}/></div>
        </div>
    )
}