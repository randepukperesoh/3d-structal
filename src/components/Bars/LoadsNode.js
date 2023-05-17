import './Loads.css'
import {useSelector, useDispatch} from 'react-redux'
import { changeConcentratedLoadYNode, changeConcentratedLoadXNode,
    changeConcentratedLoadZNode, changeSupports,
    changeMomentLoadNode, addConcentratedForcesNodes,
    deleteConcentratedForces, addMomentNode } from '../store/Slice';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function LoadsNode ({ node }) {

    const dispatch = useDispatch();
    const id = node.id;
    const sup = useSelector(state => state.nodes.nodes[id].supports.type)
    
    const [ loads, setLoads ] = useState(true);
    const [ moment, setMoment ] = useState(false);
    const [ concentrated, setConcentrated ] = useState(true)
    
    const arrMoment = node.moment.map( (forces) => {
        if(forces.value) {
            return (
                <div key={'moment' + forces.id}  className='loadWrapper'>
                    Момент {forces.id} <Icon onClick={()=> dispatch(({id: id, subId: forces.id}))} icon="material-symbols:delete-outline-sharp" />
                <div className='flex'>
                    <label>
                        Величина
                        <input defaultValue={forces.load} onChange={(e) => dispatch(changeMomentLoadNode({id: id, subId: forces.id, value: e.target.value}))} className='numberInput' type={"number"}></input>
                    </label>
                </div>
                </div>
            )
        }
    })
    const arrConcentrated = node.concentratedForces.map( (forces) => {
        
            return(
                <div key={'conc' + forces.id} className='loadWrapper'>
                    Нагрузка {forces.id} <Icon onClick={()=> dispatch(deleteConcentratedForces({id: id, subId: forces.id}))} icon="material-symbols:delete-outline-sharp" />
                    <div className='flex'>
                        <label>
                            По оси X
                            <input onChange={(e) => dispatch(changeConcentratedLoadXNode({id:id, subId: forces.id, load: e.target.value}))} defaultValue={forces.loadX} className='numberInput' type={"number"}></input>
                        </label>
                        <label>
                            По оси Y
                            <input onChange={(e) => dispatch(changeConcentratedLoadYNode({id:id, subId: forces.id, load: e.target.value}))} defaultValue={forces.loadY}  className='numberInput' type={"number"}></input>
                        </label>
                        <label>
                            По оси Z
                            <input onChange={(e) => dispatch(changeConcentratedLoadZNode({id:id, subId: forces.id, load: e.target.value}))} defaultValue={forces.loadZ}  className='numberInput' type={"number"}></input>
                        </label>
                    </div>
                </div>
            )
        
    })
    
    const menu = (
        <>
            <div>
                <label> Опоры </label>
                <div className='black'>
                    <img onClick={() => {dispatch(changeSupports({ id: id, value: 'fluid'}))}} className={ sup == 'fluid' ? 'select' : '' } src='./sup_fluid.svg'/>
                    <img onClick={() => {dispatch(changeSupports({ id: id, value: 'anchorage'}))}} className={ sup == 'anchorage' ? 'select' : '' } src='./sup_anchorage.svg'/>
                    <img onClick={() => {dispatch(changeSupports({ id: id, value: 'fixed'}))}} className={ sup == 'fixed' ? 'select' : '' } src='./sup_fixed.svg'/>
                    <Icon onClick={() => {dispatch(changeSupports({ id: id, value: 'none'}))}} className={ sup == 'none' ? 'select' : '' } icon="basil:cross-outline" color="white" width="50" height="50" />
                </div>
            </div>
            <div className='forcesWrapper'>
                <div onClick={() => setMoment(!moment)}>
                    <div> Моменты <Icon onClick={() => dispatch(addMomentNode({id: id})) } icon="material-symbols:add" width="30" /> </div> 
                </div>
                {moment ? arrMoment : null}
            </div>
            <div className='forcesWrapper'>
                <div > 
                    <div onClick={() => (setConcentrated(!concentrated))}>Сосредаточенные силы  <Icon onClick={() => dispatch(addConcentratedForcesNodes({id: id}) ) } icon="material-symbols:add" width="30" /></div>
                </div>
                {concentrated ? arrConcentrated : null}
            </div>
        </>
    )
    // dispatch(changeSupports({ id: id, value: supports}))
    return(
        <div>
            <div className='nodeParams' onClick={() => setLoads(!loads) }>Узел {node.id}</div>
            {loads ? menu : null}
        </div>
    )
}
