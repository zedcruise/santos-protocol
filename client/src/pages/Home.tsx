import { type ReactNode, useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleDot,
  ExternalLink,
  HeartHandshake,
  Leaf,
  Menu,
  RadioTower,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Wind,
  X,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Sacred functionality",
    body: "Every capability must earn its place by protecting life, restoring agency, or making care easier to reach.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "AI with conscience",
    body: "The AS IS layer explains, anticipates, and intervenes—without hiding uncertainty or displacing human judgment.",
    icon: ScanLine,
  },
  {
    number: "03",
    title: "Shared partnership",
    body: "A Guardian Craft is not an autonomous authority. It is a human–AI system built to serve a human mission.",
    icon: HeartHandshake,
  },
];

const modes = [
  {
    id: "01",
    label: "Transit mode",
    title: "Move with dignity.",
    body: "A grounded, scooter-like configuration for everyday access, staging, and the last mile of care.",
    accent: "sage",
  },
  {
    id: "02",
    label: "Assist mode",
    title: "Lift the burden.",
    body: "A hovering chair configuration that makes mobility assistance quieter, more direct, and more human.",
    accent: "saffron",
  },
  {
    id: "03",
    label: "Safe-state mode",
    title: "Choose the gentle exit.",
    body: "When uncertainty rises, the craft stabilizes, communicates, and seeks a soft landing. Buoyancy is a layer—not a promise.",
    accent: "bone",
  },
];

const gates = [
  {
    step: "01",
    title: "System safety case",
    body: "Hydrogen containment, ventilation, leak detection, flame detection, material compatibility, and credible impact testing.",
    tags: ["Containment", "Detection", "Testing"],
  },
  {
    step: "02",
    title: "Flight & human factors",
    body: "A conservative flight-test program with human-factors assessment, clear control authority, and accessible training.",
    tags: ["Flight test", "Human factors", "Training"],
  },
  {
    step: "03",
    title: "Mission legitimacy",
    body: "A documented aid purpose, a defined operating envelope, and a refusal path for surveillance, aggression, or harm.",
    tags: ["Aid first", "Geofence", "Refusal"],
  },
  {
    step: "04",
    title: "Independent oversight",
    body: "Qualified aviation, safety, environmental, and community voices review the evidence before a mission is cleared.",
    tags: ["Review", "Evidence", "Accountability"],
  },
];

const sources = [
  { label: "EASA", title: "Hydrogen-powered aircraft", href: "https://www.easa.europa.eu/en/domains/environment/eaer/technology-and-design/low-carbon-emissions-aircraft/hydrogen-powered" },
  { label: "DOE", title: "Safe use of hydrogen", href: "https://www.energy.gov/cmei/fuels/safe-use-hydrogen" },
  { label: "FAA", title: "Hydrogen-fueled aircraft roadmap", href: "https://www.faa.gov/aircraft/air_cert/step/disciplines/propulsion_systems/hydrogen-fueled_aircraft_roadmap" },
];

function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`section-label ${light ? "section-label-light" : ""}`}>
      <span className="section-label-dot" />
      <span>{children}</span>
    </div>
  );
}

