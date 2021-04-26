import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = () => {
	const controls = useAnimation();
	const [element, inView] = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			controls.start("show");
		}
		if (!inView) {
			controls.start("hidden");
		}
	}, [controls, inView]);

	return [element, controls];
};
