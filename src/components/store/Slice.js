import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'nodes',
    initialState:{
        nodes:[ {
            id:0,
            x: -5,
            y: 1,
            z: 0,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: true,
                id: 0,
                loadX: 0,
                loadY: 1,
                loadZ: 0 
                }],
            supports:{
                type: 'fixed'
            }
        },{
            id:1,
            x: 0,
            y: 3,
            z: 0,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: true,
                id: 0,
                loadX: 0,
                loadY: 1,
                loadZ: 0 
                }],
                supports:{
                    type: 'none'
                }
        },{
            id:2,
            x: -3,
            y: 2,
            z: 0,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: true,
                id: 0,
                loadX: 0,
                loadY: 1,
                loadZ: 0 
                }],
                supports:{
                    type: 'none'
                }
        },{
            id:3,
            x: -2,
            y: 1,
            z: 0,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: false,
                id: 0,
                loadX: 0,
                loadY: 1,
                loadZ: 0 
                }],
                supports:{
                    type: 'none'
                }
        },{
            id:4,
            x: 0,
            y: 1,
            z: 0,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: false,
                id: 0,
                loadX: 0,
                loadY: 1,
                loadZ: 0 
                }],
                supports:{
                    type: 'none'
                }
        },{
            id:5,
            x: 5,
            y: 1,
            z: 0,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: true,
                id: 0,
                loadX: 0,
                loadY: 1,
                loadZ: 0 
                }],
            supports:{
                type: 'fixed'
            }
        },{
            id:6,
            x: 3,
            y: 2,
            z: 0,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: true,
                id: 0,
                loadX: 0,
                loadY: 1,
                loadZ: 0 
                }],
                supports:{
                    type: 'none'
                }
        },{
            id:7,
            x: 2,
            y: 1,
            z: 0,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: false,
                id: 0,
                loadX: 0,
                loadY: 1,
                loadZ: 0 
                }],
                supports:{
                    type: 'none'
                }
        }
    ],
        kernels:[ {
            id:0,
            start:0,
            end:2,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        },{
            id:1,
            start:2,
            end:1,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        },{
           id:2,
           start:2,
           end:3,
           materialId: 32,
           isSelected: false,
           concentratedForces: [],
           distributedForces: [],
           moment: [],
           physicMaterial: 1,
        },{
            id:3,
            start:3,
            end:1,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
         },{
            id:4,
            start:0,
            end:3,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
         },{
            id:5,
            start:3,
            end:4,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
         },{
            id:6,
            start:1,
            end:4,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
         },{
            id:6,
            start:1,
            end:4,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
         },{
            id:7,
            start:4,
            end:7,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
         }
         ,{
            id:8,
            start:7,
            end:5,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
         },{
            id:9,
            start:5,
            end:6,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
         },{
            id:10,
            start:1,
            end:6,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
         },{
            id:11,
            start:1,
            end:7,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
         },{
            id:12,
            start:6,
            end:7,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
         }
    ],
        config:{
            yzGrid: false,
            yxGrid: false,
            camera: true,
            divisionSize: 10,
            divisionCount: 10,
            mouseType: 'camera'
            
        },
        selectedObjects: {
            node: [],
            kernels: [1]
        },
        selectedNode: {
            node: null
        }
    },
    reducers: {
        addNode(state, action) {
            state.nodes.push({
                id: state.nodes.at(-1) ? state.nodes.at(-1).id + 1 : 0,
                x: action.payload.x,
                y: 0,
                z: action.payload.z,
                isSelected: false
            })
        },
        removeNode(state, action) {
            state.nodes = state.nodes.filter(elem => {
                if(elem.id !== action.payload.id) {
                    return elem
                }
            })
        },
        changeNode(state, action) {
            state.nodes[action.payload.id - 1]= {
                id:action.payload.id,
                x: action.payload.x,
                y: action.payload.y,
                z: action.payload.z
            }
        },
        addKernel(state, action) {
            state.kernels.push({
                id: state.kernels.at(-1).id + 1,
                start: Number(action.payload.start),
                end: Number(action.payload.end)
            })
        },
        changeConfigGridYX( state, action) {
            state.config.yxGrid = action.payload.yxGrid;
        },
        changeConfigGridYZ( state, action) {
            state.config.yzGrid = action.payload.yzGrid;
        },
        changeDivisionSize( state, action ) {
            state.config.divisionSize = action.payload.value;
        },
        changeDivisionCount( state, action ) {
            state.config.divisionCount = action.payload.value;
        },
        changeConfigMouseType ( state, action ) {
            state.config.mouseType = action.payload.mouseType;
        },
        changeConfigCamera ( state, action ) {
            state.config.camera = action.payload.camera;
        },
        selectionNode(state, action) {
            state.selectedNode.node = action.payload.id;
        },
        selectNode( state, action ) {
            if (action.payload.e.altKey) {
                if (action.payload.type == 'node'){
                    state.nodes[action.payload.id].isSelected = true
                } else {
                    state.kernels[action.payload.id].isSelected = true
                }
            } else {
                if (action.payload.type == 'kernel') {
                    state.kernels.map( kernel => kernel.isSelected = false )
                    state.nodes.map( node => node.isSelected = false )
                    state.kernels[action.payload.id].isSelected = true
                } else {
                    state.nodes.map( node =>  node.isSelected = false )
                    state.kernels.map( kernel => kernel.isSelected = false)
                    state.nodes[action.payload.id].isSelected = true  
                }
                }             
        },
        changeDistributedForces( state, action) {
            state.kernels[action.payload.id].distributedForces[action.payload.subId].value = !state.kernels[action.payload.id].distributedForces.value;
        },
        changeDistributedIndientStart (state, action) {
            state.kernels[action.payload.id].distributedForces[action.payload.subId].indientStart = action.payload.indient;
        },
        changeDistributedIndientEnd (state, action) {
            state.kernels[action.payload.id].distributedForces[action.payload.subId].indientEnd = action.payload.indient;
        },
        changeStartLoads ( state, action) {
            state.kernels[action.payload.id].distributedForces[action.payload.subId].loadsStart = action.payload.value;
        },
        changeEndLoads ( state, action) {
            state.kernels[action.payload.id].distributedForces[action.payload.subId].loadEnd  = action.payload.value;
        },
        changeMomemntValue (state, action) { 
            state.kernels[action.payload.id].moment[action.payload.subId].value = !state.kernels[action.payload.id].moment.value;
        },
        changeMomentLoad(state, action) {
            state.kernels[action.payload.id].moment[action.payload.subId].load = action.payload.value
        },
        changeMomentLoadNode(state, action) {
            state.nodes[action.payload.id].moment[action.payload.subId].load = action.payload.value
        },
        changeMomentIndient(state, action) {
            state.kernels[action.payload.id].moment[action.payload.subId].indient = Number(action.payload.value)
        },
        changeConcentratedForces (state, action) {
            state.kernels[action.payload.id].concentratedForces[action.payload.subId].value = !state.kernels[action.payload.id].concentratedForces.value
        },
        changeConcentratedLoadX (state, action) {
            state.kernels[action.payload.id].concentratedForces[action.payload.subId].loadX = Number(action.payload.load);
        },
        changeConcentratedLoadY (state, action) {
            state.kernels[action.payload.id].concentratedForces[action.payload.subId].loadY = Number(action.payload.load);
        },
        changeConcentratedLoadZ (state, action) {
            state.kernels[action.payload.id].concentratedForces[action.payload.subId].loadZ = Number(action.payload.load);
        },
        changeConcentratedLoadXNode (state, action) {
            state.nodes[action.payload.id].concentratedForces[action.payload.subId].loadX = Number(action.payload.load);
        },
        changeConcentratedLoadYNode (state, action) {
            state.nodes[action.payload.id].concentratedForces[action.payload.subId].loadY = Number(action.payload.load);
        },
        changeConcentratedLoadZNode (state, action) {
            state.nodes[action.payload.id].concentratedForces[action.payload.subId].loadZ = Number(action.payload.load);
        },
        changeConcentratedIndient (state, action) {
            state.kernels[action.payload.id].concentratedForces[action.payload.subId].indient = action.payload.indient;
            
        },
        addDistributedForces (state, action) {
            state.kernels[action.payload.id].distributedForces.push(
                {
                    value: true,
                    id: state.kernels[action.payload.id].distributedForces.at(-1).id + 1,
                    loadsStart: 0,
                    loadEnd: 0,
                    indient: false,
                    indientStart: 0,
                    indientEnd: 0
                }
            )
            console.log(state.kernels[action.payload.id].distributedForces.at(-1))
        },
        addConcentratedForces(state, action) { 
            state.kernels[action.payload.id].concentratedForces.push(
                {
                    value: true,
                    id: state.kernels[action.payload.id].concentratedForces.at(-1).id + 1,
                    loadX: 0,
                    loadY: 0,
                    loadZ: 0,
                    indient: 0
                }
            )
        },
        addConcentratedForcesNodes(state, action) { 
            state.nodes[action.payload.id].concentratedForces.push(
                {
                    value: true,
                    id: state.nodes[action.payload.id].concentratedForces.at(-1) ? state.nodes[action.payload.id].concentratedForces.at(-1) + 1 : 0 ,
                    loadX: 0,
                    loadY: 0,
                    loadZ: 0,
                    
                }
            )
        },
        addMoment(state, action){
            state.kernels[action.payload.id].moment.push(
                {
                    value: true,
                    id: state.kernels[action.payload.id].moment.at(-1).id ? state.kernels[action.payload.id].moment.at(-1).id + 1 : 0,
                    load: 0,
                    indient:0
                }
            )
        },
        addMomentNode(state, action){
            state.nodes[action.payload.id].moment.push(
                {
                    value: true,
                    id:state.nodes[action.payload.id].moment.at(-1) ? state.nodes[action.payload.id].moment.at(-1).id + 1 : 0,
                    load: 0,
                }
            )
        },
        deleteConcentratedForces(state, action){
            state.kernels[action.payload.id].concentratedForces.splice(action.payload.subId, action.payload.subId)
        },
        deleteDistributedForces(state, action){
            state.kernels[action.payload.id].concentratedForces.splice(action.payload.subId, action.payload.subId)
        },
        changeSupports (state, action) {
            state.nodes[action.payload.id].supports.type = action.payload.value;
        },
        changeMaterial( state, action) {
            state.kernels[action.payload.id].materialId = Number(action.payload.value)
        },
        changePhysicMaterial(state, action) {
            state.kernels[action.payload.id].physicMaterial = Number(action.payload.value)
        }
    }
})

export const {addNode, removeNode, changeNode, addKernel, changeConfigGridYX,
    changeConfigGridYZ, changeConfigMeshSize, changeConfigMouseType, changeConfigCamera, 
    selectionNode, selectNode, changeDistributedForces, changeEndLoads, changeStartLoads, 
    changeMomemntValue, changeConcentratedForces, changeConcentratedLoadX, 
    changeConcentratedLoadY, changeConcentratedLoadZ, changeMomentLoad, 
    changeMomentIndient, changeDistributedIndientStart, changeDistributedIndientEnd, 
    changeConcentratedIndient, addDistributedForces, addConcentratedForces, addMoment, 
    deleteConcentratedForces, deleteDistributedForces, addConcentratedForcesNode, 
    addMomentNode, changeMomentLoadNode, changeConcentratedLoadYNode, 
    changeConcentratedLoadXNode, changeConcentratedLoadZNode, changeDivisionSize, 
    changeDivisionCount, addConcentratedForcesNodes, changeSupports, changeMaterial, 
    changePhysicMaterial
} = slice.actions;

export default slice.reducer;