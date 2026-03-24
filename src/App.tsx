import { useEffect, useRef, useState } from 'react'
import './App.css'

/* ─────────────────────────────── CONSTANTS ─────────────────────────────── */
const FB_PAGE = 'https://www.facebook.com/wetlookbmxclothing'
const IG_PAGE = 'https://www.instagram.com/wetlookbmxclothing/'
const EMAIL   = 'Deltonespiritu@gmail.com'

const HEADING: React.CSSProperties = {
  fontFamily: "'Bebas Neue', Impact, 'Arial Narrow', sans-serif",
  letterSpacing: '0.04em',
}

/* ─────────────────────────── EMAIL OPTIONS ─────────────────────────────── */
function EmailOptions({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const subject = encodeURIComponent('WetLook BMX Clothing — Inquiry')
  const options = [
    {
      label: 'Gmail',
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}`,
      color: '#EA4335',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
    },
    {
      label: 'Outlook',
      href: `https://outlook.live.com/mail/0/deeplink/compose?to=${EMAIL}&subject=${subject}`,
      color: '#0078D4',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5V2.55q0-.44.3-.75.3-.3.75-.3h12.9q.44 0 .75.3.3.3.3.75V10.85l1.24.72h.01q.1.07.18.18.07.12.07.25zm-6-8.2v1.92l1.5.87V3.8zm-5.5 0v2.79l1.5.87V3.8zm-5.5 0V6h4L5 3.8zM10.5 8.72l-1.5-.87v2.36l1.5.85zm5.5 0l-1.5-.87v2.36l1.5.85zm5.5.87l-1.5-.87v2.36l1.5.85zm-11 2.19l-1.5-.85v2.35l1.5.85zm5.5 0l-1.5-.85v2.35l1.5.85zm5.5.87l-1.5-.85v2.35l1.5.85zm-11 2.2l-1.5-.86v2.36l1.5.85zm5.5 0l-1.5-.86v2.36l1.5.85zm5.5.86l-1.5-.86v2.36l1.5.85zM6.27 21.4H22.5V12.9l-10.72 6.2q-.17.1-.38.1-.2 0-.38-.1L6.27 15.6v5.8zM3.5 15.5q-.63 0-1.06-.44Q2 14.63 2 14q0-.63.44-1.06.43-.44 1.06-.44.63 0 1.06.44Q5 13.37 5 14q0 .63-.44 1.06-.43.44-1.06.44z" />
        </svg>
      ),
    },
    {
      label: 'Yahoo',
      href: `https://compose.mail.yahoo.com/?to=${EMAIL}&subject=${subject}`,
      color: '#6001D2',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.2 4.8h-3.6L12 10.56 8.4 4.8H4.8l5.28 8.16v6.24h3.84v-6.24z" />
        </svg>
      ),
    },
    {
      label: 'Default',
      href: `mailto:${EMAIL}?subject=${subject}`,
      color: '#c8ff00',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  if (compact) {
    return (
      <div ref={ref} className="relative inline-block">
        <button
          onClick={() => setOpen(o => !o)}
          className="group flex items-center gap-4 text-left w-full"
        >
          <div className="w-11 h-11 bg-[#c8ff00] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <span className="text-white font-semibold group-hover:text-[#c8ff00] transition-colors block">
              {EMAIL}
            </span>
            <span className="text-gray-500 text-xs">Click to choose your email app</span>
          </div>
          <svg
            className={`w-4 h-4 text-gray-500 ml-2 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <div className="absolute left-0 top-full mt-2 z-50 bg-[#141414] border border-[#2a2a2a] min-w-[220px] shadow-2xl">
            {options.map(({ label, href, color, icon }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Default' ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-[#1e1e1e] transition-colors group/item border-b border-[#1e1e1e] last:border-0"
              >
                <span style={{ color }} className="shrink-0">{icon}</span>
                <span className="text-sm font-semibold text-gray-300 group-hover/item:text-white transition-colors">
                  Open in {label}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="group flex items-center gap-5 p-5 border border-[#1f1f1f] hover:border-[#c8ff00] transition-all duration-200 bg-[#0d0d0d] w-full text-left"
      >
        <div className="w-10 h-10 bg-[#c8ff00]/10 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-[#c8ff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="min-w-0">
          <div className="text-white font-bold group-hover:text-[#c8ff00] transition-colors truncate">
            {EMAIL}
          </div>
          <div className="text-gray-500 text-xs mt-0.5">Orders &amp; Inquiries — choose your app</div>
        </div>
        <svg
          className={`w-4 h-4 text-gray-600 ml-auto shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="border border-t-0 border-[#2a2a2a] bg-[#0a0a0a]">
          {options.map(({ label, href, color, icon }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Default' ? '_blank' : undefined}
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 px-5 py-3.5 hover:bg-[#141414] transition-colors group/item border-b border-[#181818] last:border-0"
            >
              <span style={{ color }} className="shrink-0">{icon}</span>
              <span className="text-sm font-semibold text-gray-400 group-hover/item:text-white transition-colors">
                Open in {label}
              </span>
              <svg className="w-3 h-3 text-gray-700 ml-auto group-hover/item:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────────── NAVBAR ────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Feed', 'Videos', 'Gallery', 'Contact']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/96 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-black tracking-widest text-white select-none" style={HEADING}>
          <span className="text-[#c8ff00]">WETLOOK</span>{' '}
          <span className="text-white">BMX</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs font-bold tracking-[0.25em] text-gray-400 hover:text-[#c8ff00] transition-colors uppercase"
            >
              {l}
            </a>
          ))}
          <a
            href={FB_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#c8ff00] text-black text-xs font-black tracking-[0.2em] uppercase hover:bg-white transition-colors"
          >
            Shop Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 border-t border-[#1f1f1f] px-5 pb-6 pt-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-bold tracking-widest text-gray-300 hover:text-[#c8ff00] transition-colors uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href={FB_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center px-5 py-3 bg-[#c8ff00] text-black text-xs font-black tracking-[0.2em] uppercase"
          >
            Shop Now
          </a>
        </div>
      )}
    </nav>
  )
}

/* ─────────────────────────────── HERO ──────────────────────────────────── */
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Diagonal grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, #c8ff00 0px, #c8ff00 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(-45deg, #c8ff00 0px, #c8ff00 1px, transparent 1px, transparent 80px)
          `,
        }}
      />
      {/* Glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 text-center px-5 max-w-6xl mx-auto">
        {/* Location badge */}
        <div className="animate-fadeInUp mb-6 inline-flex items-center gap-2 border border-[#c8ff00]/40 px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] inline-block" />
          <span className="text-[#c8ff00] text-xs font-bold tracking-[0.35em] uppercase">
            Las Pinas, Philippines
          </span>
        </div>

        {/* Brand name */}
        <h1
          className="animate-fadeInUp-delay-1 text-[clamp(4rem,18vw,14rem)] leading-none text-white block"
          style={HEADING}
        >
          WETLOOK
        </h1>
        <h2
          className="animate-fadeInUp-delay-1 text-[clamp(2.5rem,10vw,7rem)] leading-none block -mt-2"
          style={{ ...HEADING, color: '#c8ff00' }}
        >
          BMX CLOTHING
        </h2>

        {/* Tagline */}
        <p className="animate-fadeInUp-delay-2 mt-8 text-sm md:text-base text-gray-500 tracking-[0.35em] uppercase font-semibold">
          Ride. Sweat. Chill.
        </p>

        {/* CTAs */}
        <div className="animate-fadeInUp-delay-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#feed"
            className="px-10 py-4 bg-[#c8ff00] text-black text-xs font-black tracking-[0.25em] uppercase hover:bg-white transition-all hover:scale-105 duration-200"
          >
            See Latest Posts
          </a>
          <a
            href={FB_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border-2 border-white/30 text-white text-xs font-black tracking-[0.25em] uppercase hover:border-[#c8ff00] hover:text-[#c8ff00] transition-all duration-200"
          >
            Follow Us →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-gray-600 to-transparent scroll-indicator" />
      </div>
    </section>
  )
}

/* ─────────────────────────────── TICKER ────────────────────────────────── */
function Ticker() {
  const items = [
    'Ride. Sweat. Chill.', 'BMX Life', 'Las Pinas', 'WetLook BMX',
    'Street Sessions', 'New Drops', 'Rider Owned', 'Philippines',
    'Ride. Sweat. Chill.', 'BMX Life', 'Las Pinas', 'WetLook BMX',
    'Street Sessions', 'New Drops', 'Rider Owned', 'Philippines',
  ]
  return (
    <div className="overflow-hidden bg-[#c8ff00] py-3 select-none">
      <div className="ticker-track flex gap-12 w-max whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="text-black text-xs font-black tracking-[0.3em] uppercase flex items-center gap-12">
            {item}
            <span className="text-black/30 text-lg">✕</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────── STATS ─────────────────────────────────── */
function Stats() {
  const stats = [
    { value: '3K+',   label: 'Facebook Followers' },
    { value: '347',   label: 'Instagram Followers' },
    { value: '140+',  label: 'Posts & Reels' },
    { value: '100%',  label: 'Rider Made' },
  ]
  return (
    <section className="py-16 bg-[#0e0e0e] border-y border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div className="text-5xl md:text-6xl text-[#c8ff00] font-black" style={HEADING}>
              {value}
            </div>
            <div className="mt-1 text-gray-500 text-xs font-semibold tracking-[0.2em] uppercase">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────────── ABOUT ─────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Heading */}
          <div>
            <span className="text-[#c8ff00] text-xs font-bold tracking-[0.35em] uppercase">Our Story</span>
            <h2
              className="mt-3 text-7xl md:text-8xl xl:text-9xl leading-none text-white"
              style={HEADING}
            >
              MADE BY<br />
              <span className="text-[#c8ff00]">RIDERS</span><br />
              FOR<br />
              RIDERS
            </h2>
          </div>

          {/* Right: Text + links */}
          <div className="space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              WetLook BMX Clothing was born on the streets of Las Pinas, Philippines — built by real BMX riders who live and breathe the culture every single day.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every piece we put out reflects the grit, creativity, and raw energy of the BMX scene. We're not just a clothing brand — we're a community of riders creating for riders.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              From ledge sessions to park riding, our gear is built to move with you and represent what BMX means to the streets of the Philippines and beyond.
            </p>

            {/* Social buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={FB_PAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#1877F2] text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#1464d9] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href={IG_PAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-white text-xs font-bold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
                style={{
                  background: 'linear-gradient(45deg, #fcb045, #fd1d1d, #833ab4)',
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── FB PAGE PLUGIN ────────────────────────────── */
function FbPageEmbed({ tab = 'timeline', height = 700, width = 500 }: {
  tab?: string
  height?: number
  width?: number
}) {
  const encoded = encodeURIComponent(FB_PAGE)
  const src = `https://www.facebook.com/plugins/page.php?href=${encoded}&tabs=${tab}&width=${width}&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`

  return (
    <div className="fb-embed-wrapper w-full flex justify-center">
      <iframe
        src={src}
        width={width}
        height={height}
        style={{ border: 'none', overflow: 'hidden', maxWidth: '100%', display: 'block' }}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title={`WetLook BMX Clothing Facebook ${tab}`}
      />
    </div>
  )
}

/* ─────────────────────────────── FEED ──────────────────────────────────── */
function Feed() {
  return (
    <section id="feed" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-[#c8ff00] text-xs font-bold tracking-[0.35em] uppercase">Community</span>
            <h2 className="mt-2 text-6xl md:text-8xl leading-none text-white" style={HEADING}>
              LATEST FROM<br />
              THE <span className="text-[#c8ff00]">CREW</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
            Peep our latest drops, ledge sessions, and community content straight from our Facebook page.
          </p>
        </div>

        {/* Embed */}
        <div className="flex justify-center">
          <div className="w-full max-w-[540px] bg-[#111] border border-[#1f1f1f] p-4">
            <FbPageEmbed tab="timeline" height={750} width={500} />
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={FB_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#c8ff00] text-xs font-black tracking-[0.25em] uppercase hover:text-white transition-colors"
          >
            View All Posts on Facebook
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────── VIDEOS ────────────────────────────────── */
function Videos() {
  const quickLinks = [
    { label: 'Reels',  href: `${FB_PAGE}/reels/`,   icon: '🎬', desc: 'Short-form BMX action' },
    { label: 'Videos', href: `${FB_PAGE}/videos/`,  icon: '📹', desc: 'Full session edits' },
    { label: 'Photos', href: `${FB_PAGE}/photos/`,  icon: '📸', desc: 'Product & session shots' },
    { label: 'Posts',  href: FB_PAGE,                icon: '🔥', desc: 'Community updates' },
  ]

  return (
    <section id="videos" className="py-24 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section header */}
        <div className="mb-14">
          <span className="text-[#c8ff00] text-xs font-bold tracking-[0.35em] uppercase">Action</span>
          <h2 className="mt-2 text-6xl md:text-8xl leading-none text-white" style={HEADING}>
            REELS &amp; <span className="text-[#c8ff00]">VIDEOS</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg text-sm leading-relaxed">
            Watch our riders in action. Catch the latest reels, session edits, and product drops.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Embedded feed */}
          <div className="bg-[#131313] border border-[#1f1f1f]">
            <div className="px-5 py-4 border-b border-[#1f1f1f] flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#c8ff00]" />
              <span className="text-white text-xs font-black tracking-[0.2em] uppercase" style={HEADING}>
                Live Facebook Feed
              </span>
            </div>
            <div className="p-4">
              <FbPageEmbed tab="timeline" height={520} width={480} />
            </div>
          </div>

          {/* Right: Quick access + CTA */}
          <div className="flex flex-col gap-6">
            {/* Quick links grid */}
            <div className="bg-[#131313] border border-[#1f1f1f] p-6 flex-1">
              <h3
                className="text-white text-xl mb-5 tracking-[0.2em]"
                style={HEADING}
              >
                BROWSE CONTENT
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map(({ label, href, icon, desc }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-2 p-4 bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#c8ff00] transition-all duration-200"
                  >
                    <span className="text-2xl">{icon}</span>
                    <span
                      className="text-white font-black text-base group-hover:text-[#c8ff00] transition-colors"
                      style={HEADING}
                    >
                      {label}
                    </span>
                    <span className="text-gray-600 text-xs">{desc}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA block */}
            <div className="bg-[#c8ff00] p-7">
              <p className="text-black text-xs font-bold tracking-[0.3em] uppercase mb-1">Don't Miss a Drop</p>
              <h3 className="text-black text-3xl font-black leading-tight mb-3" style={HEADING}>
                FOLLOW FOR DAILY CONTENT
              </h3>
              <p className="text-black/60 text-sm mb-5 leading-relaxed">
                Like our page to get notified on the latest rides, gear drops, and street sessions from the WetLook crew.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={FB_PAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-black text-[#c8ff00] text-xs font-black tracking-[0.2em] uppercase hover:bg-[#111] transition-colors"
                >
                  Like Our Page
                </a>
                <a
                  href={IG_PAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-black/20 text-black text-xs font-black tracking-[0.2em] uppercase hover:bg-black/30 transition-colors"
                >
                  Follow on IG
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────── GALLERY ───────────────────────────────── */
function Gallery() {
  const galleryLinks = [
    {
      title: 'Product Shots',
      desc: 'Check out our latest apparel and gear on Facebook.',
      href: `${FB_PAGE}/photos/`,
      cta: 'View Photos →',
      bg: '#111',
      accent: '#c8ff00',
    },
    {
      title: 'Session Edits',
      desc: 'Street and park footage from the WetLook riders.',
      href: `${FB_PAGE}/videos/`,
      cta: 'Watch Videos →',
      bg: '#0d0d0d',
      accent: '#ff6600',
    },
    {
      title: 'Instagram Feed',
      desc: '140+ posts of BMX culture from @wetlookbmxclothing.',
      href: IG_PAGE,
      cta: 'Open Instagram →',
      bg: '#111',
      accent: '#e1306c',
    },
  ]

  return (
    <section id="gallery" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-14">
          <span className="text-[#c8ff00] text-xs font-bold tracking-[0.35em] uppercase">Gallery</span>
          <h2 className="mt-2 text-6xl md:text-8xl leading-none text-white" style={HEADING}>
            PHOTOS &amp; <span className="text-[#c8ff00]">MEDIA</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg text-sm leading-relaxed">
            All our media lives on Facebook and Instagram. Tap any category below to browse the full collection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {galleryLinks.map(({ title, desc, href, cta, bg, accent }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 border transition-all duration-200 hover:-translate-y-1"
              style={{ backgroundColor: bg, borderColor: '#1f1f1f' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = accent)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#1f1f1f')}
            >
              <h3
                className="text-3xl text-white mb-3 transition-colors duration-200"
                style={{ ...HEADING, color: 'white' }}
                onMouseEnter={e => (e.currentTarget.style.color = accent)}
                onMouseLeave={e => (e.currentTarget.style.color = 'white')}
              >
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
              <span className="text-xs font-black tracking-[0.2em] uppercase" style={{ color: accent }}>
                {cta}
              </span>
            </a>
          ))}
        </div>

        {/* Facebook photo embed */}
        <div className="flex justify-center">
          <div className="w-full max-w-[540px] bg-[#111] border border-[#1f1f1f] p-4">
            <FbPageEmbed tab="timeline" height={600} width={500} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────── CONTACT ───────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0e0e0e] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-[#c8ff00] text-xs font-bold tracking-[0.35em] uppercase">Get In Touch</span>
            <h2
              className="mt-2 text-7xl md:text-9xl leading-none text-white"
              style={HEADING}
            >
              CONTACT<br />
              <span className="text-[#c8ff00]">US</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-md">
              For orders, reservations, and inquiries — hit us up. Ride. Sweat. Chill. That's how we do it, and we'll get back to you fast.
            </p>

            <div className="mt-10 space-y-4">
              {/* Email */}
              <EmailOptions compact />
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#c8ff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-400">Las Pinas, Philippines</span>
              </div>
            </div>
          </div>

          {/* Right: Social cards */}
          <div className="space-y-4">
            <h3 className="text-gray-600 text-xs font-bold tracking-[0.3em] uppercase mb-5">Find Us Online</h3>

            {/* Facebook card */}
            <a
              href={FB_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-5 border border-[#1f1f1f] hover:border-[#1877F2] transition-all duration-200 bg-[#0d0d0d]"
            >
              <svg className="w-10 h-10 text-[#1877F2] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <div className="min-w-0">
                <div className="text-white font-bold group-hover:text-[#1877F2] transition-colors">
                  WetLook BMX Clothing
                </div>
                <div className="text-gray-500 text-xs mt-0.5">3,000+ Followers · Like our page</div>
              </div>
              <svg className="w-4 h-4 text-gray-700 ml-auto shrink-0 group-hover:text-[#1877F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Instagram card */}
            <a
              href={IG_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-5 border border-[#1f1f1f] hover:border-[#E1306C] transition-all duration-200 bg-[#0d0d0d]"
            >
              <svg
                className="w-10 h-10 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
              >
                <defs>
                  <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fcb045" />
                    <stop offset="50%" stopColor="#fd1d1d" />
                    <stop offset="100%" stopColor="#833ab4" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#ig-grad)"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
              <div className="min-w-0">
                <div className="text-white font-bold group-hover:text-[#E1306C] transition-colors">
                  @wetlookbmxclothing
                </div>
                <div className="text-gray-500 text-xs mt-0.5">347 Followers · 140 Posts</div>
              </div>
              <svg className="w-4 h-4 text-gray-700 ml-auto shrink-0 group-hover:text-[#E1306C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Email card */}
            <EmailOptions />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────── FOOTER ────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-black border-t border-[#161616] py-8">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-black text-white" style={HEADING}>
          <span className="text-[#c8ff00]">WETLOOK</span> BMX CLOTHING
        </div>
        <p className="text-gray-700 text-xs tracking-widest uppercase text-center">
          Ride. Sweat. Chill. · Las Pinas, Philippines
        </p>
        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} WetLook BMX Clothing
        </p>
      </div>
    </footer>
  )
}

/* ─────────────────────────────── APP ───────────────────────────────────── */
export default function App() {
  return (
    <div className="bg-[#080808] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
      <About />
      <Feed />
      <Videos />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
