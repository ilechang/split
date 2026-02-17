









import { useEffect, useRef, useState } from "react";




const SplitSlide = () => {
  const [isMobile, setIsMobile] = useState(false);


  const videoRef = useRef(null);
  const [showReplay, setShowReplay] = useState(false);
useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!video.src) {
            video.src = "/opticAnimation.webm";
            video.load();
          }
          video.play();
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(video);

  return () => observer.disconnect();
}, []);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const START_OFFSET = 0.05;
    const END_OFFSET = 0.05;
    const HOLD_DELAY = 800;

    let holding = false; // 防止重複觸發

    const handleLoaded = () => {
      video.currentTime = START_OFFSET;
      video.play();
    };

    const handleTimeUpdate = () => {
      if (
        !holding &&
        video.duration &&
        video.duration - video.currentTime <= END_OFFSET
      ) {
        holding = true;
        video.pause(); // 定格在最後一幕

        setTimeout(() => {
          setShowReplay(true); // 延遲後顯示按鈕
          holding = false;     // 重置，讓下次播放還能觸發
        }, HOLD_DELAY);
      }
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);


  const handleReplay = () => {
    const video = videoRef.current;
    if (!video) return;

    setShowReplay(false);
    video.currentTime = 0.05;
    video.play();
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div

      style={{
        position: "relative",
        width: "100vw",

        background: "white",
        overflow: "hidden",

      }}
    >
      <h2
        className="archivo-black-regular hi-capa-title no-select"
        style={{
          fontSize: "clamp(28px, 8vw, 120px)", // 自適應大小
          textAlign: "center",
          width: "100%",
          color: "black",
          margin: "55px auto 30px auto",
          lineHeight: "1.1",
          wordBreak: "break-word",
        }}
      >
        Split Slide
      </h2>

      <hr />


      <p
        className="mb-5 mx-auto "
        style={{
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          marginTop: "2rem",
          color: "black",
          padding: "0 2rem", // 小螢幕留邊距
          maxWidth: "1400px",
        }}
      >
        A split-slide design can significantly reduce the reciprocating mass during firing, thereby decreasing felt recoil and improving stability, making it more conducive to rapid shooting.

      </p>
      <img
        src="/images/comparison.webp"
        alt=""
        style={{
          width: "80vw",
          height: "auto",
          display: "block",
          margin: "0 auto 120px auto"
        }}
      />

      <div
        className="container-fluid mb-5 px-4 px-md-5"
        style={{
          marginTop: "-120px"
        }}
      >
        <div className="row align-items-start">

          {/* 左邊圖片 */}
          <div
            className="col-12 col-md-6 mb-5 mb-md-0 mt-5"
            style={{
              position: "relative",
              overflow: "visible"   // 🔥 不要 hidden，避免裁切
            }}
          >

            {/* 上方說明文字 */}
            <p
              style={{
                width: "90%",
                margin: "60px auto 30px auto",
                color: "black",
                fontWeight: 500,
                fontFamily: "Arial, sans-serif"
              }}
            >
              Fixed optic mount at the front of the slide, allowing the optic to remain
              stationary instead of reciprocating with the slide—improving stability
              and extending its lifespan.
            </p>

            <img
              src="/images/opticReady.webp"
              alt="Optic Ready"
              style={{
                display: "block",
                margin: "0 auto",
                width: "120%",
                height: "auto",
                objectFit: "contain"
              }}
            />
          </div>

          {/* 右邊影片 */}
          <div className="col-12 col-md-6 text-center">
            <div style={{ position: "relative", width: "120%" }}>
              <video
                ref={videoRef}
                muted
                playsInline
                preload="none"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain"
                }}
              />

              {showReplay && (
                <button
                  onClick={() => {
                    const video = videoRef.current;
                    setShowReplay(false);
                    video.currentTime = 0.05;
                    video.play();
                  }}
                  style={{
                    position: "absolute",
                    top: "65%",
                    left: "52%",
                    transform: "translate(-50%, -50%)",
                    padding: "12px 24px",
                    fontSize: "16px",
                    background: "rgba(100,100,100,0.6)",   // 灰色半透明
                    color: "white",
                    border: "2px solid white",            // 白色邊框
                    backdropFilter: "blur(6px)",
                    color: "white",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  Play Again
                </button>
              )}
            </div>

          </div>

        </div>
      </div>




    </div>
  );
};

export default SplitSlide;
