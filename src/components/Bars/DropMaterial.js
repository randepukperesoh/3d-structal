import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { useDispatch} from 'react-redux'
import { changeMaterial, changePhysicMaterial } from '../store/Slice';
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'
import './Drop.css'


export default function DropMaterial({ id }) {

  const dispatch = useDispatch();

  const [ physicparametrs ,setPhysicparametrs ] = useState([0, 1])

  let dataPhysicparametrs = false; 

  //Четвертый дропбокс

  useEffect(() => {
    function getphysicParametrs() {
      fetch('http://localhost:3001/getMaterialPhysic')
      .then(res => res.json())
      .then (res => setPhysicparametrs(res))
    }
    getphysicParametrs()
    console.log(physicparametrs)
  }, [])

  dataPhysicparametrs = physicparametrs.map( data => {
    return { label: data.title, value: data.id}
  })

  // Онченджи

  const onChangePhysicParametrs = (currentNode, selectedNodes) => {
    dispatch(changePhysicMaterial({value: selectedNodes[0].value, id: id}))
  }

  return (
    <div className="center">
      {dataPhysicparametrs ? <DropdownTreeSelect onChange={onChangePhysicParametrs} data={dataPhysicparametrs}/> : null}
    </div>
  );
}
