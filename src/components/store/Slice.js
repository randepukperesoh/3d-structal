import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'nodes',
    initialState:{
        nodes:[ {
            id:0,
            x: 2,
            y: 1,
            z: 0,
            isSelected: false
        },{
            id:1,
            x: 1,
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
            isSelected: false,
            concentratedForces: true,
            moment: false

        },{
            id:1,
            start:3,
            end:1,
            isSelected: false,
            concentratedForces: false,
            moment: true
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
        }
    }
})

export const {addNode, removeNode, changeNode, addKernel, changeConfigGridYX,
    changeConfigGridYZ, changeConfigMeshSize, changeConfigMouseType, 
    changeConfigCamera, selectionNode, selectNode } = slice.actions;

export default slice.reducer;