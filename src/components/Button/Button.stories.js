import React from 'react';
import Button from './Button';

export default{
	title: 'Components/Button',
	component: Button
};

const Template = () => {
	return <Button buttonLabel="Login"/>
};

export const Default = Template.bind({});