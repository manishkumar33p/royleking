import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Menu, X, Phone, MapPin, Clock3, ArrowRight, Star, Check,
  Sparkles, Heart, ShieldCheck, CalendarDays, MessageCircle,
  ChevronDown, Waves, Flower2, Gem
} from "lucide-react";
import "./styles.css";

const services = [
  { icon: <Sparkles />, title: "Royal Relax Massage", text: "A calming full-body wellness session designed for deep relaxation.", price: "₹1,499" },
  { icon: <Flower2 />, title: "Aroma Wellness", text: "A soothing aromatic experience in a peaceful premium setting.", price: "₹1,799" },
  { icon: <Waves />, title: "Deep Relax Therapy", text: "A focused wellness session for deeper muscular relaxation.", price: "₹1,999" },
  { icon: <Gem />, title: "Hot Stone Ritual", text: "Warm stone therapy paired with gentle relaxation techniques.", price: "₹2,299" },
  { icon: <Heart />, title: "Head & Shoulder", text: "A focused session for everyday tension and mental unwinding.", price: "₹999" },
  { icon: <Sparkles />, title: "Couple Wellness", text: "A shared premium relaxation experience for two.", price: "₹3,499" }
];

const packages = [
  { name: "Classic Royal", price: "₹1,999", items: ["60 min Relax Massage", "Head & Shoulder Care", "Welcome Refreshment"] },
  { name: "Royal Signature", price: "₹2,999", featured: true, items: ["90 min Wellness Ritual", "Aroma Therapy", "Hot Towel Ritual", "Premium Refreshment"] },
  { name: "Royal Escape", price: "₹4,499", items: ["120 min Premium Ritual", "Aroma + Hot Stone", "Private Relaxation Time", "Luxury Refreshment"] }
];

const faqs = [
  ["Do I need an appointment?", "Appointments are recommended so we can reserve your preferred time and service."],
  ["How early should I arrive?", "Arriving 10–15 minutes early gives you time to settle in before your session."],
  ["Can I request a specific therapist?", "Requests can be shared while booking and are subject to availability."],
  ["What should I bring?", "Just bring yourself. We provide the standard items needed for your selected service."]
];

