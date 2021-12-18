import React from "react";
import g_11 from "@assets/images/game/g_11.jpg";
import g_12 from "@assets/images/game/g_12.jpg";
import g_13 from "@assets/images/game/g_13.jpg";
import g_14 from "@assets/images/game/g_14.jpg";
import g_15 from "@assets/images/game/g_15.jpg";
// import g_21 from "@assets/images/game/g_21.jpg";
// import g_22 from "@assets/images/game/g_22.jpg";
// import g_23 from "@assets/images/game/g_23.jpg";
// import g_24 from "@assets/images/game/g_24.jpg";
// import g_25 from "@assets/images/game/g_25.jpg";
import g_31 from "@assets/images/game/g_31.jpg";
import g_32 from "@assets/images/game/g_32.jpg";
import g_33 from "@assets/images/game/g_33.jpg";
import g_34 from "@assets/images/game/g_34.jpg";
import g_35 from "@assets/images/game/g_35.jpg";
import g_41 from "@assets/images/game/g_41.png";
import g_42 from "@assets/images/game/g_42.png";
import g_43 from "@assets/images/game/g_43.png";
import g_44 from "@assets/images/game/g_44.png";
import g_45 from "@assets/images/game/g_45.png";
// import onesoft from "@assets/images/partner/onesoft.png";
import arcadedota from "@assets/images/partner/arcadedota.png";
import incom_studio from "@assets/images/partner/incom_studio.png";
import weeb_games from "@assets/images/partner/weeb_games.png";

const Section: React.FC = () => {
  return (
    <div className="bx-section section-games" id="bx-games">
      <div className="container">
        <div className="bx-games">
          <div className="bx-header">
            <h2 className="bx-header-title">Trial Games in our platform</h2>
          </div>
		  <div className="bx-content">
			<div className="list-games">
				<div className="list-col">
					<div className="list-left">
						<div className="item-game logo">
							<div className="item-inner">
								<img src={incom_studio} className="img-fluid" alt="" />
							</div>
						</div>
						<div className="item-game">
							<div className="item-inner">
								<img src={g_11} className="img-fluid" alt="" />
							</div>
						</div>
						<div className="item-game">
						<div className="item-inner">
								<img src={g_12} className="img-fluid" alt="" />
							</div>
						</div>
						<div className="item-game">
						<div className="item-inner">
								<img src={g_13} className="img-fluid" alt="" />
							</div>
						</div>
						<div className="item-game">
						<div className="item-inner">
								<img src={g_14} className="img-fluid" alt="" />
							</div>
						</div>
						<div className="item-game">
						<div className="item-inner">
								<img src={g_15} className="img-fluid" alt="" />
							</div>
						</div>
					</div>
					<div className="list-right">
					<div className="item-game">
						<div className="item-inner">
							<img src={g_32} className="img-fluid" alt="" />
						</div>
					</div>
					<div className="item-game">
						<div className="item-inner">
							<img src={g_31} className="img-fluid" alt="" />
						</div>
					</div>
					<div className="item-game logo">
						<div className="item-inner">
							<img src={weeb_games} className="img-fluid" alt="" />
						</div>
					</div>
					<div className="item-game">
					<div className="item-inner">
							<img src={g_33} className="img-fluid" alt="" />
						</div>
					</div>
					<div className="item-game">
					<div className="item-inner">
							<img src={g_34} className="img-fluid" alt="" />
						</div>
					</div>
					<div className="item-game">
					<div className="item-inner">
							<img src={g_35} className="img-fluid" alt="" />
						</div>
					</div>
					
					</div>
				</div>
				<div className="list-row">
					
						<div className="item-game">
							<div className="item-inner">
								<img src={g_41} className="img-fluid" alt="" />
							</div>
						</div>
						<div className="item-game ">
							<div className="item-inner">
								<img src={g_42} className="img-fluid" alt="" />
							</div>
						</div>
						<div className="item-game logo">
						<div className="item-inner">
								<img src={arcadedota} className="img-fluid" alt="" />
							</div>
						</div>
						<div className="item-game">
						<div className="item-inner">
								<img src={g_43} className="img-fluid" alt="" />
							</div>
						</div>
						<div className="item-game">
						<div className="item-inner">
								<img src={g_44} className="img-fluid" alt="" />
							</div>
						</div>
						<div className="item-game">
						<div className="item-inner">
								<img src={g_45} className="img-fluid" alt="" />
							</div>
						</div>
				</div>
			</div>	
		  </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
