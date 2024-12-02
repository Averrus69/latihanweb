import React from "react";
export default function Navbar() {
  return (
    <div className="flex gap-20 justify-center text-white items-center h-100vh bg-[rgba(26,10,46)] sticky top-0 h-10 vh">
      <a href="#">Home</a>
      <a href="#about">About Me</a>
      <a href="#">Project</a>
    </div>
  );
}
