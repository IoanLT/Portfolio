import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// Modal Variants
const backdrop = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const modal = {
	hidden: { y: "-100vh", opacity: 0 },
	show: {
		y: "33vh",
		opacity: 1,
		transition: { delay: 0.5 },
	},
};

const ConfirmationModal = ({ showModal, setShowModal }) => {
	return (
		<div>
			<AnimatePresence exitBeforeEnter>
				{showModal && (
					<Backdrop
						variants={backdrop}
						initial="hidden"
						animate="show"
						exit="hidden"
					>
						<Modal variants={modal}>
							<p>Your message has been sent!</p>
							<button onClick={() => setShowModal(false)}>Close</button>
						</Modal>
					</Backdrop>
				)}
			</AnimatePresence>
		</div>
	);
};

const Backdrop = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	z-index: 1;
`;

const Modal = styled(motion.div)`
	width: 400px;
	max-width: 90%;
	margin: 0 auto;
	padding: 40px 20px;
	background: #fff;
	border-radius: 10px;
	text-align: center;

	button {
		max-width: 250px;
		color: #09070b;

		&:hover {
			background: hsl(360, 71%, 66%);
			color: #fff;
			transform: translateY(-5px);
		}
	}
`;

export default ConfirmationModal;
