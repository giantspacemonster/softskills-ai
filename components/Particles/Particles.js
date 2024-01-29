"use client";
import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
export default function Particle() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const [mobileScreenDetect, setMobileScreenDetect] = useState(false);
  const [tabletScreenDetect, setTabletScreenDetect] = useState(false);
  useEffect(() => {
    if (window.visualViewport.width < 587) {
      setMobileScreenDetect(true);
    }
    if (window.visualViewport.width < 1025) {
      setTabletScreenDetect(true);
    }
  }, []);

  return (
    <Particles
      canvasClassName="particles"
      height={mobileScreenDetect ? window.visualViewport.height - 290: 520}
      width={mobileScreenDetect ? window.visualViewport.width - 40 : 1480}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fullScreen: {
          enable: false,
          zIndex: -1, // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            grab: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 1,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            max: 200,
            value: 200,
            density: {
              enable: true,
              area: 1500,
            },
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: false,
      }}
    />
  );
}
