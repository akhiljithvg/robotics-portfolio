import React from 'react';
import { Network, GraduationCap, Languages, Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Professional <span className="text-primary">Experience</span></h2>
                    <p className="text-gray-400 text-lg">
                        My journey in robotics engineering and education.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Work Experience */}
                    <div className="relative border-l-2 border-white/10 pl-8 ml-4 md:ml-0 space-y-12">
                        <div className="relative">
                            <span className="absolute -left-[45px] flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                                <Briefcase size={14} className="text-white" />
                            </span>
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-2">Robotics & IoT Program Mentor</h3>
                                <p className="text-primary font-medium mb-1">Technical Career Education Pvt Ltd, Mangalore, India</p>
                                <span className="text-sm text-gray-400 block mb-4">April 2024 - Present</span>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300">
                                    <li>Design, develop, and integrate end-to-end robotic systems, including embedded hardware, sensors, actuators, and control logic</li>
                                    <li>Build and deploy robotics and IoT solutions for real-world, industry-driven use cases</li>
                                    <li>Perform system integration, debugging, and performance optimization across hardware–software layers</li>
                                    <li>Deliver hands-on training and technical mentoring to engineering students on industry-relevant robotics concepts</li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative">
                            <span className="absolute -left-[45px] flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                                <Briefcase size={14} className="text-white" />
                            </span>
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-2">Robotics Engineer & Facilitator</h3>
                                <p className="text-primary font-medium mb-1">Sinrorobotics Pvt Ltd, Cochin, India</p>
                                <span className="text-sm text-gray-400 block mb-4">September 2023 - March 2024</span>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300">
                                    <li>Developed IoT and entry-level robotics projects using microcontrollers, sensors, and basic control circuits</li>
                                    <li>Implemented embedded programming and hardware interfacing for educational and prototype-level systems</li>
                                    <li>Built and demonstrated functional robotics prototypes for learning and proof-of-concept purposes</li>
                                    <li>Taught engineering students practical robotics and IoT fundamentals through hands-on project sessions</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Education & Languages Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                        {/* Education */}
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <div className="flex items-center gap-3 mb-6">
                                <GraduationCap size={24} className="text-primary" />
                                <h3 className="text-xl font-bold text-white">Education</h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-white">B.Tech in Electronics and Communication Engineering</h4>
                                    <p className="text-gray-400">Viswajyothi College of Engineering and Technology</p>
                                    <p className="text-sm text-gray-500">Muvattupuzha, Kerala, India • 2022</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Higher Secondary Education (HSE) in Science-Electronics</h4>
                                    <p className="text-gray-400">St. George's Higher Secondary School</p>
                                    <p className="text-sm text-gray-500">Muthalakodam, Thodupuzha, Kerala, India • 2018</p>
                                </div>
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <div className="flex items-center gap-3 mb-6">
                                <Languages size={24} className="text-primary" />
                                <h3 className="text-xl font-bold text-white">Language Proficiency</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                    <span className="text-gray-300">English</span>
                                    <span className="text-xs font-semibold px-2 py-1 rounded bg-primary/10 text-primary">Professional</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                    <span className="text-gray-300">Malayalam</span>
                                    <span className="text-xs font-semibold px-2 py-1 rounded bg-green-500/10 text-green-400">Native</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                    <span className="text-gray-300">Tamil</span>
                                    <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-500/10 text-blue-400">Professional</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                    <span className="text-gray-300">Hindi</span>
                                    <span className="text-xs font-semibold px-2 py-1 rounded bg-yellow-500/10 text-yellow-400">Limited</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                    <span className="text-gray-300">Kannada</span>
                                    <span className="text-xs font-semibold px-2 py-1 rounded bg-orange-500/10 text-orange-400">Elementary</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
