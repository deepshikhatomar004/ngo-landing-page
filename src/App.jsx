

import "./App.css";

function App() {
  return (
    <div className="website">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          <span>✦</span> HopeBridge
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#impact">Impact</a>
          <a href="#volunteer">Volunteer</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#donate" className="nav-btn">
          Donate Now ↗
        </a>
      </nav>


      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="hero-content">

          <div className="small-label">
            <span></span> NON-PROFIT ORGANIZATION
          </div>

          <h1>
            Creating a better
            <br />
            world, <em>together.</em>
          </h1>

          <p>
            We work with communities to create meaningful opportunities,
            support vulnerable families, and build a future where everyone
            has the chance to thrive.
          </p>

          <div className="hero-buttons">
            <a href="#donate" className="primary-btn">
              Make a Difference <span>↗</span>
            </a>

            <a href="#about" className="secondary-btn">
              Discover Our Story
            </a>
          </div>

          <div className="hero-trust">
            <div className="avatars">
              <span>👩🏻</span>
              <span>👨🏽</span>
              <span>👩🏾</span>
              <span>👨🏻</span>
            </div>

            <div>
              <strong>25,000+ people</strong>
              <small>have already joined our mission</small>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
            alt="Children smiling"
          />

          <div className="floating-card">
            <div className="floating-icon">♥</div>
            <div>
              <strong>₹18.4L+</strong>
              <span>Raised this year</span>
            </div>
          </div>
        </div>
      </section>


      {/* ================= MARQUEE ================= */}
      <div className="marquee">
        <span>EDUCATION</span>
        <b>✦</b>
        <span>HEALTHCARE</span>
        <b>✦</b>
        <span>FOOD SECURITY</span>
        <b>✦</b>
        <span>WOMEN EMPOWERMENT</span>
        <b>✦</b>
        <span>COMMUNITY</span>
        <b>✦</b>
        <span>EDUCATION</span>
      </div>


      {/* ================= ABOUT ================= */}
      <section className="about section" id="about">
        <div className="about-images">
          <img
            className="about-main-img"
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80"
            alt="Community work"
          />

          <div className="experience-card">
            <strong>12+</strong>
            <span>Years of<br />creating impact</span>
          </div>
        </div>

        <div className="about-content">
          <div className="section-label">WHO WE ARE</div>

          <h2>
            Real change starts
            <br />
            with <em>small steps.</em>
          </h2>

          <p>
            HopeBridge is a community-driven non-profit organization
            dedicated to creating sustainable change in underserved
            communities.
          </p>

          <p>
            We believe every person deserves access to education,
            healthcare, nutritious food and opportunities to build
            an independent future.
          </p>

          <div className="about-points">
            <div>
              <span>01</span>
              <div>
                <strong>Community First</strong>
                <p>We listen to communities and build solutions together.</p>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <strong>Long-Term Impact</strong>
                <p>Our programs focus on sustainable and lasting change.</p>
              </div>
            </div>
          </div>

          <a href="#programs" className="text-link">
            Learn more about us →
          </a>
        </div>
      </section>


      {/* ================= IMPACT STATS ================= */}
      <section className="stats-section" id="impact">
        <div className="stats-heading">
          <div className="section-label">OUR IMPACT</div>
          <h2>Numbers that tell<br />a <em>story.</em></h2>
        </div>

        <div className="stats-grid">
          <div className="stat">
            <strong>25K+</strong>
            <span>Lives impacted</span>
          </div>

          <div className="stat">
            <strong>8.2K+</strong>
            <span>Children supported</span>
          </div>

          <div className="stat">
            <strong>120+</strong>
            <span>Active volunteers</span>
          </div>

          <div className="stat">
            <strong>18</strong>
            <span>Communities reached</span>
          </div>
        </div>
      </section>


      {/* ================= PROGRAMS ================= */}
      <section className="programs section" id="programs">
        <div className="program-header">
          <div>
            <div className="section-label">WHAT WE DO</div>
            <h2>Programs that create<br /><em>possibilities.</em></h2>
          </div>

          <p>
            Every program is designed around a real community need
            and built to create measurable, meaningful change.
          </p>
        </div>

        <div className="program-grid">

          <div className="program-card featured">
            <div className="program-number">01</div>
            <div className="program-icon">📚</div>
            <h3>Education for All</h3>
            <p>
              Helping children access quality education, learning
              resources and the confidence to dream bigger.
            </p>
            <a href="#">Explore program →</a>
          </div>

          <div className="program-card">
            <div className="program-number">02</div>
            <div className="program-icon">🥗</div>
            <h3>Food & Nutrition</h3>
            <p>
              Providing nutritious meals and promoting healthy
              eating habits for families in need.
            </p>
            <a href="#">Explore program →</a>
          </div>

          <div className="program-card">
            <div className="program-number">03</div>
            <div className="program-icon">🏥</div>
            <h3>Healthcare</h3>
            <p>
              Connecting communities with essential healthcare,
              awareness programs and medical support.
            </p>
            <a href="#">Explore program →</a>
          </div>

          <div className="program-card">
            <div className="program-number">04</div>
            <div className="program-icon">👩🏻‍💼</div>
            <h3>Women Empowerment</h3>
            <p>
              Supporting women with skills, training and opportunities
              for financial independence.
            </p>
            <a href="#">Explore program →</a>
          </div>

        </div>
      </section>


      {/* ================= FEATURED CAMPAIGN ================= */}
      <section className="campaign section">
        <div className="campaign-image">
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1000&q=80"
            alt="Education campaign"
          />

          <div className="campaign-tag">
            <span>●</span> CAMPAIGN ACTIVE
          </div>
        </div>

        <div className="campaign-content">
          <div className="section-label">FEATURED CAMPAIGN</div>

          <h2>
            Give a child the
            <br />
            gift of <em>education.</em>
          </h2>

          <p>
            Thousands of children still dream of going to school.
            Your support can help provide books, school supplies,
            learning spaces and educational support.
          </p>

          <div className="progress-info">
            <div>
              <strong>₹7,82,450</strong>
              <span>raised of ₹10,00,000</span>
            </div>
            <strong>78%</strong>
          </div>

          <div className="progress-bar">
            <div></div>
          </div>

          <a href="#donate" className="primary-btn">
            Support this campaign ↗
          </a>
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="process section">
        <div className="center-heading">
          <div className="section-label">HOW WE WORK</div>
          <h2>From your support<br />to <em>real impact.</em></h2>
        </div>

        <div className="process-grid">

          <div className="process-card">
            <div className="process-icon">01</div>
            <h3>You contribute</h3>
            <p>
              Every contribution, big or small, becomes part
              of a larger collective effort.
            </p>
          </div>

          <div className="process-line">→</div>

          <div className="process-card">
            <div className="process-icon">02</div>
            <h3>We take action</h3>
            <p>
              Our teams work directly with communities to
              deliver programs where they matter most.
            </p>
          </div>

          <div className="process-line">→</div>

          <div className="process-card">
            <div className="process-icon">03</div>
            <h3>Lives change</h3>
            <p>
              Together, we create opportunities that can
              continue creating impact for years.
            </p>
          </div>

        </div>
      </section>


      {/* ================= VOLUNTEER ================= */}
      <section className="volunteer section" id="volunteer">
        <div className="volunteer-content">
          <div className="section-label">JOIN THE MOVEMENT</div>

          <h2>
            Your time can be
            <br />
            someone's <em>turning point.</em>
          </h2>

          <p>
            You don't need to be an expert to make a difference.
            Share your skills, time or simply your energy with
            communities that need it.
          </p>

          <div className="volunteer-buttons">
            <a href="#contact" className="primary-btn">
              Become a Volunteer ↗
            </a>

            <a href="#contact" className="secondary-btn">
              Partner With Us
            </a>
          </div>
        </div>

        <div className="volunteer-image">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=80"
            alt="Volunteers"
          />
        </div>
      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials section">
        <div className="center-heading">
          <div className="section-label">VOICES OF HOPE</div>
          <h2>People who make<br />it <em>possible.</em></h2>
        </div>

        <div className="testimonial-grid">

          <div className="testimonial">
            <div className="quote">“</div>

            <p>
              Volunteering with HopeBridge completely changed
              how I see community work. Every small contribution
              genuinely feels meaningful.
            </p>

            <div className="person">
              <div className="person-avatar">PS</div>
              <div>
                <strong>Priya Sharma</strong>
                <span>Volunteer</span>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <div className="quote">“</div>

            <p>
              The transparency and the direct connection with
              communities made me want to keep supporting their work.
            </p>

            <div className="person">
              <div className="person-avatar">RM</div>
              <div>
                <strong>Rahul Mehta</strong>
                <span>Monthly Donor</span>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <div className="quote">“</div>

            <p>
              I joined as a volunteer and found a community of
              people who genuinely care about creating change.
            </p>

            <div className="person">
              <div className="person-avatar">AN</div>
              <div>
                <strong>Ananya Nair</strong>
                <span>Community Partner</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ================= FAQ ================= */}
      <section className="faq section">
        <div className="faq-title">
          <div className="section-label">HAVE QUESTIONS?</div>
          <h2>Frequently<br /><em>asked.</em></h2>
        </div>

        <div className="faq-list">

          <details>
            <summary>
              How can I support HopeBridge?
              <span>+</span>
            </summary>
            <p>
              You can support us through donations, volunteering,
              partnerships or by helping spread awareness about our work.
            </p>
          </details>

          <details>
            <summary>
              Where does my donation go?
              <span>+</span>
            </summary>
            <p>
              Donations help fund our education, nutrition, healthcare
              and community development programs.
            </p>
          </details>

          <details>
            <summary>
              Can I volunteer without experience?
              <span>+</span>
            </summary>
            <p>
              Yes. We welcome people from different backgrounds and
              provide guidance based on the volunteering opportunity.
            </p>
          </details>

          <details>
            <summary>
              Can organizations partner with you?
              <span>+</span>
            </summary>
            <p>
              Yes. We work with organizations, educational institutions
              and community groups on social impact initiatives.
            </p>
          </details>

        </div>
      </section>


      {/* ================= DONATE ================= */}
      <section className="donate section" id="donate">

        <div className="donate-content">
          <div className="section-label">MAKE AN IMPACT</div>

          <h2>
            One small act.
            <br />
            <em>A ripple of change.</em>
          </h2>

          <p>
            Your contribution can help us reach another child,
            another family and another community.
          </p>

          <div className="donation-options">
            <button>₹500</button>
            <button>₹1,000</button>
            <button>₹2,500</button>
            <button>₹5,000</button>
          </div>

          <button className="donate-btn">
            Donate Now ♥
          </button>
        </div>

        <div className="donate-side">
          <div className="heart">♥</div>
          <h3>Together,<br />we can do more.</h3>
          <span>#HopeInAction</span>
        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section className="contact section" id="contact">
        <div>
          <div className="section-label">GET IN TOUCH</div>
          <h2>Let's create<br /><em>change together.</em></h2>
        </div>

        <div className="contact-info">
          <div>
            <span>Email</span>
            <a href="mailto:hello@hopebridge.org">
              hello@hopebridge.org
            </a>
          </div>

          <div>
            <span>Phone</span>
            <a href="tel:+911234567890">
              +91 12345 67890
            </a>
          </div>

          <div>
            <span>Location</span>
            <p>New Delhi, India</p>
          </div>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer id="footer">

        <div className="footer-main">

          <div className="footer-brand">
            <div className="logo">
              <span>✦</span> HopeBridge
            </div>

            <p>
              Building hope, creating opportunities and
              making communities stronger.
            </p>

            <div className="socials">
              <a href="#">in</a>
              <a href="#">f</a>
              <a href="#">𝕏</a>
              <a href="#">◎</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#about">About Us</a>
            <a href="#programs">Our Programs</a>
            <a href="#impact">Our Impact</a>
            <a href="#volunteer">Volunteer</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <a href="#donate">Donate</a>
            <a href="#contact">Partner With Us</a>
            <a href="#contact">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div className="footer-newsletter">
            <h4>Stay connected</h4>
            <p>
              Get stories of impact and updates from our community.
            </p>

            <div className="email-box">
              <input
                type="email"
                placeholder="Your email address"
              />
              <button>→</button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 HopeBridge Foundation. All rights reserved.</span>
          <span>Made with ♥ for a better tomorrow.</span>
        </div>

      </footer>

    </div>
  );
}

export default App;

