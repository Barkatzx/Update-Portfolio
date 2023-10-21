import { motion } from "framer-motion";
import React from 'react';
import { BottomLine } from '../../Atoms/allAtoms';

const Certificate = () => {
    return (
        <div className="parent py-5">
            <div className="text-center mb-10">
                <motion.div
                    initial={{ y: -200, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1, type: "spring" },
                    }}
                >
                    <h1 className="text-4xl font-semibold text-shadow-md">
                        Certificate & Achievements
                    </h1>
                </motion.div>
                <BottomLine />
            </div>
            <motion.div
                className="mb-10 flex flex-col md:flex-row justify-center items-center gap-4"
                initial={{ y: -200, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1, type: "spring" },
                }}
            >
                <div className="w-full md:w-96 h-96 bg-base-100 shadow-2xl text-center">
                    <img
                        src="https://i.ibb.co/PQd7Gj4/Certificate-1.jpg"
                        alt="Certificate"
                        className="w-full h-full object-cover"
                    />
                    <div className="text-center mt-2">
                        <a href="https://i.ibb.co/PQd7Gj4/Certificate-1.jpg" download="Certificate-1.jpg" className="primary-button">View</a>
                    </div>
                </div>
                <div className="w-full md:w-96 h-96 bg-base-100 shadow-2xl text-center mt-4 md:mt-0">
                    <img
                        src="https://i.ibb.co/p0K9h4Q/Black-Belt.jpg"
                        alt="Black Belt"
                        className="w-full h-full object-cover"
                    />
                    <div className="text-center mt-2">
                        <a href="https://i.ibb.co/p0K9h4Q/Black-Belt.jpg" download="Black-Belt.jpg" className="primary-button">View</a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Certificate;
