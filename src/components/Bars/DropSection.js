import React, { useEffect, useState } from "react";
import { useDispatch} from 'react-redux'
import Select from 'react-select';
import { changeMaterial } from '../store/Slice';
import './Drop.css'


export default function DropSection({ id }) {

  const dispatch = useDispatch();
  const [ sectionType, setSectionType ] = useState([0, 1])
  const [ sectionStandart, setSectionStandart ] = useState([0, 1])
  const [ sectionParameters, setSectionParameters ] = useState([0, 1])

  let [ sectionTypeID, setSectionTypeID ] = useState(false);
  let [ sectionStandartId, setSectionStandartId ] = useState(false)

  let dataSectionType = false
  let dataSectionStandart = false
  let dataSectionParametrs = false

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

  console.log(dataSectionType)
  return (
    <div className="center">
      <Select onChange={(e) => setSectionTypeID(e.value)} options={dataSectionType}/>
      <Select onChange={(e) => setSectionStandartId(e.value)} options={dataSectionStandart}/>
      <Select onChange={(e) => dispatch(changeMaterial({value: e.value, id: id}))} options={dataSectionParametrs}/>
      </div>
  );
}
