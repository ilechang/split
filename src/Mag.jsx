












import { useEffect, useState, useRef } from "react";

const Mag = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const ref = useRef();
  const videoRef = useRef();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldRender(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.1;
    }
  }, [shouldRender]);

  const handleEnded = () => {
    if (!videoRef.current) return;
    // 等 1 秒再重新播放
    setTimeout(() => {
      videoRef.current.play();
    }, 1500);
  };

  return (
    <div
      ref={ref}
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
        Mag Compatibility
      </h2>



      <hr />


      <p
        className="mb-4 mx-auto"
        style={{
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          marginTop: "2rem",
          color: "black",
          padding: "0 2rem", // 小螢幕留邊距
          maxWidth: "1400px",
        }}
      >
       To enhance firepower, the Split Hi-Capa takes the 50-round extended magazine to provide increased ammunition capacity. Additionally, to maximize compatibility, the system supports  Marui-spec magazines, allowing Hi-Capa magazines from various manufacturers — including Marui, WE, AW, KJ, and SRC — to be used interchangeably.
      </p>

      <div className="trigger-img-container">
  <img
  src="./images/magCompatable.webp"
  alt="Trigger View"
  style={{
    width: "100vw",
    height: "auto",
    display: "block",
    margin: "0",
    maxWidth: "none",

  }}
/>
      </div>
    </div>
  );
};

export default Mag;

