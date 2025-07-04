"use client";
import { useRef, Suspense, memo, useEffect, useState } from "react";
import Navbar from "./_Section/Navbar";
import React from "react";
import ContactMe from "./_Section/ContactMe";
import { useRouter } from "next/navigation";
const Home = React.lazy(() => import("./_Section/Home"));
const TechStack = React.lazy(() => import("./_Section/TechStack"));
const Experience = React.lazy(() => import("./_Section/Experience"));
const Projects = React.lazy(() => import("./_Section/Projects"));

function Landing() {
  const router = useRouter();
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Force a client-side refresh on first mount
    if (typeof window !== 'undefined') {
      const hasRefreshed = sessionStorage.getItem('hasRefreshed');
      if (!hasRefreshed) {
        sessionStorage.setItem('hasRefreshed', 'true');
        router.refresh();
      }
    }
  }, [router]);

  if (!mounted) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen antialiased max-w-5xl mx-auto py-5 sm:py-6 px-6 transition-all font-switzer">
      <div className="flex flex-col gap-10">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <Loading />
            </div>
          }
        >
          <div>
            <Navbar
              homeRef={homeRef}
              projectsRef={projectsRef}
              experienceRef={experienceRef}
            />
          </div>
          <div className="flex flex-col gap-20">
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
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default memo(Landing);

function Loading() {
  return (
    <div>
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent text-color1 text-4xl animate-spin flex items-center justify-center border-t-color1 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-color2 text-2xl animate-spin flex items-center justify-center border-t-color2 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
