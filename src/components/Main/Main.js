import React, { useState, useEffect } from 'react';
import NodeBar from '../Bars/NodeBar';
import KernelBar from '../Bars/KernelBar'
import ParamsBar from '../Bars/ParamsBar';
import Area from '../Canvas/Area';
import Header from '../Header/Header';
import SideBar from '../Bars/Sidebar';
import './Main.css'


function Main() {
    const [hideBar, setHideBar] = useState(false)
    const [paragraph, setParagraph] = useState('kernel');
    useEffect(() => setHideBar(false), [paragraph])
    //let url = "http://localhost:3001/getData";
    //useEffect(() => {
    //    fetch(url, {mode:'cors'}) 
    //    .then((res) => res.json())
    //    .then((res) => console.log(res))
    //}, [url])

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