import React from 'react';
import { Code, Cpu, Eye, Activity, Settings2, Map, Radio, Box, ScanEye, Waypoints } from 'lucide-react';
import { SiPython, SiCplusplus, SiNvidia, SiRaspberrypi, SiEspressif, SiArduino, SiOpencv, SiPytorch, SiRos } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code size={24} className="text-blue-400" />,
            skills: [
                { name: "Python", icon: <SiPython size={24} />, color: "text-yellow-300" },
                { name: "C / C++", icon: <SiCplusplus size={24} />, color: "text-blue-500" }
            ]
        },
        {
            title: "Hardware & Embedded",
            icon: <Cpu size={24} className="text-purple-400" />,
            skills: [
                { name: "Jetson Nano", icon: <SiNvidia size={24} />, color: "text-green-500" },
                { name: "Raspberry Pi", icon: <SiRaspberrypi size={24} />, color: "text-red-500" },
                { name: "ESP32", icon: <SiEspressif size={24} />, color: "text-white" },
                { name: "Arduino", icon: <SiArduino size={24} />, color: "text-teal-400" }
            ]
        },
        {
            title: "Computer Vision & ML",
            icon: <Eye size={24} className="text-green-400" />,
            skills: [
                { name: "OpenCV", icon: <SiOpencv size={24} />, color: "text-red-400" },
                { name: "YOLO", icon: <ScanEye size={24} />, color: "text-yellow-400" },
                { name: "PyTorch", icon: <SiPytorch size={24} />, color: "text-orange-500" }
            ]
        },
        {
            title: "Robotics & Systems",
            icon: <Activity size={24} className="text-red-400" />,
            skills: [
                { name: "ROS2", icon: <SiRos size={24} />, color: "text-white" },
                { name: "Gazebo", icon: <Box size={24} />, color: "text-orange-400" },
                { name: "Controls", icon: <Settings2 size={24} />, color: "text-gray-300" },
                { name: "Planning", icon: <Waypoints size={24} />, color: "text-green-300" },
                { name: "Sensors", icon: <Radio size={24} />, color: "text-blue-300" },
                { name: "Perception", icon: <Eye size={24} />, color: "text-purple-300" }
            ]
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
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                                {category.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="group/skill flex flex-col items-center justify-center gap-3"
                                    >
                                        <div
                                            className={`p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all hover:scale-110 hover:bg-white/10 cursor-pointer ${skill.color}`}
                                        >
                                            {skill.icon}
                                        </div>
                                        <span className="text-xs font-medium text-gray-400 group-hover/skill:text-white transition-colors text-center">
                                            {skill.name}
                                        </span>
                                    </div>
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
