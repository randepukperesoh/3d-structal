import './Modal.css'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

export default function Modal({setModal}) {
    const [sortament, setSortament] = useState(false) ;
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
            data:{
            cNodes: nodes.map(node => {
                return {
                    index: node.id,
                    x: node.x,
                    y: node.y,
                    //z: node.z
                }
            }),
            cRods: kernels.map( kernel => {
                return{
                    groupId: 0, 
                    index: kernel.id,
                    startNodeId: kernel.start,
                    endNodeId: kernel.end,
                    crossSectionId: 0, 
                    roleId: 0,
                    r1: false,
                    r2: false,
                    lengthVal: 21
                }
            }),
            cSupports: nodes.map( node => {
                if(node.supports.type == 'fluid'){
                    return {
                    className: 'SupportFluid',
                    boundTo: node.id,
                    angle: 0 
                }}
                if(node.supports.type == 'fixed'){
                    return {
                    className: 'SupportFixed',
                    boundTo: node.id,
                    angle: 0 
                }}
                if(node.supports.type == 'anchorage'){
                    return {
                    className: 'SupportAnchorage',
                    boundTo: node.id,
                    angle: 0 
                }}
                if( node.supports.type == 'none') return
            }).filter(elem => elem),
            cForces: nodes.map( node => {
                return node.concentratedForces.map( f => {
                    if( !f.value ) return 
                    return{
                        boundTo: node.id,
                        fX: f.loadX,
                        fY: f.loadY,
                        angle: 0 
                }  
                })
            }).flat().filter(elem => elem),
            cConcentratedForces: kernels.map( kernel => {
                return kernel.concentratedForces.map(f => {
                    if ( !f.value ) return 
                    return {
                        boundTo: kernel.id,
                        fX: f.loadX,
                        fY: f.loadY,
                        d: f.indient,
                        angle: 0 }
                })
            }).flat().filter(elem => elem),
            cTorques: nodes.map( node => {
                return node.moment.map(n => {
                    return{
                        boundTo: node.id,
                        m: n.load
                    }
                })
            }).flat().filter(elem => elem),
            cConcentratedTorques: kernels.map( kernel => {
                return kernel.moment.map(f => {
                    if( !f.value ) return 
                    return{
                    boundTo: kernel.id,
                    m: f.load,
                    d: f.indient
                }})
            }).flat().filter(elem => elem),
            cDistributedForces: kernels.map( kernel => {
                return kernel.distributedForces.map( (f, id) => {
                    if( !f.value ) return 
                    return{
                        index: id,
                        boundTo: kernel.id,
                        fN1: f.loadsStart,
                        fN2: f.loadEnd,
                        d1: f.indientStart,
                        d2: f.indientEnd,
                        angel: 0
                    }
                })
            }).flat().filter(elem => elem),
            cSections: kernels.map((k, i) => {
                return{
                    id: '32',
                    cross_section_standart_id: 32,
                    cross_section_type: 1,
                    marka: "60x60x5",
                    t_s: 0.5,
                    b: 6,
                    w_x: 4.561,
                    inertia_x: 19.79,
                    inertia_0_x: 1.842,
                    w_y: 4.561,
                    inertia_y: 19.79,
                    inertia_0_y: 1.842,
                    s_x: 4.709,
                    s_y: 4.709,
                    h: 6,
                    t_f: 0.5,
                    h_ef: 4.8,
                    b_ef: 4.8,
                    s_b: 4.23,
                    i_t: 0.4792,
                    r: 0.7,
                    p: 4.578,
                    a: 5.832,
                    x_c: 1.66,
                    y_c: 1.66,
                    measure_length: "c_m",
                    
                }
                //console.log(sortament[i])
                //return sortament[i]
            }),
            
            cRoles: [],
            cRodGroups: [],
            cNodeGroups: [],
            //cMaterials: {
            //        title: 'Сталь углеродистая',
            //        ro: 7850,
            //        E: 200e9,
            //        nu: 0.5,
            //        gamma: 76982.281,
            //        rY: 240,
            //        rYn: 245,
            //        rU: 360,
            //        sigmaMax: 240,
            //        sigmaNMax: 0,
            //        tauMax: 140,
            //        overload: 5     
            //},
            cMaterials: kernels.map(kernel => {
                return physicMaterial[kernel.physicMaterial]
            }),
            count: 100,
            selfWeight: false,
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
            },
            images: "16818970054895tkin6pjpu"
        }
    }

        const reqOptions = {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)    
        };

        //const optionsGet = {
        //    method: 'GET',
        //    headers: { 'Content-Type': 'application/json' },
        //    body: JSON.stringify({file: 'Report_202305111125_XDZ0BL.docx'})    
        //};
        console.log(data)

        fetch('https://api.sapr.guru/Home/FrameElement2Node', reqOptions)
        .then(res =>  res.json()) 
        .then( data => setResult(data))

        //fetch('https://api.sapr.guru/Home/Download', optionsGet )
        //.then(res => console.log(res.json))
    }

    console.log(result)

    //createJSON()
    
    return(
        <div onClick={() => setModal(false)} className="modalWrapper">
            <div onClick={(e) => e.stopPropagation()} className='modal'>
                <button onClick={() => createJSON()}>Расчитать</button>
            </div>
        </div>
    )
}
//cSections: kernels.map( (kernel, i) => {
            //    return{
            //        materialId: kernel.materialId,
            //        cross_section_type: 1, //
            //        cross_section_standart: 1,//
            //        id: kernel.id,
            //        title: sortament[i].marka,//
            //        marka: sortament[i].marka,
            //        formType: sortament[i].marka,//
            //        a: sortament[i].a,
            //        b: sortament[i].b,
            //        h: sortament[i].h,
            //        inertia_x: sortament[i].inertia_x,
            //        inertia_0_x: sortament[i].inertia_0_x,
            //        inertia_y: sortament[i].inertia_y,
            //        inertia_0_y: sortament[i].inertia_0_y,
            //        s_x: sortament[i].s_x,
            //        t_s: sortament[i].t_s,
            //        t_f: sortament[i].t_f,
            //        w_x: sortament[i].w_x,
            //        w_y: sortament[i].w_y,
            //        h_ef: sortament[i].h_e,
            //        b_ef: sortament[i].b_e,
            //        i_t: sortament[i].i_t,
            //        r: sortament[i],
            //        y_c: sortament[i],
            //        hMin: sortament[i],
            //        hMax: sortament[i],
            //        bMin: sortament[i],
            //        bMax: sortament[i],
            //        relMin: sortament[i],
            //        relMax: sortament[i],
            //        cB: sortament[i],
            //        cS: sortament[i],
            //        rB: sortament[i],
            //        EB: sortament[i],
            //        aS: sortament[i],
            //        rM: sortament[i]
            //    }
            //}),


            // {
            //     "data": {
            //       "cNodes": [
            //         { 
            //           "index": 1,
            //           "x": 10,
            //           "y": 5
            //         },
            //         { 
            //           "index": 2,
            //           "x": 26,
            //           "y": 5
            //         }
            //       ],
            //       "cRods": [
            //         {
            //           "index": 1,
            //           "crossSectionId": 0,
            //           "roleId": -1,
            //           "startNodeId": 1,
            //           "endNodeId": 2,
            //           "r1": false,
            //           "r2": false,
            //           "lengthVal": 16
            //         }
            //       ],
            //       "cSupports": [
            //         {
            //           "className": "SupportFluid", 
            //           "angle": 0, 
            //           "boundTo": 1
            //         },
            //         {
            //           "className": "SupportFixed", 
            //           "angle": 0, 
            //           "boundTo": 2
            //         }
            //       ],
            //       "cForces": [],
            //       "cConcentratedForces": [],
            //       "cTorques": [],
            //       "cConcentratedTorques": [],
            //       "cDistributedForces": [
            //         {
            //           "index": 0,
            //           "fN1": -45000,
            //           "fN2": -45000,
            //           "d1": 0,
            //           "d2": 0,
            //           "angle": -1,
            //           "boundTo": 1
            //         }
            //       ],
            //       "cSections": [
            //         {
            //           "id": "CrossSection_r3rohgwmn",
            //           "title": "Двутавр 20Б1 (СТО АСЧМ 20-93)",
            //           "marka": "20Б1",
            //           "cross_section_type": 1,
            //           "cross_section_standart": 18,
            //           "t_s": 0.55,
            //           "b": 10,
            //           "w_x": 184.43000000000004,
            //           "inertia_x": 1844.3,
            //           "inertia_0_x": 8.241,
            //           "w_y": 26.78,
            //           "inertia_y": 133.91,
            //           "inertia_0_y": 2.221,
            //           "s_x": 104.73,
            //           "h": 20,
            //           "t_f": 0.8,
            //           "h_ef": 16.2,
            //           "b_ef": 3.6249999999999996,
            //           "i_t": 5.764,
            //           "r": 1.1,
            //           "a": 27.16,
            //           "materialId": 0,
            //           "optimize": false, 
            //           "hMin": 0,
            //           "hMax": 0,
            //           "bMin": 0,
            //           "bMax": 0,
            //           "relMin": 0,
            //           "relMax": 0,
            //           "cB": 3500,
            //           "cS": 70000,
            //           "rB": 0,
            //           "EB": 0,
            //           "aS": 0,
            //           "rM": 0.001
            //         }
            //       ],
            //       "cRoles": [],
            //       "cRodGroups": [],
            //       "cNodeGroups": [],
            //       "cMaterials": [
            //         {
            //           "title": "Сталь углеродистая", 
            //           "ro": 7850,
            //           "gamma": 76982.281,
            //           "E": 200000000000,
            //           "nu": 0.5,
            //           "rY": 240,
            //           "rYn": 245,
            //           "rU": 360,
            //           "sigmaMax": 240,
            //           "sigmaNMax": 240,
            //           "tauMax": 140,
            //           "overload": 5
            //         },
            //         {
            //           "title": "Сталь высокопрочная", 
            //           "ro": 7580,
            //           "gamma": 74334.48280000001,
            //           "E": 210000000000,
            //           "nu": 0.3,
            //           "rY": 0,
            //           "rYn": 0,
            //           "rU": 0,
            //           "sigmaMax": 240,
            //           "sigmaNMax": 240,
            //           "tauMax": 140,
            //           "overload": 5
            //         }
            //       ],
            //       "count": 100,
            //       "selfWeight": false,
            //       "measureIds": {
            //         "length": "m",
            //         "pressure": "k_N",
            //         "stress": "M_Pa",
            //         "weight": "k_g",
            //         "deformation": "m"
            //       },
            //       "labelDiagramValue": true,
            //       "language": "ru",
            //       "report": {
            //         "enabled": true,
            //         "download": true,
            //         "stressCalc": 0,
            //         "optimize": false,
            //         "unify": false,
            //         "isSCC": false,
            //         "stressQ": true,
            //         "stressN": true,
            //         "torsional": true,
            //         "third": true,
            //         "isDXF": false,
            //         "fileName": ""
            //       }
            //     },
            //     "images": "16818970054895tkin6pjpu"
            //   }
              