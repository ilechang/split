import { useEffect, useState } from "react";

const SplitSlide = () => {
  const [isMobile, setIsMobile] = useState(false);

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
        className="mb-5 mx-auto pb-4"
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
      <video
        src="/opticAnimation.webm"
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "120%",
          height: "auto",
          objectFit: "contain"
        }}
      />
    </div>

  </div>
</div>




    </div>
  );
};

export default SplitSlide;
