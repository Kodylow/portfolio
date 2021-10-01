import React from "react";
import MatrixRain from "./MatrixRain/MatrixRain";

function Home() {
  return (
    <main>
      <div>
        <MatrixRain style={{ zIndex: 0 }} />
        <section
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
          <h1 className="relative flex text-9xl font-semibold lg:pt-80 sm:pt-40 px-auto">
            Hi, I'm Kody.
          </h1>
          <p className="relative flex text-4xl mt-10 px-8">
            Aspiring Shadowy Super Coder.
          </p>
          <p className="relative flex text-4xl mt-10 px-8">
            "Proof-of-Work Speaks For Itself"
          </p>
          <p className="relative flex text-4xl mt-10 px-8">
            - Satoshi Nakamoto
          </p>
        </section>
      </div>
    </main>
  );
}

export default Home;
