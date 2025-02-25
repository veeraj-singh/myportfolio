import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16">
        <header className="py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-yellow-400">Veeraj Singh</span> 👋</h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
            Software Developer with a passion for building beautiful content. I build fun, interactive projects for you to
            explore and enjoy. Interested in applying technical expertise in a dynamic and challenging environment.
          </p>
        </header>

        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Internship Experience</h2>
          
          <div className="mb-8 flex items-start hover:bg-gray-900 p-4 rounded-lg transition-all">
            <div className="mr-5 bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-gray-300 text-lg font-bold">I</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="font-bold text-xl">Infokalash, Hubbli</h3>
                <span className="text-gray-400 text-sm md:text-base">June 2024 - Aug 2024</span>
              </div>
              <p className="text-gray-400 text-lg">Technical Intern</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Education</h2>
          
          <div className="mb-8 flex items-start hover:bg-gray-900 p-4 rounded-lg transition-all">
            <div className="mr-5 bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-gray-300 text-lg font-bold">U</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="font-bold text-xl">Indian Institute of Information Technology, Dharwad</h3>
                <span className="text-gray-400 text-sm md:text-base">2021 - 2025</span>
              </div>
              <p className="text-gray-400 text-lg">Bachelor of Technology</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Skills</h2>
          
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-800 rounded-full text-base hover:bg-gray-700 transition-colors">JavaScript</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-base hover:bg-gray-700 transition-colors">TypeScript</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-base hover:bg-gray-700 transition-colors">React JS</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-base hover:bg-gray-700 transition-colors">Next.JS</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-base hover:bg-gray-700 transition-colors">Tailwind</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-base hover:bg-gray-700 transition-colors">Recoil</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-base hover:bg-gray-700 transition-colors">Git</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-base hover:bg-gray-700 transition-colors">Docker</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-base hover:bg-gray-700 transition-colors">Kubernetes</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-base hover:bg-gray-700 transition-colors">CI/CD(Github Actions)</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-base hover:bg-gray-700 transition-colors">PostgreSQL</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-base hover:bg-gray-700 transition-colors">MongoDB</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-base hover:bg-gray-700 transition-colors">Prisma</span>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-800 rounded-md text-base mb-6">Projects</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Check out my top personal projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="bg-green-700 p-2 h-56 flex items-center justify-center">
                <img src="https://files.catbox.moe/dbh106.png" alt="DevMatch" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3">DevMatch</h3>
                <p className="text-gray-400 text-base mb-6">
                  Built a gamified developer platform with swipe-based matching, real-time chat, and project boards.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">React</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">Tailwind</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">Express</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">Prisma</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">Socket.IO</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">Firebase</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://d1fe56qaehqp1j.cloudfront.net/" className="px-4 py-2 border border-gray-600 rounded-md text-sm hover:bg-gray-800 transition-colors">Demo</a>
                  <a href="https://github.com/veeraj-singh/DevMatch" className="px-4 py-2 border border-gray-600 rounded-md text-sm hover:bg-gray-800 transition-colors">Github</a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="bg-white p-2 h-56 flex items-center justify-center">
                <img src="https://files.catbox.moe/loajhy.png" alt="TextBase" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3">TextBase</h3>
                <p className="text-gray-400 text-base mb-6">
                  Blogging application built with responsive frontend with React to deliver an intuitive and seamless user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">React</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">Hono</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">CloudFlare Worker</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://blog-app-veerajs-projects-4c70adda.vercel.app/" className="px-4 py-2 border border-gray-600 rounded-md text-sm hover:bg-gray-800 transition-colors">Demo</a>
                  <a href="https://github.com/veeraj-singh/Blog_app" className="px-4 py-2 border border-gray-600 rounded-md text-sm hover:bg-gray-800 transition-colors">Github</a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="bg-green-900 p-2 h-56 flex items-center justify-center">
                <img src="" alt="Assets exchange platform" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3">Exchange platform</h3>
                <p className="text-gray-400 text-base mb-6">
                  Developing an exchange app for real-time asset swaps with a user-friendly interface.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">NextJS</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">Websockets</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">Redis</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-md text-xs">Backpack API specs</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/veeraj-singh/Xchange" className="px-4 py-2 border border-gray-600 rounded-md text-sm hover:bg-gray-800 transition-colors">Github</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-gray-800 mt-16 py-12">
        <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center text-gray-400">
            <p className="mb-4">© 2025 Veeraj Singh. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-6">
              <a href="https://github.com/veeraj-singh" className="hover:text-white text-lg transition-colors">Github</a>
              <a href="https://www.linkedin.com/in/veeraj-singh/" className="hover:text-white text-lg transition-colors">LinkedIn</a>
              <a href="mailto:veerbachche82@gmail.com" className="hover:text-white text-lg transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;