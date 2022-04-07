import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-row gap-4">
        <Link to="/specialization">
          <div className="max-w-sm bg-slate-800 text-white rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Specializations</div>
            </div>
          </div>
        </Link>
        <Link to="/associate">
          <div className="max-w-sm bg-slate-800 text-white rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Associates</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
