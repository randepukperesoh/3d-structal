import './Loads.css'
import {useSelector, useDispatch} from 'react-redux'
import { changeDistributedForces, changeDistributedIndientStart, 
    changeDistributedIndientEnd, changeMomentIndient, changeConcentratedLoadX, 
    changeConcentratedLoadY, changeConcentratedLoadZ, changeConcentratedForces,  
    changeEndLoads, changeMomemntValue, changeStartLoads, changeMomentLoad,
    changeConcentratedIndient, addDistributedForces, addConcentratedForces,
    addMoment, deleteConcentratedForces, deleteDistributedForces } from '../store/Slice';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import DropSection from './DropSection';
import DropMaterial from './DropMaterial';

export default function Loads ({ kernel}) {
    
    const dispatch = useDispatch();
    console.log(kernel)
    const id = kernel.id;

    const [ loads, setLoads ] = useState(true);
    const [ distributed, setDistributed ] = useState(true);
    const [ moment, setMoment ] = useState(false);
    const [ concentrated, setConcentrated ] = useState(true);
    const [ material, setMaterial ] = useState(false);
    const [ section, setSection ] = useState(false);

    const arrDistributed = kernel.distributedForces.map( (forces) => {
        if (forces.value) {
            return (
                <div key={'distr'+ forces.id}  className='loadWrapper'>
                    Нагрузка {forces.id} <Icon onClick={()=> dispatch(deleteDistributedForces({id: id, subId: forces.id}))}  icon="material-symbols:delete-outline-sharp" />
                <div  className='flex'>
                    <label>
                        Нагрузка в начале
                        <input defaultValue={forces.loadsStart} onChange={(e) => dispatch(changeStartLoads({id: id, subId: forces.id, value: e.target.value}))} className='numberInput' type={"number"}></input>Кн/м
                    </label>
                    <label>
                        Нагрузка в конце
                        <input defaultValue={forces.loadEnd} onChange={(e) => dispatch(changeEndLoads({id: id, subId: forces.id, value: e.target.value}))} className='numberInput' type={"number"}></input>Кн/м
                    </label>
                </div>
                <div className='flex'>
                    <label>
                        Отступ от начала
                        <input onChange={(e) => dispatch(changeDistributedIndientStart({id:id, subId: forces.id, indient: e.target.value}))} defaultValue={forces.indientStart} className='numberInput' type={"number"}></input>
                    </label>
                    <label>
                        Отступ от конца
                        <input onChange={(e) => dispatch(changeDistributedIndientEnd({id:id, subId: forces.id, indient: e.target.value}))} defaultValue={forces.indientEnd} className='numberInput' type={"number"}></input>
                    </label>
                </div>
                </div>
            )
        }
    })
    const arrMoment = kernel.moment.map( (forces) => {
        if(forces.value) {
            return (
                <div key={'moment' + forces.id}  className='loadWrapper'>
                    Момент {forces.id} <Icon onClick={()=> dispatch(({id: id, subId: forces.id}))}  icon="material-symbols:delete-outline-sharp" />
                <div className='flex'>
                    <label>
                        Величина
                        <input defaultValue={forces.load} onChange={(e) => dispatch(changeMomentLoad({id: id, subId: forces.id, value: e.target.value}))} className='numberInput' type={"number"}></input>Кн*м
                    </label>
                    <label>
                        Отступ
                        <input defaultValue={forces.indient} onChange={(e) => dispatch(changeMomentIndient({id: id, subId: forces.id, value: e.target.value}))} className='numberInput' type={"number"}></input>
                    </label>
                </div>
                </div>
            )
        }
    })
    const arrConcentrated = kernel.concentratedForces.map( (forces) => {
        
            return(
                <div key={'conc' + forces.id} className='loadWrapper'>
                    Нагрузка {forces.id} <Icon onClick={()=> dispatch(deleteConcentratedForces({id: id, subId: forces.id}))} className='svgIcon' icon="material-symbols:delete-outline-sharp" />
                    <div className='flex'>
                        <label>
                            По оси X
                            <input onChange={(e) => dispatch(changeConcentratedLoadX({id:id, subId: forces.id, load: e.target.value}))} defaultValue={forces.loadX} className='numberInput' type={"number"}></input>Кн
                        </label>
                        <label>
                            По оси Y
                            <input onChange={(e) => dispatch(changeConcentratedLoadY({id:id, subId: forces.id, load: e.target.value}))} defaultValue={forces.loadY}  className='numberInput' type={"number"}></input>Кн
                        </label>
                        <label>
                            По оси Z
                            <input onChange={(e) => dispatch(changeConcentratedLoadZ({id:id, subId: forces.id, load: e.target.value}))} defaultValue={forces.loadZ}  className='numberInput' type={"number"}></input>Кн
                        </label>
                    </div>
                    <div>
                    <label>
                           Отступ: 
                            <input defaultValue={forces.indient} onChange={(e) => dispatch(changeConcentratedIndient({id: id, subId: forces.id, indient: e.target.value}))} className='numberInput' type={"number"}></input>
                        </label> 
                    </div>
                </div>
            )
        
    })

    const menu = (
        <>
            <div className='forcesWrapper'>
                <div className='flex a'>
                    <div onClick={() => setSection(!section)}>
                        Сечения
                    </div>
                </div>
                    { section ? <DropSection id={id}/> : null}
            </div>
            <div className='forcesWrapper'>
                <div className='flex a'>
                    <div onClick={() => setMaterial(!material)}>
                        Материал
                    </div>
                </div>
                    { material ? <DropMaterial id={id} /> : null}
            </div>
            <div className='forcesWrapper'>
                <div className='flex a'>
                    <div onClick={() => setDistributed(!distributed)}>
                        Распределенные нагрузки
                    </div>
                    <Icon onClick={() => dispatch(addDistributedForces({id: id})) } className='svgIcon' icon="material-symbols:add" width="30" />
                </div>
                {distributed ? arrDistributed : null}
            </div>
            <div className='forcesWrapper'>
                <div className='flex a'>
                    <div onClick={() => setMoment(!moment)}>
                        Моменты
                    </div>
                    <Icon onClick={() => dispatch(addMoment({id: kernel.id})) } className='svgIcon' icon="material-symbols:add" width="30" />
                </div>
                {moment ? arrMoment : null}
            </div>
            <div className='forcesWrapper'>
                <div className='flex a'>
                    <div onClick={() => (setConcentrated(!concentrated))}>Сосредаточенные силы</div>
                    <Icon onClick={() => {dispatch(addConcentratedForces({id: id}))}} className='svgIcon' icon="material-symbols:add" width="30" />
                </div>
                {concentrated ? arrConcentrated : null}
            </div>
        </>
    )
    return(
        <div>
            <div className='rodsLabel' onClick={() => setLoads(!loads) }>Стержень {id} <Icon className='svgIcon' icon="material-symbols:arrow-drop-down" width="30" /></div>
            {loads ? menu : null}
        </div>
    )
}
