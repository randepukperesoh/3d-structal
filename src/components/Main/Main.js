import React, { useState } from 'react';
import NodeBar from '../Bars/NodeBar';
import KernelBar from '../Bars/KernelBar'
import ParamsBar from '../Bars/paramsBar';
import Area from '../Canvas/Area'
import './Main.css'


function Main() {
    let [paragraph, setParagraph] = useState('params');

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