function ModeGlyph({ mode }: { mode: string }) {
  if (mode === "01") {
    return (
      <div className="mode-glyph mode-glyph-transit" aria-hidden="true">
        <div className="glyph-seat" />
        <div className="glyph-frame" />
        <div className="glyph-wheel glyph-wheel-left" />
        <div className="glyph-wheel glyph-wheel-right" />
        <div className="glyph-handle" />
      </div>
    );
  }

  if (mode === "02") {
    return (
      <div className="mode-glyph mode-glyph-assist" aria-hidden="true">
        <div className="glyph-ring" />
        <div className="glyph-chair" />
        <div className="glyph-pod glyph-pod-left" />
        <div className="glyph-pod glyph-pod-right" />
        <div className="glyph-lift" />
      </div>
    );
  }

  return (
    <div className="mode-glyph mode-glyph-safe" aria-hidden="true">
      <div className="glyph-shell" />
      <div className="glyph-signal glyph-signal-one" />
      <div className="glyph-signal glyph-signal-two" />
      <div className="glyph-signal glyph-signal-three" />
      <div className="glyph-ground" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeGate, setActiveGate] = useState("01");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <a className="brand-mark" href="#top" onClick={closeMenu} aria-label="Santos Protocol home">
          <span className="brand-emblem"><CircleDot size={15} strokeWidth={1.8} /></span>
          <span className="brand-name">Santos <em>Protocol</em></span>
        </a>
        <nav className={`site-nav ${menuOpen ? "site-nav-open" : ""}`} aria-label="Main navigation">
          <a href="#why" onClick={closeMenu}>The why</a>
          <a href="#craft" onClick={closeMenu}>The craft</a>
          <a href="#gates" onClick={closeMenu}>Readiness</a>
          <a href="#sources" onClick={closeMenu}>Sources</a>
          <a className="nav-cta" href="#framework" onClick={closeMenu}>Enter the framework <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> SA / FIELD STANDARD 01</div>
              <h1>Capability<br /><span>under conscience.</span></h1>
              <p className="hero-lede">The Santos Protocol is a living operating covenant for Guardian Crafts—hydrogen-powered personal air mobility designed to move aid, not power.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#framework">Explore the framework <ArrowDownRight size={17} /></a>
                <a className="text-link" href="#gates">View readiness gates <ArrowUpRight size={16} /></a>
              </div>
              <div className="hero-footnote"><ShieldCheck size={15} /> Human command remains the final authority.</div>
            </div>
            <div className="hero-visual" aria-label="Conceptual illustration of a Guardian Craft over a humanitarian staging area">
              <img src="/manus-storage/santos_protocol_hero_ca525a8c.png" alt="Conceptual Guardian Craft over a quiet humanitarian relief staging area" />
              <div className="hero-visual-wash" />
              <div className="hero-visual-caption">
                <span className="caption-kicker">GUARDIAN CRAFT / CONCEPT</span>
                <span className="caption-main">A gentler kind of lift.</span>
              </div>
              <div className="hero-status"><span className="status-dot" /> AID-FIRST SYSTEM</div>
            </div>
          </div>
          <div className="hero-scroll-hint"><span>Scroll to enter the protocol</span><ArrowDownRight size={15} /></div>
        </section>

        <section className="pillar-band" id="why">
          <div className="container pillar-band-inner">
            <div className="pillar-intro">
              <SectionLabel>THE SA PILLARS</SectionLabel>
              <p>Three commitments keep capability in service of people.</p>
            </div>
            <div className="pillar-grid">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article className="pillar-card" key={pillar.number}>
                    <div className="pillar-card-top"><span>{pillar.number}</span><Icon size={21} strokeWidth={1.5} /></div>
                    <h2>{pillar.title}</h2>
                    <p>{pillar.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="manifesto-section" id="framework">
          <div className="container manifesto-grid">
            <div className="manifesto-lead">
              <SectionLabel>THE WHY</SectionLabel>
              <h2>A flight system<br /><i>with a moral center.</i></h2>
            </div>
            <div className="manifesto-copy">
              <p className="manifesto-large">“Angels of Aid. Builders of Peace. Eyes of Empathy.”</p>
              <p>The Saints Aviation framework asks a simple question before it asks how fast or how far: <strong>who does this make safer, freer, or less alone?</strong></p>
              <p>The Santos Protocol gives that question operational weight. It translates care into mission limits, transparent automation, conservative safe states, and evidence that can be challenged by the people it is meant to serve.</p>
              <a className="text-link dark-link" href="#gates">See how intent becomes evidence <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="craft-section" id="craft">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <SectionLabel>THE CRAFT</SectionLabel>
                <h2>The craft changes form.<br /><span>The standard never does.</span></h2>
              </div>
              <p className="heading-aside">One platform, three modes of service. The protocol holds steady across each transformation.</p>
            </div>
            <div className="mode-grid">
              {modes.map((mode) => (
                <article className={`mode-card mode-card-${mode.accent}`} key={mode.id}>
                  <div className="mode-card-header"><span>{mode.id}</span><span className="mode-label">{mode.label}</span></div>
                  <ModeGlyph mode={mode.id} />
                  <h3>{mode.title}</h3>
                  <p>{mode.body}</p>
                  <div className="mode-footer"><span>GUARDIAN CRAFT</span><ArrowUpRight size={16} /></div>
                </article>
              ))}
            </div>
            <div className="craft-note"><AlertTriangle size={17} /><span>Hydrogen is not intrinsically safe. It is made safer through engineered controls, detection, ventilation, material selection, training, and testing.</span></div>
          </div>
        </section>

        <section className="architecture-section">
          <div className="container architecture-grid">
            <div className="architecture-copy">
              <SectionLabel light>THE ARCHITECTURE</SectionLabel>
              <h2>Every layer answers<br /><i>to the mission.</i></h2>
              <p>The protocol is designed as a stack: purpose at the top, evidence underneath, and a human decision-maker in the loop at every critical boundary.</p>
              <div className="architecture-list">
                <div className="architecture-list-item"><span className="architecture-index">01</span><span><strong>Mission</strong><small>Aid, peace, accessibility, connection.</small></span></div>
                <div className="architecture-list-item"><span className="architecture-index">02</span><span><strong>Safety</strong><small>Contain, sense, stabilize, land.</small></span></div>
                <div className="architecture-list-item"><span className="architecture-index">03</span><span><strong>Oversight</strong><small>Explain, review, learn, remain accountable.</small></span></div>
              </div>
            </div>
            <div className="architecture-visual">
              <div className="architecture-frame"><img src="/manus-storage/santos_protocol_architecture_af560481.png" alt="Santos Protocol architecture showing mission, safety, and oversight layers" /></div>
              <span className="architecture-caption">FIG. 01 / PROTOCOL ARCHITECTURE</span>
            </div>
          </div>
        </section>

        <section className="safe-state-section">
          <div className="container safe-state-grid">
            <div className="safe-state-intro">
              <SectionLabel>WHEN UNCERTAINTY RISES</SectionLabel>
              <h2>Safety is a sequence,<br /><i>not a slogan.</i></h2>
              <p>A Guardian Craft does not improvise heroics. It moves through an explicit hierarchy that makes the next best action legible to the operator and the people nearby.</p>
            </div>
            <div className="safe-state-steps">
              {[
                ["Sense", "Detect instability, obstruction, leak, flame, or loss of confidence."],
                ["Explain", "State what is happening, why it matters, and what the system will do next."],
                ["Stabilize", "Reduce energy, preserve orientation, and protect the occupied space."],
                ["Land", "Choose the safest reachable surface and keep human control visible."],
                ["Learn", "Record the event, review the decision, and improve the protocol."],
              ].map(([title, body], index) => (
                <div className="safe-step" key={title}>
                  <div className="safe-step-number">0{index + 1}</div>
                  <div className="safe-step-content"><h3>{title}</h3><p>{body}</p></div>
                  {index < 4 && <div className="safe-step-line" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gates-section" id="gates">
          <div className="container">
            <div className="section-heading-row gates-heading">
              <div><SectionLabel>READINESS GATES</SectionLabel><h2>No mission<br /><span>before evidence.</span></h2></div>
              <p className="heading-aside">Humanitarian purpose does not waive aviation, environmental, airspace, or hazardous-material requirements. It raises the bar.</p>
            </div>
            <div className="gates-layout">
              <div className="gate-index-list" role="tablist" aria-label="Readiness gates">
                {gates.map((gate) => (
                  <button className={`gate-index ${activeGate === gate.step ? "gate-index-active" : ""}`} key={gate.step} type="button" onClick={() => setActiveGate(gate.step)} role="tab" aria-selected={activeGate === gate.step}>
                    <span>{gate.step}</span><strong>{gate.title}</strong><ArrowUpRight size={16} />
                  </button>
                ))}
              </div>
              <div className="gate-detail" role="tabpanel">
                {gates.filter((gate) => gate.step === activeGate).map((gate) => (
                  <div key={gate.step} className="gate-detail-inner">
                    <div className="gate-detail-kicker">GATE {gate.step} / REQUIRED</div>
                    <h3>{gate.title}</h3>
                    <p>{gate.body}</p>
                    <div className="tag-row">{gate.tags.map((tag) => <span key={tag} className="tag"><Check size={13} /> {tag}</span>)}</div>
                    <div className="gate-detail-foot"><ShieldCheck size={18} /><span>Evidence is reviewed before the mission is cleared.</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="promise-section">
          <div className="container promise-inner">
            <div className="promise-mark"><Wind size={28} strokeWidth={1.2} /></div>
            <p className="promise-quote">“The highest form of capability is knowing what must not be done.”</p>
            <span className="promise-attribution">SANTOS PROTOCOL / CLOSING PRINCIPLE</span>
          </div>
        </section>

        <section className="sources-section" id="sources">
          <div className="container sources-grid">
            <div className="sources-intro"><SectionLabel>SOURCE NOTES</SectionLabel><h2>Built from care.<br /><i>Grounded in evidence.</i></h2><p>The protocol separates ethical intent from technical certification—and treats both as non-negotiable.</p></div>
            <div className="source-list">
              {sources.map((source) => (
                <a className="source-row" href={source.href} target="_blank" rel="noreferrer" key={source.label}>
                  <span className="source-label">{source.label}</span><span className="source-title">{source.title}</span><ExternalLink size={16} />
                </a>
              ))}
              <div className="source-footnote"><BookOpen size={17} /><span>Research notes include hydrogen safety, fuel-cell pathways, containment, detection, training, and certification inputs.</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand"><span className="brand-emblem"><CircleDot size={15} strokeWidth={1.8} /></span><span className="brand-name">Santos <em>Protocol</em></span></div>
          <div className="footer-center">A field standard for capability under conscience.</div>
          <div className="footer-right"><span>SA / 2026</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></div>
        </div>
      </footer>
    </div>
  );
}
