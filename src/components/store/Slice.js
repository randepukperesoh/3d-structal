import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const slice = createSlice({
    name:'nodes',
    initialState:{
        nodes:[{
            id:1,
            x: 1,
            y: 1,
            z: 1
        },{
            id:2,
            x: 1,
            y: 1,
            z: 0
        },{
            id:3,
            x: 1,
            y: 0,
            z: 1
        },{
            id:4,
            x: 1,
            y: 0,
            z: 0
        }],
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
            meshDivisions: 10
        }
    },
    reducers: {
        addNode(state, action){
            state.nodes.push({
                id:state.nodes.at(-1).id+1,
                x: action.payload.x / 10,
                y: action.payload.y / 10,
                z: action.payload.z / 10
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
                start: Number(action.payload.start),
                end: Number(action.payload.end)
            })
        },
        changeConfig( state, action){
            state.config.meshDivisions = action.payload.meshDivisions
            state.config.yzGrid = action.payload.yzGrid
            state.config.yxGrid = action.payload.yxGrid
        }
    }
})

export const {addNode, removeNode, changeNode, addKernel, changeConfig} = slice.actions;

export default slice.reducer;