function App() {
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <div className="app">
      <header className="navbar">
        <a href="#home" className="brand" onClick={() => setMenu(false)}>
          <span>ROYAL KING</span>
          <small>SPA & WELLNESS</small>
        </a>
        <button className="menuBtn" onClick={() => setMenu(!menu)} aria-label="Menu">
          {menu ? <X /> : <Menu />}
        </button>
        <nav className={menu ? "navlinks open" : "navlinks"}>
          {["Home","About","Services","Packages","Gallery","Contact"].map(item =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>{item}</a>
          )}
          <a className="navCta" href="#booking" onClick={() => setMenu(false)}>Book Now</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroShape one"></div><div className="heroShape two"></div>
          <div className="container heroGrid">
            <div className="heroCopy">
              <div className="eyebrow"><Sparkles size={16}/> LUXURY WELLNESS • RELAXATION • REJUVENATION</div>
              <h1>Relax in a world of <span>Royal</span> comfort.</h1>
              <p>Royal King Spa brings together premium wellness rituals, elegant ambience and personalized care to help you slow down, recharge and feel renewed.</p>
              <div className="actions">
                <a className="primaryBtn" href="#booking">Reserve Your Session <ArrowRight size={17}/></a>
                <a className="secondaryBtn" href="#services">Explore Services</a>
              </div>
              <div className="stats">
                <div><b>5★</b><span>Guest Experience</span></div>
                <div><b>12+</b><span>Wellness Options</span></div>
                <div><b>100%</b><span>Premium Ambience</span></div>
              </div>
            </div>
            <div className="heroVisual">
              <div className="visualCard">
                <div className="visualBadge"><Star size={16} fill="currentColor"/> Premium Experience</div>
                <div className="spaOrb"><span>ROYAL<br/><small>KING SPA</small></span></div>
                <div className="visualBottom"><span>Wellness</span><b>Est. 2026</b></div>
              </div>
            </div>
          </div>
        </section>

        <section className="trustBar">
          <div><ShieldCheck/><span>Clean & Comfortable</span></div>
          <div><Heart/><span>Personalized Care</span></div>
          <div><Gem/><span>Premium Ambience</span></div>
          <div><CalendarDays/><span>Easy Appointment</span></div>
        </section>

        <section id="about" className="section">
          <div className="container aboutGrid">
            <div className="aboutVisual">
              <div className="aboutPanel"><div className="roundMark">RK</div><b>ROYAL KING SPA</b><span>YOUR TIME. YOUR SPACE.</span></div>
            </div>
            <div>
              <div className="eyebrow blue"><Sparkles size={16}/> THE ROYAL EXPERIENCE</div>
              <h2>Luxury that lets you <span>breathe.</span></h2>
              <p className="lead">Step away from the noise and enter a refined wellness environment where every detail is created around relaxation, comfort and care.</p>
              <p>From calming massage rituals to restorative spa therapies, our team focuses on a polished guest experience from arrival to the final moment.</p>
              <div className="checkGrid">{["Premium ambience","Trained professionals","Private treatment rooms","Hygienic standards","Personalized sessions","Easy appointment booking"].map(x => <div key={x}><Check size={17}/>{x}</div>)}</div>
              <a className="primaryBtn" href="#booking">Plan My Visit <ArrowRight size={17}/></a>
            </div>
          </div>
        </section>

        <section id="services" className="section softBlue">
          <div className="container">
            <div className="sectionHead"><div className="eyebrow blue">SIGNATURE SERVICES</div><h2>Designed around your <span>relaxation.</span></h2><p>Choose a wellness ritual that matches your mood, schedule and relaxation goals.</p></div>
            <div className="cardGrid">{services.map(s => <article className="serviceCard" key={s.title}><div className="serviceIcon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p><div className="cardBottom"><b>From {s.price}</b><a href="#booking">Book <ArrowRight size={15}/></a></div></article>)}</div>
          </div>
        </section>

        <section id="packages" className="section">
          <div className="container">
            <div className="sectionHead"><div className="eyebrow blue">ROYAL PACKAGES</div><h2>Make your wellness ritual <span>complete.</span></h2><p>Flexible packages for first visits, regular relaxation and premium experiences.</p></div>
            <div className="packageGrid">{packages.map(p => <article className={p.featured ? "package featured" : "package"} key={p.name}>{p.featured && <div className="popular">MOST POPULAR</div>}<h3>{p.name}</h3><div className="packagePrice">{p.price}</div>{p.items.map(i => <div className="packageItem" key={i}><Check size={16}/>{i}</div>)}<a className={p.featured ? "primaryBtn" : "secondaryBtn"} href="#booking">Choose Package</a></article>)}</div>
          </div>
        </section>

        <section id="gallery" className="section softBlue">
          <div className="container">
            <div className="sectionHead"><div className="eyebrow blue">ROYAL ATMOSPHERE</div><h2>A space made for <span>slowing down.</span></h2><p>Elegant details, soft lighting and a peaceful environment set the tone for your visit.</p></div>
            <div className="gallery">
              <div className="galleryItem big"><div>Luxury Reception</div></div>
              <div className="galleryItem room"><div>Private Wellness Room</div></div>
              <div className="galleryItem aroma"><div>Aroma Ritual</div></div>
              <div className="galleryItem lounge"><div>Relaxation Lounge</div></div>
              <div className="galleryItem care"><div>Premium Treatment</div></div>
            </div>
          </div>
        </section>

        <section className="section testimonial">
          <div className="container narrow"><div className="quoteStars">{[1,2,3,4,5].map(i=><Star key={i} size={19} fill="currentColor"/>)}</div><blockquote>“A beautiful escape from a busy day — calm surroundings, attentive service and a truly relaxing experience.”</blockquote><span>ROYAL KING SPA GUEST</span></div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHead"><div className="eyebrow blue">WHY ROYAL KING</div><h2>Every visit should feel <span>special.</span></h2></div>
            <div className="benefitGrid">
              <div className="benefit"><b>01</b><h3>Personalized Care</h3><p>Tell us what kind of relaxation you are looking for and we help tailor your session.</p></div>
              <div className="benefit"><b>02</b><h3>Premium Ambience</h3><p>A sophisticated setting created to help you disconnect from everyday distractions.</p></div>
              <div className="benefit"><b>03</b><h3>Clean & Comfortable</h3><p>Attention to cleanliness, comfort and a welcoming guest experience.</p></div>
            </div>
          </div>
        </section>

        <section id="booking" className="section booking">
          <div className="container">
            <div className="sectionHead"><div className="eyebrow blue">RESERVATIONS</div><h2>Reserve your <span>royal moment.</span></h2><p>Send your details and our team will contact you to confirm your preferred date and time.</p></div>
            <form className="bookingForm" onSubmit={submit}>
              <input required placeholder="Full Name"/>
              <input required type="tel" placeholder="Phone / WhatsApp"/>
              <select required defaultValue=""><option value="" disabled>Select Service</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select>
              <input required type="date"/>
              <textarea required placeholder="Preferred time or special request"></textarea>
              <button className="primaryBtn full" type="submit">Request Appointment <ArrowRight size={17}/></button>
            </form>
            {sent && <div className="success"><Check size={18}/> Thank you! Your appointment request has been received.</div>}
          </div>
        </section>

        <section className="section faqSection">
          <div className="container narrow"><div className="sectionHead"><div className="eyebrow blue">FAQ</div><h2>Your questions, <span>answered.</span></h2></div>{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={20}/></summary><p>{a}</p></details>)}</div>
        </section>

        <section id="contact" className="section softBlue">
          <div className="container">
            <div className="sectionHead"><div className="eyebrow blue">VISIT ROYAL KING SPA</div><h2>Let’s plan your next <span>escape.</span></h2></div>
            <div className="contactGrid">
              <div className="contactCard"><div className="contactIcon"><Phone/></div><h3>Call / WhatsApp</h3><p>+91 XXXXX XXXXX</p><small>For same-day appointments, contact us directly.</small></div>
              <div className="contactCard"><div className="contactIcon"><MapPin/></div><h3>Our Location</h3><p>Your Luxury Spa Address</p><small>Ghaziabad, Uttar Pradesh</small></div>
              <div className="contactCard"><div className="contactIcon"><Clock3/></div><h3>Opening Hours</h3><p>10:00 AM – 10:00 PM</p><small>Open Daily</small></div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container"><div className="eyebrow">YOUR TIME. YOUR SPACE. YOUR ROYAL EXPERIENCE.</div><h2>Relax. Recharge. <span>Repeat.</span></h2><p>Make wellness part of your routine with Royal King Spa.</p><a className="primaryBtn" href="#booking">Book Your Experience <ArrowRight size={17}/></a></div>
        </section>
      </main>

      <footer><div className="container footer"><div><a className="brand" href="#home"><span>ROYAL KING</span><small>SPA & WELLNESS</small></a><p>Luxury wellness • relaxation • rejuvenation</p></div><div><b>Quick Links</b><div className="footerLinks"><a href="#about">About</a><a href="#services">Services</a><a href="#packages">Packages</a><a href="#booking">Book Now</a></div></div><div><b>Contact</b><p>+91 XXXXX XXXXX</p><p>Ghaziabad, Uttar Pradesh</p></div></div><div className="copyright">© 2026 Royal King Spa. All rights reserved.</div></footer>
      <a className="floatingWhatsApp" href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer"><MessageCircle size={25}/></a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
