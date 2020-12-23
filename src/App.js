// App.js
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
/*
 * 3.カメラの設定が必要ならば デフォルトの設定でいいならばいらない
 */
const Camera = (props) => {
  const ref = useRef();
  const { setDefaultCamera } = useThree();
  useEffect(() => void setDefaultCamera(ref.current), []);
  useFrame(() => ref.current.updateMatrixWorld());
  return <perspectiveCamera ref={ref} {...props} />;
};
/*
 * 2.boxのmeshを作成して返す
 */
const Box = (props) => {
  // hooks
  const mesh = useRef();
  // [変数名,変数を変更する関数名] = useState(初期値);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // 回転させる
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      {/* ジオメトリ(形)とマテリアル(色など)をメッシュの中にいれる */}
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};
/*
 * 1. 表示される入り口
 */
const App = () => {
  return (
    // このタグを入れるとcanvasが作成される
    <Canvas
      style={{
        background: "#324444"
      }}
    >
      {/* カメラの設定 なくても可 */}
      <Camera position={[0, 0, 4]} />
      {/* 環境光源 */}
      <ambientLight intensity={0.5} />
      {/* スポットライト */}
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      {/* ポイントライト */}
      <pointLight position={[-10, -10, -10]} />
      {/* 上部にあるfunction Boxを実体化 */}
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};
export default App;
