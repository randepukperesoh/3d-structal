
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import SideBar from '../Bars/Sidebar';

export default function Header({hideBar, setParagraph, setHideBar}) {
    
    return(
        <div className='headerSide'>
            <div className='Header'>
                <div className='HeaderTab' onClick={()=>setParagraph('node')}><Icon icon="carbon:dot-mark" width="40" height="40"/></div>
                <div className='HeaderTab' onClick={()=>setParagraph('kernel')}><Icon icon="material-symbols:line-end" width="40" height="40" /></div>
                <div className='HeaderTab' onClick={()=>setParagraph('params')}><Icon icon="material-symbols:settings" width="40" height="40" /></div>
                <div className='HeaderTab closeTab' onClick={() => setHideBar(!hideBar)} ><Icon icon="material-symbols:left-panel-close" width="40" height="40" /></div>
            </div>
        </div>
    )
}