'use client'

import Image from 'next/image'
import { experiences } from './const'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        {/* About */}
        <section className="grid md:grid-cols-[420px_1fr] min-h-[30vh]">
          <div className="relative bg-[#e8b4c8] overflow-hidden">
            <Image
              src="/Wan.png"
              alt="Ratanawan Thepanom"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="flex flex-col justify-center px-14 py-16 bg-[#0d0d0d] relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-[#d18fae] to-transparent" />
            <p className="text-[11px] tracking-[.18em] uppercase text-[#e8b4c8] mb-6 font-medium">
              Portfolio
            </p>
            <h1 className="font-playfair text-[clamp(2.8rem,5vw,4.2rem)] font-black leading-[1.05] tracking-tight text-[#f5f0eb] mb-7">
              Ratanawan
              <span className="block text-[#e8b4c8]">Thepanom</span>
            </h1>
            <div className="w-12 h-0.5 bg-[#e8b4c8] mb-7" />
            <p className="text-base text-[#a89f96] font-light leading-relaxed max-w-sm tracking-wide">
              <strong className="text-[#f5f0eb] font-medium">
                UX/UI Designer
              </strong>{' '}
              &amp;{' '}
              <strong className="text-[#f5f0eb] font-medium">
                Frontend Developer
              </strong>
              <br />
              crafting elegant digital experiences at the intersection of design
              and code.
            </p>
            <p className="absolute bottom-10 right-14 text-[11px] tracking-[.14em] uppercase text-[#5a5450] after:content-[''] after:inline-block after:w-8 after:h-px after:bg-[#5a5450] after:ml-2 after:align-middle">
              Scroll
            </p>
          </div>
        </section>

        {/* Quick Background */}
        <section className="px-16 py-20 bg-[#111]">
          <p className="text-[10px] tracking-[.2em] uppercase text-[#e8b4c8] mb-3 font-medium">
            Background
          </p>
          <h2 className="font-playfair text-[2rem] font-bold text-[#f5f0eb] mb-14 tracking-tight">
            A quick background
          </h2>
          <div className="grid grid-cols-3 gap-px bg-[#2a2520]">
            {[
              {
                tag: 'Bachelor Degree',
                title: 'Software Engineering',
                sub: 'Kirirom Institute of Technology',
              },
              {
                tag: 'My roles were',
                title: 'Frontend Developer, UX/UI Designer',
                sub: '',
              },
              {
                tag: 'Passionate in',
                title: 'Visual Design, Psychology, System Thinking',
                sub: '',
              },
            ].map((card) => (
              <div
                key={card.tag}
                className="bg-[#111] p-10 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-0.5 h-0 bg-[#e8b4c8] group-hover:h-full transition-all duration-500" />
                <p className="text-[10px] tracking-[.18em] uppercase text-[#e8b4c8] mb-5 font-medium">
                  {card.tag}
                </p>
                <h3 className="font-playfair text-[1.4rem] font-bold text-[#f5f0eb] leading-tight mb-3">
                  {card.title}
                </h3>
                {card.sub && (
                  <p className="text-[.8rem] text-[#8a8480] tracking-widest uppercase">
                    {card.sub}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="px-16 py-20 bg-[#0d0d0d]">
          <p className="text-[10px] tracking-[.2em] uppercase text-[#e8b4c8] mb-3 font-medium">
            Career
          </p>
          <h2 className="font-playfair text-[2rem] font-bold text-[#f5f0eb] mb-16 tracking-tight">
            Work Experience
          </h2>

          <div className="relative pl-8">
            {/* Animated timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px overflow-hidden">
              <div className="absolute inset-0 bg-[#2a2520]" />
              <div
                className="absolute top-0 left-0 w-full bg-linear-to-b from-[#e8b4c8] via-[#e8b4c8] to-transparent transition-all duration-1000 ease-out"
                style={{ height: '100%', opacity: 0.6 }}
              />
              {/* Traveling glow dot */}
              <div className="absolute left-0 w-full h-24 bg-linear-to-b from-transparent via-[#e8b4c8] to-transparent animate-[travel_4s_ease-in-out_infinite]" />
            </div>

            {experiences.map((exp, i) => (
              <div key={i} className="group/entry">
                <div className="relative mb-14">
                  {/* Dot — pulses and glows on hover */}
                  <div className="absolute left-[-2.45rem] top-0 bottom-0 z-10 flex items-start pt-[0.6rem]">
                    <div className="relative w-2.5 h-2.5">
                      {/* Ping ring on group hover */}
                      <div className="absolute inset-0 rounded-full bg-[#e8b4c8] opacity-0 group-hover/entry:opacity-40 group-hover/entry:scale-[2.5] transition-all duration-500" />
                      {/* Outer glow ring */}
                      <div className="absolute -inset-1 rounded-full border border-[#e8b4c8]/0 group-hover/entry:border-[#e8b4c8]/40 transition-all duration-500" />
                      {/* Main dot */}
                      <div className="w-2.5 h-2.5 rounded-full bg-[#e8b4c8] border-2 border-[#0d0d0d] ring-[3px] ring-[#2a2520] group-hover/entry:ring-[#e8b4c8]/40 group-hover/entry:scale-125 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Card — subtle left border reveal on hover */}
                  <div className="relative pl-0 before:absolute before:left-0 before:top-0 before:h-full before:w-0 group-hover/entry:before:w-0 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                      <div>
                        <h3 className="font-playfair text-xl font-bold text-[#f5f0eb] leading-tight mb-1 group-hover/entry:text-[#e8b4c8] transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-[.82rem] tracking-widest uppercase text-[#e8b4c8] font-medium opacity-70 group-hover/entry:opacity-100 transition-opacity duration-300">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-[.75rem] tracking-widest uppercase text-[#5a5450] bg-[#1a1a1a] border border-[#2a2520] px-3 py-1 rounded-full group-hover/entry:border-[#e8b4c8]/30 group-hover/entry:text-[#e8b4c8]/60 transition-all duration-300">
                        {exp.type}
                      </span>
                    </div>

                    {/* Bullets — slide in slightly on hover */}
                    <ul className="mb-5 space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="text-sm text-[#a89f96] font-light leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#3a2830] before:text-xs before:top-0.5 group-hover/entry:text-[#c4b8b0] group-hover/entry:before:text-[#e8b4c8]/40 transition-colors duration-300"
                          style={{ transitionDelay: `${j * 30}ms` }}
                        >
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag, k) => (
                        <span
                          key={tag}
                          className="text-[.72rem] tracking-wide text-[#e8b4c8] bg-[#e8b4c8]/8 border border-[#e8b4c8]/25 px-3 py-1 rounded-full group-hover/entry:bg-[#e8b4c8]/[.14] group-hover/entry:border-[#e8b4c8]/50 transition-all duration-200"
                          style={{ transitionDelay: `${k * 20}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {i < experiences.length - 1 && (
                  <div className="h-px bg-linear-to-r from-[#2a2520] to-transparent mb-14 -ml-8 group-hover/entry:from-[#e8b4c8]/20 transition-colors duration-500" />
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Skills */}
        <section className="px-16 py-20 bg-[#111]">
          <p className="text-[10px] tracking-[.2em] uppercase text-[#e8b4c8] mb-3 font-medium">
            Toolkit
          </p>
          <h2 className="font-playfair text-[2rem] font-bold text-[#f5f0eb] mb-14 tracking-tight">
            Skills
          </h2>

          <div className="grid grid-cols-3 gap-px bg-[#2a2520]">
            {[
              {
                label: 'Design',
                skills: [
                  'Figma',
                  'UX Research',
                  'Prototyping',
                  'User Testing',
                  'Wireframing',
                  'Design Systems',
                  'Visual Design',
                  'Branding',
                ],
              },
              {
                label: 'Frontend',
                skills: [
                  'React.js',
                  'Vue.js',
                  'Next.js',
                  'TypeScript',
                  'Tailwind CSS',
                  'HTML / CSS / JS',
                  'Ant Design',
                  'Material Design',
                  'Element UI',
                ],
              },
              {
                label: 'Soft Skills',
                skills: [
                  'System Thinking',
                  'Psychology',
                  'Project Management',
                  'Leadership',
                  'Team Player',
                  'Mentoring',
                  'Communication',
                  'Problem Solving',
                ],
              },
            ].map((group) => (
              <div key={group.label} className="bg-[#111] p-8">
                <p className="text-[10px] tracking-[.18em] uppercase text-[#e8b4c8] mb-5 font-medium">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[.75rem] text-[#c4b8b0] bg-[#1a1a1a] border border-[#2a2520] px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-[#e8b4c8] hover:text-[#4a1528] hover:border-[#e8b4c8] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="px-16 py-20 bg-[#0d0d0d]">
          <p className="text-[10px] tracking-[.2em] uppercase text-[#e8b4c8] mb-3 font-medium">
            Get in touch
          </p>
          <h2 className="font-playfair text-[2rem] font-bold text-[#f5f0eb] mb-14 tracking-tight">
            Contact
          </h2>

          <div className="grid grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-[.82rem] text-[#a89f96] font-light leading-relaxed mb-10 max-w-xs tracking-wide">
                Have a project in mind or just want to say hello? <br />I would
                love to hear from you.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: <MdEmail size={14} />,
                    label: 'ratanawan.thep@gmail.com',
                    href: 'https://mail.google.com/mail/?view=cm&to=ratanawan.thep@gmail.com',
                  },
                  {
                    icon: <FaLinkedin size={13} />,
                    label: 'linkedin.com/in/ratanawan',
                    href: 'https://www.linkedin.com/in/ratanawan',
                  },
                  {
                    icon: <FaGithub size={13} />,
                    label: 'github.com/Ratanawan',
                    href: 'https://github.com/Ratanawan',
                  },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[.78rem] text-[#8a8480] tracking-widest font-light hover:text-[#e8b4c8] transition-colors duration-200 group"
                  >
                    <div className="w-7 h-7 rounded-full border border-[#2a2520] flex items-center justify-center group-hover:border-[#e8b4c8] transition-colors duration-200">
                      {link.icon}
                    </div>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { label: 'Name', type: 'text', placeholder: 'Your name' },
                {
                  label: 'Email',
                  type: 'email',
                  placeholder: 'your@gmail.com',
                },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-1.5">
                  <label className="text-[9px] tracking-[.2em] uppercase text-[#6a6460] font-medium">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="bg-[#111] border border-[#2a2520] text-[#f5f0eb] text-[.78rem] font-light tracking-wide placeholder:text-[#5a5450] px-3.5 py-2.5 rounded-lg outline-none focus:border-[#e8b4c8] transition-colors duration-200"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] tracking-[.2em] uppercase text-[#6a6460] font-medium">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="bg-[#111] border border-[#2a2520] text-[#f5f0eb] text-[.78rem] font-light tracking-wide placeholder:text-[#5a5450] px-3.5 py-2.5 rounded-lg outline-none focus:border-[#e8b4c8] transition-colors duration-200 resize-none"
                />
              </div>

              <button className="self-start mt-1 bg-[#e8b4c8] text-[#4a1528] text-[.7rem] font-medium tracking-[.16em] uppercase px-6 py-2.5 rounded-lg hover:bg-[#f5d0e0] transition-colors duration-200 cursor-pointer">
                Send message
              </button>
            </div>
          </div>
        </section>

        <footer className="bg-[#080808] border-t border-[#111] px-16 py-7 flex items-center justify-between flex-wrap gap-4">
          <p className="font-playfair text-[.9rem] font-bold text-[#4a4440]">
            Ratanawan Thepanom
          </p>
          <p className="text-[.7rem] text-[#4a4440] tracking-widest font-light">
            © 2026 all rights reserved
          </p>
          <div className="flex gap-2.5">
            {[
              {
                icon: <FaLinkedin size={12} />,
                href: 'https://www.linkedin.com/in/ratanawan',
              },
              {
                icon: <FaGithub size={12} />,
                href: 'https://github.com/Ratanawan',
              },
              {
                icon: <MdEmail size={12} />,
                href: 'https://mail.google.com/mail/?view=cm&to=ratanawan.thep@gmail.com',
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-[#1a1a1a] flex items-center justify-center text-[#4a4440] hover:border-[#e8b4c8] hover:text-[#e8b4c8] transition-all duration-200"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[9px] tracking-[.16em] uppercase text-[#4a4440] hover:text-[#e8b4c8] transition-colors duration-200 cursor-pointer bg-transparent border-none"
          >
            Back to top ↑
          </button>
        </footer>
      </main>
    </div>
  )
}
