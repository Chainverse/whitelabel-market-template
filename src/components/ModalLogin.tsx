import React from "react";
import { Modal } from "react-bootstrap";

import i_closeModal from '@assets/images/i_closeModal.svg';
import logo from '@assets/images/logo.png';
import i_metaMask from '@assets/images/i_metaMask.png';

interface ModalLoginProps {
	show: boolean;
	onHide?: () => void;
}

const ModalLogin: React.FC<ModalLoginProps> = props => {

	return (
		<Modal show={props.show} size="sm" className="modal-login" aria-labelledby="modal-login" centered>
			<div onClick={props.onHide} className="close" >
				<img src={i_closeModal} width="40" height="40" alt="" />
			</div>
			<div className="modal-body text-center">
				<div className="pb-3 pt-4">
					<img src={logo} height="40" alt="" />
				</div>
				<p className="pb-3">You need a BSC wallet to use StarryNift wallet</p>
				<button className="btn btn-block btn-outline-primary btnConnect">
					<img src={i_metaMask} width="24" alt="" />
					Connect Metamask
				</button>
			</div>
		</Modal>

	);
};

export default ModalLogin;
