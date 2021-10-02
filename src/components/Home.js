import React from "react";
import MatrixRain from "./MatrixRain/MatrixRain";

function Home() {
  return (
    <main>
      <div>
        <MatrixRain style={{ zIndex: 0 }} />
        <section
          className="pt-20 text-center"
          style={{
            color: "white",
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1",
          }}
        >
          <h1 className="relative flex text-9xl font-semibold lg:pt-60 pt-40">
            Hi, I'm Kody.
          </h1>
          <p className="relative flex text-4xl mt-10">
            Aspiring Shadowy Super Coder.
          </p>
          <p className="relative flex text-4xl mt-10">
            "Proof-of-Work Speaks For Itself"
          </p>
          <p className="relative flex text-4xl mt-10">- Satoshi Nakamoto</p>
        </section>
      </div>
    </main>
  );
}

export default Home;
