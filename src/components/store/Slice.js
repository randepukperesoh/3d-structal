import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'nodes',
    initialState:{
        nodes:[ {
            id:0,
            x: -6,
            y: 0,
            z: -3,
            isSelected: false,
            moment: [],
                concentratedForces: [ ],
            supports:{
                type: 'SupportAnchorage'
            }
        },{
            id:1,
            x: -6,
            y: 0,
            z: 3,
            isSelected: false,
            moment: [],
            concentratedForces: [
            ],
                supports:{
                    type: 'SupportAnchorage'
                }
        },{
            id:2,
            x: 6,
            y: 0,
            z: 3,
            isSelected: false,
            moment: [],
            concentratedForces: [
            ],
                supports:{
                    type: 'SupportAnchorage'
                }
        },{
            id:3,
            x: 6,
            y: 0,
            z: -3,
            isSelected: false,
            moment: [],
            concentratedForces: [
            ],
                supports:{
                    type: 'SupportAnchorage'
                }
        }, {
            id:4,
            x: -6,
            y: 4,
            z: -3,
            isSelected: false,
            moment: [],
                concentratedForces: [{
                    value: true,
                    id: 0 ,
                    loadX: 0,
                    loadY: 10,
                    loadZ: 0,
                    }
        ],
            supports:{
                type: 'none'
            }
        },{
            id:5,
            x: -6,
            y: 4,
            z: 3,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: true,
                id: 0 ,
                loadX: 0,
                loadY: 10,
                loadZ: 0,
                }
            ],
                supports:{
                    type: 'none'
                }
        },{
            id:6,
            x: 6,
            y: 4,
            z: 3,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: true,
                id: 0 ,
                loadX: 0,
                loadY: 10,
                loadZ: 0,
                }
            ],
                supports:{
                    type: 'none'
                }
        },{
            id:7,
            x: 6,
            y: 4,
            z: -3,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: true,
                id: 0 ,
                loadX: 0,
                loadY: 10,
                loadZ: 0,
                }
            ],
                supports:{
                    type: 'none'
                }
        },{
            id:8,
            x: -2,
            y: 4,
            z: -3,
            isSelected: false,
            moment: [],
            concentratedForces: [
            ],
                supports:{
                    type: 'none'
                }
        },{
            id:9,
            x: 2,
            y: 4,
            z: -3,
            isSelected: false,
            moment: [],
            concentratedForces: [
            ],
                supports:{
                    type: 'none'
                }
        },{
            id:10,
            x: -2,
            y: 4,
            z: 3,
            isSelected: false,
            moment: [],
            concentratedForces: [
            ],
                supports:{
                    type: 'none'
                }
        },{
            id:11,
            x: 2,
            y: 4,
            z: 3,
            isSelected: false,
            moment: [],
            concentratedForces: [
            ],
                supports:{
                    type: 'none'
                }
        },{
            id:12,
            x: 0,
            y: 4.6,
            z: 3,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: true,
                id: 0 ,
                loadX: 0,
                loadY: 10,
                loadZ: 0,
                }
            ],
                supports:{
                    type: 'none'
                }
        },{
            id:13,
            x: 0,
            y: 4.6,
            z: -3,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: true,
                id: 0 ,
                loadX: 0,
                loadY: 10,
                loadZ: 0,
                }
            ],
                supports:{
                    type: 'none'
                }
        },{
            id:14,
            x: 4,
            y: 4.2,
            z: -3,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: true,
                id: 0 ,
                loadX: 0,
                loadY: 10,
                loadZ: 0,
                }
            ],
                supports:{
                    type: 'none'
                }
        },{
            id:15,
            x: -4,
            y: 4.2,
            z: -3,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: true,
                id: 0 ,
                loadX: 0,
                loadY: 10,
                loadZ: 0,
                }
            ],
                supports:{
                    type: 'none'
                }
        },{
            id:16,
            x: 4,
            y: 4.2,
            z: 3,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: true,
                id: 0 ,
                loadX: 0,
                loadY: 10,
                loadZ: 0,
                }
            ],
                supports:{
                    type: 'none'
                }
        },{
            id:17,
            x: -4,
            y: 4.2,
            z: 3,
            isSelected: false,
            moment: [],
            concentratedForces: [{
                value: true,
                id: 0 ,
                loadX: 0,
                loadY: 10,
                loadZ: 0,
                }
            ],
                supports:{
                    type: 'none'
                }
        }

    ],
        kernels:[ {
            id:0,
            start:0,
            end:4,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        },{
            id:2,
            start:1,
            end:5,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        },{
            id:3,
            start:2,
            end:6,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        },{
            id:4,
            start:3,
            end:7,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:5,
            start:4,
            end:5,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:6,
            start:5,
            end:6,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:7,
            start:6,
            end:7,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:8,
            start:4,
            end:7,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:9,
            start:13,
            end:12,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:10,
            start:9,
            end:13,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:11,
            start:8,
            end:13,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:12,
            start:11,
            end:12,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:13,
            start:10,
            end:12,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:14,
            start:12,
            end:6,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:15,
            start:12,
            end:5,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:16,
            start:13,
            end:4,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:17,
            start:7,
            end:13,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:18,
            start:14,
            end:16,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:19,
            start:15,
            end:17,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:20,
            start:9,
            end:11,
            materialId: 32,
            isSelected: false,
            concentratedForces: [],
            distributedForces: [],
            moment: [],
            physicMaterial: 1,
        }, {
            id:21,
            start:8,
            end:10,
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
            mouseType: 'kernel'
            
        },
        selectedObjects: {
            node: [],
            kernels: [1]
        },
        forCreateKernel:{
            start: false,
            end: false
        },
        
    },
    reducers: {
        addNode(state, action) {
            let isBusy = true;
            state.nodes.map( n => {
                if (n.x == action.payload.x & n.z == action.payload.z) {
                    isBusy = false
                }
                if (isBusy) {
                    state.nodes.push({
                        id: state.nodes.at(-1) ? state.nodes.at(-1).id + 1 : 0,
                        x: action.payload.x,
                        y: 0,
                        z: action.payload.z,
                        isSelected: false,
                        moment: [],
                        concentratedForces: [],
                        supports:{
                            type: 'none'
                        }
                    })
                    isBusy = false
                }
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
            state.nodes[action.payload.id].y = action.payload.y
        },
        addKernel(state, action) {
            if( !state.forCreateKernel.start ) {
                state.forCreateKernel.start = action.payload.id
            } else {
                state.forCreateKernel.end = action.payload.id
                if( state.forCreateKernel.start !== state.forCreateKernel.end){
                    state.kernels.push({
                    id: state.kernels.at(-1).id + 1,
                    start: Number(state.forCreateKernel.start),
                    end: Number(state.forCreateKernel.end),
                    materialId: 32,
                    isSelected: false,
                    concentratedForces: [],
                    distributedForces: [],
                    moment: [],
                    physicMaterial: 1,
                    })
                    state.forCreateKernel.start = false;
                    state.forCreateKernel.end = false
                }
            }
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
        },
        uploadData( state, action ){
            state.kernels = action.payload.kernels;
            state.nodes = action.payload.nodes;
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
    changePhysicMaterial,uploadData
} = slice.actions;

export default slice.reducer;