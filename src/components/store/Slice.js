import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'nodes',
    initialState:{
        nodes:[ {
            id:0,
            x: 1,
            y: 0,
            z: 1,
            isSelected: false
        },{
            id:1,
            x: 3,
            y: 1,
            z: 0,
            isSelected: false
        },{
            id:2,
            x: 1,
            y: 0,
            z: 1,
            isSelected: false
        },{
            id:3,
            x: 1,
            y: 0,
            z: 0,
            isSelected: false
        } ],
        kernels:[ {
            id:0,
            start:0,
            end:1,
            isSelected: true,
            concentratedForces: [{
                    value: true,
                    id: 0,
                    loadX: 1,
                    loadY: 0,
                    loadZ: 0,
                    indient: 0
                },
            ],
            distributedForces: [{
                    value: true,
                    id: 0,
                    loadsStart: 12,
                    loadEnd: 2,
                    indient: false,
                    indientStart: 0.5,
                    indientEnd: 0.5
                },
            ],
            moment: [{
                value: true,
                id: 0,
                load: 0,
                indient:1
            }],

        }
    ],
        config:{
            yzGrid: false,
            yxGrid: false,
            camera: true,
            meshDivisions: 10,
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
        changeConfigMeshSize( state, action ) {
            state.config.meshDivisions = action.payload.meshDivisions;
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
            state.kernels[action.payload.id].moment[action.payload.subId].load = action.payload.load
        },
        changeMomentIndient(state, action) {
            state.kernels[action.payload.id].moment[action.payload.subId].Indient = action.payload.load
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
        addMoment(state, action){
            state.kernels[action.payload.id].moment.push(
                {
                    value: true,
                    id: state.kernels[action.payload.id].moment.at(-1).id + 1,
                    load: 0,
                    indient:1
                }
            )
        },
        deleteConcentratedForces(state, action){
            state.kernels[action.payload.id].concentratedForces.splice(action.payload.subId, action.payload.subId)
        },
        deleteDistributedForces(state, action){
            state.kernels[action.payload.id].concentratedForces.splice(action.payload.subId, action.payload.subId)
        },
       
    }
})

export const {addNode, removeNode, changeNode, addKernel, changeConfigGridYX,
    changeConfigGridYZ, changeConfigMeshSize, changeConfigMouseType, 
    changeConfigCamera, selectionNode, selectNode, changeDistributedForces,
    changeEndLoads, changeStartLoads, changeMomemntValue, changeConcentratedForces,
    changeConcentratedLoadX, changeConcentratedLoadY, changeConcentratedLoadZ, 
    changeMomentLoad, changeMomentIndient, changeDistributedIndientStart,
    changeDistributedIndientEnd, changeConcentratedIndient,
    addDistributedForces, addConcentratedForces, addMoment, deleteConcentratedForces,
    deleteDistributedForces
     } = slice.actions;

export default slice.reducer;