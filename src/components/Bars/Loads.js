import './Loads.css'
import {useSelector, useDispatch} from 'react-redux'
import { changeDistributedForces, changeDistributedIndientStart, 
    changeDistributedIndientEnd, changeMomentIndient, changeConcentratedLoadX, 
    changeConcentratedLoadY, changeConcentratedLoadZ, changeConcentratedForces,  
    changeEndLoads, changeMomemntValue, changeStartLoads, changeMomentLoad,
    changeConcentratedIndient, addDistributedForces, addConcentratedForces,
    addMoment, deleteConcentratedForces, deleteDistributedForces } from '../store/Slice';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Drop from './Drop';

export default function Loads ({ kernel, sortament}) {
    
    const dispatch = useDispatch();
    const id = kernel.id;

    const [ loads, setLoads ] = useState(true);
    const [ distributed, setDistributed ] = useState(true);
    const [ moment, setMoment ] = useState(false);
    const [ concentrated, setConcentrated ] = useState(true);

    let typeName = new Map();

    function selectSortament (type, marka){
        let value;
        sortament.map(sort => {
           if([type, marka] = sort) {
                console.log(sort)
            } 
        });
    }

    for( let i = 0; i<sortament.length ;i++ ) {
        if( !typeName.has(sortament[i].TypeName)) {
            typeName.set(sortament[i].TypeName)
        }
        if( typeName.has(sortament[i].TypeName )) {
            typeName.set(sortament[i].TypeName, typeName.get(sortament[i].TypeName) ? typeName.get(sortament[i].TypeName).concat([[i, sortament[i].Marka]]) : [[ i, sortament[i].Marka]])
        }
    }
    
    const sort = Array.from(typeName)
    
    

    const arrDistributed = kernel.distributedForces.map( (forces) => {
        if (forces.value) {
            return (
                <div key={'distr'+ forces.id}  className='loadWrapper'>
                    Нагрузка {forces.id} <Icon onClick={()=> dispatch(deleteDistributedForces({id: id, subId: forces.id}))} icon="material-symbols:delete-outline-sharp" />
                <div  className='flex'>
                    <label>
                        Нагрузка в начале
                        <input defaultValue={forces.loadsStart} onChange={(e) => dispatch(changeStartLoads({id: id, subId: forces.id, value: e.target.value}))} className='numberInput' type={"number"}></input>
                    </label>
                    <label>
                        Нагрузка в конце
                        <input defaultValue={forces.loadEnd} onChange={(e) => dispatch(changeEndLoads({id: id, subId: forces.id, value: e.target.value}))} className='numberInput' type={"number"}></input>
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
                    Момент {forces.id} <Icon onClick={()=> dispatch(({id: id, subId: forces.id}))} icon="material-symbols:delete-outline-sharp" />
                <div className='flex'>
                    <label>
                        Величина
                        <input defaultValue={forces.load} onChange={(e) => dispatch(changeMomentLoad({id: id, subId: forces.id, value: e.target.value}))} className='numberInput' type={"number"}></input>
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
                    Нагрузка {forces.id} <Icon onClick={()=> dispatch(deleteConcentratedForces({id: id, subId: forces.id}))} icon="material-symbols:delete-outline-sharp" />
                    <div className='flex'>
                        <label>
                            По оси X
                            <input onChange={(e) => dispatch(changeConcentratedLoadX({id:id, subId: forces.id, load: e.target.value}))} defaultValue={forces.loadX} className='numberInput' type={"number"}></input>
                        </label>
                        <label>
                            По оси Y
                            <input onChange={(e) => dispatch(changeConcentratedLoadY({id:id, subId: forces.id, load: e.target.value}))} defaultValue={forces.loadY}  className='numberInput' type={"number"}></input>
                        </label>
                        <label>
                            По оси Z
                            <input onChange={(e) => dispatch(changeConcentratedLoadZ({id:id, subId: forces.id, load: e.target.value}))} defaultValue={forces.loadZ}  className='numberInput' type={"number"}></input>
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
                    <Drop 
                        id={id}
                        sort={sort}
                        func={selectSortament}
                    />
            </div>
            <div className='forcesWrapper'>
                <div onClick={() => setDistributed(!distributed)}>
                    Распределенные нагрузки
                </div>
                <button onClick={() => dispatch(addDistributedForces({id: id})) }>+</button>
                {distributed ? arrDistributed : null}
            </div>
            <div className='forcesWrapper'>
                <div onClick={() => setMoment(!moment)}>
                    <div>Моменты </div> 
                </div>
                <button onClick={() => dispatch(addMoment({id: id})) }>+</button>
                {moment ? arrMoment : null}
            </div>
            <div className='forcesWrapper'>
                <div >
                    <div onClick={() => (setConcentrated(!concentrated))}>Сосредаточенные силы</div>
                </div>
                <button onClick={(e) => {dispatch(addConcentratedForces({id: id}) ) } }>+</button>
                {concentrated ? arrConcentrated : null}
            </div>
        </>
    )
    return(
        <div>
            <div onClick={() => setLoads(!loads) }>Стержень {id}</div>
            {loads ? menu : null}
        </div>
    )
}
