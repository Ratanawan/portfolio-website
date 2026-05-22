import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
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
                  <p className="text-[.8rem] text-[#5a5450] tracking-widest uppercase">
                    {card.sub}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
