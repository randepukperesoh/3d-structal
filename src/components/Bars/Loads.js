import './Loads.css'
import {useSelector, useDispatch} from 'react-redux'
import { changeDistributedForces,  changeEndLoads, changeStartLoads } from '../store/Slice';

export default function Loads ({id}) {
    const dispatch = useDispatch();

    const kernel = useSelector(state => state.nodes.kernels[id]);
    
    return(

        <div className='kernelCard'>
            <h5>Стержень {id}</h5>
            <label htmlFor='distributedLoads'>
                <input  onChange={() => dispatch(changeDistributedForces({id: id}))} defaultChecked={kernel.concentratedForces} type={'checkbox'} id={'distributedLoads'} />
                Распределенные нагрузки
            </label>
            <div className='flex'>
                <label>
                    Нагрузка в начале
                    <input onChange={(e) => dispatch(changeStartLoads({id: id, value: e.target.value}))} className='numberInput' type={"number"}></input>
                </label>
                <label>
                    Нагрузка в конце
                    <input onChange={(e) => dispatch(changeEndLoads({id: id, value: e.target.value}))} className='numberInput' type={"number"}></input>
                </label>
            </div>
            <label>
                <input  type={'checkbox'} name={"indent"}></input>
                Добавить отступ
            </label>
            <div className='flex'>
                <label>
                    Отступ от начала
                    <input className='numberInput' type={"number"}></input>
                </label>
                <label>
                    Отступ от конца
                    <input className='numberInput' type={"number"}></input>
                </label>
            </div>
        </div>
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
        