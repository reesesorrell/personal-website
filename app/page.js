"use client"

import LeftSideBar from "./components/leftsidebar"
import RightContent from "./components/rightcontent"
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const page = document.querySelector(".page");

    page.addEventListener("mousemove", (e) => {
    const { x, y } = page.getBoundingClientRect();
    page.style.setProperty("--x", e.clientX - x);
    page.style.setProperty("--y", e.clientY - y);
  });
  }, [])

  return (
    <div className="page flex justify-around">
      <LeftSideBar />
      <RightContent />
    </div>
  )
}
