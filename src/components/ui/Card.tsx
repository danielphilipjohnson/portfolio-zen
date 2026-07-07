import React from "react";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
	return (
		<article
			className={`p-6 bg-white border border-stone-200 shadow-sm rounded-xl ${className}`}
		>
			{children}
		</article>
	);
};

export default Card;
