"use client"
import Navbar from '@/components/home/header/navbar';
import Image from 'next/image';

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
                <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
                            <div className="relative w-48 h-48 rounded-full overflow-hidden">
                                <Image
                                    src="/Assets/avataaars.png"
                                    alt="Profile"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 flex flex-col justify-center">
                            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
                            <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                                Hi! I&apos;m Tarang Patel — a full-stack developer and lifelong tech learner. I specialize in building scalable web applications using the MERN stack, and I&apos;m especially passionate about working with React and Next.js.
                                Whether it&apos;s crafting clean UI components, building fast APIs, or deploying full-featured apps, I enjoy turning ideas into real, usable products.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Web Development</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
                            I am proficient in programming languages such as JavaScript and Python. I have experience with React.js and the Next.js framework. Additionally, I value teamwork and love solving real-world problems through code.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/3">
                                <Image
                                    src="/Assets/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg"
                                    alt="As a beginner"
                                    width={500}
                                    height={350}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Spark of Curiosity</h3>
                                <p className="mt-4 text-gray-600 dark:text-gray-50">
                                    I&apos;m Tarang, and this blog is my little space on the internet where curiosity meets code. I&apos;ve always been the kind of person who likes to take things apart just to see how they work — whether it&apos;s a new JavaScript trick, a cool API, or some random tech trend.
                                    <br /><br />
                                    <em>The Spark of Curiosity</em> is all about learning in a simple, fun, and no-pressure way. I share what I&apos;m building, breaking, and figuring out — so if you&apos;re into tech, side projects, or just love geeking out over cool ideas, you&apos;re in the right place.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse items-center">
                            <div className="md:w-1/3">
                                <Image
                                    src="/Assets/undraw_dev-environment_n5by.png"
                                    alt="Learning new skills"
                                    width={500}
                                    height={350}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
                                <p className="mt-4 text-gray-600 dark:text-gray-50">
                                    I believe in giving back to the tech community that helped shape me. Whether it&apos;s writing blog posts, contributing to open-source projects, or helping out junior devs, I love sharing what I&apos;ve learned along the way. We&apos;re all figuring things out — and if something I share makes your journey a little easier, that&apos;s a win in my book.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/3">
                                <Image
                                    src="/Assets/undraw_developer-avatar_f6ac.png"
                                    alt="Developer avatar"
                                    width={500}
                                    height={350}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Projects That Made a Difference</h3>
                                <p className="mt-4 text-gray-600 dark:text-gray-50">
                                    Over time, I&apos;ve worked on projects that taught me, challenged me, and sometimes even surprised me. Each one helped me grow — not just as a developer, but as a problem-solver and thinker.
                                    <br /><br />
                                    Let&apos;s connect and grow together! Whether you&apos;re deep into development or just starting out, feel free to explore my work, read the blog, or drop a message. I&apos;m always up for sharing ideas, learning from others, and building cool stuff together.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse items-center">
                            <div className="md:w-1/3">
                                <Image
                                    src="/Assets/undraw_browsing-online_rozb.png"
                                    alt="Mentoring others"
                                    width={500}
                                    height={350}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Why I Share</h3>
                                <p className="mt-4 text-gray-600 dark:text-gray-50">
                                    For me, coding isn&apos;t just a job — it&apos;s a lifelong journey of learning, experimenting, and growing. Along the way, I&apos;ve been lucky to learn from others who generously shared their knowledge. Now, I try to pay it forward.
                                    <br /><br />
                                    These days, I not only write code but also create tutorials, give talks, and help new developers find their way. Sharing what I&apos;ve learned — the wins, the mistakes, the aha moments — keeps the learning alive and helps build a stronger, more welcoming dev community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
