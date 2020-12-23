// App.js
import React, { useRef, useState, useEffect } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import styles from "./styles";

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
      <meshStandardMaterial color={"orange"} />
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
    </View>
  );
};
export default App;
