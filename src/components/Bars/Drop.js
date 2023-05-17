import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { useDispatch} from 'react-redux'
import { changeMaterial, changePhysicMaterial } from '../store/Slice';
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'
import './Drop.css'


export default function Drop({ id }) {

  const dispatch = useDispatch();
  const [ sectionType, setSectionType ] = useState([0, 1])
  const [ sectionStandart, setSectionStandart ] = useState([0, 1])
  const [ sectionParameters, setSectionParameters ] = useState([0, 1])
  const [ physicparametrs ,setPhysicparametrs ] = useState([0, 1])

  let [ sectionTypeID, setSectionTypeID ] = useState(false);
  let [ sectionStandartId, setSectionStandartId ] = useState(false)

  let dataSectionType = false
  let dataSectionStandart = false
  let dataSectionParametrs = false
  let dataPhysicparametrs = false; 

  // Первый дропбокс

  useEffect(() => {
    function getSectionType() {
      fetch(`http://localhost:3001/getSectionType`)
      .then((response) => response.json())
      .then((data) => setSectionType(data)) 
    }
    getSectionType()

  }, [])
  
  dataSectionType = sectionType.map(data => {
    return{ label: data.title, value: data.id}
  })

  // Второй дропбокс

  useEffect(() => {
    function getSectionStandart(id) {
      if ( !sectionTypeID ) return null
      fetch(`http://localhost:3001/getSectionStandart?id=${id}`)
      .then((response) => response.json())
      .then((data) => setSectionStandart(data)) 
    }
    getSectionStandart(sectionTypeID)

  }, [sectionTypeID]) 

  dataSectionStandart = sectionStandart.map( data => {
        return { label: data.title, value: data.id}
      })

// Третий дропбокс

  useEffect(() => {
    function getSectionParameters(id) {
      fetch(`http://localhost:3001/getSectionParameters?id=${id}`)
      .then((response) => response.json())
      .then((data) => setSectionParameters(data)) 
    }
    getSectionParameters(sectionStandartId)

  },[sectionStandartId])  
  
  dataSectionParametrs = sectionParameters.map( data => {
    return { label: data.marka, value: data.id}
  })

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
  const onChangeSectionType = (currentNode, selectedNodes) => {
    setSectionTypeID(selectedNodes[0].value);
  }

  const onChangeSectionStandart = (currentNode, selectedNodes) => {
    setSectionStandartId(selectedNodes[0].value);
  }

  const onChangeSectionParametrs = (currentNode, selectedNodes) => {
    dispatch(changeMaterial({value: selectedNodes[0].value}))
  }

  const onChangePhysicParametrs = (currentNode, selectedNodes) => {
    dispatch(changePhysicMaterial({value: selectedNodes[0].value, id: id}))
  }

  return (
    <div className="center">
      <DropdownTreeSelect simpleSelect={true} onChange={onChangeSectionType} data={dataSectionType} />
      {dataSectionStandart ? <DropdownTreeSelect onChange={onChangeSectionStandart} data={dataSectionStandart} /> : null}
      {dataSectionParametrs ? <DropdownTreeSelect onChange={onChangeSectionParametrs} data={dataSectionParametrs} /> : null}
      {dataPhysicparametrs ? <DropdownTreeSelect onChange={onChangePhysicParametrs} data={dataPhysicparametrs}/> : null}
    </div>
  );
}
