import { useEffect, useState } from "react";
import "./BanquetIntro.css";

export default function BanquetIntro({ onFinish }) {
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStartExit(true), 500); // gate khul jayega
    const timer2 = setTimeout(() => onFinish(), 2000);         // intro hide hone ka time

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className={`intro-container ${startExit ? "exit" : ""}`}>
      <div className="split left"></div>
      <div className="split right"></div>
      <div className="intro-content">
        <h1 className="title">Atlantic The Luxury Banquets</h1>
        <p className="subtitle">Crafting Luxury Celebrations</p>
      </div>
    </div>
  );
}
