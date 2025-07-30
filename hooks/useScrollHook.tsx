import { useEffect, useState, RefObject } from "react";

const useScrollHook = (ref: RefObject<HTMLDivElement | null>) => {
  const [scrollTop, setScrollTop] = useState<number | undefined>(0);
  const node = ref.current;
  if (!node) return;
  useEffect(() => {
    const onScroll = () => setScrollTop(node.scrollTop);
    node.addEventListener("scroll", onScroll);
    return node.removeEventListener("scroll", onScroll);
  }, [ref]);
  console.log(scrollTop, "scrollTop");

  return scrollTop;
};

export default useScrollHook;
