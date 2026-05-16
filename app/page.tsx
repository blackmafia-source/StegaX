"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    fetch("https://stegax.onrender.com/")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Backend Connection Failed ❌"))
  }, [])

  return (
    <div style={{ padding: "40px", fontSize: "24px" }}>
      {message}
    </div>
  )
}
