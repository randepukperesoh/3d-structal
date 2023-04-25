import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { useDispatch} from 'react-redux'
import { changeMaterial } from '../store/Slice';
import './Drop.css'

export default function Drop({sort, id}) {

  const dispatch = useDispatch();
  
  let [markaSelected, setMarkaSelected] = useState();
  let [typeSelected, setTypeSelected] = useState();
  
  let titleList = sort.map(title => {
    return title[0]
  })

  let markaList = [0,1] 

  sort.forEach( (marka) => {
    if(marka[0] == typeSelected){
      markaList = marka[1]
    }
  })
  markaList = markaList.map(marka => {
    return marka[0] + ': '+ marka[1]
  })

  useEffect(() => {
    if (markaSelected){
      let m = markaSelected
      dispatch(changeMaterial({id:id, value: m.split(':')[0] }))
    }
  },[markaSelected])

  return (
    <div>
        <p>Материал:</p>
        <Dropdown
          className='wrapperDrop'
          options={titleList}
          onChange={(e) => setTypeSelected(e.value)}
          value={titleList[0]}
          placeholder="Select an option"
        />
        <p>Марка:</p>
        <Dropdown
          className='wrapperDrop'
          options={markaList}
          onChange={(e) => setMarkaSelected(e.value)}
          value={markaList[0]}
          placeholder="Select an option"
        />
    </div>
  );
}
