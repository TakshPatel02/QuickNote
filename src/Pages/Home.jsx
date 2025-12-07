import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-[calc(100vh-65px)] bg-(--bg)">
      <div className="hero max-w-[1400px] mx-auto text-(--text-heading) pt-16 text-center flex flex-col gap-8">
        <h1 className="text-5xl font-bold tracking-wider">
          Capture Your Thoughts.
          <br /> Stay Organized. Work Smarter.
        </h1>
        <p className="text-lg font-light text-(--text-muted)">
          A fast, minimal, distraction-free notes app built for clarity and
          speed. Write, organize, and find your ideas instantly — anytime,
          anywhere.
        </p>
        <button className="border border-(--border) mx-auto px-6 py-3 rounded-md text-(--text-muted)">
          <Link to='/notes'>Start Taking Notes</Link>
        </button>
      </div>
      <div className="features max-w-[1400px] text-center mx-auto mt-16">
        <h1 className="text-4xl font-bold text-(--text-heading)">
          Features of QuickNote
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="box width-[95%] border border-(--border) p-4 rounded-md">
            <h2 className="text-xl font-medium text-(--text-heading)">
              Lightning-Fast Writing
            </h2>
            <p className="text-md text-(--text-muted) font-light">
              Write without delay. Every note saves in real time, so your ideas
              never get lost.
            </p>
          </div>
          <div className="box width-[95%] border border-(--border) p-4 rounded-md">
            <h2 className="text-xl font-medium text-(--text-heading)">
              Clean, Minimal Interface
            </h2>
            <p className="text-md text-(--text-muted) font-light">
              No clutter. No noise. Just a simple workspace focused on your
              writing.
            </p>
          </div>
          <div className="box width-[95%] border border-(--border) p-4 rounded-md">
            <h2 className="text-xl font-medium text-(--text-heading)">
              Dark & Light Themes
            </h2>
            <p className="text-md text-(--text-muted) font-light">
              Switch themes instantly using modern CSS variables (Tailwind v4
              compatible).
            </p>
          </div>
          <div className="box width-[95%] border border-(--border) p-4 rounded-md">
            <h2 className="text-xl font-medium text-(--text-heading)">
              Organized Your Way
            </h2>
            <p className="text-md text-(--text-muted) font-light">
              Create, edit, delete notes — all with a clean UI that stays out of
              your way.
            </p>
          </div>
          <div className="box width-[95%] border border-(--border) p-4 rounded-md">
            <h2 className="text-xl font-medium text-(--text-heading)">
              Local Storage Sync
            </h2>
            <p className="text-md text-(--text-muted) font-light">
              Your notes are stored safely on your device. Zero setup, zero
              accounts.
            </p>
          </div>
          <div className="box width-[95%] border border-(--border) p-4 rounded-md">
            <h2 className="text-xl font-medium text-(--text-heading)">
              Search That Actually Works
            </h2>
            <p className="text-md text-(--text-muted) font-light">
              Find notes instantly with a fast, responsive search engine.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-(--text-heading) mt-16 text-md">
        “Your Notes. Your Space.”
      </div>
    </div>
  );
};

export default Home;
