import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-[calc(100vh-65px)] bg-(--bg) overflow-y-auto">
      <div className="hero max-w-[1400px] mx-auto text-(--text-heading) pt-8 sm:pt-12 md:pt-16 text-center flex flex-col gap-4 sm:gap-6 md:gap-8 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
          Capture Your Thoughts.
          <br /> Stay Organized. Work Smarter.
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-light text-(--text-muted) max-w-3xl mx-auto">
          A fast, minimal, distraction-free notes app built for clarity and
          speed. Write, organize, and find your ideas instantly — anytime,
          anywhere.
        </p>
        <button className="border border-(--border) mx-auto px-4 sm:px-6 py-2 sm:py-3 rounded-md text-(--text-muted) hover:bg-(--bg-sidebar) transition-colors text-sm sm:text-base">
          <Link to="/notes">Start Taking Notes</Link>
        </button>
      </div>
      <div className="features max-w-[1400px] text-center mx-auto mt-8 sm:mt-12 md:mt-16 px-4 pb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--text-heading)">
          Features of QuickNote
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4">
          <div className="box w-full border border-(--border) p-3 sm:p-4 rounded-md">
            <h2 className="text-lg sm:text-xl font-medium text-(--text-heading)">
              Lightning-Fast Writing
            </h2>
            <p className="text-sm sm:text-base text-(--text-muted) font-light mt-2">
              Write without delay. Every note saves in real time, so your ideas
              never get lost.
            </p>
          </div>
          <div className="box w-full border border-(--border) p-3 sm:p-4 rounded-md">
            <h2 className="text-lg sm:text-xl font-medium text-(--text-heading)">
              Clean, Minimal Interface
            </h2>
            <p className="text-sm sm:text-base text-(--text-muted) font-light mt-2">
              No clutter. No noise. Just a simple workspace focused on your
              writing.
            </p>
          </div>
          <div className="box w-full border border-(--border) p-3 sm:p-4 rounded-md">
            <h2 className="text-lg sm:text-xl font-medium text-(--text-heading)">
              Dark & Light Themes
            </h2>
            <p className="text-sm sm:text-base text-(--text-muted) font-light mt-2">
              Switch themes instantly using modern CSS variables (Tailwind v4
              compatible).
            </p>
          </div>
          <div className="box w-full border border-(--border) p-3 sm:p-4 rounded-md">
            <h2 className="text-lg sm:text-xl font-medium text-(--text-heading)">
              Organized Your Way
            </h2>
            <p className="text-sm sm:text-base text-(--text-muted) font-light mt-2">
              Create, edit, delete notes — all with a clean UI that stays out of
              your way.
            </p>
          </div>
          <div className="box w-full border border-(--border) p-3 sm:p-4 rounded-md">
            <h2 className="text-lg sm:text-xl font-medium text-(--text-heading)">
              Local Storage Sync
            </h2>
            <p className="text-sm sm:text-base text-(--text-muted) font-light mt-2">
              Your notes are stored safely on your device. Zero setup, zero
              accounts.
            </p>
          </div>
          <div className="box w-full border border-(--border) p-3 sm:p-4 rounded-md">
            <h2 className="text-lg sm:text-xl font-medium text-(--text-heading)">
              Search That Actually Works
            </h2>
            <p className="text-sm sm:text-base text-(--text-muted) font-light mt-2">
              Find notes instantly with a fast, responsive search engine.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-(--text-heading) mt-8 sm:mt-12 md:mt-16 text-sm sm:text-base pb-4">
        “Your Notes. Your Space.”
      </div>
    </div>
  );
};

export default Home;
