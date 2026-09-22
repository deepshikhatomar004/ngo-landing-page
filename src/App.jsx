import { useState } from "react";
import "./App.css";

function App() {
  // ================= AUTH STATES =================

  const [authPage, setAuthPage] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("hopebridgeLoggedIn") === "true"
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("hopebridgeUser")) || null
  );

  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  // ================= FORM INPUT =================

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  // ================= SIGNUP =================

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("hopebridgeUser")
    );

    if (existingUser && existingUser.email === form.email) {
      alert("An account with this email already exists.");
      return;
    }

    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    localStorage.setItem(
      "hopebridgeUser",
      JSON.stringify(newUser)
    );

    alert("Account created successfully!");

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setAuthPage("login");
  };


  // ================= LOGIN =================

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("hopebridgeUser")
    );

    if (!savedUser) {
      alert("No account found. Please signup first.");
      return;
    }

    if (
      form.email === savedUser.email &&
      form.password === savedUser.password
    ) {
      localStorage.setItem("hopebridgeLoggedIn", "true");

      setUser(savedUser);
      setIsLoggedIn(true);
      setAuthPage("profile");

      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      alert("Invalid email or password.");
    }
  };


  // ================= LOGOUT =================

  const handleLogout = () => {
    localStorage.removeItem("hopebridgeLoggedIn");

    setIsLoggedIn(false);
    setAuthPage(null);
    setIsEditing(false);
  };


  // ================= PROFILE EDIT =================

  const handleProfileChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };


  // ================= SAVE PROFILE =================

  const saveProfile = () => {
    if (!user.name || !user.email) {
      alert("Name and email cannot be empty.");
      return;
    }

    localStorage.setItem(
      "hopebridgeUser",
      JSON.stringify(user)
    );

    setIsEditing(false);

    alert("Profile updated successfully!");
  };


  // ================= DELETE ACCOUNT =================

  const deleteAccount = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );

    if (confirmDelete) {
      localStorage.removeItem("hopebridgeUser");
      localStorage.removeItem("hopebridgeLoggedIn");

      setUser(null);
      setIsLoggedIn(false);
      setAuthPage(null);
      setIsEditing(false);

      alert("Account deleted successfully.");
    }
  };


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

        <div className="nav-actions">

          {isLoggedIn ? (
            <button
              className="account-btn"
              onClick={() => setAuthPage("profile")}
            >
              My Account
            </button>
          ) : (
            <button
              className="login-btn"
              onClick={() => setAuthPage("login")}
            >
              Login
            </button>
          )}

          <a href="#donate" className="nav-btn">
            Donate Now ↗
          </a>

        </div>

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

            <div className="floating-icon">
              ♥
            </div>

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
            <span>
              Years of
              <br />
              creating impact
            </span>
          </div>

        </div>


        <div className="about-content">

          <div className="section-label">
            WHO WE ARE
          </div>

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

                <p>
                  We listen to communities and build solutions together.
                </p>
              </div>

            </div>


            <div>

              <span>02</span>

              <div>
                <strong>Long-Term Impact</strong>

                <p>
                  Our programs focus on sustainable and lasting change.
                </p>
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

          <div className="section-label">
            OUR IMPACT
          </div>

          <h2>
            Numbers that tell
            <br />
            a <em>story.</em>
          </h2>

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

            <div className="section-label">
              WHAT WE DO
            </div>

            <h2>
              Programs that create
              <br />
              <em>possibilities.</em>
            </h2>

          </div>

          <p>
            Every program is designed around a real community need
            and built to create measurable, meaningful change.
          </p>

        </div>


        <div className="program-grid">

          <div className="program-card featured">

            <div className="program-number">
              01
            </div>

            <div className="program-icon">
              📚
            </div>

            <h3>
              Education for All
            </h3>

            <p>
              Helping children access quality education, learning
              resources and the confidence to dream bigger.
            </p>

            <a href="#">
              Explore program →
            </a>

          </div>


          <div className="program-card">

            <div className="program-number">
              02
            </div>

            <div className="program-icon">
              🥗
            </div>

            <h3>
              Food & Nutrition
            </h3>

            <p>
              Providing nutritious meals and promoting healthy
              eating habits for families in need.
            </p>

            <a href="#">
              Explore program →
            </a>

          </div>


          <div className="program-card">

            <div className="program-number">
              03
            </div>

            <div className="program-icon">
              🏥
            </div>

            <h3>
              Healthcare
            </h3>

            <p>
              Connecting communities with essential healthcare,
              awareness programs and medical support.
            </p>

            <a href="#">
              Explore program →
            </a>

          </div>


          <div className="program-card">

            <div className="program-number">
              04
            </div>

            <div className="program-icon">
              👩🏻‍💼
            </div>

            <h3>
              Women Empowerment
            </h3>

            <p>
              Supporting women with skills, training and opportunities
              for financial independence.
            </p>

            <a href="#">
              Explore program →
            </a>

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

          <div className="section-label">
            FEATURED CAMPAIGN
          </div>

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

          <div className="section-label">
            HOW WE WORK
          </div>

          <h2>
            From your support
            <br />
            to <em>real impact.</em>
          </h2>

        </div>


        <div className="process-grid">

          <div className="process-card">

            <div className="process-icon">
              01
            </div>

            <h3>
              You contribute
            </h3>

            <p>
              Every contribution, big or small, becomes part
              of a larger collective effort.
            </p>

          </div>


          <div className="process-line">
            →
          </div>


          <div className="process-card">

            <div className="process-icon">
              02
            </div>

            <h3>
              We take action
            </h3>

            <p>
              Our teams work directly with communities to
              deliver programs where they matter most.
            </p>

          </div>


          <div className="process-line">
            →
          </div>


          <div className="process-card">

            <div className="process-icon">
              03
            </div>

            <h3>
              Lives change
            </h3>

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

          <div className="section-label">
            JOIN THE MOVEMENT
          </div>

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

          <div className="section-label">
            VOICES OF HOPE
          </div>

          <h2>
            People who make
            <br />
            it <em>possible.</em>
          </h2>

        </div>


        <div className="testimonial-grid">

          <div className="testimonial">

            <div className="quote">
              “
            </div>

            <p>
              Volunteering with HopeBridge completely changed
              how I see community work. Every small contribution
              genuinely feels meaningful.
            </p>

            <div className="person">

              <div className="person-avatar">
                PS
              </div>

              <div>
                <strong>
                  Priya Sharma
                </strong>

                <span>
                  Volunteer
                </span>
              </div>

            </div>

          </div>


          <div className="testimonial">

            <div className="quote">
              “
            </div>

            <p>
              The transparency and the direct connection with
              communities made me want to keep supporting their work.
            </p>

            <div className="person">

              <div className="person-avatar">
                RM
              </div>

              <div>
                <strong>
                  Rahul Mehta
                </strong>

                <span>
                  Monthly Donor
                </span>
              </div>

            </div>

          </div>


          <div className="testimonial">

            <div className="quote">
              “
            </div>

            <p>
              I joined as a volunteer and found a community of
              people who genuinely care about creating change.
            </p>

            <div className="person">

              <div className="person-avatar">
                AN
              </div>

              <div>
                <strong>
                  Ananya Nair
                </strong>

                <span>
                  Community Partner
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="faq section">

        <div className="faq-title">

          <div className="section-label">
            HAVE QUESTIONS?
          </div>

          <h2>
            Frequently
            <br />
            <em>asked.</em>
          </h2>

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

          <div className="section-label">
            MAKE AN IMPACT
          </div>

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

          <div className="heart">
            ♥
          </div>

          <h3>
            Together,
            <br />
            we can do more.
          </h3>

          <span>
            #HopeInAction
          </span>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="contact section" id="contact">

        <div>

          <div className="section-label">
            GET IN TOUCH
          </div>

          <h2>
            Let's create
            <br />
            <em>change together.</em>
          </h2>

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

            <p>
              New Delhi, India
            </p>

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

            <h4>
              Explore
            </h4>

            <a href="#about">
              About Us
            </a>

            <a href="#programs">
              Our Programs
            </a>

            <a href="#impact">
              Our Impact
            </a>

            <a href="#volunteer">
              Volunteer
            </a>

          </div>


          <div className="footer-column">

            <h4>
              Support
            </h4>

            <a href="#donate">
              Donate
            </a>

            <a href="#contact">
              Partner With Us
            </a>

            <a href="#contact">
              Contact
            </a>

            <a href="#">
              Privacy Policy
            </a>

          </div>


          <div className="footer-newsletter">

            <h4>
              Stay connected
            </h4>

            <p>
              Get stories of impact and updates from our community.
            </p>

            <div className="email-box">

              <input
                type="email"
                placeholder="Your email address"
              />

              <button>
                →
              </button>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 HopeBridge Foundation. All rights reserved.
          </span>

          <span>
            Made with ♥ for a better tomorrow.
          </span>

        </div>

      </footer>


      {/* ================================================= */}
      {/* LOGIN / SIGNUP / PROFILE MODAL */}
      {/* ================================================= */}

      {authPage && (

        <div className="auth-overlay">

          <div className="auth-modal">

            {/* CLOSE */}

            <button
              className="auth-close"
              onClick={() => setAuthPage(null)}
            >
              ×
            </button>


            {/* ================= LOGIN ================= */}

            {authPage === "login" && (

              <div className="auth-content">

                <div className="auth-logo">
                  ✦ HopeBridge
                </div>

                <h2>
                  Welcome Back 👋
                </h2>

                <p className="auth-subtitle">
                  Login to access your HopeBridge account.
                </p>


                <form onSubmit={handleLogin}>

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleInput}
                  />


                  <label>
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleInput}
                  />


                  <button
                    type="submit"
                    className="auth-submit"
                  >
                    Login
                  </button>

                </form>


                <p className="switch-auth">

                  Don't have an account?

                  <button
                    type="button"
                    onClick={() => setAuthPage("signup")}
                  >
                    Create Account
                  </button>

                </p>

              </div>

            )}


            {/* ================= SIGNUP ================= */}

            {authPage === "signup" && (

              <div className="auth-content">

                <div className="auth-logo">
                  ✦ HopeBridge
                </div>

                <h2>
                  Create Account ✨
                </h2>

                <p className="auth-subtitle">
                  Join our community and make an impact.
                </p>


                <form onSubmit={handleSignup}>

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleInput}
                  />


                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleInput}
                  />


                  <label>
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    value={form.password}
                    onChange={handleInput}
                  />


                  <label>
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={form.confirmPassword}
                    onChange={handleInput}
                  />


                  <button
                    type="submit"
                    className="auth-submit"
                  >
                    Create Account
                  </button>

                </form>


                <p className="switch-auth">

                  Already have an account?

                  <button
                    type="button"
                    onClick={() => setAuthPage("login")}
                  >
                    Login
                  </button>

                </p>

              </div>

            )}


            {/* ================= PROFILE ================= */}

            {authPage === "profile" && user && (

              <div className="profile-content">

                <div className="profile-avatar">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <h2>
                  My Account
                </h2>

                <p className="auth-subtitle">
                  Manage your HopeBridge account.
                </p>


                <div className="profile-form">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    disabled={!isEditing}
                    onChange={handleProfileChange}
                  />


                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    disabled={!isEditing}
                    onChange={handleProfileChange}
                  />

                </div>


                {/* EDIT / SAVE */}

                {!isEditing ? (

                  <button
                    className="auth-submit"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Information
                  </button>

                ) : (

                  <button
                    className="auth-submit"
                    onClick={saveProfile}
                  >
                    Save Changes
                  </button>

                )}


                {/* LOGOUT */}

                <button
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>


                {/* DELETE */}

                <button
                  className="delete-account-btn"
                  onClick={deleteAccount}
                >
                  Delete Account
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default App;
