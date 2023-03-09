import './Loads.css'
import {useSelector, useDispatch} from 'react-redux'
import { changeDistributedForces,  changeEndLoads, changeStartLoads } from '../store/Slice';

export default function Loads ({id}) {
    const dispatch = useDispatch();

    const kernel = useSelector(state => state.nodes.kernels[id]);
    
    return(
        <>
        <div className='kernelCard'>
            <h5>Стержень {id}</h5>
            <label>
                <input  onChange={() => dispatch(changeDistributedForces({id: id}))} defaultChecked={kernel.distributedForces} type={'checkbox'} />
                Распределенные нагрузки
            </label>
            <div className='flex'>
                <label>
                    Нагрузка в начале
                    <input defaultValue={kernel.distributedForces.loadsStart} onChange={(e) => dispatch(changeStartLoads({id: id, value: e.target.value}))} className='numberInput' type={"number"}></input>
                </label>
                <label>
                    Нагрузка в конце
                    <input defaultValue={kernel.distributedForces.loadEnd} onChange={(e) => dispatch(changeEndLoads({id: id, value: e.target.value}))} className='numberInput' type={"number"}></input>
                </label>
            </div>
            <label>
                <input defaultChecked={kernel.distributedForces.indient} type={'checkbox'}></input>
                Добавить отступ
            </label>
            <div className='flex'>
                <label>
                    Отступ от начала
                    <input defaultValue={kernel.distributedForces.indientStart} className='numberInput' type={"number"}></input>
                </label>
                <label>
                    Отступ от конца
                    <input defaultValue={kernel.distributedForces.indientEnd} className='numberInput' type={"number"}></input>
                </label>
            </div>
        </div>
        <div className='kernelCard'>
            <label>
                <input  onChange={() => dispatch(changeDistributedForces({id: id}))} defaultChecked={kernel.moment.value} type={'checkbox'} />
                Моменты (Кн*м)
            </label>
            <div className='flex'>
                <label>
                    Величина
                    <input defaultValue={kernel.moment.load} onChange={(e) => dispatch(changeStartLoads({id: id, value: e.target.value}))} className='numberInput' type={"number"}></input>
                </label>
                <label>
                    Отступ
                    <input defaultValue={kernel.moment.indient} onChange={(e) => dispatch(changeEndLoads({id: id, value: e.target.value}))} className='numberInput' type={"number"}></input>
                </label>
            </div>
        </div>
        <div className='kernelCard'>
            <label>
                <input  onChange={() => dispatch(changeDistributedForces({id: id}))} defaultChecked={kernel.concentratedForces.value} type={'checkbox'} />
                Сосредаточенные силы (Кн)
            </label>
            <div className='flex'>
                <label>
                    По оси X
                    <input defaultValue={kernel.distributedForces.loadsX} onChange={(e) => dispatch(changeStartLoads({id: id, value: e.target.value}))} className='numberInput' type={"number"}></input>
                </label>
                <label>
                    По оси Y
                    <input defaultValue={kernel.distributedForces.loadY} onChange={(e) => dispatch(changeEndLoads({id: id, value: e.target.value}))} className='numberInput' type={"number"}></input>
                </label>
                <label>
                    По оси Z
                    <input defaultValue={kernel.distributedForces.loadZ} onChange={(e) => dispatch(changeEndLoads({id: id, value: e.target.value}))} className='numberInput' type={"number"}></input>
                </label>
            </div>
            <div>
            <label>
                   Отступ: 
                    <input defaultValue={kernel.distributedForces.indient} onChange={(e) => dispatch(changeStartLoads({id: id, value: e.target.value}))} className='numberInput' type={"number"}></input>
                </label> 
            </div>
        </div>
        </>
    )
}
//<form>
            //    <input type={'checkbox'} name={'distributedLoads'} />
            //    <label for={'distributedLoads'}>Распределенные нагрузки</label>
            //</form>
            //<form>
            //    <input type={'checkbox'} name={'distributedLoads'} />
            //    <label for={'distributedLoads'}>Распределенные нагрузки</label>
            //</form>
        