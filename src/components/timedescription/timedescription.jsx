import { useEffect, useRef, useState } from "react";

export default function TimeDescription() {
  let [meal, setMeal] = useState("");

  useEffect(() => {
    let today = new Date();
    let currentTime = today.toLocaleTimeString("en-SE");

    if (currentTime > "00:00:00" && currentTime < "10:00:00") {
      setMeal("breakfast");
    } else if (currentTime > "10:00:00" && currentTime < "14:00:00") {
      setMeal("lunch");
      console.log("lunch");
    } else if (currentTime > "14:00:01" && currentTime < "23:59:59") {
      setMeal("dinner");
      console.log("dinner");
    }
  }, []);

  return <p>Recommended {meal} for today:</p>;
}
