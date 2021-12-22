import React from "react";
import { Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import i_closeModal from '@assets/images/i_closeModal.svg';
import i_token from '@assets/images/i_token.png';
import p_1 from '@assets/images/p-1.png';

interface ModalBuyProps {
    show: boolean;
    onHide?: () => void;
}

const ModalBuy: React.FC<ModalBuyProps> = props => {

    return (
        <Modal show={props.show} size="sm" className="modal-login" aria-labelledby="modal-login" centered>
            <div className="modal-header">
                <h5 className="modal-title">Complete checkout</h5>
                <div onClick={props.onHide} className="close" >
                    <img src={i_closeModal} width="40" height="40" alt="" />
                </div>
            </div>
            <div className="modal-body">
                <div className="buyInfo">
                    <div className="buyRow py-2">
                        <div>Item</div>
                        <div>Subtotal</div>
                    </div>
                    <div className="buyRow pl-3">
                        <NavLink to="#" className="buyInfoItem">
                            <img src={p_1} alt="" />
                            <span className="d-flex flex-column">
                                <span className="mb-1">ThorGuards #4195</span>
                                <span className="text-primary small">#4195</span>
                            </span>
                        </NavLink>
                        <div className="text-right">
                            <div className="mb-1"><img src={i_token} width="16" height="16" alt="" /> 150 STRT</div>
                            <div className="small text-secondary">≈ $ 149.91</div>
                        </div>
                    </div>
                    <div className="buyRow">
                        <div>Total</div>
                        <div className="text-right">
                            <div className="text-primary mb-1"><img src={i_token} width="16" height="16" alt="" /> 150 STRT</div>
                            <div className="small text-secondary">≈ $ 149.91</div>
                        </div>
                    </div>
                </div>
                <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="agreeCheck" />
                    <label className="form-check-label" >
                        By checking this box, I agree to StarryNift's Terms of Service
                    </label>
                </div>
            </div>
            <div className="modal-footer mx-auto w-100">
                <button type="submit" className="btn btn-primary btn-block btn_buy w-100">Confirm checkout</button>
            </div>
        </Modal>

    );
};

export default ModalBuy;
