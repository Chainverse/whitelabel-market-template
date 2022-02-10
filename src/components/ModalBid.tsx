import React from "react";
import { Modal } from "react-bootstrap";

import i_closeModal from '@assets/images/i_closeModal.svg';
import i_token from '@assets/images/i_token.png';

interface ModalBidProps {
    show: boolean;
    onHide?: () => void;
}

const ModalBid: React.FC<ModalBidProps> = props => {

    return (
        <Modal show={props.show} size="sm" className="modal-login" aria-labelledby="modal-login" centered>
            <div className="modal-header">
                <h5 className="modal-title">Place a bid</h5>
                <div onClick={props.onHide} className="close" >
                    <img src={i_closeModal} width="40" height="40" alt=""/>
                </div>
            </div>
            <div className="modal-body">
                <div className="form-group mb-5">
                    <label>Price</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text font-weight-medium">
                                <img src={i_token} width="24" height="24" className="me-2" alt="" /> STRT
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="0" />
                        <div className="input-group-append">
                            <span className="input-group-text">$ 0</span>
                        </div>
                    </div>
                </div>
                <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="agreeCheck1" />
                    <label className="form-check-label" >
                        By checking this box, I agree to StarryNift's Terms of Service
                    </label>
                </div>
            </div>
            <div className="modal-footer mx-auto w-100">
                <button type="submit" className="btn btn-primary btn-block btn_buy w-100">Place bid</button>
            </div>
        </Modal>

    );
};

export default ModalBid;
