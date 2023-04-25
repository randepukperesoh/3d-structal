import React, {useState} from 'react'
import { changeConfigGridYX, changeConfigGridYZ, changeDivisionSize, changeDivisionCount } from '../store/Slice';
import { useSelector, useDispatch } from 'react-redux'

export default function ParamsBar() {
    const config = useSelector(state => state.nodes.config)
    const dispatch = useDispatch()

    return(
        <div className='barDiv'>
            <div><label> Деления сетки {config.divisionCount}</label> <input onChange={(e) => dispatch(changeDivisionCount({ value: e.target.value }))} type={"range"} min="2" max="40" step="2" defaultValue={config.divisionSize} /></div> 
            <div><label> Размер единичного отрезка {config.divisionSize}</label> <input onChange={(e) => dispatch(changeDivisionSize({ value: e.target.value }))} type={"range"} min="10" max="100" step="1" defaultValue={config.divisionCount} /></div> 
            <div><label> Y Z Grid</label> <input defaultChecked={config.yzGrid} onChange={(e) => { dispatch(changeConfigGridYZ({ yzGrid :e.target.checked }))}} type={'checkbox'}/></div>
            <div><label> Y X Grid</label> <input defaultChecked={config.yxGrid} onChange={(e) => { dispatch(changeConfigGridYX({ yxGrid :e.target.checked }))}} type={'checkbox'}/></div>
        </div>
    )
}