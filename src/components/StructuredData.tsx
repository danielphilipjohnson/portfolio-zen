import React from 'react';

interface StructuredDataProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: Record<string, any>;
	id?: string;
}

const StructuredData = ({ data, id }: StructuredDataProps) => {
	return (
		<script
			type="application/ld+json"
			id={id}
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
};

export default StructuredData;