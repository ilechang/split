// import { useEffect, useState, useRef } from "react";

// const Barrel = () => {
//   const [isMobile, setIsMobile] = useState(false);


//   return (
//     <div  style={{ position: "relative", width: "100vw" }} >
//       {/* 標題 */}
//       <h2
//         className="archivo-black-regular hi-capa-title no-select"
//         style={{
//           fontSize: "clamp(28px, 8vw, 120px)",
//           textAlign: "center",
//           width: "100%",
//           color: "white",
//           margin: "55px auto 30px auto",
//           lineHeight: "1.1",
//           wordBreak: "break-word",
//         }}
//       >
//         Extended Barrel
//       </h2>



//       <hr style={{ borderColor: "white" }} />

//       {/* ✅ 統一寬度容器（背景介紹 + 主文） */}
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "1600px",
//           margin: "0 auto",
//           color: "white",
//         }}
//       >
//        <div
//   style={{
//     boxSizing: "border-box",
//     padding: isMobile ? "0 1rem" : "0 2rem",
//     textAlign: "left",   // 🔥 改這裡
//   }}
// >
//           {/* 背景介紹 */}
//           <p
//             className="mb-5"
//             style={{
//               fontFamily: "Arial, sans-serif",
//               marginTop: "2rem",
//               textAlign: "center" 
//             }}
//           >
//          A 6.5-inch fixed inner barrel — with a length approaching that of a submachine gun — significantly extends the effective range to 50 meters!

//           </p>
//   <div
//   style={{
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "2rem",
//   }}
// >
//   <video
//     src="/barrel.webm"
//     autoPlay
//     muted
//     loop
//     playsInline
//     style={{
//       width: "95vw",
//       maxWidth: "1600px",
//       border:"1px solid white"
//     }}
//   />
// </div>


//         </div>
//       </div>


//     </div>
//   );
// };

// export default Barrel;











import { useEffect, useState, useRef } from "react";

const Barrel = () => {
    const [isMobile, setIsMobile] = useState(false);
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const container = containerRef.current;
        if (!video || !container) return;

        let direction = 1; // 1 = forward, -1 = reverse
        let isPlaying = false;

        // 滑入視窗才啟動
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAnimation();
                } else {
                    video.pause();
                    isPlaying = false;
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(container);

        const startAnimation = async () => {
            if (isPlaying) return;
            isPlaying = true;

            // 第一幀停1秒
            video.currentTime = 0;
            await wait(1200);

            playForward();
        };

        const playForward = async () => {
            direction = 1;
            video.play();

            video.onended = async () => {
                video.pause();
                await wait(3000); // 最後一幀停1秒

            };
        };

 
        const wait = (ms) =>
            new Promise((resolve) => setTimeout(resolve, ms));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div style={{ position: "relative", width: "100vw" }}>
            <h2
                className="archivo-black-regular hi-capa-title no-select"
                style={{
                    fontSize: "clamp(28px, 8vw, 120px)",
                    textAlign: "center",
                    width: "100%",
                    color: "white",
                    margin: "55px auto 30px auto",
                    lineHeight: "1.1",
                    wordBreak: "break-word",
                }}
            >
                Extended Barrel
            </h2>

            <hr style={{ borderColor: "white" }} />

            <div
                style={{
                    width: "100%",
                    maxWidth: "1600px",
                    margin: "0 auto",
                    color: "white",
                }}
            >
                <div
                    style={{
                        boxSizing: "border-box",
                        padding: isMobile ? "0 1rem" : "0 2rem",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "Arial, sans-serif",
                            marginTop: "2rem",
                            textAlign: "center",
                            
                        }}
                        className="mb-0 pb-0"
                    >
                        A 6.5-inch fixed inner barrel — with a length approaching that of a
                        submachine gun — significantly extends the effective range to 50 meters!
                    </p>

                    <div
                        ref={containerRef}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "2rem",
                        }}
                         className="mt-0 pt-0"
                    >
                        <div
                            style={{
                                width: "90vw",
                                maxWidth: "1600px",
                                aspectRatio: "1 / 0.45",   // 🔥 只留上半部
                                overflow: "hidden",
                                
                            }}
                        >
                            <video
                                src="/barrel.webm"
                                 ref={videoRef} 
                                muted
                                playsInline
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "top",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Barrel;
