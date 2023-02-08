import React, { useState, useEffect } from 'react';
import NodeBar from '../Bars/NodeBar';
import KernelBar from '../Bars/KernelBar'
import ParamsBar from '../Bars/ParamsBar';
import Area from '../Canvas/Area'
import './Main.css'


function Main() {
    let [paragraph, setParagraph] = useState('node');
    //let url = "http://localhost:3001/getData";
    //useEffect(() => {
    //    fetch(url, {mode:'cors'}) 
    //    .then((res) => res.json())
    //    .then((res) => console.log(res))
    //}, [url])

    return(
        <div>
            <div className='Header'>
                <div className='HeaderTab' onClick={()=>setParagraph('node')}>Node</div>
                <div className='HeaderTab' onClick={()=>setParagraph('kernel')}>Kernel</div>
                <div className='HeaderTab' onClick={()=>setParagraph('params')}>Params</div>
            </div>
            <div className='sideBar'>
                {paragraph === 'node'? <NodeBar/> : paragraph ==='kernel'? <KernelBar/> : <ParamsBar/>} 
            </div>
            <div className='area'>
                    <Area/>
            </div>
        </div>
    )
}
export default Main