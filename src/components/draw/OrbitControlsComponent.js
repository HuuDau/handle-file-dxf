// OrbitControlsComponent.js
import React, { useRef, useEffect } from 'react';
import { extend, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const OrbitControlsComponent = (props) => {
    const { camera, gl } = useThree();
    const controlsRef = useRef();

    useFrame(() => {
        controlsRef.current.update();
    });

    return (
        <orbitControls ref={controlsRef} args={[camera, gl.domElement]} {...props} />
    );
};

export default OrbitControlsComponent;
