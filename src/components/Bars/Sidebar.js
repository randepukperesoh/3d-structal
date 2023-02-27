import React, { useState } from 'react';
import NodeBar from '../Bars/NodeBar';
import KernelBar from '../Bars/KernelBar'
import ParamsBar from '../Bars/ParamsBar';

export default function SideBar ({paragraph}) {

    return (
    <div className='sideBar '>
            {paragraph === 'node'? <NodeBar/> : paragraph ==='kernel'? <KernelBar/> : <ParamsBar/>} 
    </div>
    )
}