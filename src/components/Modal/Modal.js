import './Modal.css'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

export default function Modal({setModal}) {
    const [sortament, setSortament] = useState(false) ;
    const [ count, setCount] = useState(100);
    const [ selfWeight, setSelfWeight] = useState(0) ;
    const [ physicMaterial, setPhysicMaterial ] = useState(false);
    const [ result, setResult] = useState(false);

    const nodes = useSelector(state => state.nodes.nodes)
    const kernels = useSelector(state => state.nodes.kernels)

    useEffect(() => {
        kernels.map( k => {
            fetch(`http://localhost:3001/getMaterial?id=${k.materialId}`)
            .then((response) => response.json() )
            .then((data) => setSortament(data) )
        })
        fetch('http://localhost:3001/getMaterialPhysic')
        .then(res => res.json())
        .then(res => setPhysicMaterial(res))
    }, [] )
    
    async function createJSON() {
        const data = {
            cNodes: nodes.map(node => {
                return {
                    index: node.id + 1,
                    x: node.x,
                    y: node.y,
                    z: node.z
                }
            }),
            cRods: kernels.map( kernel => {
                return{
                    index: kernel.id + 1,
                    startNodeId: kernel.start + 1,
                    endNodeId: kernel.end + 1,
                    crossSectionId: 0, 
                    roleId: -1,
                    r1: false,
                    r2: false,
                    lengthVal: Math.pow(nodes[kernel.start].x -nodes[kernel.end].x) + Math.pow(nodes[kernel.start].y -nodes[kernel.end].y) + Math.pow(nodes[kernel.start].z -nodes[kernel.end].z)
                }
            }),
            cSupports: nodes.map( node => {
                    return {
                    className: node.supports.type,
                    direction: 'x',
                    boundTo: node.id + 1, 
                    }
                }).filter(elem => elem),
            cForces: nodes.map( node => {
                return node.concentratedForces.map( f => {
                    if( !f.value ) return 
                    return{
                        boundTo: node.id + 1,
                        fX: f.loadX * 1000,
                        fY: f.loadY * 1000,
                        angle: 0 
                }  
                })
            }).flat().filter(elem => elem),
            cConcentratedForces: kernels.map( kernel => {
                return kernel.concentratedForces.map(f => {
                    if ( !f.value ) return 
                    return {
                        boundTo: kernel.id + 1,
                        fX: f.loadX,
                        fY: f.loadY,
                        d: f.indient,
                        angle: 0 }
                })
            }).flat().filter(elem => elem),
            cTorques: nodes.map( node => {
                return node.moment.map(n => {
                    return{
                        boundTo: node.id + 1,
                        m: n.load
                    }
                })
            }).flat().filter(elem => elem),
            cConcentratedTorques: kernels.map( kernel => {
                return kernel.moment.map(f => {
                    if( !f.value ) return 
                    return{
                    boundTo: kernel.id + 1,
                    m: f.load,
                    d: f.indient
                }})
            }).flat().filter(elem => elem),
            cDistributedForces: kernels.map( kernel => {
                let id = 0;
                return kernel.distributedForces.map( f => {
                    if( !f.value ) return 
                    id++;
                    return{
                        index: 0 ,
                        boundTo: kernel.id  + 1,
                        fN1: -f.loadsStart,
                        fN2: -f.loadEnd,
                        coordSystem: "local",
                        direction: "z",
                        d1: f.indientStart,
                        d2: f.indientEnd,
                        angle: -1
                    }
                })
            }).flat().filter(elem => elem),
            cSections:[
                {
                  id: "CrossSection_r3rohgwmn",
                  title: "Двутавр 20Б1 (СТО АСЧМ 20-93)",
                  marka: "20Б1",
                  cross_section_type: 1,
                  cross_section_standart: 18,
                  t_s: 0.55,
                  b: 10,
                  w_x: 184.43000000000004,
                  inertia_x: 1844.3,
                  inertia_0_x: 8.241,
                  w_y: 26.78,
                  inertia_y: 133.91,
                  inertia_0_y: 2.221,
                  s_x: 104.73,
                  h: 20,
                  t_f: 0.8,
                  h_ef: 16.2,
                  b_ef: 3.6249999999999996,
                  i_t: 5.764,
                  r: 1.1,
                  a: 27.16,
                  materialId: 0,
                  optimize: false, 
                  hMin: 0,
                  hMax: 0,
                  bMin: 0,
                  bMax: 0,
                  relMin: 0,
                  relMax: 0,
                  cB: 3500,
                  cS: 70000,
                  rB: 0,
                  EB: 0,
                  aS: 0,
                  rM: 0.001
                }
              ],
            //cSections: kernels.map((k, i) => {
            //    return{
            //        id: '32',
            //        cross_section_standart_id: 32,
            //        cross_section_type: 1,
            //        marka: "60x60x5",
            //        t_s: 0.5,
            //        b: 6,
            //        w_x: 4.561,
            //        inertia_x: 19.79,
            //        inertia_0_x: 1.842,
            //        w_y: 4.561,
            //        inertia_y: 19.79,
            //        inertia_0_y: 1.842,
            //        s_x: 4.709,
            //        s_y: 4.709,
            //        h: 6,
            //        t_f: 0.5,
            //        h_ef: 4.8,
            //        b_ef: 4.8,
            //        s_b: 4.23,
            //        i_t: 0.4792,
            //        r: 0.7,
            //        p: 4.578,
            //        a: 5.832,
            //        x_c: 1.66,
            //        y_c: 1.66,
            //        measure_length: "c_m",
            //        
            //    }
            //    //console.log(sortament[i])
            //    //return sortament[i]
            //}),
            
            cRoles: [],
            cRodGroups: [],
            cNodeGroups: [],
            cMaterials: kernels.map(kernel => {
                return physicMaterial[kernel.physicMaterial]
            }),
            count: count,
            selfWeight: selfWeight,
            measureIds: {
                length: "m",
                pressure: "k_N",
                stress: "M_Pa",
                weight: "k_g",
                deformation: "m"
            },
            labelDiagramValue: true,
            language: "ru",
            report: {
                enabled: true,
                download: true,
                stressCalc: 0,
                optimize: false,
                unify: false,
                isSCC: false,
                stressQ: true,
                stressN: true,
                torsional: true,
                third: true,
                isDXF: false,
                fileName: ""
            }
        }
    
        const send = JSON.stringify({data: data, images: '16818970054895tkin6pjpu'})

        const reqOptions = {
            method: 'POST',
            //mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: send    
        };

        fetch('https://api.sapr.guru/Home/FrameElement2Node', reqOptions)
        .then( res =>  res.json()) 
        .then( data => setResult(data))

    }

    return(   
        <div onClick={() => setModal(false)} className="modalWrapper">
            <div onClick={(e) => e.stopPropagation()} className='modal'>
                <div className='modalRow'> Число конечных элементов на стержень <input defaultValue={count} onChange={(e) => setCount(e.target.value)} type='number'></input> </div>
                <div className='modalRow'> Учитывать собственный вес 
                    <select className='block' onChange={(e)=> setSelfWeight(e.target.value)}>
                        <option value='0'>Да</option>
                        <option value='1'>Нет</option>
                    </select>
                </div>
                
                {/* <div> labelDiagramValue </div> */}
                {/* <div> Тип отчета </div> 
                <select onChange={(e)=> console.log(e.target.value)}>
                    <option value='0'>Классический</option>
                    <option value='1'>СП 16.13330</option>
                </select>  */}
                <div className='modalRow'>
                    <button onClick={() => createJSON()}>Расчитать</button>
                    {result ? <a href={'https://api.sapr.guru/Home/Download?file=' + result.report.fileName}>Скачать отчет</a> : null}
                </div>
            </div>
        </div>
    )
}
