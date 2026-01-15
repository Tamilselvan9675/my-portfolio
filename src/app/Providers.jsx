import useLenis from "../hooks/useLenis";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Providers({ children }) {
  useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return children;
}
