import './Modal.css'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

export default function Modal({setModal}) {
    const [sortament, setSortament] = useState(false) ;
    const [ result, setResult] = useState(false);

    const nodes = useSelector(state => state.nodes.nodes)
    const kernels = useSelector(state => state.nodes.kernels)

    useEffect(() => {
        
        kernels.map( k => {
            fetch(`http://localhost:3001/getMaterial?id=${k.materialId}`)
            .then((response) => response.json() )
            .then((data) => setSortament(data) )
        })
            
    }, [] )
    
    async function createJSON() {
        const data = {
            cNodes: nodes.map(node => {
                return {
                    index: node.id,
                    x: node.x,
                    y: node.y,
                    z: node.z
                }
            }),
            cRods: kernels.map( kernel => {
                return{
                    groupId: 0, // что это
                    index: kernel.id,
                    startNodeId: kernel.start,
                    endNodeId: kernel.end,
                    crossSectionId: 0, //что это
                    roleId: 0,//что это
                    r1: nodes[kernel.start].supports, //что именно указать
                    r2: nodes[kernel.end].supports, //что именно указать
                    lengthVal: 21
                }
            }),
            cSupports: nodes.map( node => {
                
                return {
                    className: node.supports,
                    boundTo: node.id,
                    angle: 0 
                }
            }),
            cForces: nodes.map( node => {
                return node.concentratedForces.map( f => {
                    if( !f.value ) return null
                    return{
                        boundTo: node.id,
                        fX: f.loadX,
                        fY: f.loadY,
                        angle: 0 
                }  
                })
            }).flat(),
            cConcentratedForces: kernels.map( kernel => {
                return kernel.concentratedForces.map(f => {
                    if ( !f.value ) return null
                    return {
                        boundTo: kernel.id,
                        fX: f.loadX,
                        fY: f.loadY,
                        d: f.indient,
                        angle: 0 }
                })
            }).flat(),
            cTorques: nodes.map( node => {
                return node.moment.map(n => {
                    return{
                        boundTo: node.id,
                        m: n.load
                    }
                })
            }).flat(),
            cConcentratedTorques: kernels.map( kernel => {
                return kernel.moment.map(f => {
                    if( !f.value ) return null
                    return{
                    boundTo: kernel.id,
                    m: f.load,
                    d: f.indient
                }})
            }).flat(),
            cDistributedForces: kernels.map( kernel => {
                return kernel.distributedForces.map( f => {
                    if( !f.value ) return null
                    return{
                        boundTo: kernel.id,
                        fN1: f.loadsStart,
                        fN2: f.loadEnd,
                        d1: f.indientStart,
                        d2: f.indientEnd,
                        angel: 0
                    }
                })
            }).flat(),
            cSections: kernels.map((k, i) => {
                
                return sortament[i]
            }),
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

            cMaterials: {
                    title: 'Сталь углеродистая',
                    ro: 7850,
                    E: 200e9,
                    nu: 0.5,
                    gamma: 7850*9.80666,
                    rY: 240,
                    rYn: 245,
                    rU: 360,
                    sigmaMax: 240,
                    sigmaNMax: 0,
                    tauMax: 140,
                    overload: 5     
                }
            

            //count:, selfWeight:, measureIds: сделать новый пункт в настройках приложения?
            //labelDiagramValue что это
            //report ничего не понятно
        }
        //console.log( )
        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)    
        };

        fetch('https://api.sapr.guru/Home/FrameElement2Node', reqOptions)
        .then(res=>  res.json()) 
        .then( data => setResult(data))
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