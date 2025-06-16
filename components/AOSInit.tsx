"use client"

import { useEffect } from "react"

export default function AOSInit() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default
      import("aos/dist/aos.css")

      AOS.init({
        duration: 800,
        once: true,
        easing: "ease-out-cubic",
      })
    }

    initAOS()
  }, [])

  return null
}
