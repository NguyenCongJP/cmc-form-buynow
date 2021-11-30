import React, { Component } from "react";
import cmcicon from "../../assest/img/favicon_cmc.png"
import logoheader from "../../assest/img/Logo_CMC-scan_3_1024px.png"
import bnbicon from "../../assest/img/bnb-icon.png"
import '../../assest/css/style.css';


class Form extends Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar-top navbar-dark navbar navbar-expand-md">
                    <div className="navbar-brand d-none d-xl-block d-lg-block d-md-block col-lg-9 col-md-9 col-sm-9 col-xs-9 navImg" href="#">
                        <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="/">
                            <img src={logoheader} alt="CMC Logo" className="navbar-brand-img navImg" />
                        </a>
                    </div>
                    <div>
                        <div className="align-items-center d-none d-md-flex navbar-nav">
                            <a aria-haspopup="true" href="#" aria-expanded="false">
                                <button type="button" className="btn btnCMC btn-lg text-white">
                                    Connect Wallet</button>
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="row bg-gradient-info text-center d-none d-xl-block d-lg-block d-md-block col-12 col-lg-12"></div>
                <div className="row d-flex justify-content-center mt-3 pb-7">
                    <div className="shadow card d-flex mt-5">
                        <div className="card-body">
                            <div className="d-flex justify-content-center align-content-center flex-wrap legend">
                                <h4>Sale</h4>
                            </div>
                            <div className="form-group mt-3">
                                <form>
                                    <fieldset>
                                        <div className="form-group mt-3 mb-5 justify-content-center">
                                            <div className="row">
                                                <span>Remaining amount of tokens: ~0</span>
                                            </div>
                                            <div className="row d-flex iconItems mt-1 mb-2">
                                                <span className="col-lg-2 d-flex">
                                                    <img src={cmcicon} alt="Cmc Icon" />
                                                </span>

                                                <input id="input1" type="number" className="col-lg-10"></input>
                                            </div>
                                        </div>

                                        <div className="form-group mt-5 mb-2 justify-content-center">
                                            <div className="row">
                                                <span>Total BNB assets: ~0</span>
                                            </div>
                                            <div className="row d-flex iconItems mt-1 mb-2">
                                                <span className="col-lg-2 d-flex">
                                                    <img src={bnbicon} alt="Cmc Icon" />
                                                </span>
                                                <input id="input2" type="text" disabled className="col-lg-10"></input>
                                            </div>

                                            <div className="row d-flex justify-content-end align-items-center d-none d-md-flex mt-5">
                                                <a aria-haspopup="true" href="#" aria-expanded="false">
                                                    <button type="button" className="btn btnCMC btnBuyNow btn-lg text-white">
                                                    Buy Now</button>
                                                </a>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;