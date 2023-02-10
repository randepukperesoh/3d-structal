import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'nodes',
    initialState:{
        nodes:[
        //    {
        //    id:1,
        //    x: 1,
        //    y: 1,
        //    z: 1
        //},{
        //    id:2,
        //    x: 1,
        //    y: 1,
        //    z: 0
        //},{
        //    id:3,
        //    x: 1,
        //    y: 0,
        //    z: 1
        //},{
        //    id:4,
        //    x: 1,
        //    y: 0,
        //    z: 0}
        ],
        kernels:[{
            id:0,
            start:1,
            end:2
        },{
            id:1,
            start:4,
            end:3
        },{
            id:2,
            start:2,
            end:4
        },{
            id:3,
            start:1,
            end:3
        }],
        config:{
            yzGrid: false,
            yxGrid: false,
            camera: true,
            meshDivisions: 10,
            mouseType: 'camera'
            
        },
        selectedNode: {
            node: null
        }
    },
    reducers: {
        addNode(state, action) {
            console.log(action.payload)
            state.nodes.push(action.payload)
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
            console.log(state)
            state.config.camera = action.payload.camera;
        },
        selectionNode(state, action){
            state.selectedNode.node = action.payload.id;
        },
        selectNode( state, action ){
            state.nodes[action.payload.id].isSelected = !state.nodes[action.payload.id].isSelected;
        }
    }
})

export const {addNode, removeNode, changeNode, addKernel, changeConfigGridYX,
    changeConfigGridYZ, changeConfigMeshSize, changeConfigMouseType, 
    changeConfigCamera, selectionNode, selectNode } = slice.actions;

export default slice.reducer;