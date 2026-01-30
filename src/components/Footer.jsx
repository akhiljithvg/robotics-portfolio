import React, { useState } from 'react';
import { Mail, Linkedin, Github, Check, ArrowUp } from 'lucide-react';

const Footer = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e) => {
        e.preventDefault();
        const email = 'akhiljithvg444@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            alert('Email copied to clipboard: ' + email);
        });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="py-24 border-t border-white/5 relative overflow-hidden bg-background">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                <span className="text-primary text-sm font-bold tracking-wider uppercase mb-4 block">Get In Touch</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Let’s build the future <br />
                    <span className="text-gray-500">of automation together.</span>
                </h2>
                <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                    I'm open to new and challenging opportunities in robotics. Let's connect!
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <button
                        onClick={handleCopyEmail}
                        className="flex items-center gap-2 px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
                    >
                        {copied ? <Check size={20} /> : <Mail size={20} />} Email Me
                    </button>
                    <a
                        href="https://www.linkedin.com/in/akhiljithgigi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-slate-800 text-white font-bold rounded-lg border border-white/10 transition-all hover:border-white/20"
                    >
                        <Linkedin size={20} /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/akhiljithvg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-slate-800 text-white font-bold rounded-lg border border-white/10 transition-all hover:border-white/20"
                    >
                        <Github size={20} /> GitHub
                    </a>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-sm text-gray-500">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <span>&copy; 2025 Akhiljith Gigi. Designed and Built with ❤️</span>
                    </div>

                    <div className="flex gap-8">
                        <button onClick={scrollToTop} className="hover:text-white transition-colors flex items-center gap-1">
                            Back to Top <ArrowUp size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
