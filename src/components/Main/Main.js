import React, { useState, useEffect } from 'react';
import Area from '../Canvas/Area';
import Header from '../Header/Header';
import SideBar from '../Bars/Sidebar';
import './Main.css'

function Main() {
    const [hideBar, setHideBar] = useState(false)
    const [paragraph, setParagraph] = useState('node');
    useEffect(() => setHideBar(false), [paragraph])

    return(
        <>
            <div className='main'>
                <Header hideBar={hideBar} setHideBar={setHideBar} setParagraph={setParagraph}/>
                {hideBar ? null: <SideBar paragraph={paragraph}/> }
                <div className={ hideBar ? 'area maxArea' : 'area minArea ' }>
                        <Area/>
                </div>
            </div>
        </>
    )
}
export default Main