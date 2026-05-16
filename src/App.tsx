import { useState } from 'react'

export default function AryanVikasPortfolio() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
  const [activeSemester, setActiveSemester] = useState<number>(0)

  const designProjects = [
    {
      title: '505 Run Club Event Card Design & Supply',
      desc: 'Designed collectible run cards handed out after every community run, helping 505 build a recognizable visual identity for their events.',
      accent: '#b1442f',
      behance: 'https://www.behance.net/gallery/249492345/RUN-RAVE-CARD-DESIGN'
    },
    {
      title: 'Club615 Member Poster Series',
      desc: 'Created a poster series for Club615 members built around inside jokes, personalities, memories and hostel culture aesthetics.',
      accent: '#7c5cff',
      behance: 'https://www.behance.net/gallery/249490353/CLUB-615-Member-Series'
    },
    {
      title: '04 Run Club Campaign Design',
      desc: 'Came up with the event concept, naming, copywriting and full visual design for a four slide Instagram carousel campaign.',
      accent: '#5f8f96',
      behance: 'https://www.behance.net/gallery/249492059/04-RUN-CLUB-EVENT-DESIGN'
    },
    {
      title: 'Lazy Legs Recruitment Campaign',
      desc: 'Designed the recruitment campaign visuals for Lazy Legs while experimenting with startup inspired visuals and UI focused design language.',
      accent: '#d2a45c',
      behance: 'https://www.behance.net/gallery/226616645/LazyLegs/modules/1296216477'
    },
    {
      title: 'SPOT App Logo Design',
      desc: 'Designed the visual identity and logo for SPOT, an app focused on discovering events, communities and campus activities around Manipal.',
      accent: '#4da3ff',
      behance: 'https://www.behance.net/gallery/249492647/SPOT-App-Logo'
    }
  ]

  const semesterTimeline = [
    {
      sem: 'SEM 1',
      title: 'The Beginning of Club615',
      desc:
        'Club615 began as an attempt to make hostel life feel less temporary and emotionally distant. Since my room was the largest in the hostel, I slowly transformed it into a warmer and more welcoming space using ambient lights, posters, rugs, pillows and extra mattresses. Friends pooled money together for a projector and the room slowly became home to film nights, birthday celebrations and conversations that stretched late into the night. Around my desk sat glowing fish tanks and even a hamster that somehow became the hostel’s favourite little resident. Over time, Club615 stopped feeling like just a hostel room and became something people associated with comfort, warmth, friendship and belonging.'
    },
    {
      sem: 'SEM 2',
      title: 'The Club615 Night Canteen',
      desc:
        'During second semester I noticed how difficult it was for hostellers to afford late night food regularly since most campus canteens had prices starting around ₹100. Using the already growing popularity of Club615, I decided to start a student friendly night canteen after running polls in the Block 17 hostel groups asking whether people would support affordable late night food. What began with a single kettle and my friend Kandi Pardheev, fondly remembered by hostelers as KP, slowly turned into a lively late night community space. While KP handled the cooking, I managed the branding, menu planning, pricing, announcements and overall atmosphere. I moved benches from the TV rooms into the corridor outside my room, added warm golden strip lights and used the projector for football screenings, movie weekends and late night gatherings. Running from 10:30 PM to 2:30 AM with affordable prices like ₹26 Maggi, the canteen became both a source of income and a genuine community space built around good food, films and company.'
    },
    {
      sem: 'SEM 3',
      title: 'Rebuilding Club615',
      desc:
        'Semester 3 was about change. Since first year hostel blocks could only house freshers, all of us had to leave behind the place where Club615 was born. Some of us shifted into Block 20 while many people who made first year feel alive got scattered across different hostels. With that, the original Club615 Night Canteen and its legendary hangout space slowly came to an end. But I did not want Club615 to disappear with first year memories. Instead of recreating the same gathering space, I decided to help people express themselves through the spaces they lived in. Club615 was rebuilt into a décor and poster brand focused around hostel culture. I connected with suppliers and stores across Udupi, Manipal and Hyderabad to bring in strip lights, LED neon lights, custom posters and sticker prints. The idea was simple. If people missed home, maybe helping them shape their own space could make hostel rooms feel less emotionally empty. Even after the original room disappeared, Club615 remained a constant topic around campus. My Block 20 room slowly became known for its glowing fish tanks, massive poster walls and plants filling every corner, feeling less like a hostel room and more like a strange cinematic jungle built from lights, colours and chaos. That sense of curiosity, comfort and warmth was what kept Club615 alive even after everything changed.'
    },
    {
      sem: 'SEM 4',
      title: 'Beyond The Hostel Room',
      desc:
        'Semester 4 was when Club615 finally started becoming bigger than the room it came from. By then the name already had its own presence around campus, so instead of keeping it limited to hostel culture, I started taking it outside through collaborations, creative work and events around Manipal. Club615 began working with different clubs and communities across campus, supplying event cards for 505 Run Club, collaborating on their final run and later also creating print material for the Founders Run attended by the MIT Director. Slowly people began approaching Club615 for posters, advertisements and promotional material for their own events and ideas. This also led to collaborations with startups like Kult Productions where Club615 worked on visual material for party events around Manipal. What made this phase special was how approachable Club615 became to newer students. Earlier it felt like some legendary hostel room people only heard stories about, but now it existed openly through posters, collaborations, events and campus culture itself. The idea of Club615 was no longer tied to one room anymore, it had become something people across Manipal could experience in their own way.'
    },
    {
      sem: 'SEM 5',
      title: 'Club615 Expansion',
      desc:
        'With more still to come, Semester 5 is planned to be Club615 at its biggest stage yet. Multiple events, workshops, gatherings and parties are currently being planned directly under Club615 itself, making Club615 feel less like something people only hear about and more like something they can actually be part of.'
    }
  ]

  const experiences = [
    {
      title: 'MIC Check Podcast',
      desc: 'Guest speaker on MIC Check discussing hostel life, homesickness and adapting to college during first year.',
      details:
        'The episode was mainly about the overall experience of moving away from home for college, adapting to hostel life, dealing with homesickness, friendships and eventually finding comfort in people around you.',
      link: 'https://open.spotify.com/episode/2trQXPi7djGnrFBSDJC1Ub?si=81ac1e32a97f4f5e',
      button: 'Listen On Spotify',
      accent: '#1DB954'
    },
    {
      title: 'Fashion Modelling',
      desc: 'Joined FANATICS, the fashion club of MIC, and performed in fashion and cultural showcases across campuses.',
      details:
        'Performed with FANATICS at WAVES in BITS Goa where our team secured second place in the fashion event. I also participated in the UTSAV Cultural Parade, an inter MAHE event where students from MAHE campuses across the country come to Manipal for a week to showcase their talents.'
    },
    {
      title: 'Vishwasa NGO',
      desc: 'Worked with Vishwasa NGO as a voiceover artist and translator for English and Telugu content.',
      details:
        'Vishwasa is a mental health awareness NGO focused on helping children. I worked on multiple videos as a voiceover artist in both English and Telugu while also translating scripts from English to Telugu and Telugu to English.'
    },
    {
      title: 'AM Plus Newspaper',
      desc: 'Editor, writer and layout designer for AM Plus, MIC’s weekly student newspaper.',
      details:
        'I was the editor of AM PLUS, MIC’s weekly newspaper, for one issue and also helped with other issues throughout the semester as a page layout designer, article writer and with the overall aesthetic and timeliness of the papers for other teams aside from my own purely due to interest.'
    },
    {
      title: 'BOAT Advertisement',
      desc: 'Created and produced a BOAT style advertisement for an end semester practical project.',
      link: 'https://youtu.be/Rw5r9aD1qsc',
      button: 'Watch Advertisement',
      accent: '#ef4444'
    },
    {
      title: 'Remixes & Sound Design',
      desc: 'Worked on remix projects, sound experimentation and audio design for college productions.',
      details:
        'I did a passion project trying to mix the track Kompa Pasion with renditions of it from various artists while also experimenting with remixing different tracks over time. I also worked with sound for various college assignments and projects including radio productions and vocal story sound design.'
    },
    {
      title: 'Short Films',
      desc: 'Acted in short films and also worked on editing and production for interview based projects.',
      details:
        'Acted in two short films, one being a joint passion project between juniors and seniors and another for a college assignment. I also worked on editing for short films and interview based projects.'
    },
    {
      title: 'Writings & Poems',
      desc: 'Personal writings and poems exploring memory, identity and emotions through cinematic storytelling.',
      
      link: 'https://substack.com/@guyfrom615',
      button: 'Read On Substack',
      accent: '#ff7849'
    }
  ]

  return (
    <div className="bg-[#090909] text-[#f5f1e8] min-h-screen overflow-x-hidden font-sans relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#b1442f]/10 blur-[140px]" />
        <div className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-400/10 blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#ff9f43]/10 blur-[180px]" />
      </div>

      <div className="relative z-10">
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/[0.18] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
            <a
              href="#"
              className="uppercase text-sm md:text-base tracking-[0.45em] font-semibold text-[#f5f1e8] hover:opacity-70 transition-all duration-500"
            >
              ARYAN VIKAS
            </a>

            <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.28em] text-[#8d8d8d]">
              <a href="#work" className="text-[#b1442f] hover:text-[#d36a50] transition-all duration-500">
                01 Work
              </a>

              <a href="#experience" className="text-[#b1442f] hover:text-[#d36a50] transition-all duration-500">
                02 Experience
              </a>

              <a href="#club615" className="text-[#7c5cff] hover:text-[#9c86ff] transition-all duration-500">
                03 Club615
              </a>

              <a href="#volunteering" className="text-[#b1442f] hover:text-[#d36a50] transition-all duration-500">
                04 Volunteering
              </a>

              <a href="#ecology" className="text-[#5f8f96] hover:text-[#7db8c1] transition-all duration-500">
                05 Ecology
              </a>
            </nav>
          </div>
        </header>
        <section className="relative min-h-screen px-6 md:px-12 pt-36 pb-12 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:calc(100%/2)_100%,100%_100px] opacity-20" />

          <div className="max-w-[92vw] mx-auto relative z-10 h-full flex flex-col justify-between min-h-[86vh]">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr] items-start gap-2">
              <div>
                <div className="mb-10 uppercase tracking-[0.42em] text-[11px] text-[#ff5a36] flex flex-wrap items-center gap-4 ml-2">
                  <span>Creator Of Club 615</span>
                  <span>•</span>
                  <span>MIC Manipal</span>
                  <span>•</span>
                  <span>EST. 2024</span>
                </div>

                <div className="leading-[0.9] uppercase font-black select-none ml-1 mt-10">
                  <div
                    className="text-[#f5f1e8] text-[5.4rem] md:text-[9.6rem] lg:text-[12rem]"
                    style={{
                      letterSpacing: '0.02em'
                    }}
                  >
                    ARYAN
                  </div>

                  <div
                    className="text-[5.4rem] md:text-[9.6rem] lg:text-[12rem] mt-1 text-transparent"
                    style={{
                      letterSpacing: '0.05em',
                      WebkitTextStroke: '1.5px #f5f1e8'
                    }}
                  >
                    VIKAS
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 border-t border-white/10 pt-5 overflow-hidden">
              <div className="flex items-center gap-10 whitespace-nowrap w-max animate-[marquee_26s_linear_infinite] text-[11px] uppercase tracking-[0.38em] text-[#5f5f5f]">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-10">
                    <span>Brand Strategy</span>
                    <span className="text-[#d9472f]">✦</span>
                    <span>Event Design</span>
                    <span className="text-[#d9472f]">✦</span>
                    <span>Social Media</span>
                    <span className="text-[#d9472f]">✦</span>
                    <span>Creative Direction</span>
                    <span className="text-[#d9472f]">✦</span>
                    <span>All Original · No Templates</span>
                    <span className="text-[#d9472f]">✦</span>
                    <span>Visual Design</span>
                    <span className="text-[#d9472f]">✦</span>
                    
                    <span>Content Creation</span>
                    <span className="text-[#d9472f]">✦</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="px-6 md:px-12 py-28 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <p className="uppercase tracking-[0.4em] text-[11px] text-[#b1442f] mb-4">
                01 Selected Work
              </p>

              <h2 className="text-5xl md:text-7xl uppercase font-black tracking-[-0.05em] max-w-4xl leading-none">
                Design Work & Visual Projects
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {designProjects.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  className="group border border-white/10 rounded-[2.3rem] overflow-hidden bg-black/[0.45] hover:bg-white/[0.03] transition-all duration-700 hover:-translate-y-2 text-left relative"
                  style={{ boxShadow: `0 0 55px ${item.accent}25` }}
                >
                  <div
                    className="absolute inset-0 opacity-20 blur-3xl transition-opacity duration-700 group-hover:opacity-40"
                    style={{ background: `radial-gradient(circle at center, ${item.accent}, transparent 65%)` }}
                  />

                  <div className="relative z-10 p-7 min-h-[320px] flex flex-col justify-between">
                    <div>
                      <div className="uppercase tracking-[0.32em] text-[11px] mb-8" style={{ color: item.accent }}>
                        Graphic Design
                      </div>

                      <h3 className="text-[2.4rem] uppercase font-black leading-[0.92] tracking-[-0.04em] h-[190px] flex items-start mb-6">
                        {item.title}
                      </h3>

                      <div className="w-16 h-[2px] mb-8" style={{ backgroundColor: item.accent }} />

                      <p className="text-[#c2c2c2] leading-8 text-[1rem] mb-8">
                        {item.desc}
                      </p>

                      {expandedProject === index && (
                        <div className="pt-6 border-t border-white/10 mt-6">
                          <a
                          href={item.behance}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-500 text-sm uppercase tracking-[0.2em] font-medium mb-6"
                          style={{ borderColor: `${item.accent}60`, color: item.accent }}
                        >
                          View Project
                        </a>
                        </div>
                      )}

                      
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-6 md:px-12 py-28 border-t border-white/10 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <p className="uppercase tracking-[0.4em] text-[11px] text-[#b1442f] mb-4">
                02 Experience & Presence
              </p>

              <h2 className="text-5xl md:text-7xl uppercase font-black tracking-[-0.05em] leading-none max-w-4xl">
                Media, Stage & Creative Work
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {experiences.map((item, index) => {
                const glowClass =
                  item.title === 'MIC Check Podcast'
                    ? 'hover:border-[#1DB954]/70 hover:bg-[#1DB954]/[0.04] hover:shadow-[0_0_40px_rgba(29,185,84,0.22)]'
                    : item.title === 'BOAT Advertisement'
                    ? 'hover:border-red-500/70 hover:bg-red-500/[0.05] hover:shadow-[0_0_40px_rgba(239,68,68,0.22)]'
                    : item.title === 'Writings & Poems'
                    ? 'hover:border-[#FF6719]/70 hover:bg-[#FF6719]/[0.05] hover:shadow-[0_0_40px_rgba(255,103,25,0.24)]'
                    : 'hover:border-orange-400/70 hover:bg-orange-500/[0.04] hover:shadow-[0_0_40px_rgba(251,146,60,0.18)]'

                return (
                  <button
                    key={index}
                    onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                    className={`text-left p-7 rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 ${glowClass}`}
                  >
                    <div className="flex items-start justify-between gap-6 mb-5">
                      <h3 className="text-3xl uppercase font-bold leading-none">
                        {item.title}
                      </h3>

                      <span className="text-2xl text-[#8d8d8d]">
                        {expandedExperience === index ? '−' : '+'}
                      </span>
                    </div>

                    <p className="text-[#b8b8b8] leading-7 text-[1.02rem] mb-4 line-clamp-2 min-h-[56px] overflow-hidden">
                      {item.desc}
                    </p>

                    {expandedExperience === index && (
                      <div className="pt-4 border-t border-white/10 text-[#9f9f9f] leading-8 text-[0.98rem]">
                        {item.details && <p className="mb-5">{item.details}</p>}

                        {item.link && (
                          <div className="space-y-5">
                            {item.title === 'MIC Check Podcast' && (
                              <iframe
                                data-testid="embed-iframe"
                                style={{ borderRadius: '12px' }}
                                src="https://open.spotify.com/embed/episode/2trQXPi7djGnrFBSDJC1Ub?utm_source=generator&theme=0"
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                              />
                            )}

                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-500 text-sm uppercase tracking-[0.2em] font-medium"
                              style={{
                                borderColor: `${item.accent}70`,
                                color: item.accent
                              }}
                            >
                              {item.button}
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        <section id="club615" className="px-6 md:px-12 py-28 border-t border-white/10 bg-[#080808] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(177,68,47,0.08),transparent_35%)]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20">
              <p className="uppercase tracking-[0.4em] text-[11px] text-[#7c5cff] mb-4">
                03 Club615
              </p>

              <h2 className="text-5xl md:text-7xl uppercase font-black tracking-[-0.05em] leading-none max-w-5xl mb-10">
                Posters, Community & Hostel Culture
              </h2>

              <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">
                <div className="relative">
                  <div className="absolute left-[18px] top-2 bottom-2 w-px bg-white/10" />

                  <div className="space-y-5 relative z-10">
                    {semesterTimeline.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSemester(index)}
                        className={`w-full text-left pl-12 pr-6 py-6 rounded-[1.8rem] border transition-all duration-500 relative overflow-hidden ${
                          activeSemester === index
                            ? 'border-[#7c5cff]/70 bg-[#7c5cff]/[0.08] shadow-[0_0_40px_rgba(124,92,255,0.16)]'
                            : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                        }`}
                      >
                        <div
                          className={`absolute left-[13px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-500 ${
                            activeSemester === index ? 'bg-[#7c5cff] shadow-[0_0_18px_rgba(124,92,255,0.8)]' : 'bg-white/30'
                          }`}
                        />

                        <div className="uppercase tracking-[0.3em] text-[11px] text-[#7c5cff] mb-3">
                          Timeline
                        </div>

                        <h3 className="text-3xl font-black uppercase tracking-[-0.04em] leading-none">
                          {item.sem}
                        </h3>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border border-white/10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl p-10 min-h-[420px] relative overflow-hidden shadow-[0_0_60px_rgba(124,92,255,0.08)]">
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.2),transparent_35%)]" />

                  <div className="relative z-10">
                    <div className="uppercase tracking-[0.35em] text-[11px] text-[#7c5cff] mb-5">
                      Club615 Timeline
                    </div>

                    <h3 className="text-4xl md:text-5xl uppercase font-black tracking-[-0.05em] leading-none mb-8">
                      {semesterTimeline[activeSemester].title}
                    </h3>

                    <p className="text-[#c8c8c8] text-lg md:text-xl leading-10 max-w-3xl">
                      {semesterTimeline[activeSemester].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="volunteering" className="px-6 md:px-12 py-28 border-t border-white/10 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <p className="uppercase tracking-[0.4em] text-[11px] text-[#b1442f] mb-4">
                04 Volunteer Archive
              </p>

              <h2 className="text-5xl md:text-7xl uppercase font-black tracking-[-0.05em] leading-none max-w-5xl">
                Volunteering, Logistics & On Ground Work
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500">
                <div className="uppercase tracking-[0.3em] text-[11px] text-[#b1442f] mb-6">
                  Volunteer Work
                </div>

                <h3 className="text-3xl uppercase font-black leading-none mb-5">
                  Article 19
                </h3>

                <p className="text-[#bdbdbd] leading-8 text-lg">
                  Worked in creatives and logistics helping with coordination, support work and overall on ground execution during the event.
                </p>
              </div>

              <div className="border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500">
                <div className="uppercase tracking-[0.3em] text-[11px] text-[#b1442f] mb-6">
                  Volunteer Work
                </div>

                <h3 className="text-3xl uppercase font-black leading-none mb-5">
                  Namma Sante
                </h3>

                <p className="text-[#bdbdbd] leading-8 text-lg">
                  Handled logistics and problem solving during Namma Sante where even seniors often relied on me during chaotic on ground situations.
                </p>
              </div>

              <div className="border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500">
                <div className="uppercase tracking-[0.3em] text-[11px] text-[#b1442f] mb-6">
                  Volunteer Work
                </div>

                <h3 className="text-3xl uppercase font-black leading-none mb-5">
                  Rockathon
                </h3>

                <p className="text-[#bdbdbd] leading-8 text-lg">
                  Part of a two person volunteer team at Rockathon in Hyderabad helping participants during the rope assisted ledge descent section.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="ecology" className="px-6 md:px-12 py-28 border-t border-cyan-500/10 bg-[#070b12] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(177,68,47,0.08),transparent_36%)]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20">
              <p className="uppercase tracking-[0.4em] text-[11px] text-[#5f8f96] mb-4">
                05 Exploration & Ecology
              </p>

              <h2 className="text-5xl md:text-7xl uppercase font-black tracking-[-0.05em] leading-none max-w-5xl">
                Biotopes, Fishkeeping & Exploration
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xl md:text-2xl leading-10 text-[#dad4c7] font-light mb-10">
                  I build biotopes inspired by the actual habitats fish come from, mixing aquascaping, research and species compatibility to recreate pieces of those ecosystems inside aquariums. Over the years this slowly turned from just a hobby into something much bigger involving exploration, ecosystem observation, photography and understanding how aquatic environments actually function in nature.
                </p>

                <div className="space-y-5 text-[#bcbcbc] text-lg leading-8 mb-10">
                  <p>
                    I have been in the aquarium hobby for 13+ years now, starting around the age of 7. A lot of weekends were spent travelling around looking for rivers, ponds and random water bodies searching for fish species and studying aquatic habitats.
                  </p>

                  <p>
                    Later on I participated in the India Biotope Championship 2025, a competition focused on native species, ecosystem awareness and biotope style aquascaping.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="border border-white/10 rounded-[1.75rem] p-6 bg-white/[0.04] backdrop-blur-[22px] shadow-[0_10px_35px_rgba(0,0,0,0.35)] hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]">
                    <div className="text-4xl font-black mb-2">180+</div>
                    <div className="uppercase tracking-[0.25em] text-xs text-[#8e8e8e]">
                      Fish Species Kept
                    </div>
                  </div>

                  <div className="border border-white/10 rounded-[1.75rem] p-6 bg-white/[0.04] backdrop-blur-[22px] shadow-[0_10px_35px_rgba(0,0,0,0.35)] hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]">
                    <div className="text-4xl font-black mb-2">IBC</div>
                    <div className="uppercase tracking-[0.25em] text-xs text-[#8e8e8e] leading-5">
                      India Biotope Championship
                    </div>
                  </div>

                  <div className="border border-white/10 rounded-[1.75rem] p-6 bg-white/[0.04] backdrop-blur-[22px] shadow-[0_10px_35px_rgba(0,0,0,0.35)] hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]">
                    <div className="text-4xl font-black mb-2">13+</div>
                    <div className="uppercase tracking-[0.18em] text-xs text-[#8e8e8e] leading-5">
                      Years In Aquarium Hobby
                    </div>
                  </div>
                </div>

                <div className="mt-10 border border-white/10 rounded-[2rem] p-8 bg-white/[0.03] backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500">
                  <div className="text-[#5f8f96] uppercase tracking-[0.3em] text-xs mb-4">
                    Side Venture
                  </div>

                  <h3 className="text-3xl uppercase font-black leading-none mb-5">
                    Icthyra
                  </h3>

                  <p className="text-[#bdbdbd] text-lg leading-8 max-w-3xl">
                    Co founded Icthyra with a friend as a side venture focused on exotic aquatics, rare fish and breeding projects. I currently handle the branding, visual identity and marketing side while we continue building the systems behind it.
                  </p>
                </div>
              </div>

              <div className="h-full min-h-[500px] rounded-[2rem] overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1600&auto=format&fit=crop"
                  alt="Exploration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen border-t border-white/10 bg-[#060606] relative overflow-hidden flex items-center justify-center px-6 py-32">
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,white,transparent_60%)]" />

          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <div className="leading-[1] uppercase tracking-[-0.04em] text-[3.5rem] md:text-[6rem] lg:text-[7rem] font-light text-[#f1ece2]">
              <div>LET’S MAKE</div>

              <div className="mt-2 opacity-80">
                SOMETHING
              </div>
            </div>

            <p className="mt-14 text-[#8d8d8d] text-lg md:text-xl italic font-light tracking-wide max-w-3xl mx-auto leading-9">
              Available for internships, freelance work and creative collaborations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
              <a
                href="https://www.linkedin.com/in/madebyaryanvikas"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-[0.28em] text-xs inline-flex items-center justify-center px-4 py-3 rounded-[0.3rem] border border-white/10 bg-white/[0.03] text-[#d0d0d0] transition-all duration-500 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/[0.05]"
              >
                LinkedIn
              </a>

              <a
                href="https://www.behance.net/ary3een_arkX"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-[0.28em] text-xs inline-flex items-center justify-center px-4 py-3 rounded-[0.3rem] border border-white/10 bg-white/[0.03] text-[#d0d0d0] transition-all duration-500 hover:text-[#1769FF] hover:border-[#1769FF] hover:bg-[#1769FF]/[0.05]"
              >
                Behance
              </a>

              <a
                href="https://open.spotify.com/episode/2trQXPi7djGnrFBSDJC1Ub?si=ab333e6be1bc4a15"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-[0.28em] text-xs inline-flex items-center justify-center px-4 py-3 rounded-[0.3rem] border border-white/10 bg-white/[0.03] text-[#d0d0d0] transition-all duration-500 hover:text-[#1DB954] hover:border-[#1DB954] hover:bg-[#1DB954]/[0.05]"
              >
                Spotify
              </a>

              <a
                href="https://substack.com/@guyfrom615"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-[0.28em] text-xs inline-flex items-center justify-center px-4 py-3 rounded-[0.3rem] border border-white/10 bg-white/[0.03] text-[#d0d0d0] transition-all duration-500 hover:text-[#FF6719] hover:border-[#FF6719] hover:bg-[#FF6719]/[0.05]"
              >
                Substack
              </a>

              <a
                href="https://youtu.be/Rw5r9aD1qsc"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-[0.28em] text-xs inline-flex items-center justify-center px-4 py-3 rounded-[0.3rem] border border-white/10 bg-white/[0.03] text-[#d0d0d0] transition-all duration-500 hover:text-[#FF0000] hover:border-[#FF0000] hover:bg-[#FF0000]/[0.05]"
              >
                YouTube
              </a>
            </div>

            <div className="mt-32 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] uppercase tracking-[0.4em] text-[#5e5e5e]">
              <div>2026 Aryan Vikas</div>

              <div>
                CLUB615 · MIC · MANIPAL · HYDERABAD
              </div>

              <div>
                EST. 2024 · All Work Original
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #090909;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }

          to {
            transform: translateX(-50%);
          }
        }

        
      `}</style>
    </div>
  )
}
