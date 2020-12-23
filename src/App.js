// App.js
import React, { useRef /*, useState, useEffect */ } from "react";
import * as THREE from "three";
import { /*Button, Image, StyleSheet, */ Text, View } from "react-native";
import { Canvas, useFrame /*, useThree*/ } from "react-three-fiber";
import styles from "./styles";
import texture from "./texture_new2_water_px.png";

const three_texture = new THREE.TextureLoader().load(texture);
// テクスチャを並べて表示
// three_texture.wrapS = THREE.RepeatWrapping;
// three_texture.wrapT = THREE.RepeatWrapping;

// //テクスチャの倍率、1,1=全面に貼り付け
three_texture.repeat.set(1, 1);
/*
 * 2.boxのmeshを作成して返す
 */
const Box = (props) => {
  // hooks
  const mesh = useRef();
  // 回転させる
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh {...props} ref={mesh}>
      {/* ジオメトリ(形)とマテリアル(色など)をメッシュの中にいれる */}
      <boxBufferGeometry args={[1, 1, 1]} />
      {/* <meshStandardMaterial color={"orange"} /> */}
      <meshBasicMaterial map={three_texture} />
    </mesh>
  );
};
/*
 * 1. 表示される入り口
 */
const App = () => {
  return (
    <View style={styles.app}>
      {/* // このタグを入れるとcanvasが作成される */}
      <Canvas
        camera={{ position: [0, 1, 2], near: 0.1, far: 5 }}
        style={{
          background: "#324444"
        }}
      >
        {/* 環境光源 */}
        <ambientLight intensity={0.5} />
        {/* スポットライト */}
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        {/* ポイントライト */}
        <pointLight position={[-10, -10, -10]} />
        {/* 上部にあるfunction Boxを実体化 */}
        <Box position={[-0.5, 0, 0]} />
        <Box position={[0.5, 0, 0]} />
      </Canvas>
      <Text style={[styles.text, styles.p1]}>テクスチャ - 1</Text>
    </View>
  );
};
export default App;
