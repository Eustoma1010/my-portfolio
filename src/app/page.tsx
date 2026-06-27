export default function Home() {
  return (
    <main className="container pt-4">
      <section className="hero">
        <div className="hero-profile about-hero">
          <div className="avatar-wrapper">
            <img src="/HocBong/anh_chan_dung.jpg" alt="Phan Phuoc Quoc Thien" className="hero-avatar" />
          </div>
          <div className="about-text">
            <h1>Hello, I'm Thien.</h1>
            <p className="lead-text">
              I'm an Electronics & Communications Engineering student at HCMUTE, specializing in IC Design. 
              I blend hardware knowledge with a deep passion for software engineering, competitive programming, and algorithm optimization.
            </p>
            <p>
              My journey started with competitive programming in high school, leading to multiple provincial and national awards in software creation and informatics. I thrive on building efficient, scalable solutions and exploring the bleeding edge of technology.
            </p>
            <p>
              When I'm not studying IC Design or writing code, I enjoy playing badminton, running, reading books, and exploring minimalist design philosophies.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Details & Contact</h2>
        
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Personal Info</h3>
            <p><strong>Date of Birth:</strong> 11/08/2006</p>
            <p><strong>Phone:</strong> 0392006710</p>
          </div>
          
          <div className="contact-card">
            <h3>Academics</h3>
            <p><strong>Student ID:</strong> 24161408</p>
            <p><strong>Major:</strong> IC Design</p>
          </div>
          
          <div className="contact-card">
            <h3>Links</h3>
            <div className="contact-links">
              <a href="mailto:thienphan370@gmail.com" className="hover-spectrum">Email (Personal) ↗</a>
              <a href="mailto:24161408@student.hcmute.edu.vn" className="hover-spectrum">Email (Student) ↗</a>
              <a href="https://github.com/Eustoma1010" target="_blank" rel="noreferrer" className="hover-spectrum">GitHub Profile ↗</a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="hover-spectrum">LinkedIn Connect ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: '120px', color: 'var(--muted)', fontSize: '0.875rem' }}>
        <p>Phan Phuoc Quoc Thien &nbsp;&middot;&nbsp; 2024</p>
      </footer>
    </main>
  );
}
