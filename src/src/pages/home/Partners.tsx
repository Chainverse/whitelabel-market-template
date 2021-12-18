import React from "react";
import appota from "@assets/images/partner/appota.png";
import acquired from "@assets/images/partner/acquired.png";
import incom_studio from "@assets/images/partner/incom_studio.png";
import kyber_network from "@assets/images/partner/kyber_network.png";
// import onesoft from "@assets/images/partner/onesoft.png";
import arcadedota from "@assets/images/partner/arcadedota.png";
// import quint from "@assets/images/partner/quint.png";
import rockx from "@assets/images/partner/rockx.png";
import weeb_games from "@assets/images/partner/weeb_games.png";
import world_of_fighter from "@assets/images/partner/world_of_fighter.png";
import roosterbattle from "@assets/images/partner/roosterbattle.png";

const Section: React.FC = () => {
  return (
    <React.Fragment>
      <div className="bx-section section-partners" id="bx-partners">
        <div className="container">
          <div className="bx-partners">
            <div className="bx-header">
              <h2 className="bx-header-title">Partners</h2>
            </div>
            <div className="bx-content">
              <div className="list-partners">
                <div className="item-partners">
                  <img src={appota} className="img-fluid" alt="" />
                </div>
                <div className="item-partners">
                  <img src={kyber_network} className="img-fluid" alt="" />
                </div>
                <div className="item-partners">
                  <img src={rockx} className="img-fluid" alt="" />
                </div>
                {/* <div className="item-partners">
                  <img src={quint} className="img-fluid" alt="" />
                </div> */}
                <div className="item-partners">
                  <img src={acquired} className="img-fluid" alt="" />
                </div>
                <div className="item-partners">
                  <img src={arcadedota} className="img-fluid" alt="" />
                </div>
                <div className="item-partners">
                  <img src={incom_studio} className="img-fluid" alt="" />
                </div>
                <div className="item-partners">
                  <img src={world_of_fighter} className="img-fluid" alt="" />
                </div>
                <div className="item-partners">
                  <img src={weeb_games} className="img-fluid" alt="" />
                </div>
                <div className="item-partners">
                  <img src={roosterbattle} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section;
