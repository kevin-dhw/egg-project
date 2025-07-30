"use client";

import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import Header from "./header";
import Home from "./home";
import Story from "./story";
import Trading from "./trading";
import Market from "./market";
import Tokenomics from "./tokenomics";
import Listing from "./listings";

const Desktop = () => {
  const [scrollTop, setScrollTop] = useState<number | undefined>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = containerRef.current;
    const onScroll = () => setScrollTop(node?.scrollTop);
    node?.addEventListener("scroll", onScroll);
    return () => node?.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={classNames(" h-screen flex flex-col ")}>
      <div>
        <Header scrollTop={scrollTop} />
      </div>
      <div
        ref={containerRef}
        className=" flex-1 h-[calc(100%-48px)] overflow-auto  border bg-[#fef7ec]"
        style={{ height: 200, overflow: "auto", border: "1px solid #ccc" }}
      >
        <Home></Home>
        <Story></Story>
        <Trading></Trading>
        <Market></Market>
        <Tokenomics></Tokenomics>
        <Listing></Listing>
      </div>
    </div>
  );
};
export default Desktop;
