import React from 'react';
import {useSelector} from 'react-redux'

export default function GridPlane () {
    
    const config = useSelector(state => state.nodes.config);
    
    const yzGrid = ( <gridHelper rotation={ [ Math.PI / 2, 0, 0 ] } args={ [ config.meshDivisions, config.meshDivisions, 0xff0000, 'teal' ] } />);    
    const yxGrid = ( <gridHelper rotation={ [ 0, 0, Math.PI / 2] } args={[config.meshDivisions, config.meshDivisions, 0xff0000, 'teal']} />);
    const xzGrid = ( <gridHelper args={ [ config.meshDivisions, config.meshDivisions, 0xff0000, 'teal' ] } />);
    
    return(
        <mesh>
            { xzGrid }
            { config.yxGrid === true ? yxGrid : null }
            { config.yzGrid === true ? yzGrid : null }
        </mesh>
    )
}