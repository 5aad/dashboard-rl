import React from "react";
import "./dashboard.scss";
import BtnBrand, { Cards } from "./BtnBrnad";
import hideout from "../images/hideout.png";
import adscend from "../images/adscend.png";
import kiwiwall from "../images/kiwiwall.png";
import offertoro from "../images/offertoro.png";
import personally from "../images/personally.png";
import adgate from "../images/adgate.png";
import wannads from "../images/wannads.png";
import rlsupply1 from "../images/rlsupply1.png";
import dollar from "../images/dollar.png";

import earn from "../images/view-dashboard.png";
import users from "../images/account-multiple.png";
import cart from "../images/cart.png";
import faq from "../images/frequently-asked-questions.png";
import rank from "../images/rank.png";
import setting from "../images/settings.png";
import wallet from "../images/wallet-travel.png";
import { Tabs } from "antd";

const { TabPane } = Tabs;

class Dashbord extends React.Component {
  state = {
    selectedTab: "SURVEY"
  };

  render() {
    return (
      <>
        <div className="d-flex" id="wrapper">
          {/* <!-- Sidebar --> */}
          <div className="   border-right " id="sidebar-wrapper">
            <div className="sidebar-heading">
              <img alt="" src={rlsupply1} className="imgsiz" />
              <div className="bg-textc mt-3 ">
                {/* add fontawsome script file in public folder html file */}
                <p className="mb-0">
                  HighonBelvita<i className="fas fa-cog pl-4"></i>
                </p>
                <div className="bg-textd">
                  <div className="row ce">
                    <img
                      className="pl-2 pt-1 pr-1"
                      height="20px"
                      alt=""
                      src={dollar}
                    />
                    <p className="mb-0">250,678</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-group list-group-flush">
              <a href="!#" className="list-group-item list-group-item-action ">
                <img className=" pr-3" alt="" src={earn} height="20px" />
                Earn
              </a>
              <a href="!#" className="list-group-item list-group-item-action ">
                <img className=" pr-3" alt="" src={cart} height="20px" />
                Store
              </a>
              <a href="!#" className="list-group-item list-group-item-action ">
                <img className=" pr-3" alt="" src={wallet} height="20px" />
                Wallet
              </a>
              <a href="!#" className="list-group-item list-group-item-action ">
                <img className=" pr-3" alt="" src={rank} height="20px" />
                Leaderboard
              </a>
              <a href="!#" className="list-group-item list-group-item-action ">
                <img className=" pr-3" alt="" src={users} height="20px" />
                Referrals
              </a>
              <a href="!#" className="list-group-item list-group-item-action ">
                <img className=" pr-3" alt="" src={setting} height="20px" />
                Settings
              </a>
              <a href="!#" className="list-group-item list-group-item-action ">
                <img className=" pr-3" alt="" src={faq} height="20px" />
                FAQ
              </a>
            </div>
            <div className="sidebar-headings">
              <div className="bg-texte">
                <div className="row ce">
                  {/* add fontawsome script file in public folder html file */}
                  <i className="fab fa-discord fa-3x pr-3"></i>
                  <i className="fab fa-steam fa-3x pl-3"></i>
                </div>
              </div>
              <p className="mb-0 text-center">
                &copy; {new Date().getFullYear()}
                <a href="https://www.Rlsupply.com" className="text-white">
                  {" "}
                  RL.Supply{" "}
                </a>
                <br />
                <small>Terms of Service-Privacy</small>
                <br />
                <small>This site is not affiliated with Psyonix LLC</small>
              </p>{" "}
            </div>
          </div>
          {/* <!-- /#sidebar-wrapper --> */}
          {/* 
<!-- Page Content --> */}
          <div id="page-content-wrapper">
            <div className="container-fluid h-100">
              <div className="bg-image h-100">
                <div className="mx-3 pt-1  h-100">
                  <div className="bg-texta my-1 ">
                    <div className="container ">
                      <div className="row  ce">
                        <i className="fas fa-bars pt-1 pr-3"></i>
                        <img
                          className="pl-2 pt-1 pr-1"
                          height="20px"
                          alt=""
                          src={dollar}
                        />
                        <p className="mb-0">5000 HighonBelvita</p>

                        <img
                          className="pl-2 pt-1 pr-1"
                          height="20px"
                          alt=""
                          src={dollar}
                        />
                        <p className="mb-0">5000 Xodum</p>

                        <img
                          className="pl-2 pt-1 pr-1"
                          height="20px"
                          alt=""
                          src={dollar}
                        />
                        <p className="mb-0">450 Xodum</p>

                        <img
                          className="pl-2 pt-1 pr-1"
                          height="20px"
                          alt=""
                          src={dollar}
                        />
                        <p className="mb-0">5000 HighonBelvita</p>

                        <img
                          className="pl-2 pt-1 pr-1"
                          height="20px"
                          alt=""
                          src={dollar}
                        />
                        <p className="mb-0">5000 Xodum</p>

                        <img
                          className="pl-2 pt-1 pr-1"
                          height="20px"
                          alt=""
                          src={dollar}
                        />
                        <p className="mb-0">20 Viral</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-textb my-2">
                    <img alt="" src={dollar} />
                  </div>
                  <div className="bg-text" style={{ height: "88%" }}>
                    <div className="containers container ">
                      <section id="tabs" className="project-tab">
                        <div className="row">
                          <div className="col">
                            <nav>
                              <div
                                className="nav nav-tabs nav-fill"
                                id="nav-tab"
                                role="tablist"
                              >
                                <a
                                  className={`nav-item nav-link mr-4 ${
                                    this.state.selectedTab == "SURVEY"
                                      ? "active"
                                      : ""
                                  }`}
                                  id="nav-home-tab"
                                  data-toggle="tab"
                                  href="#nav-home"
                                  role="tab"
                                  aria-controls="nav-home"
                                  aria-selected="true"
                                  onClick={() =>
                                    this.setState({ selectedTab: "SURVEY" })
                                  }
                                >
                                  <h2 style={{ color: "white" }}>
                                    Surveys/Downloads
                                  </h2>
                                </a>
                                <a
                                  className={`nav-item nav-link ml-2 ${
                                    this.state.selectedTab == "VIDEOS"
                                      ? "active"
                                      : ""
                                  }`}
                                  id="nav-profile-tab"
                                  data-toggle="tab"
                                  href="#nav-profile"
                                  role="tab"
                                  aria-controls="nav-profile"
                                  aria-selected="false"
                                  onClick={() =>
                                    this.setState({ selectedTab: "VIDEOS" })
                                  }
                                >
                                  <h2 style={{ color: "white" }}>Videos</h2>
                                </a>
                              </div>
                            </nav>
                            {this.state.selectedTab == "SURVEY" ? (
                              <div
                                className="tab-content mt-4"
                                id="nav-tabContent"
                              >
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-home"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                >
                                  <div className="row">
                                    <div className="col-md-3 pl-md-1 pr-md-1 adsend">
                                      <BtnBrand imgs={adscend} hghts="30px" />
                                    </div>
                                    <div className="col-md-3 pl-md-0 pr-md-1 ">
                                      <BtnBrand
                                        classNames="pl-4"
                                        imgs={kiwiwall}
                                        hghts="30px"
                                      />
                                    </div>
                                    <div className="col-md-3 pl-md-0 pr-md-1 ">
                                      <BtnBrand
                                        classNames="pl-4"
                                        imgs={offertoro}
                                        hghts="30px"
                                      />
                                    </div>
                                    <div className="col-md-3 pl-md-0 pr-md-1 ">
                                      <BtnBrand
                                        classNames="pl-4"
                                        imgs={adgate}
                                        hghts="30px"
                                      />
                                    </div>
                                  </div>
                                  <div className="row mt-2">
                                    <div className="col-md-3 pl-md-1 pr-md-1 ">
                                      <BtnBrand
                                        classNames="py-2 pl-4"
                                        imgs={wannads}
                                        hghts="30px"
                                      />
                                    </div>
                                    <div className="col-md-3 pl-md-0 pr-md-1 ">
                                      <BtnBrand
                                        classNames="pl-4"
                                        imgs={personally}
                                        hghts="30px"
                                      />
                                    </div>
                                    <div className="col-md-3 pl-md-0 pr-md-1 ">
                                      <BtnBrand
                                        classNames="pl-4"
                                        imgs={hideout}
                                        hghts="30px"
                                      />
                                    </div>
                                    <div className="col-md-3 pl-md-0 pr-md-1 ">
                                      <BtnBrand
                                        classNames="pl-4"
                                        imgs={hideout}
                                        hghts="30px"
                                        text="Coming Soon"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-profile"
                                  role="tabpanel"
                                  aria-labelledby="nav-profile-tab"
                                >
                                  <h5>Videos</h5>
                                </div>
                              </div>
                            ) : (
                              <div className="video-section "></div>
                            )}
                          </div>
                        </div>
                      </section>

                      <div className="text-center mb-3 mt-5">
                        <h2 className="text-white pt-4">Bonus</h2>
                      </div>
                      <div className="row mt-2">
                        <div className="col-md-6 pl-md-1 pr-1">
                          <Cards />
                        </div>
                        <div className="col-md-6 pr-1">
                          <Cards />
                        </div>
                      </div>
                      <div className="row mt-2 pb-4">
                        <div className="col-md-6 pl-md-1 pr-1">
                          <Cards />
                        </div>
                        <div className="col-md-6 pr-1">
                          <Cards />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /#page-content-wrapper --> */}
        </div>
      </>
    );
  }
}

export default Dashbord;
