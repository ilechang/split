// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";

// const TOTAL_FRAMES = 10;
// const START_DELAY = 400; // 0.4 秒延遲

// const Scene = () => {
//   const [frame, setFrame] = useState(1);
//   const [started, setStarted] = useState(false);

//   useEffect(() => {
//     // 先延遲 0.4 秒再開始
//     const startTimer = setTimeout(() => setStarted(true), START_DELAY);

//     return () => clearTimeout(startTimer);
//   }, []);

//   useEffect(() => {
//     if (!started) return;

//     let currentFrame = 1;

//     const interval = setInterval(() => {
//       currentFrame++;
//       if (currentFrame > TOTAL_FRAMES) {
//         currentFrame = TOTAL_FRAMES; // 定格在最後一張
//         clearInterval(interval); // 停止動畫
//       }
//       setFrame(currentFrame);
//     }, 17); // 每 17ms 切換一張（約 12fps）

//     return () => clearInterval(interval);
//   }, [started]);

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100vw",
//         height: "100vh",
//         background: "rgb(31,31,31)",
//         overflow: "hidden",
//       }}
//     >
//       {/* Image Sequence */}
//       <img
//         src={`/frames/split.231.${frame}.png`}
//         alt="split sequence"
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "contain",
//         }}
//       />

//       {/* 文字區塊 */}
//       <div
//         className="html-container text-center"
//         style={{
//           position: "absolute",
//           top: "10%",
//           left: "50%",
//           transform: "translateX(-50%)",
//           color: "white",
//         }}
//       >
//         <h1 className="hurricane-text trinity-title no-select">Trinity</h1>
//         <h2 className="archivo-black-regular hi-capa-title no-select">
//           Hi-CAPA
//         </h2>

//         <div className="info-block">
//           <h3 className="subtitle archivo-black-regular">
//             Airsoft Gas Blowback Pistol
//           </h3>
//           <p className="landing-p archivo-black-thin">
//             Industrial Design | Modify Tech | 2022–2023 | Solo-led
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Scene;













import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const TOTAL_FRAMES = 5;
const START_DELAY = 700; // 0.4 秒延遲

const Scene = () => {
  const [frame, setFrame] = useState(1);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // 延遲 0.4 秒再開始播放
    const startTimer = setTimeout(() => setStarted(true), START_DELAY);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!started) return;

    let currentFrame = 1;

    const interval = setInterval(() => {
      currentFrame++;
      if (currentFrame > TOTAL_FRAMES) {
        currentFrame = TOTAL_FRAMES; // 定格在最後一張
        clearInterval(interval); // 停止動畫
      }
      setFrame(currentFrame);
    }, 13); // 每 80ms 切換一張（約 12fps）

    return () => clearInterval(interval);
  }, [started]);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "rgb(31,31,31)",
        overflow: "hidden",
      }}
    >
      {/* 文字區塊（在下層） */}
      <div
        className="html-container text-center"
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          zIndex: 5, // 文字層級
        }}
      >
        <h1 className="archivo-black-regular trinity-title no-select">S P L I T</h1>
        <h2 className="archivo-black-regular hi-capa-title no-select" style={{
          opacity: 0,
    animation: "fadeIn 0.6s ease 0.2s forwards", // animationName duration timingFunction delay fillMode
        }}>
          Hi-CAPA
        </h2>

        <div className="info-block">
          <h3 className="subtitle archivo-black-regular mb-3">
            High-Performance Airsoft Pistol Design
          </h3>
        <p className="landing-p archivo-black-thin">
  Project Type : Platform Extension Concept (Based on <a
  href="https://trinity-bice-one.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    color: "white",
    textDecoration: "underline",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px"
  }}
>
  Trinity Hi-CAPA
  <span style={{ fontSize: "0.9em" }}>↗</span>
</a>)
</p>
          <p className="landing-p archivo-black-thin">
            Role : User Research · CAD Modeling · Mechanical & Ergonomic Design
          </p>
          <p className="landing-p archivo-black-thin">
            Design Tools : SolidWorks(CAD) · KeyShot(Rendering & Animation) · Photoshop
          </p>
          <p className="landing-p archivo-black-thin">
            Duration : 2 Months
          </p>
          
        </div>
      </div>

      {/* Image Sequence（在文字上層） */}
      <img
        src={`/frames/split.246.${frame}.webp`}
        alt="split sequence"
     style={{
    width: "90%",
    height: "auto",
    objectFit: "contain",
    position: "absolute",
     pointerEvents: "none", // 🔥 關鍵
    top: "11%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    opacity: 0,
    animation: "fadeIn 0.4s ease 0.2s forwards", // animationName duration timingFunction delay fillMode
  }}
/>
    
    </div>
  );
};

export default Scene;
