// App.js
import React, { useRef, useState /*, useEffect */ } from "react";
import * as THREE from "three";
import { /*Button, Image, StyleSheet, */ Text, View } from "react-native";
import { Canvas, useFrame /*, useThree*/ } from "react-three-fiber";
import styles from "./styles";
import texture1 from "./assets/img/texture_floor3_normal_light_px.png";
import texture2 from "./assets/img/texture_floor_octogons.png";
import texture3 from "./assets/img/texture_floortile_8.png";
import texture4 from "./assets/img/texture_new2_water_px.png";
import texture5 from "./assets/img/texture_new_bluerocks.png";
import texture6 from "./assets/img/texture_rocks_moss_px.png";

const loader = new THREE.TextureLoader();
const textures = [
  loader.load(texture1),
  loader.load(texture2),
  loader.load(texture3),
  loader.load(texture4),
  loader.load(texture5),
  loader.load(texture6)
];

/*
 * 2.boxのmeshを作成して返す
 */
const Box2 = (props) => {
  const [textureNum, setTextureNum] = useState(0);
  // hooks
  const mesh = useRef();
  // 回転させる
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.01;
  });
  return (
    <mesh
      {...props}
      ref={mesh}
      // クリックするたびにテクスチャを変更
      onClick={(e) => {
        setTextureNum(textureNum >= textures.length - 1 ? 0 : textureNum + 1);
      }}
    >
      {/* ジオメトリ(形)とマテリアル(色など)をメッシュの中にいれる */}
      <boxBufferGeometry args={[1, 1, 1]} />
      {/* <meshStandardMaterial color={"orange"} /> */}
      <meshBasicMaterial map={textures[textureNum]} />
    </mesh>
  );
};

/*
 * 2.boxのmeshを作成して返す
 */
const Box = (props) => {
  const [textureNum, setTextureNum] = useState(3);
  // hooks
  const mesh = useRef();
  // 回転させる
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.01;
  });
  return (
    <mesh
      {...props}
      ref={mesh}
      // クリックするたびにテクスチャを変更
      onClick={(e) => {
        setTextureNum(textureNum >= textures.length - 1 ? 0 : textureNum + 1);
      }}
    >
      {/* ジオメトリ(形)とマテリアル(色など)をメッシュの中にいれる */}
      <boxBufferGeometry args={[1, 1, 1]} />
      {/* <meshStandardMaterial color={"orange"} /> */}
      <meshBasicMaterial map={textures[textureNum]} />
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
        camera={{ position: [0, 3, 4], near: 0.1, far: 50 }}
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
        <Box position={[-1, 1, 0]} />

        <Box2 position={[1, -1, 0]} />
      </Canvas>
      <Text style={[styles.text, styles.p1]}>テクスチャ - 1</Text>
    </View>
  );
};
export default App;
