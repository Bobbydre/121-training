import React from "react";
import Text, { TEXT_TYPE_CLASSES } from "@/snippets/text/text.snippet";
import Subscribe from "./index/subscribe.sub";

export default function Hero() {
  const { title, subtitle } = TEXT_TYPE_CLASSES;
  return (
    <section>
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <Text textType="title" className="gradientText">
            Your crypto. <br />
            Family style.
          </Text>
          <Text textType="subtitle">
            Explore Ethereum with the best wallet for iOS. <br />
            Interacting with crypto has never been so simple
          </Text>
          <Subscribe />
        </div>
      </div>
    </section>
  );
}
