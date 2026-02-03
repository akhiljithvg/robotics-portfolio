import React, { useState } from 'react';
import { ArrowRight, Mail, Linkedin, Github, FileText, Check } from 'lucide-react';
import profilePic from '../assets/your-photo.jpg';

const Hero = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        const email = 'akhiljithvg444@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            alert('Email copied to clipboard: ' + email);
        });
    };

    return (
        <section id="about" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-30"
                >
                    <source src="/background.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-background/90 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="flex-1 space-y-8 text-center md:text-left">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide border border-blue-500/20">
                        AVAILABLE FOR PROJECTS
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Robotics and <br />
                        <span className="text-primary">IoT Engineer</span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0 text-justify">
                        Robotics Engineer with 3 years of experience building, testing, and optimizing autonomous systems from prototype to deployment.
                        Skilled in mechanical assembly, electrical debugging, and control systems integration using <strong>ROS 2, Python, and Embedded C</strong>.
                        Proven ability to develop diagnostic procedures and predictive maintenance protocols to ensure continuous operation.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-all hover:scale-105"
                        >
                            <FileText size={18} /> Download Resume
                        </a>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.linkedin.com/in/akhiljithgigi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors"
                                title="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/akhiljithvg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors"
                                title="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <button
                                onClick={handleCopyEmail}
                                className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors relative"
                                title="Copy Email"
                            >
                                {copied ? <Check size={20} className="text-green-500" /> : <Mail size={20} />}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-lg relative">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-white/10 relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
                        <img
                            src={profilePic}
                            alt="Akhiljith Gigi"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 brightness-85"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
