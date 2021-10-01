import React, { useEffect, useState } from "react";
import client from "../client.js";

function About() {
  return (
    <main className="bg-gray-900 min-h-screen p-12">
      <div>
        <section
          className="text-gray-300 z:10"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1",
          }}
        >
          <h1 className="relative text-4xl mt-10 px-8">Me in a Minute</h1>
          <p className="relative text-3xl mt-10 px-8">
            I’m a full stack developer and bitcoiner. I want to spend the rest
            of my life building bitcoin and lightning{" "}
            <em className="text-yellow-500">tools that people love</em>. I
            served as a Marine Infantry Officer after college because I believed
            in supporting and defending the freedoms the U.S. was founded on. I
            learned to lead and manage in chaotic environments, and to take
            ownership and responsibility for succeeding as a team. Today, I
            think <em className="text-yellow-500">bitcoin is hope</em> for
            freedom and property rights for billions. I spend every waking
            moment learning and teaching about bitcoin, but{" "}
            <em className="text-yellow-500">Cypherpunks write code</em> and I
            know that building software myself is the highest impact and most
            important thing I can do for the rest of my life.
          </p>
        </section>
      </div>
    </main>
  );
}

export default About;
