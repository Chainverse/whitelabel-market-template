import React, { useState, useEffect } from "react";
import roadmap from "@assets/images/roadmap/roadmap.svg";

import r1 from "@assets/images/roadmap/r1.svg";
import r2 from "@assets/images/roadmap/r2.svg";
import r3 from "@assets/images/roadmap/r3.svg";
import r4 from "@assets/images/roadmap/r4.svg";
import r5 from "@assets/images/roadmap/r5.svg";


const Section: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className="bx-section section-roadmap" id="bx-roadmap">
      <div className="container">
        <div className="bx-roadmap">
          <div className="bx-header">
            <h2 className="bx-header-title">Roadmap</h2>
          </div>
          <div className="bx-content">
            {width > 990 && (
              <div className="list-roadmap-1">
                <img src={roadmap} className="img-fluid" alt="" />
                <div className="list-item">
                  <div className="item-roadmap item-1">
                    <ul>
                      <li>Android, iOS SDK</li>
                      <li>Core Service Smart Contract</li>
                      <li>Reference Games</li>
                    </ul>
                  </div>
                  <div className="item-roadmap item-2">
                    <ul>
                      <li>Wallet</li>
                      <li>NFT Builder</li>
                      <li>Marketplace</li>
                      <li>Atlas</li>
                      <li>Other Services</li>
                    </ul>
                  </div>
                  <div className="item-roadmap item-3">
                    <ul>
                      <li>NFT Explorer</li>
                      <li>Developer Portal</li>
                      <li>Payment Gateway</li>
                    </ul>
                  </div>
                  <div className="item-roadmap item-4">
                    <ul>
                      <li>ChainVerse Testnet: Cerberus Network</li>
                      <li>Two-way asset bridge</li>
                    </ul>
                  </div>
                  <div className="item-roadmap item-5">
                    <ul>
                      <li>ChainVerse Main Net: Nibiru Network</li>
                      <li>Asset migration</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {width <= 990 && (
              <div className="list-roadmap-2">
                <div className="list-item">
                  <div className="item-roadmap item-1">
                    <div className="item-roadmap-icon">
                      <img src={r1} className="img-fluid" alt="" />
                    </div>
                    <ul>
                      <li>Android, iOS SDK</li>
                      <li>Core Service Smart Contract</li>
                      <li>Reference Games</li>
                    </ul>
                  </div>
                  <div className="item-roadmap item-2">
                    <div className="item-roadmap-icon">
                      <img src={r2} className="img-fluid" alt="" />
                    </div>
                    <ul>
                      <li>Wallet</li>
                      <li>NFT Builder</li>
                      <li>Marketplace</li>
                      <li>Atlas</li>
                      <li>Other Services</li>
                    </ul>
                  </div>
                  <div className="item-roadmap item-3">
                    <div className="item-roadmap-icon">
                      <img src={r3} className="img-fluid" alt="" />
                    </div>
                    <ul>
                      <li>NFT Explorer</li>
                      <li>Developer Portal</li>
                      <li>Payment Gateway</li>
                    </ul>
                  </div>
                  <div className="item-roadmap item-4">
                    <div className="item-roadmap-icon">
                      <img src={r4} className="img-fluid" alt="" />
                    </div>
                    <ul>
                      <li>ChainVerse Testnet: Cerberus Network</li>
                      <li>Two-way asset bridge</li>
                    </ul>
                  </div>
                  <div className="item-roadmap item-5">
                    <div className="item-roadmap-icon">
                      <img src={r5} className="img-fluid" alt="" />
                    </div>
                    <ul>
                      <li>ChainVerse Main Net: Nibiru Network</li>
                      <li>Asset migration</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
