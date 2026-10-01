
import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  Star,
  ShieldCheck,
  Clock3,
  ArrowRight,
  CheckCircle2,
  MapPin,
  ChevronDown,
} from "lucide-react";

const PHONE = "9625011024";
const WHATSAPP = "919625011024";

const whatsappLink =
  "https://wa.me/919625011024?text=Hello%20Royal%20King%20Spa%2C%20I%20would%20like%20to%20book%20a%20spa%20session.";

const services = [
  {
    title: "Royal Swedish Massage",
    price: "₹1,499",
    text: "Gentle full-body massage designed for deep relaxation and stress relief.",
  },
  {
    title: "Deep Tissue Therapy",
    price: "₹1,799",
    text: "Targeted pressure therapy for tired muscles, stiffness and everyday tension.",
  },
  {
    title: "Aroma Wellness",
    price: "₹1,599",
    text: "A calming aromatherapy experience with relaxing essential oils.",
  },
  {
    title: "Hot Stone Ritual",
    price: "₹1,999",
    text: "Warm stone therapy combined with soothing massage techniques.",
  },
  {
    title: "Head & Shoulder",
    price: "₹799",
    text: "A focused relaxation session for the head, neck and shoulders.",
  },
  {
    title: "Couple Relaxation",
    price: "₹2,999",
    text: "A peaceful spa experience designed for couples.",
  },
];

