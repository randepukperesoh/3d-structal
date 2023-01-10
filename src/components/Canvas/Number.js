import React from "react";
import  {Text}  from '@react-three/drei';

export default function Number( {char} ){
    return(
        <Text
            position={[0, 0.15, 0]}
            scale={[0.2, 0.2, 0.2]}
            color="black"
            anchorX="center" 
            anchorY="middle">
        {char}
      </Text>
    )
}