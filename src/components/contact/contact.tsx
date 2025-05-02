"use client"
import React, { useState } from 'react';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Blockquote from '../ui/Blockquote';
import { Button } from "../ui/Button";
import SocialIcons from '../ui/SocialIcons';

const ContactPage = () => {
	
	// Form state
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [submitStatus, setSubmitStatus] = useState({
		submitted: false,
		success: false,
		message: ''
	});

	// Handle form input changes
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	// Handle form submission
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Simulating form submission
		setSubmitStatus({
			submitted: true,
			success: true,
			message: 'Thank you for your message. I will respond as soon as possible.'
		});

		// Reset form after successful submission
		setTimeout(() => {
			if (submitStatus.success) {
				setFormData({
					name: '',
					email: '',
					message: ''
				});
			}
		}, 500);
	};

	return (
		<main className="min-h-screen bg-[color:var(--color-stone-50)]">
			<section className="relative">
				<div className="grid lg:grid-cols-12 xl:min-h-screen">
					<div className="relative order-2 px-8 py-16 lg:col-span-4 xl:col-span-3 lg:order-1 bg-[color:var(--color-moss-700)]">
						<div className="pt-16 mb-12">
							<h2 className="mb-4 text-2xl font-light text-[color:var(--color-stone-50)]">Connect With Me</h2>
							<p className="mb-8 font-light text-[color:var(--color-stone-100)]">
								I would love to hear from you and discuss your project.
							</p>

							{/* Contact Info Items */}
							<div className="space-y-8">
								{/* Location */}
								<div className="flex items-start">
									<div className="p-2 mr-4 rounded-full bg-[color:var(--color-moss-600)] text-[color:var(--color-stone-50)]">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
									</div>
									<div className="text-[color:var(--color-stone-50)]">
										<h3 className="mb-2 text-lg font-medium">Current Location</h3>
										<address className="font-light">Truro, Cornwall, United Kingdom</address>
									</div>
								</div>

								{/* LinkedIn */}
								<div className="flex items-start">
									<div className="p-2 mr-4 rounded-full bg-[color:var(--color-moss-600)] text-[color:var(--color-stone-50)]">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
										</svg>
									</div>
									<div className="text-[color:var(--color-stone-50)]">
										<h3 className="mb-2 text-lg font-medium">LinkedIn</h3>
										<span className="font-light">danielphilipjohnson</span>
									</div>
								</div>

								{/* Email */}
								<div className="flex items-start">
									<div className="p-2 mr-4 rounded-full bg-[color:var(--color-moss-600)] text-[color:var(--color-stone-50)]">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</div>
									<div className="text-[color:var(--color-stone-50)]">
										<h3 className="mb-2 text-lg font-medium">Chat with me</h3>
										<span className="font-light">daniel-philip-johnson@gmail.com</span>
									</div>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div className="absolute bottom-0 left-0 flex flex-wrap p-8 space-x-4">
							<SocialIcons />
						</div>
					</div>

					<div className="order-1 max-w-2xl px-8 pb-16 mx-auto lg:col-span-8 xl:col-span-9 lg:pt-24 lg:order-2 lg:max-w-none lg:px-16">
						<h1 className="pt-6 mb-4 text-3xl font-light text-[color:var(--color-stone-800)]">
							Need help on you project?
						</h1>

						<p className="mb-12 text-lg text-[color:var(--color-stone-600)]">
							I am here to help and answer any question you might have about your
							project. I look forward to hearing from you 🙂
						</p>

						{submitStatus.submitted && submitStatus.success ? (
							<div className="p-8 border-l-2 border-[color:var(--color-moss-500)] bg-[color:var(--color-moss-50)]">
								<div className="flex items-center mb-4">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3 text-[color:var(--color-moss-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									<h3 className="text-xl font-medium text-[color:var(--color-stone-800)]">
										Message Sent Successfully
									</h3>
								</div>
								<p className="text-[color:var(--color-stone-600)]">{submitStatus.message}</p>
							</div>
						) : (
							<form id="project-contact" name="contact-form" method="post" data-netlify="true" onSubmit={handleSubmit}>
								<input type="hidden" name="form-name" value="contact-form" />

								<Input
									type="text"
									name="name"
									id="name"
									placeholder="Enter your name"
									required
									value={formData.name}
									onChange={handleChange}
									label="Name"
								/>

								<Input
									type="email"
									name="email"
									id="email"
									placeholder="Enter your email"
									required
									value={formData.email}
									onChange={handleChange}
									label="Email"
								/>

								<Textarea
									name="message"
									id="message"
									placeholder="Enter your message here..."
									rows={8}
									value={formData.message}
									onChange={handleChange}
									label="How can I help?"
									required
								/>

								<Button
									type="submit"
									className="w-full"
									variant={'primary'}
								>
									Send Message
								</Button>
							</form>
						)}

						<div className="mt-16">
							<Blockquote
								content="&quot;Just as a bonsai master shapes a tree with patience and purpose, I approach each project with intention and care—pruning away complexity, nurturing potential, and creating experiences that are both beautiful and sustainable.&quot;"
								attribution="— Zen Code | Bonsai Design Philosophy"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ContactPage;