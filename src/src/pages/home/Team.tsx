import React from "react";
import team_1 from "@assets/images/team/team_1.jpg";
import team_2 from "@assets/images/team/team_2.jpg";
import team_3 from "@assets/images/team/team_3.jpg";
import team_4 from "@assets/images/team/team_4.jpg";
import team_5 from "@assets/images/team/team_5.jpg";
import team_7 from "@assets/images/team/team_7.jpg";
import team_8 from "@assets/images/team/team_8.jpg";
import team_9 from "@assets/images/team/team_9.jpg";
import team_10 from "@assets/images/team/team_10.jpg";
import team_11 from "@assets/images/team/team_11.jpg";

const Section: React.FC = () => {
  return (
    <React.Fragment>
      <div className="bx-section section-team" id="bx-team">
        <div className="container">
          <div className="bx-team" style={{ marginBottom: 100 }}>
            <div className="bx-header">
              <h2 className="bx-header-title">Core Team</h2>
            </div>
            <div className="bx-content">
              <div className="list-team team-core">
                <div className="item-team flip-card">
                  <div className="item-info flip-card-inner">
                    <div className="item-flip flip-card-front card-item-content">
                      <div className="item-info-avatar">
                        <img src={team_1} alt="" />
                      </div>
                      <h5 className="item-info-title">Tuan Minh Nguyen</h5>
                      <p className="item-info-meta">CEO & Founder</p>
                    </div>
                    <div className="item-flip flip-card-back card-item-content">
                      <p className="item-info-team">
                        Tuan is a gaming industry veteran who developed early
                        cross-border payment solutions for this space in
                        South-East Asia.
                        <br />
                        <br />
                        He has a Bachelor's degree in E-Commerce and Information
                        Systems from Victoria University of Wellington, New
                        Zealand.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item-team flip-card">
                  <div className="item-info flip-card-inner">
                    <div className="item-flip flip-card-front card-item-content">
                      <div className="item-info-avatar">
                        <img src={team_3} alt="" />
                      </div>
                      <h5 className="item-info-title">Vu Van Nguyen</h5>
                      <p className="item-info-meta">CTO</p>
                    </div>

                    <div className="item-flip flip-card-back card-item-content">
                      <p className="item-info-team">
                        Vu is a gaming and fintech expert who led the tech
                        expansion of a startup that grew into a hundred-million
                        -dollar company.
                        <br />
                        <br />
                        He has a Bachelor's degree in Information Technology
                        from VNU-University of Engineering and Technology.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item-team flip-card">
                  <div className="item-info flip-card-inner">
                    <div className="item-flip flip-card-front card-item-content">
                      <div className="item-info-avatar">
                        <img src={team_7} alt="" />
                      </div>
                      <h5 className="item-info-title">Robert Vong</h5>
                      <p className="item-info-meta">COO</p>
                    </div>
                    <div className="item-flip flip-card-back card-item-content">
                      <p className="item-info-team">
                        Robert is a distributed ledger advocate who focuses on
                        blockchain token economic design.
                        <br />
                        <br />
                        He has an MBA with specialization in Financial
                        Instruments from New York University and an Engineering
                        degree from RMIT University, Australia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item-team flip-card">
                  <div className="item-info flip-card-inner">
                    <div className="item-flip flip-card-front card-item-content">
                      <div className="item-info-avatar">
                        <img src={team_4} alt="" />
                      </div>
                      <h5 className="item-info-title">Lien Nguyen</h5>
                      <p className="item-info-meta">CFO</p>
                    </div>
                    <div className="item-flip flip-card-back card-item-content">
                      <p className="item-info-team">
                        Lien is a corporate development specialist with
                        experience in game licensing, compliance, and capital
                        raising.
                        <br />
                        <br />
                        She has an MBA from National University of Singapore and
                        an Economics degree from Randolph College, USA.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item-team flip-card">
                  <div className="item-info flip-card-inner">
                    <div className="item-flip flip-card-front card-item-content">
                      <div className="item-info-avatar">
                        <img src={team_2} alt="" />
                      </div>
                      <h5 className="item-info-title">Tue Tai Nguyen</h5>
                      <p className="item-info-meta">Head of Engineering</p>
                    </div>
                    <div className="item-flip flip-card-back card-item-content">
                      <p className="item-info-team">
                        Tue is a Facebook Challenge first-prize winner who led
                        the development of the most popular third-party app
                        store in the country.
                        <br />
                        <br />
                        He has a Bachelor's degree in Software Engineering from
                        VNU-University of Engineering and Technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bx-team">
            <div className="bx-header">
              <h2 className="bx-header-title">Advisors</h2>
            </div>
            <div className="bx-content">
              <div className="list-team team-advisors">
                <div className="item-team  flip-card">
                  <div className="item-info flip-card-inner">
                    <div className="item-flip flip-card-front card-item-content">
                      <div className="item-info-avatar">
                        <img src={team_5} alt="" />
                      </div>
                      <h5 className="item-info-title">Loi Luu</h5>
                      <p className="item-info-meta">
                        CEO & Co-founder, Kyber Network
                      </p>
                    </div>
                    <div className="item-flip flip-card-back card-item-content">
                      <p className="item-info-advisors">
                        Loi was listed in Forbes 30 Under 30 Asia and made MIT
                        Technology Review's Top-10 Innovators Under 35 Asia
                        Pacific for his work in improving public blockchain
                        infrastructure base layers.
                        <br />
                        <br />
                        Kyber Network is a blockchain-based liquidity hub that
                        connects liquidity from a wide range of sources to power
                        instant and secure crypto exchange in any decentralized
                        application.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item-team flip-card">
                  <div className="item-info flip-card-inner">
                    <div className="item-flip flip-card-front card-item-content">
                      <div className="item-info-avatar">
                        <img src={team_10} alt="" />
                      </div>
                      <h5 className="item-info-title">Zhuling Chen</h5>
                      <p className="item-info-meta">CEO, RockX</p>
                    </div>
                    <div className="item-flip flip-card-back card-item-content">
                      <p className="item-info-advisors">
                        Zhuling formerly headed AELF, a multilayer parallel
                        computing distributed net- work. He brings an extensive
                        business network through prior experience in manage-ment
                        consulting and leading the MIT-China Innovation &
                        Entrepreneurship Forum.
                        <br />
                        <br />
                        RockX is a public blockchain staking service that makes
                        digital assets more accessible and rewarding for clients
                        across the spectrum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item-team flip-card">
                  <div className="item-info flip-card-inner">
                    <div className="item-flip flip-card-front card-item-content">
                      <div className="item-info-avatar">
                        <img src={team_11} alt="" />
                      </div>
                      <h5 className="item-info-title">Thy Tang</h5>
                      <p className="item-info-meta">CTO, Quint Group</p>
                    </div>
                    <div className="item-flip flip-card-back card-item-content">
                      <p className="item-info-advisors">
                      Thy is a serial entrepreneur with CTO experience in business and technology disciplines covering e-commerce, payment processing, and cross-platform development solutions.
                      <br />
                        <br />
Quint is a UK-based fintech group that services over 50,000 international consumers daily and over 200 consumer credit businesses. It originates over £1.5 billion of consumer lending annually in the UK.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item-team flip-card">
                  <div className="item-info flip-card-inner">
                    <div className="item-flip flip-card-front card-item-content">
                      <div className="item-info-avatar">
                        <img src={team_8} alt="" />
                      </div>
                      <h5 className="item-info-title">Tuan Anh Do</h5>
                      <p className="item-info-meta">
                        CEO & Founder, Appota Corporation
                      </p>
                    </div>
                    <div className="item-flip flip-card-back card-item-content">
                      <p className="item-info-advisors">
                        Tuan Anh is an entrepreneur with a passion for mobile
                        and gaming. He founded and grew Appota into one of the
                        top game publishers in the country with diversified
                        digital interests.
                        <br />
                        <br />
                        Appota is a digital entertain-ment content pioneer in
                        Vietnam with over 55 million users. As one of the
                        top-three game publishers, Appota is an official partner
                        of the Facebook Gaming Creator Network.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item-team flip-card">
                  <div className="item-info flip-card-inner">
                    <div className="item-flip flip-card-front card-item-content">
                      <div className="item-info-avatar">
                        <img src={team_9} alt="" />
                      </div>
                      <h5 className="item-info-title">Kenneth Oh</h5>
                      <p className="item-info-meta">
                        Senior Partner, Dentons Rodyk & Davidson
                      </p>
                    </div>
                    <div className="item-flip flip-card-back card-item-content">
                      <p className="item-info-advisors">
                        Kenneth advises on token offerings, blockchain project
                        M&A, and initiatives such as crypto exchanges, OTCs, and
                        crypto funds. He is an advisor to projects, including
                        AELF, GCOX, and Kyber Network.
                        <br />
                        <br />
                        Dentons Rodyk is one of Singapore's largest and oldest
                        law firms offering clients a full suite of legal
                        services necess-ary to do business locally and globally.
                      </p>
                    </div>
                  </div>
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
