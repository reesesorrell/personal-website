"use client"

import HomeScreen from "./components/homescreen"
import AboutScreen from "./components/aboutscreen"
import ProjectScreen from "./components/projectscreen"
import ContactScreen from "./components/contactscreen"
import NavBar from "./components/navbar"

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeScreen />
      <AboutScreen />
      <ProjectScreen />
      <ContactScreen />
    </div>
  )
}
