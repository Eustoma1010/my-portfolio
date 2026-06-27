"use client";

import { useState, useEffect } from "react";

export default function EducationAndAwards() {
  const [modalImages, setModalImages] = useState<{ src: string; alt: string }[] | null>(null);

  useEffect(() => {
    if (modalImages) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalImages]);

  const educationJourney = [
    {
      school: "Ho Chi Minh City University of Technology and Education (HCMUTE)",
      period: "2024 — Present",
      role: "Student - IC Design Major",
      awards: [
        {
          title: "Giải Khuyến khích Olympic Tin học Sinh viên",
          subtitle: "Year 2024",
          images: [
            { src: "/HocBong/chung_nhan_giai_khuyen_khich_olp_sinh_vien_2024.jpg", alt: "Chứng nhận Giải Khuyến khích OLP Sinh viên" },
            { src: "/HocBong/nhan_giai_khuyen_khich_olp_sinh_vien_2024.jpg", alt: "Kỷ niệm chương" }
          ]
        }
      ]
    },
    {
      school: "Tanh Linh High School",
      period: "2021 — 2024",
      role: "High School Student",
      awards: [
        {
          title: "Giải Nhì HSG Tin học cấp tỉnh lớp 12",
          subtitle: "Academic Year 2023 - 2024",
          images: [{ src: "/HocBong/giai_nhi_hsg_tin_hoc_tinh_2023_2024.jpg", alt: "Giải Nhì HSG Tin học cấp tỉnh" }]
        },
        {
          title: "Giải Nhất Sáng tạo TTNNĐ tỉnh Bình Thuận",
          subtitle: "Academic Year 2023 - 2024",
          articleLink: "https://danviet.vn/soi-noi-cuoc-thi-sang-tao-danh-cho-thanh-thieu-nien-nhi-dong-lan-thu-17-o-binh-thuan-20240831094144027-d1181535.html",
          images: [{ src: "/HocBong/giai_nhat_sang_tao_ttn_nhi_dong_binh_thuan_2024.jpg", alt: "Giải Nhất Sáng tạo TTNNĐ" }]
        },
        {
          title: "Bằng khen của Chủ tịch UBND Tỉnh Bình Thuận",
          subtitle: "Year 2024",
          images: [{ src: "/HocBong/bang_khen_chu_tich_ubnd_tinh_binh_thuan_2024.jpg", alt: "Bằng khen Chủ tịch UBND Tỉnh" }]
        },
        {
          title: "Thanh niên tiên tiến làm theo lời Bác",
          subtitle: "Academic Year 2023 - 2024",
          images: [{ src: "/HocBong/thanh_nien_tien_tien_lam_theo_loi_bac_2024.jpg", alt: "Thanh niên tiên tiến" }]
        },
        {
          title: "Giải Tiềm Năng Khởi nghiệp ĐMST",
          subtitle: "Binh Thuan Province 2nd Edition - May 2024",
          images: [{ src: "/HocBong/giai_tiem_nang_khoi_nghiep_doi_moi_sang_tao_binh_thuan_2024.jpg", alt: "Giải Tiềm năng Khởi nghiệp ĐMST" }]
        },
        {
          title: "Giải Khuyến khích Hội thi Tin học trẻ tỉnh",
          subtitle: "Creative Software - May 2024",
          images: [
            { src: "/HocBong/khuyen_khich_tin_hoc_tre_tinh_binh_thuan_2024.jpg", alt: "Giấy khen Giải Khuyến khích Tin học trẻ" },
            { src: "/HocBong/khuyen_khich_tin_hoc_tre_tinh_binh_thuan_2024_3.jpg", alt: "Bản đóng khung" }
          ]
        },
        {
          title: "Giải Khuyến Khích Sáng tạo KHKT",
          subtitle: "For High School Students (UPT)",
          images: [{ src: "/HocBong/khuyen_khich_khoa_hoc_ky_thuat_upt_2024.jpg", alt: "Giải Khuyến khích Sáng tạo KHKT UPT" }]
        },
        {
          title: "Huy chương Đồng Olympic Tin học miền Trung - Tây Nguyên",
          subtitle: "March 2023",
          images: [
            { src: "/HocBong/chung_nhan_huy_chuong_dong_olp_tin_hoc_mt_tn_2023.jpg", alt: "Chứng nhận HCĐ OLP Tin học MT-TN" },
            { src: "/HocBong/huy_chuong_dong_olp_tin_hoc_mt_tn_2023.jpg", alt: "Huy chương Đồng" }
          ]
        },
        {
          title: "Giải Ba Cuộc thi Sáng tạo TTNNĐ toàn quốc",
          subtitle: "19th Edition",
          articleLink: "https://baolamdong.vn/binh-thuan-dat-2-giai-cuoc-thi-sang-tao-thanh-thieu-nien-nhi-dong-toan-quoc-lan-thu-19-369013.html",
          images: [
            { src: "/HocBong/bang_khen_giai_ba_sang_tao_ttn_toan_quoc_2023.jpg", alt: "Bằng khen VIFOTEC" },
            { src: "/HocBong/huy_chuong_dong_vifotec_2023_mat_truoc.jpg", alt: "Huy chương đồng (Mặt trước)" },
            { src: "/HocBong/huy_chuong_dong_vifotec_2023_mat_sau.jpg", alt: "Huy chương đồng (Mặt sau)" }
          ]
        },
        {
          title: "Giải Ba HSG Tin học cấp tỉnh lớp 12",
          subtitle: "Academic Year 2022 - 2023",
          images: [{ src: "/HocBong/giai_ba_hsg_tin_hoc_tinh_2022_2023.jpg", alt: "Giải Ba HSG Tin học cấp tỉnh" }]
        },
        {
          title: "Giải Nhì Hội thi Tin học trẻ tỉnh Bình Thuận",
          subtitle: "Year 2023",
          images: [{ src: "/HocBong/tuyen_duong_giai_nhi_tin_hoc_tre_tinh_2023.jpg", alt: "Giải Nhì Tin học trẻ tỉnh" }]
        },
        {
          title: "Giấy chứng nhận Nghề phổ thông",
          subtitle: "Year 2023",
          images: [{ src: "/HocBong/bia_ngoai_chung_nhan_nghe_pho_thong_2023.jpg", alt: "Giấy chứng nhận Nghề phổ thông" }]
        }
      ]
    },
    {
      school: "Gia An Secondary School",
      period: "2017 — 2021",
      role: "Secondary School Student",
      awards: [
        {
          title: "Bằng tốt nghiệp THCS",
          subtitle: "Year 2021",
          images: [
            { src: "/HocBong/bang_tot_nghiep_thcs_2021.jpg", alt: "Secondary School Graduation Diploma (Inside)" },
            { src: "/HocBong/bia_ngoai_bang_tot_nghiep_thcs_2021.jpg", alt: "Secondary School Graduation Diploma (Cover)" }
          ]
        }
      ]
    }
  ];

  return (
    <main className="container pt-4">
      {/* MODAL */}
      {modalImages && (
        <div className="modal-overlay" onClick={() => setModalImages(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalImages(null)}>×</button>
            <div className="modal-images-container">
              {modalImages.map((img, idx) => (
                <div key={idx} className="modal-image-wrapper">
                  <img src={img.src} alt={img.alt} className="modal-image" loading="lazy" />
                  <p className="modal-caption">{img.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className="section">
        <h2 className="section-title">Education & Awards</h2>
        
        {educationJourney.map((journey, index) => (
          <div key={index} style={{ marginBottom: index !== educationJourney.length - 1 ? '80px' : '0' }}>
            
            <div className="item" style={{ marginBottom: '32px' }}>
              <div className="item-header">
                <div>
                  <div className="item-title" style={{ fontSize: '1.5rem' }}>{journey.school}</div>
                  <div className="item-subtitle" style={{ fontSize: '1.125rem' }}>{journey.role}</div>
                </div>
                <div className="item-date" style={{ fontSize: '1.125rem', fontWeight: 500 }}>{journey.period}</div>
              </div>
            </div>

            {journey.awards.length > 0 && (
              <div className="awards-grid">
                {journey.awards.map((award, aIdx) => (
                  <div key={aIdx} className="award-card" onClick={() => setModalImages(award.images)}>
                    <div className="award-title hover-spectrum">{award.title}</div>
                    <div className="item-subtitle">{award.subtitle}</div>
                    {award.articleLink && (
                      <a 
                        href={award.articleLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="article-link hover-spectrum"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Read News Article ↗
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {index !== educationJourney.length - 1 && (
              <div style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, var(--border), transparent)',
                marginTop: '80px',
                opacity: 0.7
              }} />
            )}
          </div>
        ))}
      </section>

      <footer style={{ marginTop: '120px', color: 'var(--muted)', fontSize: '0.875rem' }}>
        <p>Phan Phuoc Quoc Thien &nbsp;&middot;&nbsp; Education & Awards Journey</p>
      </footer>
    </main>
  );
}
