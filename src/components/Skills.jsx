import React from 'react';
import { Code, Cpu, Eye, Activity } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code size={24} className="text-blue-400" />,
            skills: ["Python", "C / Embedded C++"]
        },
        {
            title: "Hardware & Embedded Platforms",
            icon: <Cpu size={24} className="text-purple-400" />,
            skills: ["Jetson Nano", "Raspberry Pi", "ESP32", "Arduino"]
        },
        {
            title: "Computer Vision & ML",
            icon: <Eye size={24} className="text-green-400" />,
            skills: ["OpenCV", "YOLO", "PyTorch"]
        },
        {
            title: "Robotics & Control Systems",
            icon: <Activity size={24} className="text-red-400" />,
            skills: ["ROS2", "Gazebo", "Control Systems", "Path Planning", "Sensor Integration", "Perception"]
        }
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical <span className="text-primary">Skills</span></h2>
                    <p className="text-gray-400 text-lg">
                        Comprehensive toolkit for building intelligent autonomous systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-1 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white/5 text-gray-300 text-sm font-medium rounded-full border border-white/5 hover:border-white/20 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
