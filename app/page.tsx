'use client';

import { useEffect, useState } from 'react';
import { projects } from '../data/projects';
import { site } from '../data/site';

export default function Home() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState(0);
  const [cursor, setCursor] = useState({x:-100,y:-100});

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({x:e.clientX,y:e.clientY});
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), {threshold:.12});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <main className={dark ? 'site dark' : 'site'}>
    <div className="cursor" style={{transform:`translate3d(${cursor.x}px,${cursor.y}px,0)`}} aria-hidden="true" />
    <nav className="nav">
      <a className="brand" href="#top">JH<span>.</span></a>
      <div className="navlinks"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
      <button className="theme" onClick={() => setDark(v=>!v)} aria-label="Toggle color theme">{dark ? '☼' : '◐'}</button>
    </nav>

    <section id="top" className="hero wrap">
      <div className="eyebrow reveal">Student · Developer · Curious builder</div>
      <div className="hero-grid">
        <h1 className="reveal">Building digital<br/><em>experiences</em><br/>with intention.</h1>
        <div className="hero-copy reveal"><p>I’m <strong>Janhavi Hivarekar</strong>, a Pune-based developer focused on frontend craft, full-stack MERN development and AI-powered products.</p><a className="text-link" href="#work">Explore my work <span>↘</span></a></div>
      </div>
      <div className="hero-meta reveal"><span>01 — 04</span><span>Scroll to explore ↓</span></div>
    </section>

    <section id="work" className="work wrap">
      <div className="section-head reveal"><span>Selected work</span><span>2026</span></div>
      <div className="project-stage">
        <div className="project-list reveal">
          {projects.map((p,i)=><button key={p.name} className={`project-row ${active===i?'active':''}`} onClick={()=>setActive(i)}><span className="num">0{i+1}</span><span className="pname">{p.name}</span><span className="cat">{p.category}</span><span className="arrow">↗</span></button>)}
        </div>
        <article className={`project-feature ${projects[active].accent}`}>
          <div className="mock-ui"><div className="mock-top"><span>JH</span><span>PROJECT / 0{active+1}</span></div><div className="mock-lines"><i/><i/><i/></div><div className="mock-window"><span>{projects[active].name}</span><b>→</b></div></div>
          <div className="feature-copy"><div><span className="kicker">{projects[active].category}</span><h2>{projects[active].name}</h2><p>{projects[active].description}</p></div><div className="feature-actions">
              <div className="tags">{projects[active].stack.map(t=><span key={t}>{t}</span>)}</div>
              {(projects[active].href || projects[active].repo) && <div className="project-links">
                {projects[active].href && <a href={projects[active].href} target="_blank" rel="noreferrer">Live ↗</a>}
                {projects[active].repo && <a href={projects[active].repo} target="_blank" rel="noreferrer">GitHub ↗</a>}
              </div>}
            </div></div>
        </article>
      </div>
    </section>

    <section id="about" className="about wrap">
      <div className="section-head reveal"><span>About</span><span>02</span></div>
      <div className="about-grid"><h2 className="reveal">A developer who<br/><em>likes to make things</em><br/>feel right.</h2><div className="about-copy reveal"><p>I enjoy the space where thoughtful interfaces meet solid engineering. My work moves between React and Next.js on the frontend, Node.js and databases on the backend, and GenAI when it makes a product more useful.</p><p>I’m currently pursuing a B.Tech in Software Product Engineering at MIT-ADT University, Pune, and building toward roles across frontend, full-stack and AI engineering.</p><div className="facts"><span><b>8.80</b> / 10 CGPA</span><span><b>6+</b> web apps built</span><span><b>2024–27</b> B.Tech</span></div></div></div>
    </section>

    <section className="stack-section wrap">
      <div className="section-head reveal"><span>Toolkit</span><span>03</span></div>
      <div className="marquee reveal"><div>React · Next.js · TypeScript · Node.js · Express · PostgreSQL · MongoDB · Python · GenAI · Figma · Docker · Git · </div></div>
    </section>

    <section id="contact" className="contact wrap">
      <div className="section-head reveal"><span>Let’s connect</span><span>04</span></div>
      <div className="contact-inner reveal"><h2>Have an idea?<br/><em>Let’s build it.</em></h2><p>I’m open to internships, opportunities, collaborations and interesting products.</p><div className="contact-links"><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
    </section>

    <footer className="footer wrap"><span>Janhavi Hivarekar</span><span>© 2026 · Pune, India</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}
