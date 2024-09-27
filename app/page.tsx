"use client";
import { useRef, Suspense } from "react";
import Navbar from "./_Section/Navbar";
import React from "react";
const Home = React.lazy(() => import("./_Section/Home"));
const TechStack = React.lazy(() => import("./_Section/TechStack"));
const Experience = React.lazy(() => import("./_Section/Experience"));
const Projects = React.lazy(() => import("./_Section/Projects"));

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
          <Suspense fallback={<div></div>}>
            <Home />
          </Suspense>
        </section>
        <section>
          <Suspense fallback={<div></div>}>
            <TechStack />
          </Suspense>
        </section>
        <section ref={experienceRef}>
          <Suspense fallback={<div></div>}>
            <Experience />
          </Suspense>
        </section>
        <section ref={projectsRef}>
          <Suspense fallback={<div></div>}>
            <Projects />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
