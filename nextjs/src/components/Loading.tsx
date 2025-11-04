"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/assets/loading.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      {animationData && (
        <Lottie
          animationData={animationData}
          loop
          className="w-40 h-40"
        />
      )}
    </div>
  );
}
