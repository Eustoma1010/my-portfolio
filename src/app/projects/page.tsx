"use client";

import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Multi-functional System for the Disabled",
      period: "2024",
      role: "Provincial Youth Innovation Contest (1st Prize)",
      description: "An assistive communication and intruder warning system designed for people with disabilities. It leverages computer vision and deep learning to analyze the environment in real-time, providing both safety and interaction capabilities.",
      tech: ["Python", "OpenCV", "PyTorch", "TensorFlow", "PyQt6"],
      github: "https://github.com/Eustoma1010/ai-disabled-system"
    },
    {
      title: "Face Recognition Attendance System",
      period: "2023",
      role: "National Youth Innovation Contest (3rd Prize)",
      description: "An automated student attendance platform using facial recognition. It processes real-time camera feeds and manages databases to log student entries securely and efficiently.",
      tech: ["Python", "OpenCV", "PyTorch", "TensorFlow", "SQL"],
      github: "https://github.com/Eustoma1010/face-attendance"
    },
    {
      title: "RISC-V CPU Architecture Implementation",
      period: "2024",
      role: "Academic Hardware Project",
      description: "Designed a 5-stage pipelined RISC-V processor architecture from scratch. Handled complex data and control hazards, and verified the core functionalities through extensive simulation.",
      tech: ["Verilog", "SystemVerilog", "Vivado", "LiteX"],
      github: "https://github.com/Eustoma1010/riscv-cpu"
    },
    {
      title: "E-Commerce Web App with AI RAG Assistant",
      period: "2024",
      role: "Personal Fullstack Project",
      description: "An e-commerce platform featuring an integrated Retrieval-Augmented Generation (RAG) assistant. The AI helps users query product catalogs naturally, improving search accuracy and user experience.",
      tech: ["Generative AI", "RAG", "Django", "SQL", "HTML/CSS"],
      github: "https://github.com/Eustoma1010/ecommerce-rag"
    }
  ];

  return (
    <main className="container pt-4">
      <section className="section">
        <h2 className="section-title">Projects Showcase</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {projects.map((proj, idx) => (
            <div key={idx} style={{ borderBottom: idx !== projects.length - 1 ? '1px solid var(--border)' : 'none', paddingBottom: idx !== projects.length - 1 ? '48px' : '0' }}>
              <div className="item-header" style={{ marginBottom: '16px' }}>
                <div>
                  <div className="item-title" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{proj.title}</div>
                  <div className="item-subtitle" style={{ fontSize: '1rem', color: 'var(--foreground)', fontWeight: 500 }}>{proj.role}</div>
                </div>
                <div className="item-date" style={{ fontSize: '1rem' }}>{proj.period}</div>
              </div>
              
              <p style={{ color: 'var(--muted)', fontSize: '1.125rem', marginBottom: '24px', lineHeight: 1.6 }}>
                {proj.description}
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                {proj.tech.map((t, i) => (
                  <span key={i} style={{ padding: '6px 12px', background: '#f5f5f5', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 500, color: '#333' }}>
                    {t}
                  </span>
                ))}
              </div>

              <a href={proj.github} target="_blank" rel="noreferrer" className="hover-spectrum" style={{ fontWeight: 600 }}>
                View on GitHub ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: '120px', color: 'var(--muted)', fontSize: '0.875rem' }}>
        <p>Phan Phuoc Quoc Thien &nbsp;&middot;&nbsp; Projects</p>
      </footer>
    </main>
  );
}
