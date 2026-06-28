"use client";

import React from "react";

export default function CV() {
  return (
    <div className="container cv-container" style={{ flexDirection: 'column' }}>
      <div className="hide-on-print" style={{ width: '100%', maxWidth: '850px', margin: '0 auto 24px auto', display: 'flex', justifyContent: 'flex-end' }}>
        <button 
          onClick={() => window.print()} 
          className="hover-spectrum" 
          style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)', padding: '8px 16px', fontFamily: 'inherit', fontWeight: 600, cursor: 'pointer', borderRadius: '4px', fontSize: '0.875rem' }}
        >
          Export as PDF (Print)
        </button>
      </div>
      <div className="cv-paper">
        {/* LEFT COLUMN */}
        <div className="cv-left">
          
          <div className="cv-avatar-container">
            <img src="/HocBong/anh_chan_dung.jpg" alt="Phan Phuoc Quoc Thien" className="cv-avatar" />
          </div>

          <div className="cv-header-text">
            <div className="cv-name">Phan Phuoc Quoc Thien</div>
            <div className="cv-job-title">Sophomore Student</div>
          </div>

          <div>
            <div className="cv-section-title">Personal Info</div>
            <div className="cv-contact-item">
              <span className="cv-contact-label">Phone</span>
              <span className="cv-contact-value">0392 006 710</span>
            </div>
            <div className="cv-contact-item">
              <span className="cv-contact-label">Date of Birth</span>
              <span className="cv-contact-value">11/08/2006</span>
            </div>
            <div className="cv-contact-item">
              <span className="cv-contact-label">Email</span>
              <span className="cv-contact-value">thienphan370@gmail.com</span>
            </div>
            <div className="cv-contact-item">
              <span className="cv-contact-label">Address</span>
              <span className="cv-contact-value">01 Vo Van Ngan St., Thu Duc, HCMC, Vietnam</span>
            </div>
            <div className="cv-contact-item">
              <span className="cv-contact-label">GitHub</span>
              <span className="cv-contact-value">github.com/Eustoma1010</span>
            </div>
          </div>

          <div>
            <div className="cv-section-title">Career Objective</div>
            <div className="cv-objective">
              Passionate IC Design sophomore with a strong focus on Frontend Design (RTL) and Verification, and a keen ambition to master Physical Design for a holistic industry perspective. Short-term goals include securing a technical internship, publishing Q1/Q2 research papers, graduating with honors, and achieving IELTS proficiency. Long-term, I aim to excel as a leading engineer at top-tier semiconductor companies, secure academic scholarships for advanced research, and ultimately pursue technology entrepreneurship.
            </div>
          </div>

          <div>
            <div className="cv-section-title">Skills</div>
            <div className="cv-skill-group">
              <div className="cv-skill-title">Languages & Hardware Description</div>
              <ul className="cv-skill-list">
                <li><strong>Proficient:</strong> C/C++, Python, Verilog, SystemVerilog</li>
                <li><strong>Basic:</strong> HTML/CSS, JavaScript, SQL, PostgreSQL</li>
              </ul>
            </div>
            <div className="cv-skill-group">
              <div className="cv-skill-title">Tools & Frameworks</div>
              <ul className="cv-skill-list">
                <li><strong>EDA/Hardware:</strong> Vivado, Proteus, LiteX</li>
                <li><strong>Libraries/UI:</strong> OpenCV, PyTorch, TensorFlow, PyQt6, Django, TTS</li>
                <li><strong>Env/Workflow:</strong> Linux, Git, Neovim, MATLAB, Figma</li>
                <li><strong>AI Assistants:</strong> Antigravity, Copilot CLI, Claude CLI</li>
              </ul>
            </div>
            <div className="cv-skill-group">
              <div className="cv-skill-title">Soft Skills & Research</div>
              <ul className="cv-skill-list">
                <li>Problem-solving, Teamwork, Time Management</li>
                <li>Research & Academic Writing</li>
              </ul>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="cv-right">
          
          <div>
            <div className="cv-section-title">Work Experience</div>
            
            <div className="cv-experience-item">
              <div className="cv-exp-header">
                <div className="cv-exp-company">Private Academic Tutor</div>
                <div className="cv-exp-date">2024 — Present</div>
              </div>
              <div className="cv-exp-title">Freelance Educator</div>
              <ul className="cv-exp-desc">
                <li>Mentored and trained high school students for the Provincial Informatics Olympiad at former high school.</li>
                <li>Tutored middle school students in Mathematics and Informatics, ensuring solid academic foundations.</li>
              </ul>
            </div>

            <div className="cv-experience-item">
              <div className="cv-exp-header">
                <div className="cv-exp-company">Service & Gig Economy</div>
                <div className="cv-exp-date">2024 — 2025</div>
              </div>
              <div className="cv-exp-title">Part-time Staff & Driver</div>
              <ul className="cv-exp-desc">
                <li>Worked as a part-time dining staff at Jollibee and a ride-hailing driver for BE, building strong time-management, interpersonal skills, and independence to support university studies.</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="cv-section-title">Projects</div>

            <div className="cv-experience-item">
              <div className="cv-exp-header">
                <div className="cv-exp-company">AI-Powered Multi-functional System for the Disabled</div>
                <div className="cv-exp-date">2024</div>
              </div>
              <div className="cv-exp-title">Provincial Youth Innovation Contest (1st Prize)</div>
              <ul className="cv-exp-desc">
                <li>Developed an assistive communication and intruder warning system tailored for people with disabilities.</li>
                <li>Integrated computer vision and deep learning models for real-time environment analysis and interaction.</li>
                <li><strong>Technologies:</strong> Python, OpenCV, PyTorch, TensorFlow, PyQt6.</li>
              </ul>
            </div>

            <div className="cv-experience-item">
              <div className="cv-exp-header">
                <div className="cv-exp-company">Face Recognition Attendance System</div>
                <div className="cv-exp-date">2023</div>
              </div>
              <div className="cv-exp-title">National Youth Innovation Contest (3rd Prize)</div>
              <ul className="cv-exp-desc">
                <li>Built an automated student attendance system utilizing robust facial recognition technology.</li>
                <li>Handled real-time camera feeds and database management for accurate attendance logging.</li>
                <li><strong>Technologies:</strong> Python, OpenCV, PyTorch, TensorFlow, SQL.</li>
              </ul>
            </div>

            <div className="cv-experience-item">
              <div className="cv-exp-header">
                <div className="cv-exp-company">E-Commerce Web App with AI RAG Assistant</div>
                <div className="cv-exp-date">Personal Project</div>
              </div>
              <div className="cv-exp-title">Fullstack Developer</div>
              <ul className="cv-exp-desc">
                <li>Developed an e-commerce platform integrated with a Retrieval-Augmented Generation (RAG) AI assistant to help users find and query products effectively.</li>
                <li><strong>Technologies:</strong> Generative AI, RAG, Web Stack, SQL.</li>
              </ul>
            </div>

            <div className="cv-experience-item">
              <div className="cv-exp-header">
                <div className="cv-exp-company">RISC-V CPU Architecture Implementation</div>
                <div className="cv-exp-date">Academic / Personal Project</div>
              </div>
              <div className="cv-exp-title">Hardware Developer</div>
              <ul className="cv-exp-desc">
                <li>Designed and implemented a 5-stage pipelined RISC-V processor architecture from scratch.</li>
                <li>Simulated and verified the core functionalities resolving data and control hazards.</li>
                <li><strong>Technologies:</strong> Verilog, SystemVerilog, Vivado, LiteX.</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="cv-section-title">Education</div>
            
            <div className="cv-experience-item">
              <div className="cv-exp-header">
                <div className="cv-exp-company">Ho Chi Minh City University of Technology and Education</div>
                <div className="cv-exp-date">2024 — 2028</div>
              </div>
              <div className="cv-exp-title">Engineer's Degree in Electronics & Communications</div>
              <ul className="cv-exp-desc">
                <li><strong>Major:</strong> IC Design</li>
                <li><strong>Current GPA:</strong> 3.09/4.0 (7.64/10)</li>
              </ul>
            </div>

            <div className="cv-experience-item">
              <div className="cv-exp-header">
                <div className="cv-exp-company">Tanh Linh High School</div>
                <div className="cv-exp-date">2021 — 2024</div>
              </div>
              <div className="cv-exp-title">High School Diploma</div>
              <ul className="cv-exp-desc">
                <li>Excellent Student (HSG Tin học cấp tỉnh)</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="cv-section-title">Extracurriculars & Honors</div>
            
            <div className="cv-experience-item" style={{ marginBottom: '16px' }}>
              <div className="cv-exp-header">
                <div className="cv-exp-company">HCMUTE Scientific Research Club</div>
                <div className="cv-exp-date">2024 — Present</div>
              </div>
              <div className="cv-exp-title">Event Support Member</div>
              <ul className="cv-exp-desc">
                <li>Assisted in organizing and running academic and scientific events for the university.</li>
              </ul>
            </div>

            <div className="cv-experience-item">
              <ul className="cv-exp-desc" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ marginBottom: '8px' }}><strong>Community:</strong> 3-time blood donor.</li>
                <li style={{ marginBottom: '8px' }}><strong>2024:</strong> First Prize - Binh Thuan Province Youth Innovation Contest</li>
                <li style={{ marginBottom: '8px' }}><strong>2024:</strong> Second Prize - Provincial Informatics Excellence (Grade 12)</li>
                <li style={{ marginBottom: '8px' }}><strong>2024:</strong> Consolation Prize - National Student Informatics Olympiad</li>
                <li style={{ marginBottom: '8px' }}><strong>2023:</strong> Bronze Medal - Central & Central Highlands Informatics Olympiad</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
