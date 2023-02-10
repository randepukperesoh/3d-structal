import { addKernel, addNode } from '../store/Slice';

export default function createNode(e) {
    if( config.mouseType === 'node' ) {
        let x = Math.round(e.point.x);
        let z = Math.round(e.point.z);
        dispatch(addNode({x: x, y: 0, z: z}))
    }

    if (config.mouseType === 'square'){

        let x1 = Math.round( e.point.x );
        let z1 = Math.round( e.point.z );
        let x2 = x1 + 1;
        let z2 = z1;

        dispatch(addNode({x: x1, y: 0, z: z1}));
        dispatch(addNode({x: x2, y: 0, z: z2}));
        dispatch(addNode({x: x1, y: 1, z: z1}));
        dispatch(addNode({x: x2, y: 1, z: z2}));

        let n = nodes.at(-1).id;

        let squareNode = [n + 1, n + 2, n + 3, n + 4];

        dispatch(addKernel({start: squareNode[0], end: squareNode[1]}));
        dispatch(addKernel({start: squareNode[0], end: squareNode[2]}));
        dispatch(addKernel({start: squareNode[3], end: squareNode[2]}));
        dispatch(addKernel({start: squareNode[3], end: squareNode[1]}));

    }
    
    if (config.mouseType === 'triangle') {
        let x1 = Math.round( e.point.x );
        let z1 = Math.round( e.point.z );
        let x2 = x1 + 1;
        let z2 = z1;
        
        dispatch(addNode({x: x1, y: 0, z: z1}));
        dispatch(addNode({x: x2, y: 0, z: z2}));
        dispatch(addNode({x: (x1 + x2) / 2, y: 1, z: (z1 + z2) / 2}));

        let n = nodes.at(-1).id;
        
        let triangleNode = [n + 1, n + 2, n + 3];

        dispatch(addKernel({start: triangleNode[0], end: triangleNode[1]}));
        dispatch(addKernel({start: triangleNode[1], end: triangleNode[2]}));
        dispatch(addKernel({start: triangleNode[2], end: triangleNode[0]}));
    }
}