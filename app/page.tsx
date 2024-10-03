"use client";
import { useRef, Suspense, memo, useEffect, useState } from "react";
import Navbar from "./_Section/Navbar";
import React from "react";
import ContactMe from "./_Section/ContactMe";
const Home = React.lazy(() => import("./_Section/Home"));
const TechStack = React.lazy(() => import("./_Section/TechStack"));
const Experience = React.lazy(() => import("./_Section/Experience"));
const Projects = React.lazy(() => import("./_Section/Projects"));

function Landing() {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  return (
    <div className="min-h-screen bg-background antialiased max-w-5xl mx-auto py-10 sm:py-12 px-6 transition-all bg-[#001100] font-switzer">
      <div className="flex flex-col gap-10">
          <Suspense fallback={<div>
            <div className="flex justify-center items-center h-screen">
              <Loading />
          </div>
          </div>}>
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
          <section>
            <TechStack />
          </section>
          <section ref={experienceRef}>
            <Experience />
          </section>
          <section ref={projectsRef}>
            <Projects />
          </section>
          <section>
            <ContactMe />
          </section>
        </Suspense>
      </div>
    </div>
  );
}

export default memo(Landing);


function Loading(){
  return <div>
   <div className="flex-col gap-4 w-full flex items-center justify-center">
  <div
    className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
  >
    <div
      className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
    ></div>
  </div>
</div>

  </div>
}