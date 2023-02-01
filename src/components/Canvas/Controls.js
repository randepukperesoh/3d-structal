import { extend, useThree } from "@react-three/fiber";
import { OrbitControls  } from "three/examples/jsm/controls/OrbitControls";
import { useSelector } from 'react-redux'
import React from "react";

extend({ OrbitControls });

const Controls = () => {
  const cameraState = useSelector(state => state.nodes.config.camera);
  const { camera, gl } = useThree();
  return (
    <orbitControls
      enabled={cameraState}
      enableZoom={true}
      args={[camera, gl.domElement]}
    />
    
  );
};

export default Controls;
