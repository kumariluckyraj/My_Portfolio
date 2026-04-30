'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const G = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --c0: #00000a;
      --c1: #0a0f1e;
      --c2: #0d1b33;
      --neon: #00ffe7;
      --neon2: #ff2d78;
      --neon3: #7b2fff;
      --dim: rgba(0,255,231,0.08);
      --border: rgba(0,255,231,0.18);
      --font-mono: 'Share Tech Mono', monospace;
      --font-head: 'Orbitron', sans-serif;
      --font-body: 'Rajdhani', sans-serif;
      --px: clamp(1rem, 4vw, 3rem);
    }

    html { scroll-behavior: smooth; }
    body { background: var(--c0); color: #a0c4c0; overflow-x: hidden; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--c0); }
    ::-webkit-scrollbar-thumb { background: var(--neon); border-radius: 99px; }
    ::selection { background: var(--neon); color: #000; }

    @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
    @keyframes flicker { 0%,100%{opacity:1} 92%{opacity:1} 93%{opacity:0.4} 94%{opacity:1} 96%{opacity:0.6} 97%{opacity:1} }
    @keyframes glitch { 0%,100%{clip-path:none;transform:none} 2%{clip-path:inset(30% 0 40% 0);transform:translate(-4px,0)} 4%{clip-path:inset(60% 0 10% 0);transform:translate(4px,0)} 6%{clip-path:none;transform:none} }
    @keyframes glitch2 { 0%,100%{clip-path:none;transform:none;color:var(--neon)} 2%{clip-path:inset(20% 0 60% 0);transform:translate(6px,0);color:var(--neon2)} 4%{clip-path:inset(70% 0 5% 0);transform:translate(-6px,0);color:var(--neon3)} 6%{clip-path:none;transform:none;color:var(--neon)} }
    @keyframes pulse-border { 0%,100%{box-shadow:0 0 0 0 rgba(0,255,231,0.0),inset 0 0 0 0 rgba(0,255,231,0)} 50%{box-shadow:0 0 20px 2px rgba(0,255,231,0.15),inset 0 0 15px rgba(0,255,231,0.04)} }
    @keyframes rotateRing { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
    @keyframes rotateRingRev { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
    @keyframes floatZ { 0%,100%{transform:translateY(0) rotateX(2deg)} 50%{transform:translateY(-12px) rotateX(-2deg)} }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
    @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
    @keyframes holo { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
    @keyframes drawerDown { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:none} }

    .glitch-text { position:relative; animation:flicker 8s infinite; }
    .glitch-text::before, .glitch-text::after { content:attr(data-text); position:absolute; inset:0; }
    .glitch-text::before { animation:glitch 6s infinite; color:var(--neon2); opacity:0.7; }
    .glitch-text::after { animation:glitch2 6s infinite 0.1s; color:var(--neon3); opacity:0.5; }

    .card-3d { transform-style:preserve-3d; transition:transform 0.4s cubic-bezier(.23,1,.32,1),box-shadow 0.3s; }
    .hex-border { clip-path:polygon(10px 0%,calc(100% - 10px) 0%,100% 10px,100% calc(100% - 10px),calc(100% - 10px) 100%,10px 100%,0% calc(100% - 10px),0% 10px); }

    .neon-line { height:1px; background:linear-gradient(90deg,transparent,var(--neon),transparent); box-shadow:0 0 8px var(--neon); }

    .tag {
      font-family:var(--font-mono); font-size:0.68rem;
      padding:0.2rem 0.7rem; border-radius:2px;
      background:rgba(0,255,231,0.06); border:1px solid rgba(0,255,231,0.2);
      color:var(--neon); letter-spacing:0.05em;
    }

    section { position:relative; z-index:10; }

    /* ── NAV DRAWER ── */
    .nav-drawer {
      animation: drawerDown 0.22s ease both;
    }

    /* ── RESPONSIVE HERO ── */
    @media (max-width: 700px) {
      .hero-inner {
        flex-direction: column-reverse !important;
        align-items: center !important;
        gap: 2.5rem !important;
        padding-top: 100px !important;
        padding-bottom: 3rem !important;
      }
      .hero-avatar-wrap {
        flex: unset !important;
        width: 180px !important;
        height: 180px !important;
      }
      .hero-avatar-wrap > div {
        width: 180px !important;
        height: 180px !important;
      }
      .hero-avatar-img {
        width: 180px !important;
        height: 180px !important;
      }
    }

    /* ── RESPONSIVE PROJECTS ── */
    @media (max-width: 700px) {
      .project-row {
        justify-content: center !important;
      }
      .project-row > .project-card {
        width: 100% !important;
      }
      .project-connector { display: none !important; }
      .timeline-line { display: none !important; }
      .timeline-node { display: none !important; }
    }

    /* ── RESPONSIVE ACHIEVEMENTS ── */
    @media (max-width: 600px) {
      .ach-grid {
        grid-template-columns: 1fr !important;
      }
    }

    /* ── RESPONSIVE NAV LINKS ── */
    @media (max-width: 860px) {
      .nav-center { display: none !important; }
      .nav-section-links { display: none !important; }
      .nav-hamburger { display: flex !important; }
    }
    @media (min-width: 861px) {
      .nav-hamburger { display: none !important; }
      .nav-drawer-wrap { display: none !important; }
    }
  `}</style>
)

function MatrixRain() {
  const cvs = useRef(null)
  useEffect(() => {
    const canvas = cvs.current
    const ctx = canvas.getContext('2d')
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    const chars = '01{}[]<>=/\\!@#$%^&*();:.,?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-+|~`'
    const cols = Math.floor(canvas.width / 18)
    const drops = Array.from({ length: cols }, () => Math.random() * -100)
    const tick = () => {
      ctx.fillStyle = 'rgba(0,0,10,0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = '13px Share Tech Mono, monospace'
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const bright = y * 18 > canvas.height * 0.7
        ctx.fillStyle = bright ? 'rgba(0,255,231,0.9)' : `rgba(0,255,231,${0.08 + Math.random() * 0.12})`
        ctx.fillText(char, i * 18, y * 18)
        drops[i] = y > canvas.height / 18 + 30 ? -Math.random() * 50 : y + 0.5
      })
    }
    const raf = setInterval(tick, 60)
    return () => { clearInterval(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={cvs} style={{ position:'fixed',inset:0,zIndex:0,width:'100vw',height:'100vh',pointerEvents:'none',opacity:0.12 }} />
}

function Scanlines() {
  return <div style={{ position:'fixed',inset:0,zIndex:1,pointerEvents:'none',backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.08) 2px,rgba(0,0,0,0.08) 4px)' }} />
}

function GridFloor() {
  return (
    <div style={{
      position:'fixed',bottom:0,left:0,right:0,height:'40vh',zIndex:0,pointerEvents:'none',
      backgroundImage:`linear-gradient(rgba(0,255,231,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,231,0.04) 1px,transparent 1px)`,
      backgroundSize:'60px 60px',transform:'perspective(400px) rotateX(60deg)',transformOrigin:'bottom center',
      maskImage:'linear-gradient(to top,rgba(0,0,0,0.5),transparent)',
    }} />
  )
}

function Cursor() {
  const outer = useRef(null)
  const inner = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) { setIsMobile(true); return }
    let x = 0, y = 0, tx = 0, ty = 0
    const move = e => { tx = e.clientX; ty = e.clientY }
    window.addEventListener('mousemove', move)
    const loop = () => {
      x += (tx - x) * 0.12; y += (ty - y) * 0.12
      if (outer.current) outer.current.style.transform = `translate(${x - 18}px,${y - 18}px)`
      if (inner.current) inner.current.style.transform = `translate(${tx - 3}px,${ty - 3}px)`
      requestAnimationFrame(loop)
    }
    loop()
    return () => window.removeEventListener('mousemove', move)
  }, [])
  if (isMobile) return null
  return (
    <>
      <div ref={outer} style={{ position:'fixed',top:0,left:0,width:36,height:36,zIndex:9998,pointerEvents:'none',willChange:'transform',border:'1px solid rgba(0,255,231,0.6)',borderRadius:2,boxShadow:'0 0 10px rgba(0,255,231,0.3)' }} />
      <div ref={inner} style={{ position:'fixed',top:0,left:0,width:6,height:6,zIndex:9999,pointerEvents:'none',willChange:'transform',background:'#00ffe7',borderRadius:'50%',boxShadow:'0 0 8px 2px rgba(0,255,231,0.8)' }} />
    </>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const linkStyle = {
    fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(0,255,231,0.55)',
    textDecoration: 'none', letterSpacing: '0.12em', transition: 'all .25s',
  }
  const hoverOn = e => { e.target.style.color = '#00ffe7'; e.target.style.textShadow = '0 0 12px #00ffe7' }
  const hoverOff = e => { e.target.style.color = 'rgba(0,255,231,0.55)'; e.target.style.textShadow = 'none' }

  const drawerLinks = [
    { href: 'https://github.com/kumariluckyraj', label: 'GitHub ↗', external: true },
    { href: 'https://www.linkedin.com/in/kumari-lucky-raj-2a52b0323/', label: 'LinkedIn ↗', external: true },
    { href: 'mailto:kumari.lucky.raj.cse.2023@tint.edu.in', label: 'Email ↗', external: false },
    { href: '/KUMARI LUCKY RAJ__RESUME_DEVELOPER (1)', label: 'Resume ↗', external: true },
    { href: '/contact', label: 'Contact Me ↗', external: false },
    { href: '#projects', label: './projects', external: false },
    { href: '#experience', label: './experience', external: false },
    { href: '#achievements', label: './achievements', external: false },
  ]

  return (
    <>
      <nav style={{
        position:'fixed',top:0,left:0,right:0,zIndex:500,
        display:'flex',alignItems:'center',justifyContent:'space-between',
        height:64,padding:'0 var(--px)',
        background: scrolled ? 'rgba(0,0,10,.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0,255,231,.12)' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition:'all .3s',
      }}>
        {/* Logo */}
        <div style={{ fontFamily:'var(--font-head)',color:'var(--neon)',fontSize:'.9rem',letterSpacing:'.3em',fontWeight:900 }}>
          KLR_<span style={{ animation:'blink 1s infinite',display:'inline-block' }}>▮</span>
        </div>

        {/* Center links — hidden on mobile */}
        <div className="nav-center" style={{
          display:'flex',alignItems:'center',justifyContent:'center',gap:'1.2rem',
          padding:'10px 22px',background:'rgba(124,92,255,.10)',
          border:'1px solid rgba(120,140,255,.35)',borderRadius:'999px',
          boxShadow:'0 0 24px rgba(124,92,255,.18),inset 0 0 14px rgba(90,120,255,.08)',
          backdropFilter:'blur(14px)',flexWrap:'wrap',
        }}>
          {[
            ['https://github.com/kumariluckyraj','GitHub ↗',true],
            ['https://www.linkedin.com/in/kumari-lucky-raj-2a52b0323/','LinkedIn ↗',true],
            ['mailto:kumari.lucky.raj.cse.2023@tint.edu.in','Email ↗',false],
          ].map(([href,label,ext]) => (
            <a key={label} href={href} target={ext?'_blank':undefined} rel={ext?'noopener noreferrer':undefined}
              style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>{label}</a>
          ))}
          <a href="/KUMARI LUCKY RAJ__RESUME_DEVELOPER (1)" target="_blank" rel="noopener noreferrer"
            style={{...linkStyle,padding:'6px 10px',border:'1px solid rgba(0,255,231,.2)',borderRadius:4,color:'var(--neon)'}}
            onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Resume ↗</a>
          <a href="/contact" style={{...linkStyle,padding:'6px 12px',border:'1px solid rgba(0,255,231,.28)',borderRadius:4,color:'#d9fffb',boxShadow:'0 0 10px rgba(0,255,231,.08)'}}
            onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Contact Me ↗</a>
        </div>

        {/* Section links — hidden on mobile */}
        <div className="nav-section-links" style={{ display:'flex',gap:'2.2rem',alignItems:'center' }}>
          {[['#projects','./projects'],['#experience','./experience'],['#achievements','./achievements']].map(([href,label]) => (
            <a key={href} href={href} style={linkStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>{label}</a>
          ))}
        </div>

        {/* Hamburger — shown on mobile */}
        <button className="nav-hamburger"
          onClick={() => setOpen(o => !o)}
          style={{
            background:'transparent',border:'1px solid rgba(0,255,231,.3)',borderRadius:4,
            padding:'8px 10px',cursor:'pointer',display:'flex',flexDirection:'column',gap:5,
            alignItems:'center',justifyContent:'center',
          }}
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display:'block',width:22,height:1.5,
              background: open && i===1 ? 'transparent' : 'var(--neon)',
              transform: open ? (i===0?'rotate(45deg) translate(4.5px,4.5px)':i===2?'rotate(-45deg) translate(4.5px,-4.5px)':'none') : 'none',
              transition:'all .2s',boxShadow:'0 0 6px var(--neon)',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="nav-drawer-wrap" style={{ position:'fixed',top:64,left:0,right:0,zIndex:499,padding:'0 var(--px) 1.5rem' }}>
          <div className="nav-drawer" style={{
            background:'rgba(0,0,10,.97)',border:'1px solid rgba(0,255,231,.18)',
            borderRadius:6,padding:'1.2rem 1.5rem',backdropFilter:'blur(24px)',
            display:'flex',flexDirection:'column',gap:'1rem',
          }}>
            {drawerLinks.map(({ href, label, external }) => (
              <a key={label} href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                onClick={() => setOpen(false)}
                style={{ fontFamily:'var(--font-mono)',fontSize:'0.78rem',color:'rgba(0,255,231,0.65)',textDecoration:'none',letterSpacing:'0.1em' }}
              >{label}</a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

function Hero() {
  const [typed, setTyped] = useState('')
  const fullText = 'Full-Stack & AI Developer | Freelancer | 3x Hackathon Winner'
  useEffect(() => {
    let i = 0
    const t = setInterval(() => { setTyped(fullText.slice(0, i)); i++; if (i > fullText.length) clearInterval(t) }, 38)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={{ padding: '0 var(--px) 4rem', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="hero-inner" style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:'4rem',flexWrap:'wrap',paddingTop:120,width:'100%',maxWidth:1100,animation:'fadeUp 0.9s ease both' }}>

        {/* Left text */}
        <div style={{ flex:'1 1 300px',maxWidth:580 }}>
          <div style={{ fontFamily:'var(--font-mono)',fontSize:'0.78rem',color:'rgba(0,255,231,0.4)',marginBottom:'1.4rem',display:'flex',alignItems:'center',gap:8,flexWrap:'wrap' }}>
            <span style={{ color:'var(--neon2)' }}>❯</span>
            <span style={{ color:'rgba(0,255,231,0.3)' }}>~/portfolio</span>
            <span style={{ color:'rgba(0,255,231,0.2)' }}>on</span>
            <span style={{ color:'var(--neon3)' }}>⎇ main</span>
          </div>
          <h1 className="glitch-text" data-text="Kumari Lucky Raj" style={{
            fontFamily:'var(--font-head)',fontSize:'clamp(1.6rem,6vw,4rem)',fontWeight:900,lineHeight:1.05,
            letterSpacing:'0.04em',color:'var(--neon)',marginBottom:'0.6rem',
            textShadow:'0 0 30px rgba(0,255,231,0.4),0 0 80px rgba(0,255,231,0.15)',
          }}>Kumari Lucky Raj</h1>
          <p style={{ fontFamily:'var(--font-mono)',fontSize:'clamp(0.72rem,2.5vw,0.9rem)',color:'rgba(0,255,231,0.55)',marginBottom:'2rem',minHeight:'1.4em' }}>
            {typed}<span style={{ animation:'blink 0.8s infinite',display:'inline-block',marginLeft:1 }}>_</span>
          </p>
          <p style={{ fontFamily:'var(--font-body)',fontSize:'clamp(0.9rem,2.5vw,1.05rem)',color:'#7a9e9b',lineHeight:1.9,marginBottom:'2rem',fontWeight:300,letterSpacing:'0.03em' }}>
            Full-stack developer building scalable web and mobile applications with Next.js, Expo, and Agentic AI.
            3x hackathon winner with internship and freelancing experience shipping real-world products.
          </p>
          <div style={{ display:'flex',gap:'1rem',flexWrap:'wrap',marginBottom:'2.5rem' }}>
            <CyberBtn href="#projects" primary>./view_projects</CyberBtn>
            <CyberBtn href="#experience">./experience</CyberBtn>
            <CyberBtn href="#achievements" primary>./achievements</CyberBtn>
          </div>
          <div style={{ display:'flex',flexWrap:'wrap',gap:'0.5rem' }}>
            {['React','Next.js','AI/ML','Agentic AI','Express','TypeScript','JavaScript','MongoDB','PostgreSQL','Java','Python','Kubernetes','Docker','GitHub'].map((t, i) => (
              <span key={t} className="tag" style={{ animationDelay:`${i*0.08}s` }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="hero-avatar-wrap" style={{ flex:'0 0 240px',display:'flex',justifyContent:'center',alignItems:'center',animation:'floatZ 5s ease-in-out infinite' }}>
          <div style={{ position:'relative',width:240,height:240 }}>
            <svg style={{ position:'absolute',top:-28,left:-28,width:296,height:296,animation:'rotateRing 12s linear infinite' }} viewBox="0 0 296 296">
              <polygon points="148,4 288,76 288,220 148,292 8,220 8,76" fill="none" stroke="rgba(0,255,231,0.25)" strokeWidth="1" strokeDasharray="6 8" />
            </svg>
            <svg style={{ position:'absolute',top:-14,left:-14,width:268,height:268,animation:'rotateRingRev 8s linear infinite' }} viewBox="0 0 268 268">
              <polygon points="134,6 262,70 262,198 134,262 6,198 6,70" fill="none" stroke="rgba(255,45,120,0.2)" strokeWidth="1" strokeDasharray="2 12" />
            </svg>
            {[['0,0','-1,-1'],['240,0','1,-1'],['0,240','-1,1'],['240,240','1,1']].map(([pos,dir],i) => {
              const [px,py]=pos.split(',').map(Number); const [dx,dy]=dir.split(',').map(Number)
              return (
                <svg key={i} style={{ position:'absolute',left:px-12,top:py-12,width:24,height:24 }} viewBox="0 0 24 24">
                  <polyline points={`${dx<0?24:0},6 ${dx<0?24:0},${dy<0?24:0} ${6},${dy<0?24:0}`} fill="none" stroke="var(--neon)" strokeWidth="1.5" />
                </svg>
              )
            })}
            <div style={{ position:'absolute',inset:-20,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,255,231,0.12) 0%,transparent 70%)',filter:'blur(10px)' }} />
            <div className="hex-border hero-avatar-img" style={{
              width:240,height:240,overflow:'hidden',position:'relative',
              border:'1.5px solid rgba(0,255,231,0.4)',
              boxShadow:'0 0 40px rgba(0,255,231,0.15),inset 0 0 20px rgba(0,255,231,0.05)',
            }}>
              <Image src="/imgg.png" alt="Profile" fill style={{ objectFit:'cover',objectPosition:'top center' }} priority />
              <div style={{ position:'absolute',inset:0,backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.12) 3px,rgba(0,0,0,0.12) 4px)' }} />
              <div style={{ position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(0,255,231,0.06) 0%,transparent 60%,rgba(255,45,120,0.04) 100%)' }} />
            </div>
            <div style={{
              position:'absolute',bottom:-16,left:'50%',transform:'translateX(-50%)',
              fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:'#00ffe7',
              background:'rgba(0,0,10,0.95)',border:'1px solid rgba(0,255,231,0.25)',
              padding:'0.25rem 0.9rem',borderRadius:2,whiteSpace:'nowrap',
              display:'flex',alignItems:'center',gap:6,
            }}>
              <span style={{ width:5,height:5,borderRadius:'50%',background:'#00ffe7',display:'inline-block',boxShadow:'0 0 6px #00ffe7',animation:'blink 2s infinite' }} />
              STATUS: ONLINE
            </div>
          </div>
        </div>
      </div>

      <div style={{ position:'absolute',bottom:'2.5rem',left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:6,opacity:0.35 }}>
        <div style={{ fontFamily:'var(--font-mono)',fontSize:'0.6rem',color:'var(--neon)',letterSpacing:'0.2em' }}>SCROLL</div>
        <div style={{ width:1,height:40,background:'linear-gradient(var(--neon),transparent)',animation:'floatZ 2s ease-in-out infinite' }} />
      </div>
    </section>
  )
}

function CyberBtn({ href, primary, children }) {
  const [hover, setHover] = useState(false)
  return (
    <a href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        fontFamily:'var(--font-mono)',fontSize:'clamp(0.7rem,2.5vw,0.78rem)',letterSpacing:'0.1em',
        padding:'0.7rem 1.4rem',textDecoration:'none',position:'relative',display:'inline-block',
        color: primary ? '#000' : 'var(--neon)',
        background: primary ? (hover?'var(--neon)':'rgba(0,255,231,0.9)') : 'transparent',
        border:`1px solid ${primary?'var(--neon)':'rgba(0,255,231,0.35)'}`,
        clipPath:'polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)',
        boxShadow: hover?'0 0 24px rgba(0,255,231,0.4)':primary?'0 0 12px rgba(0,255,231,0.2)':'none',
        transition:'all 0.2s',fontWeight:700,
      }}
    >{children}</a>
  )
}

function SectionHead({ num, title }) {
  return (
    <div style={{ marginBottom:'3rem' }}>
      <div style={{ fontFamily:'var(--font-mono)',fontSize:'0.68rem',color:'rgba(0,255,231,0.35)',marginBottom:'0.5rem',letterSpacing:'0.2em' }}>{num} ──────────</div>
      <div style={{ display:'flex',alignItems:'center',gap:'1.2rem' }}>
        <h2 style={{ fontFamily:'var(--font-head)',fontSize:'clamp(1.1rem,4vw,2rem)',fontWeight:700,color:'#e0f7f4',letterSpacing:'0.08em',margin:0,whiteSpace:'nowrap' }}>{title}</h2>
        <div className="neon-line" style={{ flex:1 }} />
      </div>
    </div>
  )
}

const PROJECTS = [
  { title:'LogWatch AI',url:'https://logwatchai.vercel.app/',github:'https://github.com/kumariluckyraj/LogWatch-AI',desc:'AI-powered platform for safe deployments and real-time system reliability using intelligent traffic routing, RAG-based log analysis, autonomous self-healing agents, and Nmap-powered network monitoring.',stack:['React','JavaScript','Pinecone','Nmap','MongoDB','Huggingface','Groq'],id:'P001' },
  { title:'CareerCraft AI',url:'https://careercraftai-seven.vercel.app/',github:'https://github.com/kumariluckyraj/Career_Craft_AI',desc:'AI-powered platform to generate GitHub READMEs, create repositories, optimize LinkedIn profiles, and analyze resumes using fine-tuned NLP models and Gemini APIs.',stack:['Next.js','JavaScript','MongoDB','Fine Tuning','Gemini API'],id:'P002' },
  { title:'UrbanFix AI',url:'https://urban-fix-ai-nine.vercel.app/',github:'https://github.com/kumariluckyraj/UrbanFix_AI',desc:'AI-powered civic issue reporting system leveraging Agentic AI workflows, RAG, and LLMs to detect duplicate complaints, prioritize issues, and auto-assign departments.',stack:['Next.js','MongoDB','JavaScript','Pinecone','Groq'],id:'P003' },
  { title:'Equicraft',url:'https://equicraft.vercel.app/',github:'https://github.com/kumariluckyraj/Equicraft_AI',desc:'Platform for sustainable business models generating fair livelihoods, preserving cultural heritage, and promoting equitable growth using RAG.',stack:['Next.js','JavaScript','Pinecone','MongoDB','Groq'],id:'P004' },
]

function Projects() {
  return (
    <section id="projects" style={{ padding:'6rem var(--px)',position:'relative',zIndex:10 }}>
      <div style={{ maxWidth:1100,margin:'0 auto' }}>
        <SectionHead num="// 02" title="PROJECTS" />
        <div style={{ position:'relative',marginTop:'4rem' }}>
          <div className="timeline-line" style={{ position:'absolute',left:'50%',top:0,bottom:0,width:'2px',transform:'translateX(-50%)',background:'linear-gradient(to bottom,transparent,var(--neon),transparent)',opacity:.3 }} />
          {PROJECTS.map((p,i) => <ProjectRow key={p.id} {...p} right={i%2!==0} />)}
        </div>
      </div>
    </section>
  )
}

function ProjectRow({ title, url, github, desc, stack, id, right }) {
  const ref = useRef(null)
  const [hover, setHover] = useState(false)
  const linkBtn = (color) => ({ display:'flex',alignItems:'center',gap:'10px',padding:'10px 16px',border:`1px solid ${color}55`,borderRadius:4,color,textDecoration:'none',fontSize:'0.82rem',fontWeight:600 })
  const onMove = e => {
    const el = ref.current; const r = el.getBoundingClientRect()
    const rx = ((e.clientX-r.left)/r.width-.5)*10
    const ry = -((e.clientY-r.top)/r.height-.5)*10
    el.style.transform = `perspective(900px) rotateY(${rx}deg) rotateX(${ry}deg) translateZ(12px)`
  }
  const onLeave = () => { ref.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0)'; setHover(false) }

  return (
    <div className="project-row" style={{ display:'flex',justifyContent:right?'flex-end':'flex-start',marginBottom:'4rem',position:'relative' }}>
      <div className="timeline-node" style={{ position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',width:14,height:14,borderRadius:'50%',background:'var(--neon)',boxShadow:'0 0 18px rgba(0,255,231,.8)',zIndex:5 }} />

      <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHover(true)} onMouseLeave={onLeave}
        className="card-3d project-card"
        style={{
          width:'46%',minWidth:280,padding:'1.7rem',
          background:'rgba(5,12,28,.9)',
          border:`1px solid ${hover?'rgba(0,255,231,.4)':'rgba(0,255,231,.12)'}`,
          borderRadius:6,position:'relative',
          boxShadow:hover?'0 20px 60px rgba(0,0,0,.6)':'0 8px 30px rgba(0,0,0,.45)',
          transition:'all .25s',
        }}
      >
        <div className="project-connector" style={{ position:'absolute',top:'50%',[right?'left':'right']:'-70px',width:'70px',height:'1px',background:'rgba(0,255,231,.25)' }} />

        <div style={{ display:'flex',justifyContent:'space-between',marginBottom:'1rem' }}>
          <span style={{ fontFamily:'var(--font-mono)',fontSize:'0.62rem',letterSpacing:'0.14em',color:'rgba(0,255,231,.35)' }}>[{id}]</span>
          <span style={{ fontSize:'1.5rem',color:'var(--neon)' }}>↗</span>
        </div>

        <div style={{ marginBottom:'1rem' }}>
          <h3 style={{ fontSize:'clamp(1rem,3vw,1.15rem)',fontWeight:700,color:hover?'#e9ffff':'#b8d8d4',marginBottom:id==='P001'?'.6rem':'0' }}>{title}</h3>
          {id==='P001' && (
            <div style={{ display:'inline-flex',alignItems:'center',gap:'8px',padding:'6px 12px',border:'1px solid rgba(0,255,231,.45)',background:'rgba(0,255,231,.08)',borderRadius:4,fontFamily:'var(--font-mono)',fontSize:'0.68rem',fontWeight:700,letterSpacing:'.08em',color:'#d9fffb',textTransform:'uppercase',boxShadow:'0 0 18px rgba(0,255,231,.18)',flexWrap:'wrap' }}>
              <span style={{ width:7,height:7,borderRadius:'50%',background:'var(--neon)',boxShadow:'0 0 10px var(--neon)',flexShrink:0 }} />
              <span style={{ fontWeight:800 }}>🏆 3X HACKATHON WINNER PROJECT</span>
            </div>
          )}
        </div>

        <p style={{ color:'#b8d8d4',fontSize:'clamp(0.85rem,2.5vw,0.95rem)',lineHeight:1.85,fontWeight:500,marginBottom:'1.4rem' }}>{desc}</p>

        <div style={{ display:'flex',flexWrap:'wrap',gap:'.45rem',marginBottom:'1.4rem' }}>
          {stack.map(s => <span key={s} className="tag">{s}</span>)}
        </div>

        <div style={{ display:'flex',gap:'1rem',flexWrap:'wrap' }}>
          {id==='P001' ? (
            <>
              <a href="https://logwatchai.vercel.app/" target="_blank" rel="noopener noreferrer" style={linkBtn('var(--neon)')}>Frontend <span style={{fontSize:'1.4rem'}}>↗</span></a>
              <a href="https://logwatch-test.onrender.com/" target="_blank" rel="noopener noreferrer" style={linkBtn('#9fcac6')}>Test Backend <span style={{fontSize:'1.4rem'}}>↗</span></a>
              <a href="https://logwatch-stable.onrender.com/" target="_blank" rel="noopener noreferrer" style={linkBtn('#ffd166')}>Stable Backend <span style={{fontSize:'1.4rem'}}>↗</span></a>
              <a href="https://logwatch-proxy.onrender.com/" target="_blank" rel="noopener noreferrer" style={linkBtn('#ff9f43')}>Proxy <span style={{fontSize:'1.4rem'}}>↗</span></a>
              <a href={github} target="_blank" rel="noopener noreferrer" style={linkBtn('#b8d8d4')}>GitHub <span style={{fontSize:'1.4rem'}}>↗</span></a>
            </>
          ) : (
            <>
              <a href={url} target="_blank" rel="noopener noreferrer" style={linkBtn('var(--neon)')}>Live Demo <span style={{fontSize:'1.5rem'}}>↗</span></a>
              <a href={github} target="_blank" rel="noopener noreferrer" style={linkBtn('#9fcac6')}>GitHub <span style={{fontSize:'1.5rem'}}>↗</span></a>
            </>
          )}
        </div>

        <div style={{ position:'absolute',bottom:8,right:8,width:12,height:12,borderRight:'1px solid rgba(0,255,231,.2)',borderBottom:'1px solid rgba(0,255,231,.2)' }} />
      </div>
    </div>
  )
}

const EXPERIENCE = [
  { role:'Full Stack Web Developer',company:'Tending To Infinity Academy',url:'https://tendingtoinfinityacademy.com/',period:'July 2025 – Present',desc:'Architected student-educator learning platform with Next.js, Express.js, PostgreSQL, and REST APIs. Implemented authentication, course management, and real-time features.',active:true },
  { role:'Full Stack App Developer',company:'Tending To Infinity Academy',url:'https://tendingtoinfinityacademy.com/',period:'Feb 2026 - Present',desc:'Built a multi-role mobile application using React Native and Expo with separate interfaces for students, educators, and admins, featuring role-based access, content management, and seamless user interactions.',active:true },
  { role:"Freelance Full Stack Web Developer",company:"Mom's Kitchen",url:'https://momkitchen-seven.vercel.app',period:'March 2026 - April 2026',desc:'Developed and deployed a responsive restaurant website using modern full-stack technologies, improving online presence and customer engagement.',active:false },
]

function Experience() {
  return (
    <section id="experience" style={{ padding:'6rem var(--px)',zIndex:10,position:'relative' }}>
      <div style={{ maxWidth:800,margin:'0 auto' }}>
        <SectionHead num="// 04" title="EXPERIENCE" />
        {EXPERIENCE.map(e => <ECard key={e.role} {...e} />)}
      </div>
    </section>
  )
}

function ECard({ role, company, url, period, desc, active }) {
  const [hover, setHover] = useState(false)
  return (
    <div style={{ display:'flex',gap:'1.5rem',marginBottom:'1.5rem' }}>
      <div style={{ display:'flex',flexDirection:'column',alignItems:'center',flexShrink:0 }}>
        <div style={{ width:active?12:8,height:active?12:8,borderRadius:'50%',background:active?'var(--neon)':'rgba(0,255,231,0.15)',border:`1px solid ${active?'rgba(0,255,231,0.6)':'rgba(0,255,231,0.2)'}`,boxShadow:active?'0 0 14px rgba(0,255,231,0.7)':'none',marginTop:20,flexShrink:0,animation:active?'pulse-border 2s infinite':'none' }} />
        <div style={{ width:1,flex:1,marginTop:8,background:'linear-gradient(to bottom,rgba(0,255,231,0.2),transparent)' }} />
      </div>
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
        flex:1,padding:'1.2rem',borderRadius:4,
        background:'rgba(5,12,28,0.85)',
        border:`1px solid ${hover?'rgba(0,255,231,0.35)':'rgba(0,255,231,0.08)'}`,
        transition:'all 0.25s',position:'relative',overflow:'hidden',
        boxShadow:hover?'0 12px 40px rgba(0,0,0,0.5)':'none',
      }}>
        {active && (
          <div style={{ display:'inline-flex',alignItems:'center',gap:6,marginBottom:'0.8rem',fontFamily:'var(--font-mono)',fontSize:'0.62rem',color:'var(--neon)',background:'rgba(0,255,231,0.06)',border:'1px solid rgba(0,255,231,0.2)',padding:'0.2rem 0.7rem',borderRadius:2 }}>
            <span style={{ width:5,height:5,borderRadius:'50%',background:'var(--neon)',animation:'blink 1.5s infinite' }} />
            ACTIVE PROCESS
          </div>
        )}
        <h3 style={{ fontFamily:'var(--font-head)',fontSize:'clamp(0.75rem,3vw,0.95rem)',fontWeight:700,color:'var(--neon)',marginBottom:'0.3rem',letterSpacing:'0.06em' }}>{role}</h3>
        <div style={{ display:'flex',gap:'1rem',alignItems:'center',marginBottom:'0.8rem',flexWrap:'wrap' }}>
          <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontFamily:'var(--font-body)',fontSize:'0.88rem',color:'#4a7a77',textDecoration:'none',transition:'color 0.2s' }}
            onMouseEnter={e=>e.target.style.color='#94b5b2'} onMouseLeave={e=>e.target.style.color='#4a7a77'}
          >{company} ↗</a>
          <span style={{ fontFamily:'var(--font-mono)',fontSize:'0.68rem',color:'rgba(0,255,231,0.25)',letterSpacing:'0.1em' }}>{period}</span>
        </div>
        <p style={{ fontFamily:'var(--font-body)',fontSize:'clamp(0.82rem,2.5vw,0.9rem)',color:'#8fb8b3',lineHeight:1.8,margin:0,fontWeight:300 }}>{desc}</p>
        <div style={{ position:'absolute',top:8,right:8,width:10,height:10,borderTop:'1px solid rgba(0,255,231,0.2)',borderRight:'1px solid rgba(0,255,231,0.2)' }} />
      </div>
    </div>
  )
}

const ACHIEVEMENTS = [
  { title:'1st Place — Constructor() Hackathon',issuer:'Tesseract 2026 / Guru Nanak Institute of Technology',year:'2026',icon:'◈',color:'var(--neon)' },
  { title:'3rd Prize — Dev Your Web',issuer:'Prabuddha / Techno International New Town',year:'2026',icon:'◆',color:'var(--neon2)' },
  { title:'4th Position — Idea / Project Showcase',issuer:'National Science Day / Techno International New Town',year:'2026',icon:'◉',color:'#ff9500' },
]

function Achievements() {
  return (
    <section id="achievements" style={{ padding:'7rem var(--px)',position:'relative',zIndex:10 }}>
      <div style={{ maxWidth:1100,margin:'0 auto' }}>
        <SectionHead num="// 03" title="ACHIEVEMENTS.log" />
        <div className="ach-grid" style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,400px),1fr))',gap:'1.6rem',marginTop:'2rem' }}>
          {ACHIEVEMENTS.map(a => <ACard key={a.title} {...a} />)}
        </div>
        <div style={{ marginTop:'2.5rem',fontFamily:'var(--font-mono)',fontSize:'0.72rem',color:'rgba(0,255,231,.22)' }}>{'// [APPEND_PENDING] more wins loading...'}</div>
      </div>
    </section>
  )
}

function ACard({ title, issuer, year, icon, color }) {
  const [hover, setHover] = useState(false)
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display:'flex',alignItems:'center',gap:'1.2rem',padding:'1.5rem',minHeight:140,
      background:'rgba(5,12,28,.88)',borderRadius:8,
      border:`1px solid ${hover?`${color}55`:'rgba(0,255,231,.10)'}`,
      transition:'all .3s',
      transform:hover?'translateY(-6px) scale(1.01)':'none',
      boxShadow:hover?`0 18px 50px rgba(0,0,0,.55),0 0 24px ${color}20`:'0 10px 30px rgba(0,0,0,.35)',
      position:'relative',overflow:'hidden',
    }}>
      <div style={{ position:'absolute',left:0,top:0,bottom:0,width:'4px',background:hover?color:'transparent',boxShadow:hover?`0 0 12px ${color}`:'none' }} />
      <div style={{ width:56,height:56,flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2rem',color,border:`1px solid ${color}30`,borderRadius:'50%',background:'rgba(255,255,255,.02)',filter:hover?`drop-shadow(0 0 12px ${color})`:'none' }}>
        {icon}
      </div>
      <div style={{ flex:1,minWidth:0 }}>
        <h3 style={{ fontFamily:'var(--font-body)',fontWeight:700,fontSize:'clamp(0.95rem,3vw,1.1rem)',lineHeight:1.5,color:hover?'#e6ffff':'#b8d8d4',marginBottom:'.5rem',letterSpacing:'.03em' }}>{title}</h3>
        <p style={{ fontFamily:'var(--font-mono)',fontSize:'.75rem',lineHeight:1.7,color:'rgba(0,255,231,.42)',margin:0 }}>{issuer}</p>
      </div>
      <div style={{ alignSelf:'flex-start',fontFamily:'var(--font-mono)',fontSize:'.72rem',color,padding:'0.3rem .7rem',border:`1px solid ${color}44`,borderRadius:4,letterSpacing:'.08em',flexShrink:0 }}>{year}</div>
      <div style={{ position:'absolute',top:12,right:12,width:14,height:14,borderTop:'1px solid rgba(0,255,231,.18)',borderRight:'1px solid rgba(0,255,231,.18)' }} />
    
    
    </div>
    
  )
}



function Footer() {
  return (
    
    <footer style={{ position:'relative',zIndex:10,borderTop:'1px solid rgba(0,255,231,0.07)',padding:'3rem var(--px)',textAlign:'center' }}>
      {/* Contact Me Button Above Footer */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 0",
    position: "relative",
    zIndex: 10,
  }}
>
  <a
    href="/contact"
    style={{
      
      fontFamily: "var(--font-mono)",
      fontSize: "0.78rem",
      letterSpacing: "0.12em",
      padding: "0.9rem 2rem",
      textDecoration: "none",
      color: "#000",
      background: "var(--neon)",
      border: "1px solid var(--neon)",
      clipPath:
        "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
      boxShadow: "0 0 20px rgba(0,255,231,0.35)",
      fontWeight: 700,
      transition: "all 0.25s ease",
    }}
    onMouseEnter={(e) => {
      e.target.style.boxShadow = "0 0 35px rgba(0,255,231,0.7)";
      e.target.style.transform = "translateY(-3px)";
    }}
    onMouseLeave={(e) => {
      e.target.style.boxShadow = "0 0 20px rgba(0,255,231,0.35)";
      e.target.style.transform = "translateY(0)";
    }}
  >
    ./contact_me
  </a>
</div>

      <div className="neon-line" style={{ marginBottom:'2rem',opacity:0.4 }} />
      <div style={{ fontFamily:'var(--font-head)',fontSize:'0.7rem',color:'rgba(0,255,231,0.2)',letterSpacing:'0.25em',marginBottom:'0.5rem' }}>EOF // DESIGNED &amp; BUILT BY</div>
      <div style={{ fontFamily:'var(--font-head)',fontSize:'1.1rem',color:'var(--neon)',letterSpacing:'0.15em',textShadow:'0 0 20px rgba(0,255,231,0.3)' }}>KUMARI LUCKY RAJ</div>
      <div style={{ fontFamily:'var(--font-mono)',fontSize:'0.65rem',color:'rgba(0,255,231,0.15)',marginTop:'0.5rem',letterSpacing:'0.1em' }}>© {new Date().getFullYear()} — ALL RIGHTS RESERVED</div>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <G />
      <div style={{ background:'var(--c0)',minHeight:'100vh',overflowX:'hidden',cursor:'none' }}>
        <MatrixRain />
        <Scanlines />
        <GridFloor />
        <Cursor />
        <Nav />
        <Hero />
        <Projects />
        <Experience />
        <Achievements />
        <Footer />
      </div>
    </>
  )
}