// const data = {
//             data:{
//             cNodes: nodes.map(node => {
//                 return {
//                     index: node.id,
//                     x: node.x,
//                     y: node.y,
//                     z: node.z
//                 }
//             }),
//             cRods: kernels.map( kernel => {
//                 return{
//                     groupId: 0, // что это
//                     index: kernel.id,
//                     startNodeId: kernel.start,
//                     endNodeId: kernel.end,
//                     crossSectionId: 0, //что это
//                     roleId: 0,//что это
//                     r1: true,
//                     r2: true,
//                     lengthVal: 21
//                 }
//             }),
//             cSupports: nodes.map( node => {
//                 if(node.supports.type == 'fluid'){
//                     return {
//                     className: 'SupportFluid',
//                     boundTo: node.id,
//                     angle: 0 
//                 }}
//             }),
//             cForces: nodes.map( node => {
//                 return node.concentratedForces.map( f => {
//                     if( !f.value ) return null
//                     return{
//                         boundTo: node.id,
//                         fX: f.loadX,
//                         fY: f.loadY,
//                         angle: 0 
//                 }  
//                 })
//             }).flat(),
//             cConcentratedForces: kernels.map( kernel => {
//                 return kernel.concentratedForces.map(f => {
//                     if ( !f.value ) return null
//                     return {
//                         boundTo: kernel.id,
//                         fX: f.loadX,
//                         fY: f.loadY,
//                         d: f.indient,
//                         angle: 0 }
//                 })
//             }).flat(),
//             cTorques: nodes.map( node => {
//                 return node.moment.map(n => {
//                     return{
//                         boundTo: node.id,
//                         m: n.load
//                     }
//                 })
//             }).flat(),
//             cConcentratedTorques: kernels.map( kernel => {
//                 return kernel.moment.map(f => {
//                     if( !f.value ) return null
//                     return{
//                     boundTo: kernel.id,
//                     m: f.load,
//                     d: f.indient
//                 }})
//             }).flat(),
//             cDistributedForces: kernels.map( kernel => {
//                 return kernel.distributedForces.map( f => {
//                     if( !f.value ) return null
//                     return{
//                         boundTo: kernel.id,
//                         fN1: f.loadsStart,
//                         fN2: f.loadEnd,
//                         d1: f.indientStart,
//                         d2: f.indientEnd,
//                         angel: 0
//                     }
//                 })
//             }).flat(),
//             cSections: kernels.map((k, i) => {
                
//                 return sortament[i]
//             }),
            
//             cRoles: [],
//             cRodGroups: [],
//             cNodeGroups: [],
//             cMaterials: {
//                     title: 'Сталь углеродистая',
//                     ro: 7850,
//                     E: 200e9,
//                     nu: 0.5,
//                     gamma: 7850*9.80666,
//                     rY: 240,
//                     rYn: 245,
//                     rU: 360,
//                     sigmaMax: 240,
//                     sigmaNMax: 0,
//                     tauMax: 140,
//                     overload: 5     
//                 },
//             count: 100,
//             selfWeight: false,
//             measureIds: {
//                 length: "m",
//                 pressure: "k_N",
//                 stress: "M_Pa",
//                 weight: "k_g",
//                 deformation: "m"
//             },
//             labelDiagramValue: true,
//             language: "ru",
//             report: {
//                 enabled: true,
//                 download: true,
//                 stressCalc: 0,
//                 optimize: false,
//                 unify: false,
//                 isSCC: false,
//                 stressQ: true,
//                 stressN: true,
//                 torsional: true,
//                 third: true,
//                 isDXF: false,
//                 fileName: ""
//             }
//         }
//     }


//     {
//         "data": {
//             "cNodes": [
//                 {
//                     "index": 0,
//                     "x": 1,
//                     "y": 2,
//                     "z": 0
//                 },
//                 {
//                     "index": 1,
//                     "x": 3,
//                     "y": 3,
//                     "z": 0
//                 }
//             ],
//             "cRods": [
//                 {
//                     "groupId": 0,
//                     "index": 0,
//                     "startNodeId": 0,
//                     "endNodeId": 1,
//                     "crossSectionId": 0,
//                     "roleId": 0,
//                     "r1": true,
//                     "r2": true,
//                     "lengthVal": 21
//                 }
//             ],
//             "cSupports": [
//                 {
//                     "className": "SupportFluid",
//                     "boundTo": 0,
//                     "angle": 0
//                 },
//                 null
//             ],
//             "cForces": [
//                 {
//                     "boundTo": 1,
//                     "fX": 1,
//                     "fY": 1,
//                     "angle": 0
//                 }
//             ],
//             "cConcentratedForces": [
//                 {
//                     "boundTo": 0,
//                     "fX": 1,
//                     "fY": 0,
//                     "d": 1,
//                     "angle": 0
//                 }
//             ],
//             "cTorques": [
//                 {
//                     "boundTo": 1,
//                     "m": 10
//                 }
//             ],
//             "cConcentratedTorques": [
//                 null
//             ],
//             "cDistributedForces": [
//                 null
//             ],
//             "cSections": [
//                 {
//                     "id": 32,
//                     "cross_section_standart_id": 32,
//                     "marka": "60x60x5",
//                     "t_s": 0.5,
//                     "b": 6,
//                     "w_x": 4.561,
//                     "inertia_x": 19.79,
//                     "inertia_0_x": 1.842,
//                     "w_y": 4.561,
//                     "inertia_y": 19.79,
//                     "inertia_0_y": 1.842,
//                     "s_x": 4.709,
//                     "s_y": 4.709,
//                     "h": 6,
//                     "t_f": 0.5,
//                     "h_ef": 4.8,
//                     "b_ef": 4.8,
//                     "s_b": 4.23,
//                     "i_t": 0.4792,
//                     "r": 0.7,
//                     "p": 4.578,
//                     "a": 5.832,
//                     "x_c": 1.66,
//                     "y_c": 1.66,
//                     "s_x_t": null,
//                     "s_y_t": null,
//                     "z_x": null,
//                     "z_y": null,
//                     "c_w": null,
//                     "measure_length": "c_m",
//                     "x_z_0": null,
//                     "b_0": null
//                 }
//             ],
//             "cRoles": [],
//             "cRodGroups": [],
//             "cNodeGroups": [],
//             "cMaterials": {
//                 "title": "Сталь углеродистая",
//                 "ro": 7850,
//                 "E": 200000000000,
//                 "nu": 0.5,
//                 "gamma": 76982.281,
//                 "rY": 240,
//                 "rYn": 245,
//                 "rU": 360,
//                 "sigmaMax": 240,
//                 "sigmaNMax": 0,
//                 "tauMax": 140,
//                 "overload": 5
//             },
//             "count": 100,
//             "selfWeight": false,
//             "measureIds": {
//                 "length": "m",
//                 "pressure": "k_N",
//                 "stress": "M_Pa",
//                 "weight": "k_g",
//                 "deformation": "m"
//             },
//             "labelDiagramValue": true,
//             "language": "ru",
//             "report": {
//                 "enabled": true,
//                 "download": true,
//                 "stressCalc": 0,
//                 "optimize": false,
//                 "unify": false,
//                 "isSCC": false,
//                 "stressQ": true,
//                 "stressN": true,
//                 "torsional": true,
//                 "third": true,
//                 "isDXF": false,
//                 "fileName": ""
//             }
//         }
//     }


    