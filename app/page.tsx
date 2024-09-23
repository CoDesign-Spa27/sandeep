"use client";
import Home from "./_components/Home";
import TechStack from "./_components/TechStack";
import Navbar from "./_components/Navbar";
import { useRef } from "react";
import Anouncment from "@/components/Anouncment";

export default function Landing() {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="min-h-screen bg-background antialiased max-w-5xl mx-auto py-10 sm:py-12 px-6 transition-all bg-[#001100] font-switzer">
   
      <div className="flex flex-col gap-10">
        <div>
          <Navbar
            homeRef={homeRef}
            projectsRef={projectsRef}
            experienceRef={experienceRef}
          />
        </div>
        <section ref={homeRef}>
          <Home />
        </section>
        <div>
          <TechStack />
        </div>
      </div>
    </div>
  );
}
