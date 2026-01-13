"use client";
import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#1a1c1e] text-white py-12 border-t border-gray-800">
            <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">

                {/* Logo */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="/assets/tewanaLogo.svg"
                        alt="Tewana Logo"
                        width={180}
                        height={60}
                        className="object-contain"
                    />
                </div>

                {/* Contact Badge */}
                <div className="relative w-full  h-32 md:h-48">
                    <Image
                        src="/assets/ResponseTime.png"
                        alt="Response Time"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="w-full max-w-6xl mx-auto px-6 mt-12 text-center md:text-left text-[#FFFFFF] text-lg font-sans opacity-80">
                &copy; Copyright, {new Date().getFullYear()}. All Rights Reserved.
            </div>
        </footer>
    );
}
