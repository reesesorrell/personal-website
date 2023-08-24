"use client"

import HomeScreen from "./components/homescreen"
import AboutScreen from "./components/aboutscreen"
import ProjectScreen from "./components/projectscreen"
import ContactScreen from "./components/contactscreen"

export default function Home() {
  return (
    <div>
      <HomeScreen />
      <AboutScreen />
      <ProjectScreen />
      <ContactScreen />
    </div>
  )
}
