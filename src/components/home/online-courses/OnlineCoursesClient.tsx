"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import Text from "@/components/ui/Text";
import { cn } from '@/lib/utils';
import type { OnlineCourse } from '@/types/online-course';

interface OnlineCoursesClientProps {
	courses: OnlineCourse[];
	categories: string[];
}

const OnlineCoursesClient = ({ courses, categories }: Readonly<OnlineCoursesClientProps>) => {
	const [activeCategory, setActiveCategory] = useState<string>("ALL");
	const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

	const filteredCourses = activeCategory === "ALL"
		? courses
		: courses.filter(course => course.category === activeCategory);

	return (
		<>
			<div className="mb-10 overflow-x-auto">
				<div className="flex pb-2 space-x-2">
					{categories.map(category => (
						<Button
							key={category}
							onClick={() => setActiveCategory(category)}
							variant={activeCategory === category ? "primary" : "outline"}
							size="sm"
							className="whitespace-nowrap"
						>
							{category}
						</Button>
					))}
				</div>
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{filteredCourses.map(course => (
					<div
						key={course.id}
						className="group"
						onMouseEnter={() => setHoveredCourse(course.id)}
						onMouseLeave={() => setHoveredCourse(null)}
					>
						<div className={cn(
							"h-full bg-white border border-stone-200 shadow-soft transition-all duration-300 flex flex-col justify-between",
							hoveredCourse === course.id && "transform -translate-y-1 shadow-md"
						)}>
							<div className="flex items-center justify-between p-5 border-b border-stone-100 ">
								<div className="flex items-center">
									<div className="flex items-center justify-center w-10 h-10 mr-3 overflow-hidden bg-stone-50 ">
										{course.logo ? (
											<img
												src={course.logo}
												alt={`${course.provider} logo`}
												className="max-w-full max-h-full"
												onError={(e) => {
													const target = e.target as HTMLImageElement;
													target.style.display = 'none';
													target.parentElement!.innerHTML += `
														<span class="text-stone-400 text-xs font-mono">
															${course.provider.substring(0, 3).toUpperCase()}
														</span>
													`;
												}}
											/>
										) : (
											<span className="font-mono text-xs text-stone-400 ">
												{course.provider.substring(0, 3).toUpperCase()}
											</span>
										)}
									</div>

									<Text
										variant="label"
										className="text-stone-600 "
									>
										{course.provider}
									</Text>
								</div>

								<div className="px-2 py-1 font-mono text-xs bg-stone-100 text-stone-500 ">
									{course.date}
								</div>
							</div>

							<div className="p-5">
								<Text
									variant="h5"
									className="mb-3 text-moss-700 "
								>
									{course.title}
								</Text>

								{course.description && (
									<Text
										variant="body-sm"
										className="mb-4 text-stone-600 line-clamp-3"
									>
										{course.description}
									</Text>
								)}

								{course.skills && course.skills.length > 0 && (
									<div className="flex flex-wrap gap-2 mt-4">
										{course.skills.map(skill => (
											<span
												key={skill}
												className="inline-block px-2 py-1 text-xs rounded-sm bg-stone-100 text-stone-600 "
											>
												{skill}
											</span>
										))}
									</div>
								)}
							</div>

							<div className="flex items-center justify-between px-5 py-4 border-t bg-stone-50 border-stone-100 ">
								{course.certificate_url && (
									<a
										href={course.certificate_url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center font-mono text-sm transition-colors text-clay-600 hover:underline hover:text-clay-700 "
									>
										<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
										certificate_url
									</a>
								)}

								{course.url && (
									<a
										href={course.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center text-sm text-moss-600 hover:text-moss-700"
									>
										<span className="mr-1">View Course</span>
										<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>

			{filteredCourses.length === 0 && (
				<div className="py-16 text-center">
					<Text
						variant="body"
						className="italic text-stone-500 "
					>
						No courses found in this category.
					</Text>
				</div>
			)}

			<div className="max-w-2xl mx-auto mt-12 text-center">
				<Text
					variant="quote"
					className="text-stone-600 border-stone-300 "
				>
					&quot;In the beginner&apos;s mind there are many possibilities, in the expert&apos;s mind there are few.&quot;
				</Text>
				<Text
					variant="caption"
					className="mt-2 text-stone-500"
				>
					— Shunryu Suzuki, Zen Mind, Beginner&apos;s Mind
				</Text>
			</div>
		</>
	);
};

export default OnlineCoursesClient; 