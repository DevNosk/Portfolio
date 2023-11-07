import React, { useState } from 'react';
import './ContactForm.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactForm = () => {
	const [status, setStatus] = useState('');
	const [emailText, setEmailText] = useState('');
	const [messageText, setMessageText] = useState('');

	const submitForm = ev => {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				setEmailText('');
				setMessageText('');
				form.reset();
				setStatus('SUCCÈS');
			} else {
				setStatus('ERREUR');
			}
		};
		xhr.send(data);
	};

	const handleEmailChange = event => {
		const input = String(event.target.value);
		setEmailText(input);
	};

	const handleMessageChange = event => {
		const input = String(event.target.value);
		setMessageText(input);
	};

	return (
		<div className="contact-form-wrapper">
			<form
				className="contact-form"
				onSubmit={submitForm}
				action="https://formspree.io/f/xknlebyr"
				method="POST"
			>
				<TextField
					style={{
						marginBottom: '16px', // Spécifiez la marge en pixels ou d'autres unités
						backgroundColor: '#3b4353',
						color: 'blanc',
						'&:hover': {
							backgroundColor: '#3b4353',
							color: 'blanc',
						},
						'&.Mui-focused': {
							backgroundColor: '#3b4353',
							color: 'blanc',
						},
					}}
					type="email"
					name="email"
					label="Email"
					value={emailText}
					onChange={handleEmailChange}
					variant="filled"
				/>
				<TextField
					style={{
						marginBottom: '16px', // Spécifiez la marge en pixels ou d'autres unités
						backgroundColor: '#3b4353',
						color: 'blanc',
						'&:hover': {
							backgroundColor: '#3b4353',
							color: 'blanc',
						},
						'&.Mui-focused': {
							backgroundColor: '#3b4353',
							color: 'blanc',
						},
					}}
					type="text"
					name="message"
					label="Message"
					value={messageText}
					onChange={handleMessageChange}
					multiline
					rows="5"
					variant="filled"
				/>
				{status === 'SUCCÈS' ? (
					<p className="email-success">Merci !</p>
				) : (
					<Button
						style={{
							backgroundColor: '#39b175',
							boxShadow: 'none',
							'&:hover': {
								backgroundColor: '#6de9ab',
								boxShadow: 'none',
							},
							'& > *': {
								color: 'blanc',
								fontSize: '15px',
								fontWeight: '600',
							},
						}}
						type="submit"
						variant="contained"
					>
						Soumettre
					</Button>
				)}
				{status === 'ERREUR' && <p>Oups ! Il y a eu une erreur.</p>}
			</form>
		</div>
	);
};

export default ContactForm;
