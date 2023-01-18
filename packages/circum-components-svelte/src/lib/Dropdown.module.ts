export function clickOutside(node: any) {
	const handleClick = (e: any) => {
		if (node && !node.contains(e.target) && !e.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('close', node));
		}
	};
	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
