
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import DxfParser from 'dxf-parser';

const DxfViewer = ({ dxfContent }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // Khởi tạo scene, camera và renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(0xf0f0f0);
        mountRef.current.appendChild(renderer.domElement);

        // Khởi tạo OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enableRotate = false;

        // Thêm DXF vào scene và tính toán kích thước của bản vẽ
        const parser = new DxfParser();
        let dxfEntities = [];
        try {
            const dxf = parser.parseSync(dxfContent);
            let minX = Infinity;
            let minY = Infinity;
            let maxX = -Infinity;
            let maxY = -Infinity;
            dxf.entities.forEach(entity => {
                if (entity.type === 'LINE') {
                    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
                    const geometry = new THREE.BufferGeometry().setFromPoints([
                        new THREE.Vector3(entity.vertices[0].x, entity.vertices[0].y, 0),
                        new THREE.Vector3(entity.vertices[1].x, entity.vertices[1].y, 0),
                    ]);
                    const line = new THREE.Line(geometry, material);
                    scene.add(line);
                    dxfEntities.push({ object: line, data: entity });
                    entity.vertices.forEach(vertex => {
                        minX = Math.min(minX, vertex.x);
                        minY = Math.min(minY, vertex.y);
                        maxX = Math.max(maxX, vertex.x);
                        maxY = Math.max(maxY, vertex.y);
                    });
                }
            });

            const centerX = (minX + maxX) / 2;
            const centerY = (minY + maxY) / 2;
            const sizeX = maxX - minX;
            const sizeY = maxY - minY;
            const size = Math.max(sizeX, sizeY);
            const distance = size / Math.tan((camera.fov / 2) * Math.PI / 180);

            camera.position.set(centerX, centerY, distance);
            camera.lookAt(centerX, centerY, 0);

            controls.target.set(centerX, centerY, 0);
            controls.update();
        } catch (err) {
            console.error('Error parsing DXF:', err);
        }

        // Xử lý sự kiện khi click chuột
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const handleClick = (event) => {
            mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
            mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(scene.children);
            if (intersects.length > 0) {
                const selectedObject = intersects[0].object;
                const selectedEntity = dxfEntities.find(item => item.object === selectedObject);
                console.log('Clicked object:', selectedEntity);
            }
        };

        renderer.domElement.addEventListener('click', handleClick);

        const renderScene = () => {
            requestAnimationFrame(renderScene);
            controls.update();
            renderer.render(scene, camera);
        };

        renderScene();

        return () => {
            renderer.domElement.removeEventListener('click', handleClick);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, [dxfContent]);

    return <div ref={mountRef} style={{ width: '50%', height: '50%' }} />;
};

export default DxfViewer;
