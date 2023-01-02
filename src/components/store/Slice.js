import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'nodes',
    initialState:{
        nodes:[{
            id:0,
            x: 1,
            y: 5,
            z: 1
        },{
            id:1,
            x: 4,
            y: 2,
            z: 1
        },{
            id:2,
            x: 4,
            y: 1,
            z: 5
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
        removeNode(state, action){},
        changeNode(state, action){
            state.nodes[action.payload.id]= {
                id:action.payload.id,
                x: action.payload.x,
                y: action.payload.y,
                z: action.payload.z
            }
            console.log(state.nodes[0])
        },
    }
})

export const {addNode, removeNode, changeNode} = slice.actions;

export default slice.reducer;