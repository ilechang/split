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
            (see the exploded view below), significantly
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
      {/* ===== Steel Parts Section ===== */}

<div
  style={{
    width: "100%",
    maxWidth: "1600px",
    margin: "160px auto 0 auto",
    padding: isMobile ? "0 1rem" : "0 2rem",
    color: "white",
  }}
>
  {/* 區塊標題 */}
  <h3
    style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      marginBottom: "1rem",
      fontWeight: 600,
    }}
  >
    Standalone Steel Parts for Player Upgrades
  </h3>

  <p
    style={{
      textAlign: "center",
      maxWidth: "1000px",
      margin: "0 auto 100px auto",
      lineHeight: "1.6",
    }}
  >
    Critical steel components are produced with dedicated molds and can also
    be purchased individually, allowing players to upgrade any TM-spec
    Hi-Capa—even if they don’t buy a full pistol—while maximizing company
    profit.
  </p>

{/* 第一組：Thumb Safety */}
<div
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "60px",

    maxWidth: "60vw",
    margin: "50px auto",
  }}
>
  <img
    src="/images/thumb.webp"
    alt="Stainless Steel Thumb Safety"
    style={{
      width: isMobile ? "50%" : "30%",
      height: "auto",
      display: "block",
  
    }}
  />

  <div style={{ width: isMobile ? "100%" : "45%" }}>
    <h4 style={{ fontWeight: 600, marginBottom: "1rem" }}>
      Stainless Steel Thumb Safety
    </h4>

    <p style={{ lineHeight: "1.6" }}>
      Prevents rust from sweat and avoids breakage at the connection point,
      ensuring left-handed users can safely operate the safety. Fully
      compatible with TM-spec pistols and available as an upgrade.
    </p>
  </div>
</div>


{/* 第二組：Hammer / Sear / Disconnector */}
<div
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "60px",
    
    maxWidth: "60vw",
    margin: "100px auto",
  }}
>
  <img
    src="/images/steelPart.webp"
    alt="Hammer Sear Disconnector"
    style={{
      width: isMobile ? "50%" : "30%",
      height: "auto",
      display: "block",
   
    }}
  />

  <div style={{ width: isMobile ? "100%" : "45%" }}>
    <h4 style={{ fontWeight: 600, marginBottom: "1rem" }}>
      Hammer, Sear, and Disconnector
    </h4>

    <p style={{ lineHeight: "1.6" }}>
      These parts experience the highest stress during firing and are most
      prone to wear. Originally upgraded to steel by the manufacturer, these
      components share molds and can also be purchased individually, enabling
      players to upgrade any TM-spec Hi-Capa.
    </p>
    
  </div>

</div>

</div>
  <br />  <br />  <br />  <br />
    </div>
  );
};

export default Value;
