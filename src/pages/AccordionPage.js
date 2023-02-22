import Accordion from '../components/Accordion';

function AccordionPage() {
	const items = [
		{
			id: '22323235we',
			label: 'Can I use React on a Project?',
			content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
		},
		{
			id: '3432jhkj',
			label: 'Can I use Javascript on a Project?',
			content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
		},
		{
			id: '394873980kjj',
			label: 'Can I use CSS on a Project?',
			content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
		},
	];

	return <Accordion items={items} />;
}

export default AccordionPage;
