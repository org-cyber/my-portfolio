import React, { forwardRef } from 'react';
import '../css/comp.css'

const Hero = forwardRef((props, ref) => {
    return (
        <>
            <br></br>

            <section ref={ref} className="herosec">
                <div className="w-[400px] h-[400px] relative border border-solid border-white/40 rounded-2xl overflow-hidden">
                    <div className="w-full h-full p-1 absolute bg-grey-400">
                        <div className="w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#222]" />
                    </div>
                    <div className="w-full h-full flex items-center justify-center relative backdrop-blur-lg rounded-2xl">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-500 to-orange-300 animate-spin" style={{ animationDuration: '12s' }} />
                    </div>
                    <div className="w-full h-full p-2 flex justify-between absolute inset-0">
                        <div className="w-3/5 p-2 pt-3 pb-1.5 flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium font-mono">
                            <span className="text-xl font-medium">PIXELPRO</span>
                            <span className="text-xs text-gray-400">FULLSTACK/WEB3 DEV</span><br></br>
                            <span className="text-xs text-gray-400">I’m a passionate Full-Stack Developer and Web3 enthusiast with a strong focus on building secure, scalable, and user-friendly digital experiences. I specialize in JavaScript, React, and blockchain development, while also exploring ethical hacking and penetration testing to understand systems from the inside out.

                                My work spans UI/UX, Web3, mobile apps, and cloud-based platforms. I love solving</span>
                            <div className="w-full mt-auto flex items-center justify-center">
                                <span className="text-xs text-gray-400">Happy to work and Collaborate</span>
                            </div>
                        </div>
                        <div className="h-full pt-2 flex flex-col items-end text-white/50">
                            <span className="text-[10px] leading-[12px]">About
                            </span>
                            <span className="text-[10px] leading-[13px]">Me</span>
                            <div className="w-8 h-8 mt-auto flex items-center justify-center rounded-full backdrop-blur-lg bg-gray-50/20 cursor-pointer transition-all duration-300 hover:bg-gray-50/30">
                                <span className="font-serif text-white/80">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12" className="w-4 h-4">
                                        <g fill="none">
                                            <path d="M4.646 2.146a.5.5 0 0 0 0 .708L7.793 6L4.646 9.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
        </>
    );
});

export default Hero;
