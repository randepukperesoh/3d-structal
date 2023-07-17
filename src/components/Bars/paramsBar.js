import React, { useState, useRef} from 'react'
import { changeConfigGridYX, uploadData, changeConfigGridYZ, changeDivisionSize, changeDivisionCount } from '../store/Slice';
import { useSelector, useDispatch } from 'react-redux'
import { saveAs } from 'file-saver';


export default function ParamsBar() {
    const config = useSelector(state => state.nodes.config)
    const dispatch = useDispatch()
    const data = useSelector(state => state.nodes)
    const [text, setText] = useState(false)

    const ref = useRef(null)

    function saveFile(){
        let str = JSON.stringify(data)
        let file = new Blob([str], {type: "text/plain;charset=utf-8"});
        saveAs(file);
    }

    function uploadFile(e) {
        let input = e.target;

        let reader = new FileReader();
        reader.onload = function(){
            let text = JSON.parse(reader.result);
            dispatch(uploadData({ nodes: text.nodes, kernels: text.kernels}))
        };
        reader.readAsText(input.files[0]);
  };
  
    return(
        <div className='barDiv'>
            <div><label> Размер сетки {config.divisionCount}</label> <input onChange={(e) => dispatch(changeDivisionCount({ value: e.target.value }))} type={"range"} min="2" max="40" step="2" defaultValue={config.divisionSize} /></div> 
            <div><label> Размер ячейки {config.divisionSize}</label> <input onChange={(e) => dispatch(changeDivisionSize({ value: e.target.value }))} type={"range"} min="10" max="100" step="1" defaultValue={config.divisionCount} /></div> 
            <div><label> Y Z Grid</label> <input defaultChecked={config.yzGrid} onChange={(e) => { dispatch(changeConfigGridYZ({ yzGrid :e.target.checked }))}} type={'checkbox'}/></div>
            <div><label> Y X Grid</label> <input defaultChecked={config.yxGrid} onChange={(e) => { dispatch(changeConfigGridYX({ yxGrid :e.target.checked }))}} type={'checkbox'}/></div>
            <div onClick={() => saveFile()}>Сохранить</div>
            <div>
                <label> Загрузить</label>
                <input type='file' onChange={(e)=> uploadFile(e)}/>
            </div>
        </div>
    )
}