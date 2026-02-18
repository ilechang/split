import { useEffect, useState, useRef } from "react";

const Value = () => {
  const [isMobile, setIsMobile] = useState(false);

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
        Value Engineering
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
          {/* 副標題 */}
          <h3
            style={{
              fontFamily: "Arial, sans-serif",
              marginTop: "2rem",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Shared Components, Lower Tooling Costs
          </h3>

          {/* 內文 */}
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              marginTop: "1rem",
              textAlign: "center",
              maxWidth: "900px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="mb-0 pb-0"
          >
            75% of the components are shared with the Trinity Hi-Capa
            (see the common parts list / exploded view), significantly
            reducing the need for new tooling and lowering redevelopment costs.
          </p>
        </div>
      </div>

      {/* 滿版圖片 */}
      <img
        src="/images/share.webp"
        alt="Shared Components Exploded View"
        style={{
          width: "70vw",
          height: "auto",
          display: "block",
          margin: "20px auto 0px auto",
         
        }}
      />
    </div>
  );
};

export default Value;
