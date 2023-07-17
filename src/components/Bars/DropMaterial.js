import React, { useEffect, useState } from "react";
import { useDispatch} from 'react-redux'
import { changePhysicMaterial } from '../store/Slice';
import Select from 'react-select';
import './Drop.css'


export default function DropMaterial({ id }) {

  const dispatch = useDispatch();

  const cringe = [
    {value: 1, label: 'Сталь углеродистая '},
    {value: 2, label: 'Медь (прокат)'},
    {value: 3, label: 'Алюминий (прокат)'},
    {value: 4, label: 'Цинк (прокат)'},
  ]

  const [ physicparametrs ,setPhysicparametrs ] = useState([0, 1])
  const options = [{value: 1, label: 'fgdfgdfgd' }];

  //useEffect(() => {
  //  async function getphysicParametrs() {
  //    fetch('http://localhost:3001/getMaterialPhysic')
  //    .then(res => res.json())
  //    .then (res => setPhysicparametrs(res))
  //  }
  //   getphysicParametrs()
  //  // let aboba = (physicparametrs.map( data => {
  //  //  return { value: data.id, label: data.title}
  //  //}))
  //}, [])
//
  // useEffect(()=>{
  //   setOptions(cringe.map( data => {
  //       return { value: data.id, label: data.label}
  //     }))
    
  // }, [])

  return (
    <div className="center">
      <Select  options={cringe}/>
    </div>
  );
}
//onChange={(e) => dispatch(changePhysicMaterial({value:e.value, id:id}))}
