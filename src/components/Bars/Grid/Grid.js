import React, { useState} from 'react';
import './Grid.css'
import {useDispatch} from 'react-redux'
import { removeNode } from '../../store/Slice';

export default function Grid({getData}) {
    
    const dispatch = useDispatch();
    
    let argHeader = Object.keys(getData[0])
    let argRow = getData.map(elem => {
        return Object.values(elem); 
    })
     console.log(argRow)
    
    const header = argHeader.map( (elem, index) => {
        return <div key={index+31}>{elem}</div>
    }) 

    const rows = argRow.map( (row, index) => {
        return(
        <div key={index+3} className='row'>
            <button type='button' onClick={()=> dispatch(removeNode({id:row[0]}))} className='delBtn'>del</button>
            <input defaultValue={row[0]}></input>
            <input defaultValue={row[1]}></input>
            <input defaultValue={row[2]}></input>
            <input defaultValue={row[3]}></input>
        </div>)
    });
    return(
        <div>
            <div className='gridHeader'>
                {header}
            </div>
            <div className='gridWraper'>
                {rows}
            </div>
        </div>
    )
}