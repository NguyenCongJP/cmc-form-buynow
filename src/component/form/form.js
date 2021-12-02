import React, { Component } from "react";
import { ethers } from "ethers";
import { useEffect, useState } from 'react';
import { Belly__factory } from "../contracts/types";
import cmcicon from "../../assest/img/favicon_cmc.png"
import walleticon from "../../assest/img/wallet-logo.png"
import bellyicon from "../../assest/img/belly-icon.png"
import logoheader from "../../assest/img/Logo_CMC-scan_3_1024px.png"
import bnbicon from "../../assest/img/bnb-icon.png"
import '../../assest/css/style.css';


function Form() {

    const [provider, setProvider] = useState();
    const [account, setAccount] = useState([""]);
    const [tokenBalance, setTokenBalance] = useState([0]);
    const [addressTo, setAddressTo] = useState([0]);
    const [amount, setAmount] = useState([0]);

    useEffect(() => {
        getProvider()
    }, []);

    const getProvider = () => {
        if (window.ethereum?.request) {
            const newProvider = new ethers.providers.Web3Provider(window.ethereum)
            setProvider(newProvider)
        }
    }

    useEffect(async () => {
        if (provider) {
            await connect();
        }
    }, [provider]);

    useEffect(() => {
        window.ethereum.on('accountChanged', async (accounts) => {
            if (accounts[0]) {
                setAccount(accounts[0]);
            }
            if (accounts.lenght === 0) {
                setAccount("")
                setTokenBalance("")
            }
        });
    }, [provider]);

    const connect = async () => {
        if (!window.ethereum?.request) {
            alert("MetaMask is not installed.!")
        } else {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            await setAccount(accounts[0]);
        }
    }


    useEffect(async () => {
        await getBalance()
    }, [account]);

    const getBalance = async () => {
        if (provider && account) {
            const TOKEN_ADD = "0xED11DeCcaFe8f97bc9aeE9017ACB300733F58f69";
            const token = Belly__factory.connect(TOKEN_ADD, provider.getSigner());
            const rawBalance = await token.balanceOf(account);
            const decimals = await token.decimals();
            const balance = ethers.utils.formatUnits(rawBalance, decimals);
            setTokenBalance(balance);
        }
    }

    // useEffect(() => {
    //     // @ts-ignore
    //     window.ethereum.on('chainChanged', async (chainId) => {
    //         if (chainId !== '0x61') {
    //             await actionChainChange()
    //         } else {
    //             await getProvider()
    //         }
    //     });
    // }, []);

    // // @ts-ignore
    // useEffect(async () => {
    //     await actionChainChange()
    // })

    // const actionChainChange = async () => {
    //     if (!window.ethereum) {
    //         try {
    //             // check if the chain to connect to is installed
    //             // @ts-ignore
    //             await !window.ethereum.request({
    //                 method: 'wallet_switchEthereumChain',
    //                 params: [{ chainId: '0x61' }], // chainId must be in hexadecimal numbers
    //             });
    //         } catch (error) {
    //             // This error code indicates that the chain has not been added to MetaMask
    //             // if it is not, then install it into the user MetaMask
    //             // @ts-ignore
    //             if (error.code === 4902) {
    //                 try {
    //                     // @ts-ignore
    //                     await !window.ethereum.request({
    //                         method: 'wallet_addEthereumChain',
    //                         params: [
    //                             {
    //                                 chainId: '0x61',
    //                                 rpcUrl: 'https://data-seed-prebsc-2-s3.binance.org:8545/',
    //                             },
    //                         ],
    //                     });
    //                 } catch (addError) {
    //                     console.error(addError);
    //                 }
    //             }
    //             console.error(error);
    //         }
    //     } else {
    //         // if no window.ethereum then MetaMask is not installed
    //         alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
    //     }
    // }

    // // @ts-ignore
    // const getAmountChange = (e) => {
    //     setAmount(e.target.value)
    // }

    // // @ts-ignore
    // const getAddressToChange = (e) => {
    //     setAddressTo(e.target.value)
    // }


    const [cmcValue, setCmcValue] = useState(0);
    const [bellyValue, setBellyValue] = useState(0);
    const handleCmcValue = (event) => {
        setCmcValue(Number(event.target.value));
        // console.log(cmcValue);
        setBellyValue(Number(event.target.value));
    }

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
                            <button
                                type="button"
                                className="btn btnCMC btn-lg text-white"
                                onClick={async () => {
                                    await connect();
                                    await getBalance();
                                }}>Connect Wallet</button>
                        </a>
                    </div>
                </div>
            </nav>
            <div className="row bg-gradient-info text-center d-none d-xl-block d-lg-block d-md-block col-12 col-lg-12"></div>
            <div className="row d-flex justify-content-end align-content-center mt-2 mr-3 mb-2">
                <div className="d-flex justify-content-end align-content-center walletIcon mr-3">
                    <span className="justify-content-end align-content-center">{account}</span>
                    <img src={walleticon} alt="Wallet Icon" />
                </div>
            </div>
            <div className="row d-flex justify-content-end align-content-center mt-2 mr-3 mb-2">
                <div className="d-flex justify-content-end align-content-center walletIcon mr-3">
                    <span className="justify-content-end align-content-center">{tokenBalance}</span>
                    <img src={bellyicon} alt="Coin Icon" />
                </div>
            </div>
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

                                            <input
                                                id="input1"
                                                type="number"
                                                className="col-lg-10"
                                                onChange={(e) => handleCmcValue(e)}
                                            />
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
                                            <input id="input2" value={bellyValue} type="text" disabled className="col-lg-10"></input>
                                        </div>

                                        <div className="row d-flex justify-content-end align-items-center d-none d-md-flex mt-5">
                                            <a aria-haspopup="true" href="#" aria-expanded="false">
                                                <button type="button" className="btn btnCMC btn-lg text-white">
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

export default Form;