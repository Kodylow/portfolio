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
          <h1
            className="text-9xl font-semibold lg:pt-80 sm:pt-40 px-auto"
            style={{
              position: "relative",
              display: "flex",
            }}
          >
            Hi, I'm Kody.
          </h1>
          <p
            className="text-4xl mt-10 px-8"
            style={{
              position: "relative",
              display: "flex",
            }}
          >
            Aspiring Shadowy Super Coder.
          </p>
          <p
            className="text-4xl font-italic mt-10 px-8"
            style={{
              position: "relative",
              display: "flex",
            }}
          >
            "Proof-of-Work Speaks For Itself"
          </p>
          <p
            className="text-4xl mt-10 px-8"
            style={{
              position: "relative",
              display: "flex",
            }}
          >
            - Satoshi Nakamoto
          </p>
        </section>
      </div>
    </main>
  );
}

export default Home;
