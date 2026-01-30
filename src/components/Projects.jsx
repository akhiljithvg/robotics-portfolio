import React from 'react';
import { ArrowUpRight, Github, PlayCircle } from 'lucide-react';
import laneRobot from '../assets/lane-robot-thumb.png';
import signRobot from '../assets/sign-robot-thumb.png';
import gasLeak from '../assets/gas-leak-thumb.png';

const Projects = () => {
    const projects = [
        {
            title: "Autonomous Lane Following Robot ROS2",
            challenge: "Develop a low-latency navigation system for predefined tracks.",
            action: "Developed a ROS 2 Jazzy autonomous robot on Raspberry Pi with OpenCV lane detection, ArUco-based junction routing, and custom GPIO motor control.",
            result: "Achieved ~95% accuracy in real-time lane keeping and Aruco detection.",
            image: laneRobot,
            github: "https://github.com/akhiljithvg/Duckie",
            demo: "https://youtu.be/4PuzGfyZEWE?si=nlTc25BXw-OZQei3",
            tags: ["ROS 2", "OpenCV", "Raspberry Pi"]
        },
        {
            title: "Vision-Based Traffic Sign Detection & Autonomous Navigation Robot",
            challenge: "Transforming a basic robot into an autonomous agent capable of real-time environmental decision-making using limited embedded compute power.",
            action: "Engineered a Raspberry Pi-based robot using YOLOv5 for dynamic sign classification and ROI pixel analysis for junction routing.",
            result: "Enabled on-device deep learning inference for navigation.",
            image: signRobot,
            github: "https://github.com/akhiljithvg/Autonomous-Robot-with-Sign-Board-detection",
            demo: "https://youtube.com/shorts/mPPAIWjWcDQ?si=bdKjc4S3DZXkX2A4",
            tags: ["YOLOv5", "Python", "Computer Vision"]
        },
        {
            title: "IoT Gas Leakage Detection System",
            challenge: "Develop a fail-safe, real-time environmental monitoring solution capable of detecting industrial hazards (Gas/Fire) with minimal latency.",
            action: "Engineered ESP32 firmware using FreeRTOS for concurrent processing and secure APIs with dynamic credential fetching.",
            result: "Achieved alert latency while virtually eliminating false positives through temporal filtering algorithms and multi-stage verification.",
            image: gasLeak,
            github: "https://github.com/akhiljithvg/IoT-Based-Gas-Fire-Detection-System-with-SMS-Alerts/tree/main",
            demo: "https://youtube.com/shorts/9C4DtElYfjE?si=ZJzJtkHTYa-F2XpQ",
            tags: ["ESP32", "FreeRTOS", "IoT"]
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured <span className="text-primary">Projects</span></h2>
                    <p className="text-gray-400 text-lg">
                        Showcasing practical applications of robotics, AI, and embedded systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all group flex flex-col h-full"
                        >
                            <div className="aspect-video w-full overflow-hidden relative">
                                {/* Blurred Background Layer */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center blur-xl opacity-50 scale-110 transition-transform duration-500 group-hover:scale-125"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                ></div>

                                {/* Main Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 z-20 opacity-90">
                                    <div className="bg-black/60 backdrop-blur-md rounded-full px-3 py-1 border border-primary/30 shadow-lg group-hover:border-primary/80 transition-colors">
                                        <span className="text-primary text-xs font-bold uppercase tracking-wider">{project.tags[0]}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <div className="space-y-4 mb-6 flex-1 text-sm text-gray-400">
                                    <p><strong className="text-green-300">Challenge:</strong> {project.challenge}</p>
                                    <p><strong className="text-blue-300">Action:</strong> {project.action}</p>
                                    <p><strong className="text-purple-300">Result:</strong> {project.result}</p>
                                </div>

                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
                                    >
                                        <Github size={18} /> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors ml-auto"
                                    >
                                        <PlayCircle size={18} /> Demo <ArrowUpRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
