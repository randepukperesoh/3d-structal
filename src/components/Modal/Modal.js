import './Modal.css'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

export default function Modal({setModal}) {
    const [sortament, setSortament] = useState(false) ;

    const nodes = useSelector(state => state.nodes.nodes)
    const kernels = useSelector(state => state.nodes.kernels)

    //console.log(kernels[0].materialId)

    useEffect(() => {
        fetch(`http://localhost:3001/getMaterial?id=${kernels[0].materialId}`)
            .then((response) => response.json())
            .then((data) => setSortament(data))
            
    }, [] )
    
    console.log(sortament)

    function createJSON() {
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
            //cSections: что это 
            //cRoles: 
            //cRodGroups: 
            cMaterials: kernels.map(kernel => {
                return{
                    title: sortament.TypeName,
                    ro: sortament.R,
                    E: 0,
                    nu: 0,
                    gamma: 0,
                    rY: 0,
                    rYn: 0,
                    rU: 0,
                    sigmaMax: 0,
                    sigmaNMax: 0,
                    tauMax: 0,
                    overload: 0     
                }
            })
            //count:, selfWeight:, measureIds: сделать новый пункт в настройках приложения?
            //labelDiagramValue что это
            //report ничего не понятно
        }
        console.log(data)
    }
    createJSON()
    return(
        <div onClick={() => setModal(false)} className="modalWrapper">
            <div onClick={(e) => e.stopPropagation()} className='modal'>
                <button onClick={() => createJSON()}>Расчитать</button>
            </div>
        </div>
    )
}