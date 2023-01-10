import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'nodes',
    initialState:{
        nodes:[{
            id:1,
            x: 1,
            y: 5,
            z: 1
        },{
            id:2,
            x: 4,
            y: 2,
            z: 1
        },{
            id:3,
            x: 4,
            y: 1,
            z: 5
        }],
        kernels:[{
            id:0,
            start:1,
            end:2
        }]
    },
    reducers: {
        addNode(state, action){
            state.nodes.push({
                id:state.nodes.at(-1).id+1,
                x: action.payload.x,
                y: action.payload.y,
                z: action.payload.z
            })
            
        },
        removeNode(state, action){
            console.log(action.payload.id)
            state.nodes = state.nodes.filter(elem => {
                if(elem.id !== action.payload.id) {
                    return elem
                }
            })
        },
        changeNode(state, action){
            state.nodes[action.payload.id - 1]= {
                id:action.payload.id,
                x: action.payload.x,
                y: action.payload.y,
                z: action.payload.z
            }
        },
        addKernel(state, action){
            state.kernels.push({
                id: state.kernels.at(-1).id + 1,
                start: action.payload.start,
                end: action.payload.end
            })
        }
    }
})

export const {addNode, removeNode, changeNode, addKernel} = slice.actions;

export default slice.reducer;