const packages = [
  {
    title: "Royal Relax",
    duration: "60 Minutes",
    price: "₹1,499",
  },
  {
    title: "Royal Premium",
    duration: "90 Minutes",
    price: "₹2,199",
    featured: true,
  },
  {
    title: "Royal Couple",
    duration: "90 Minutes",
    price: "₹3,999",
  },
];

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Appointments are recommended so we can reserve your preferred time. You can call or WhatsApp us directly.",
  },
  {
    q: "What should I bring?",
    a: "You only need to bring yourself. We provide the required towels and spa essentials.",
  },
  {
    q: "Can I book through WhatsApp?",
    a: "Yes. Send us your preferred service and time on WhatsApp and our team will assist you.",
  },
  {
    q: "Do you offer couple sessions?",
    a: "Yes. Our Royal Couple package is designed for a relaxing shared experience.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const message = `
Hello Royal King Spa,

I would like to book a spa session.

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Preferred Date: ${form.date}
Message: ${form.message || "No additional message"}

Please confirm the availability.
`;

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {/* TOP BAR */}
      <div className="top">
        <div className="topin">
          <span>✨ Premium Wellness & Relaxation Experience</span>

          <a href={`tel:${PHONE}`}>
            <Phone size={15} />
            Call: {PHONE}
          </a>
        </div>
      </div>

      {/* HEADER */}
      <header>
        <div className="nav">
          <button
            className="brand"
            onClick={() => scrollTo("home")}
            type="button"
          >
            <div className="logo">
              <Sparkles size={25} />
            </div>

            <div>
              <strong>ROYAL KING</strong>
              <span>SPA & WELLNESS</span>
            </div>
          </button>

          <nav className={menuOpen ? "open" : ""}>
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("packages")}>Packages</button>
            <button onClick={() => scrollTo("booking")}>Booking</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </nav>

          <button className="book" onClick={() => scrollTo("booking")}>
            Book Now <ArrowRight size={17} />
          </button>

          <button
            className="menub"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="heroShade"></div>

        <div className="heroText">
          <div className="eyebrow">
            <Sparkles size={16} />
            LUXURY SPA & WELLNESS
          </div>

          <h1>
            Relax Your Body.
            <br />
            <span>Refresh Your Soul.</span>
          </h1>

          <p className="lead">
            Step into a peaceful world of premium spa treatments, soothing
            therapies and complete relaxation.
          </p>

          <div className="actions">
            <button
              className="btn blue"
              onClick={() => scrollTo("booking")}
            >
              Book Your Experience
              <ArrowRight size={18} />
            </button>

            <a className="btn white" href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle size={19} />
              WhatsApp Us
            </a>
          </div>

          <div className="trust">
            <span>
              <CheckCircle2 size={17} /> Professional Therapists
            </span>
            <span>
              <CheckCircle2 size={17} /> Premium Ambience
            </span>
            <span>
              <CheckCircle2 size={17} /> Private Experience
            </span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="statgrid">
          <div className="stat">
            <strong>5+</strong>
            <span>Premium Treatments</span>
          </div>

          <div className="stat">
            <strong>100%</strong>
            <span>Relaxation Focused</span>
          </div>

          <div className="stat">
            <strong>7 Days</strong>
            <span>Available</span>
          </div>

          <div className="stat">
            <strong>24/7</strong>
            <span>WhatsApp Booking</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="two">
          <div>
            <div className="eyebrow dark">
              <Sparkles size={16} />
              WELCOME TO ROYAL KING SPA
            </div>

            <h2>
              Your Personal
              <br />
              <span>Relaxation Destination</span>
            </h2>

            <p>
              At Royal King Spa, we believe relaxation is not a luxury—it is
              an essential part of a balanced lifestyle.
            </p>

            <p>
              Our carefully designed treatments combine calming ambience,
              professional techniques and a peaceful environment to help you
              disconnect from everyday stress.
            </p>

            <div className="features">
              <div>
                <ShieldCheck />
                <span>
                  <b>Professional Care</b>
                  Experienced and attentive service.
                </span>
              </div>

              <div>
                <Sparkles />
                <span>
                  <b>Premium Ambience</b>
                  A calm and elegant environment.
                </span>
              </div>

              <div>
                <Clock3 />
                <span>
                  <b>Flexible Booking</b>
                  Easy phone and WhatsApp booking.
                </span>
              </div>
            </div>
          </div>

          <div className="visual">
            <div className="visualCard">
              <Sparkles size={38} />
              <strong>Royal</strong>
              <span>Relaxation</span>
            </div>

            <div className="visualSmall">
              <Star size={17} />
              <b>Premium Wellness</b>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section soft" id="services">
        <div className="center">
          <div className="eyebrow dark">
            <Sparkles size={16} />
            OUR SERVICES
          </div>

          <h2>
            Treatments Designed
            <br />
            <span>For Complete Relaxation</span>
          </h2>

          <p>
            Choose from our range of relaxing wellness experiences.
          </p>
        </div>

        <div className="cards">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <div className="iconbox">
                <Sparkles size={23} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <div className="cardBottom">
                <strong>{service.price}</strong>

                <button onClick={() => scrollTo("booking")}>
                  Book <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section" id="packages">
        <div className="center">
          <div className="eyebrow dark">
            <Sparkles size={16} />
            ROYAL PACKAGES
          </div>

          <h2>
            Choose Your
            <br />
            <span>Perfect Experience</span>
          </h2>
        </div>

        <div className="packages">
          {packages.map((pack) => (
            <article
              className={`package ${pack.featured ? "featured" : ""}`}
              key={pack.title}
            >
              {pack.featured && <div className="popular">POPULAR</div>}

              <Sparkles size={28} />

              <h3>{pack.title}</h3>

              <span className="duration">{pack.duration}</span>

              <strong className="packagePrice">{pack.price}</strong>

              <button onClick={() => scrollTo("booking")}>
                Select Package <ArrowRight size={17} />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote">
        <div className="qin">
          <Sparkles size={30} />
          <h2>
            “Take time to relax,
            <br />
            recharge and reconnect.”
          </h2>
          <p>Royal King Spa & Wellness</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section">
        <div className="center">
          <div className="eyebrow dark">
            <Sparkles size={16} />
            OUR SPACE
          </div>

          <h2>
            A Calm Space
            <br />
            <span>Made For You</span>
          </h2>
        </div>

        <div className="gallery">
          <div className="g tall">
            <div>
              <Sparkles size={28} />
              <span>Relaxation</span>
            </div>
          </div>

          <div className="g">
            <div>
              <Star size={28} />
              <span>Wellness</span>
            </div>
          </div>

          <div className="g">
            <div>
              <ShieldCheck size={28} />
              <span>Premium Care</span>
            </div>
          </div>

          <div className="g wide">
            <div>
              <Sparkles size={28} />
              <span>Royal Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section soft">
        <div className="two">
          <div>
            <div className="eyebrow dark">
              <Sparkles size={16} />
              WHY ROYAL KING SPA
            </div>

            <h2>
              Relaxation With
              <br />
              <span>A Premium Touch</span>
            </h2>

            <p>
              Every part of your experience is designed to help you slow down,
              relax and enjoy your time.
            </p>
          </div>

          <div className="benefits">
            <div>
              <ShieldCheck />
              <section>
                <h3>Professional Service</h3>
                <p>Attentive and respectful spa service.</p>
              </section>
            </div>

            <div>
              <Clock3 />
              <section>
                <h3>Easy Booking</h3>
                <p>Book conveniently by phone or WhatsApp.</p>
              </section>
            </div>

            <div>
              <Sparkles />
              <section>
                <h3>Peaceful Environment</h3>
                <p>A comfortable atmosphere for relaxation.</p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section testimonial">
        <div className="center">
          <div className="stars">
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
          </div>

          <h2>
            “A peaceful escape from
            <br />
            the daily routine.”
          </h2>

          <p>
            Enjoy a relaxing experience in an elegant and comfortable
            environment.
          </p>
        </div>
      </section>

      {/* BOOKING */}
      <section className="booking" id="booking">
        <div className="bookingin">
          <div>
            <div className="eyebrow">
              <Sparkles size={16} />
              BOOK YOUR SESSION
            </div>

            <h2>
              Ready To
              <br />
              <span>Relax?</span>
            </h2>

            <p>
              Fill in your details and we will connect with you on WhatsApp
              to confirm your appointment.
            </p>

            <div className="mini">
              <div>
                <Phone />
                <span>
                  <b>Call Us</b>
                  {PHONE}
                </span>
              </div>

              <div>
                <MessageCircle />
                <span>
                  <b>WhatsApp</b>
                  Available for booking
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleBooking}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <div className="formrow">
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>

                {services.map((service) => (
                  <option value={service.title} key={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Any special request?"
              rows="4"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button className="btn blue full" type="submit">
              Book Through WhatsApp
              <MessageCircle size={19} />
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="center">
          <div className="eyebrow dark">
            <Sparkles size={16} />
            FAQ
          </div>

          <h2>
            Frequently Asked
            <br />
            <span>Questions</span>
          </h2>
        </div>

        <div className="faq">
          {faqs.map((item, index) => (
            <div className="faqrow" key={item.q}>
              <button
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={openFaq === index ? "rotate" : ""}
                  size={20}
                />
              </button>

              {openFaq === index && <p>{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contactin">
          <div>
            <div className="eyebrow">
              <Sparkles size={16} />
              CONTACT US
            </div>

            <h2>
              Let's Make
              <br />
              <span>Time For You.</span>
            </h2>

            <p>
              Call or WhatsApp us to ask about treatments, packages,
              availability and appointments.
            </p>
          </div>

          <div className="details">
            <a href={`tel:${PHONE}`}>
              <Phone />
              <span>
                <b>Call</b>
                {PHONE}
              </span>
            </a>

            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle />
              <span>
                <b>WhatsApp</b>
                Chat with us
              </span>
            </a>

            <div>
              <MapPin />
              <span>
                <b>Location</b>
                Contact us for location details
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="bottom">
          <div className="brand footerBrand">
            <div className="logo">
              <Sparkles size={22} />
            </div>

            <div>
              <strong>ROYAL KING</strong>
              <span>SPA & WELLNESS</span>
            </div>
          </div>

          <p>© {new Date().getFullYear()} Royal King Spa. All rights reserved.</p>
        </div>
      </footer>

      {/* FLOATING CALL + WHATSAPP */}
      <div className="float">
        <a
          className="call"
          href={`tel:${PHONE}`}
          aria-label="Call Royal King Spa"
        >
          <Phone size={23} />
        </a>

        <a
          className="wa"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Royal King Spa"
        >
          <MessageCircle size={25} />
        </a>
      </div>
    </div>
  );
}

export default App;

