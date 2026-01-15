import { useInView } from "react-intersection-observer";

export default function useInViewAnim(options = {}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
    ...options,
  });

  return { ref, inView };
}
