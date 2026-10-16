import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { BallCollider, Physics, RigidBody, RapierRigidBody } from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/images/react2.webp",
  "/images/next2.webp",
  "/images/node2.webp",
  "/images/express.webp",
  "/images/mongo.webp",
  "/images/mysql.webp",
  "/images/typescript.webp",
  "/images/javascript.webp",
  "/images/python.webp",
  "/images/java.webp",
  "/images/postgresql.webp",
  "/images/redis.webp",
  "/images/docker.webp",
  "/images/azure.webp",
  "/images/kubernetes.png",
];

const textures = imageUrls.map((url) => textureLoader.load(url));

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = Array.from({ length: 18 }, (_, i) => ({
  scale: 0.75,
  textureIndex: i % imageUrls.length,
}));

type SphereProps = {
  scale: number;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
  position: [number, number, number];
};

function SphereGeo({ scale, material, isActive, position }: SphereProps & { position: [number, number, number] }) {
  const api = useRef<RapierRigidBody>(null);

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;

    delta = Math.min(delta, 0.05);

    const p = api.current.translation();
    const direction = new THREE.Vector3(p.x, p.y, p.z);

    if (direction.lengthSq() > 0.01) {
      direction.normalize().multiplyScalar(-2 * delta);

      api.current.applyImpulse({ x: direction.x, y: direction.y, z: direction.z }, true);
    }
  });

  return (
    <RigidBody ref={api} position={position} linearDamping={2} angularDamping={1} friction={0.4} colliders={false}>
      <BallCollider args={[scale]} />
      <mesh scale={scale} geometry={sphereGeometry} material={material} castShadow />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0),
      0.2,
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document.getElementById("career")!.getBoundingClientRect().top;
      setIsActive(scrollY > threshold);
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.3,
          metalness: 0.5,
          roughness: 1,
          clearcoat: 0.1,
        }),
    );
  }, []);

  return (
    <div className="techstack">
      <h2> My Techstack</h2>

      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 24], fov: 32, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas">
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />

          {spheres.map((props, i) => {
            const columns = 6;
            const position: [number, number, number] = [
              ((i % columns) - 2.5) * 2.5,
              2 - Math.floor(i / columns) * 2.2,
              (i % 3) * 2.5 - 2.5,
            ];

            return (
              <SphereGeo
                key={i}
                {...props}
                position={position}
                material={materials[props.textureIndex]}
                isActive={isActive}
              />
            );
          })}
        </Physics>
        <Environment files="/models/char_enviorment.hdr" environmentIntensity={0.5} environmentRotation={[0, 4, 2]} />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
