"use client"

import LeftSideBar from "./components/leftsidebar"
import RightContent from "./components/rightcontent"

export default function Home() {
  return (
    <div className="page flex justify-around">
      <LeftSideBar />
      <RightContent />
    </div>
  )
}
