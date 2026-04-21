import { useEffect, useState } from 'react';
import './App.css';

// img 선언
import bgMain from './assets/images/bg_main.jpg';

// about icon
import icon1 from './assets/images/ico_mbti.png';
import icon2 from './assets/images/ico_run.png';
import icon3 from './assets/images/ico_book.png';

// contact icon
import emailIcon from './assets/images/ico_email.png';
import phoneIcon from './assets/images/ico_phone.png';
import addressIcon from './assets/images/ico_location.png';

// skill icon
import htmlIcon from './assets/images/ico_html.png';
import psIcon from './assets/images/ico_ps.png';
import aiIcon from './assets/images/ico_ai.png';
import figmaIcon from './assets/images/ico_figma.png';

// footer icon
import instaIcon from './assets/images/ico_instagram.png';
import blogIcon from './assets/images/ico_blog.png';

// portfolio thumb img
import page1 from './assets/images/page_01.jpg';
import page2 from './assets/images/page_02.jpg';
import page3 from './assets/images/page_03.jpg';
import page4 from './assets/images/page_04.jpg';
import page5 from './assets/images/page_05.jpg';
import page6 from './assets/images/page_06.jpg';
import page7 from './assets/images/page_07.jpg';
import page8 from './assets/images/page_08.jpg';
import page9 from './assets/images/page_09.jpg';
import page10 from './assets/images/page_10.jpg';
import page11 from './assets/images/page_11.jpg';
import page12 from './assets/images/page_12.jpg';
import bn1 from './assets/images/bn_01.gif';
import bn2 from './assets/images/bn_02.gif';
import bn3 from './assets/images/bn_03.gif';
import bn4 from './assets/images/bn_04.gif';
import bn5 from './assets/images/bn_05.gif';
import bn6 from './assets/images/bn_06.gif';
import ai1 from './assets/images/ai_01.gif';
import ai2 from './assets/images/ai_02.gif';
import ai3 from './assets/images/ai_03.jpg';
import ai4 from './assets/images/ai_04.jpg';
import ai5 from './assets/images/ai_05.jpg';
import ai6 from './assets/images/ai_06.gif';
import other1 from './assets/images/other_01.gif';
import other2 from './assets/images/other_02.gif';
import other3 from './assets/images/other_03.jpg';
import other4 from './assets/images/other_04.gif';

// portfolio detail img
import pageDetail1 from './assets/images/page_ct_01.jpg';
import pageDetail2 from './assets/images/page_ct_02.jpg';
import pageDetail3 from './assets/images/page_ct_03.jpg';
import pageDetail4 from './assets/images/page_ct_04.jpg';
import pageDetail5 from './assets/images/page_ct_05.jpg';
import pageDetail6 from './assets/images/page_ct_06.jpg';
import pageDetail7 from './assets/images/page_ct_07.jpg';
import pageDetail8 from './assets/images/page_ct_08.jpg';
import pageDetail9 from './assets/images/page_ct_09.jpg';
import pageDetail10 from './assets/images/page_ct_10.jpg';
import pageDetail11 from './assets/images/page_ct_11.jpg';
import pageDetail12 from './assets/images/page_ct_12.jpg';

import pageDetail13 from './assets/images/page_ct_01_2.jpg'
import pageDetail14 from './assets/images/page_ct_02_2.jpg'
import pageDetail15 from './assets/images/page_ct_03_2.jpg'
import pageDetail16 from './assets/images/page_ct_04_2.gif'
import pageDetail17 from './assets/images/page_ct_05_2.jpg'
import pageDetail18 from './assets/images/page_ct_06_2.jpg'
import pageDetail19 from './assets/images/page_ct_07_2.jpg'
import pageDetail20 from './assets/images/page_ct_08_2.jpg'
import pageDetail21 from './assets/images/page_ct_09_2.jpg'
import pageDetail22 from './assets/images/page_ct_10_2.jpg'
import pageDetail23 from './assets/images/page_ct_11_2.jpg'
import pageDetail24 from './assets/images/page_ct_12_2.jpg'

// banner detail img
import bnDetail1 from './assets/images/bn_ct_01.jpg';
import bnDetail2 from './assets/images/bn_ct_01_2.jpg';
import bnDetail3 from './assets/images/bn_ct_01_3.jpg';
import bnDetail4 from './assets/images/bn_ct_01_4.jpg';
import bnDetail5 from './assets/images/bn_ct_01_5.jpg';

import bnDetail6 from './assets/images/bn_ct_02.jpg';
import bnDetail7 from './assets/images/bn_ct_02_2.jpg';
import bnDetail8 from './assets/images/bn_ct_02_3.jpg';
import bnDetail9 from './assets/images/bn_ct_02_4.jpg';
import bnDetail10 from './assets/images/bn_ct_02_5.jpg';

import bnDetail11 from './assets/images/bn_ct_03.jpg';
import bnDetail12 from './assets/images/bn_ct_03_2.jpg';
import bnDetail13 from './assets/images/bn_ct_03_3.jpg';
import bnDetail14 from './assets/images/bn_ct_03_4.jpg';
import bnDetail15 from './assets/images/bn_ct_03_5.jpg';

import bnDetail16 from './assets/images/bn_ct_04.jpg';
import bnDetail17 from './assets/images/bn_ct_04_2.jpg';
import bnDetail18 from './assets/images/bn_ct_04_3.jpg';
import bnDetail19 from './assets/images/bn_ct_04_4.jpg';
import bnDetail20 from './assets/images/bn_ct_04_5.jpg';

import bnDetail21 from './assets/images/bn_ct_05.gif';
import bnDetail22 from './assets/images/bn_ct_05_2.gif';
import bnDetail23 from './assets/images/bn_ct_05_3.jpg';
import bnDetail24 from './assets/images/bn_ct_05_4.gif';
import bnDetail25 from './assets/images/bn_ct_05_5.jpg';

import bnDetail26 from './assets/images/bn_ct_06.jpg';
import bnDetail27 from './assets/images/bn_ct_06_2.jpg';
import bnDetail28 from './assets/images/bn_ct_06_3.jpg';
import bnDetail29 from './assets/images/bn_ct_06_4.jpg';
import bnDetail30 from './assets/images/bn_ct_06_5.jpg';

// ai detail img
import aiDetail1 from './assets/images/ai_ct_01.gif';
import aiDetail2 from './assets/images/ai_ct_02.gif';
import aiDetail3 from './assets/images/ai_ct_03.jpg';
import aiDetail4 from './assets/images/ai_ct_04.jpg';
import aiDetail5 from './assets/images/ai_ct_05.jpg';
import aiDetail6 from './assets/images/ai_ct_06.gif';

// other detail img
import otherDetail1 from './assets/images/other_ct_01.jpg';
import otherDetail2 from './assets/images/other_ct_01_2.jpg';
import otherDetail3 from './assets/images/other_ct_02.jpg';
import otherDetail4 from './assets/images/other_ct_03.jpg';
import otherDetail5 from './assets/images/other_ct_04.jpg';
import otherDetail6 from './assets/images/other_ct_04_2.jpg';


function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('Page');
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };   
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "-80px 0px 0px 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

const handleMenuClick = (section) => {
  setActive(section);
};

// 모달 스크롤 제어는 별도 useEffect
useEffect(() => {
  if (selectedProject) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}, [selectedProject]);


  const projects = [

    // page 시작
    { 
      id: 1,
      type: 'Page',
      image: page1,
      detailImages: [pageDetail1, pageDetail13],
      title: '메이블루 15주년 프로모션',
      desc: '메이블루의 15주년을 기념하는 프로모션 디자인'
    },

    { 
      id: 2, 
      type: 'Page', 
      image: page2,
      detailImages: [pageDetail2, pageDetail14],
      title: '새해 선물 룰렛 프로모션',
      desc: '새해를 맞아 고객 참여를 유도하는 룰렛 이벤트 프로모션'
    },

    { id: 3,
      type: 'Page',
      image: page3,
      detailImages: [pageDetail3, pageDetail15],
      title: '2025 감사제 아이콘 찾기 프로모션',
      desc: '탐색의 재미를 통해 참여를 유도하는 프로모션'
    },

    { id: 4,
      type: 'Page',
      image: page4,
      detailImages: [pageDetail4, pageDetail16],
      title: '가을 시즌 트렌드 큐레이션 3',
      desc: '가을 시즌 트렌드를 반영한 3가지 테마 컬렉션 구성'
    },

    { id: 5,
      type: 'Page',
      image: page5,
      detailImages: [pageDetail5, pageDetail17],
      title: '블랙 프라이데이 룰렛 프로모션',
      desc: '고객 참여를 유도하는 룰렛 프로모션'
    },

    { id: 6,
      type: 'Page',
      image: page6,
      detailImages: [pageDetail6, pageDetail18],
      title: '크리스마스 스페셜 기프트 증정 프로모션',
      desc: '고객 혜택을 제공하는 기프트 증정 프로모션'
    },

    { id: 7,
      type: 'Page',
      image: page7,
      detailImages: [pageDetail7, pageDetail19],
      title: '신규 가입 혜택 프로모션',
      desc: '신규 가입 유도를 위한 혜택 중심 프로모션'
    },

    { id: 8,
      type: 'Page',
      image: page8,
      detailImages: [pageDetail8, pageDetail20],
      title: '네이버 페이 결제 할인 프로모션',
      desc: '결제 혜택을 기반으로 구매 전환을 유도하는 프로모션'
    },

    { id: 9,
      type: 'Page',
      image: page9,
      detailImages: [pageDetail9, pageDetail21],
      title: '카카오쇼핑 라이브 혜택 페이지',
      desc: '카카오쇼핑 라이브 방송 혜택 안내 페이지'
    },

    { id: 10,
      type: 'Page',
      image: page10,
      detailImages: [pageDetail10, pageDetail22],
      title: 'Barista & Co 상세페이지',
      desc: '커피 전문 용품 브랜드의 상세페이지'
    },

    { id: 11,
      type: 'Page',
      image: page11,
      detailImages: [pageDetail11, pageDetail23],
      title: 'Cartwright & Butler 상세페이지',
      desc: '영국의 티푸드 브랜드 상세페이지'
    },

    { id: 12,
      type: 'Page',
      image: page12,
      detailImages: [pageDetail12, pageDetail24],
      title: 'Charles Farris 상세페이지',
      desc: '영국의 캔들 브랜드 상세페이지'
    },

    // banner 시작
    { 
      id: 13, 
      type: 'Banner', 
      image: bn1,
      detailImages: [bnDetail1, bnDetail2, bnDetail3, bnDetail4, bnDetail5],
      title: '시즌별 프로모션 배너',
      desc: '다양한 시즌 이슈에 맞춰 혜택을 전달한 배너'
    },

    { id: 14,
      type: 'Banner',
      image: bn2,
      detailImages: [bnDetail6, bnDetail7, bnDetail8, bnDetail9 ,bnDetail10],
      title: '할인 혜택 중심의 프로모션 배너',
      desc: '시즌별 프로모션에 맞춰 할인 혜택을 강조한 배너'
    },

    { id: 15,
      type: 'Banner',
      image: bn3,
      detailImages: [bnDetail11, bnDetail12, bnDetail13, bnDetail14, bnDetail15],
      title: '시즌별 프로모션 배너',
      desc: '시즌의 흐름에 따라 혜택을 자연스럽게 전달한 배너'
    },

    { id: 16,
      type: 'Banner',
      image: bn4,
      detailImages: [bnDetail16, bnDetail17, bnDetail18, bnDetail19, bnDetail20],
      title: '시즌별 프로모션 배너',
      desc: '캠페인 목적에 따라 메시지를 차별화하여 구성한 배너'

    },

    { id: 17,
      type: 'Banner',
      image: bn5,
      detailImages: [bnDetail21, bnDetail22, bnDetail23, bnDetail24, bnDetail25],
      title: '시즌별 프로모션 배너',
      desc: '시즌별 비주얼 톤을 기반으로 구성한 배너'
    },

    { id: 18,
      type: 'Banner',
      image: bn6,
      detailImages: [bnDetail26, bnDetail27, bnDetail28, bnDetail29, bnDetail30],
      title: 'PC 메인 프로모션 배너',
      desc: 'PC 메인 화면을 고려하여 구성한 프로모션 배너'
    },

    // AI 시작
    { id: 19,
      type: 'AI',
      image: ai1,
      detailImages: [aiDetail1, ai1],
      title: '2025 감사제 프로모션',
      desc: 'AI를 활용하여 작업한 메인 배너'
    },

    { id: 20,
      type: 'AI',
      image: ai2,
      detailImages: [aiDetail2, ai2],
      title: '새해 선물 증정 프로모션',
      desc: 'AI를 활용하여 작업한 메인 배너'
    },

    { id: 21,
      type: 'AI',
      image: ai3,
      detailImages: [aiDetail3, ai3],
      title: '메이블루 시즌 오프 배너',
      desc: 'AI를 활용하여 작업한 앱푸시 배너'
    },

    { id: 22,
      type: 'AI',
      image: ai4,
      detailImages: [aiDetail4, ai4],
      title: '상반기 감사제 프로모션',
      desc: 'AI를 활용하여 작업한 메인 배너'
    },

    { id: 23,
      type: 'AI',
      image: ai5,
      detailImages: [aiDetail5, ai5],
      title: '겨울 시즌 오프 프로모션',
      desc: 'AI를 활용하여 작업한 메인 배너'
    },

    { id: 24,
      type: 'AI',
      image: ai6,
      detailImages: [aiDetail6, ai6],
      title: '크리스마스 시즌 선물 증정 프로모션',
      desc: 'AI를 활용하여 작업한 팝업'
    },

    // other 시작
    { id: 27,
      type: 'Other',
      image: other1,
      detailImages: [otherDetail1, otherDetail2],
      title:'유튜브 썸네일',
      desc: '메이블루 유튜브 썸네일 디자인'
    },

    { id: 28,
      type: 'Other',
      image: other2,
      detailImages: [otherDetail3],
      title: '외부 채널 배너',
      desc: '메이블루 외부 채널 배너 디자인'
    },

    { id: 29,
      type: 'Other',
      image: other3,
      detailImages: [otherDetail4],
      title: '외부 채널 배너',
      desc: '메이블루 외부 채널 배너 디자인'
    },

    { id: 30,
      type: 'Other',
      image: other4,
      detailImages: [otherDetail5, otherDetail6],
      title: '배송 안내 팝업',
      desc: '메이블루 배송 안내 공지성 팝업'
    }
    
  ];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter(p => p.type === filter);

  return (
    <div className="App">

      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <div class="modal-header">
              <div class="text">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.desc}</p>
              </div>

              <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
            </div>           

            <div className="modal-body">
              {selectedProject.detailImages.map((img, index) => (
                <img key={index} src={img} alt={`detail-${index}`} />
              ))}
            </div>

          </div>
        </div>
      )}

      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className='header-inner'>
          <div
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
            >
              Kim Damhee
          </div>

          <nav className="menu">
            <a
              href="#main"
              className={active === "main" ? "active" : ""}
              onClick={() => handleMenuClick("main")}
              >
                Main
            </a>
            <span className="divider">|</span>

            <a
              href="#about"
              className={active === "about" ? "active" : ""}
              onClick={() => handleMenuClick("about")}
              >
                About
            </a>
            <span className="divider">|</span>

            <a
              href="#portfolio"
              className={active === "portfolio" ? "active" : ""}
              onClick={() => handleMenuClick("portfolio")}
              >
                Portfolio
            </a>
            <span className="divider">|</span>

            <a
              href="#skill"
              className={active === "skill" ? "active" : ""}
              onClick={() => handleMenuClick("skill")}
            >
              Skill
            </a>
            <span className="divider">|</span>

            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={() => handleMenuClick("contact")}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <section id="main" className="main" style={{ backgroundImage: `url(${bgMain})` }}>
        <div className="main-title">
          <p className="main-sub">Web/Contents Designer</p>
          <h1 className="main-main">Portfolio,</h1>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="inner">
          <h2>About Me,</h2>
          <p className="sub-title">웹 디자이너 김담희 입니다.</p>

          <div className="about-boxes">
            <div className="box">
              <h3>MBTI</h3>
              <div className="icon">
                <img src={icon1} alt="아이콘" />
              </div>
              <p>명확한 기준과 현실적인 판단을 바탕으로 핵심을 간결히 정리하고 신속히 실행하는 성격입니다.</p>
            </div>

            <div className="box">
              <h3>STRENGTH</h3>
              <div className="icon">
                <img src={icon2} alt="아이콘" />
              </div>
              <p>5년 이상 러닝을 지속하며, 스스로 목표를 설정하고 꾸준히 실행해 결과로 연결하는 습관을 체득했습니다.</p>
            </div>

            <div className="box">
              <h3>HOBBY</h3>
              <div className="icon">
                <img src={icon3} alt="아이콘" />
              </div>
              <p>꾸준한 독서를 통해 다양한 관점을 습득하고, 이를 바탕으로 사고의 깊이를 확장해왔습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="section portfolio">
        <div className="inner">
          <h2>Portfolio,</h2>
          <p className="sub-title">
            직접 작업한 포트폴리오 입니다.
          </p>

          <div className="filter-buttons">
            <button 
              className={filter === 'Page' ? 'active' : ''}
              onClick={() => setFilter('Page')}
            >
              Page
            </button>

            <button 
              className={filter === 'Banner' ? 'active' : ''}
              onClick={() => setFilter('Banner')}
            >
              Banner
            </button>

            <button 
              className={filter === 'AI' ? 'active' : ''}
              onClick={() => setFilter('AI')}
            >
              AI활용
            </button>

            <button 
              className={filter === 'Other' ? 'active' : ''}
              onClick={() => setFilter('Other')}
            >
              Other
            </button>
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="item"
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.image} alt={project.type} />

                <div className="overlay">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>

                  <button className="view-btn">VIEW</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill */}
      <section id="skill" className="section skill">
        <div className="inner">
          <h2>Skill,</h2>
          <p className="sub-title">제가 사용하는 스킬입니다.</p>

          <div className="skill-list">
            <div className="skill">
              <div className="icon">
                <img src={psIcon} alt="html" />
              </div>
              <h3>Photoshop</h3>
              <p>이미지 보정 및 합성,<br />디자인 작업 가능</p>
            </div>

            <div className="skill">
              <div className="icon">
                <img src={aiIcon} alt="css" />
              </div>
              <h3>Illustrator</h3>
              <p>벡터 기반 그래픽 및<br />아이콘 제작 가능</p>
            </div>

            <div className="skill">
              <div className="icon">
                <img src={htmlIcon} alt="javascript" />
              </div>
              <h3>HTML+CSS</h3>
              <p>마크업 이해 및<br />간단한 페이지 구현 가능</p>
            </div>

            <div className="skill">
              <div className="icon">
                <img src={figmaIcon} alt="jquery" />
              </div>
              <h3>Figma</h3>
              <p>기본 UI 구성 및<br />간단한 디자인 작업 가능</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="inner">
          <h2>Contact.</h2>
          <p className="sub-title">
            궁금하신 점이 있으시면 편하게 문의주세요.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <div className="icon">
                <img src={emailIcon} alt="email" />
              </div>
              <div className="text">
                <div className="label">Email</div>
                <div className="value">kdh-94@naver.com</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">
                <img src={phoneIcon} alt="phone" />
              </div>
              <div className="text">
                <div className="label">Phone</div>
                <div className="value">010-7753-8242</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">
                <img src={addressIcon} alt="address" />
              </div>
              <div className="text">
                <div className="label">Address</div>
                <div className="value">경기도 고양시 일산서구</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social">
          <a href="https://www.instagram.com/iamdamhee/" target="_blank" rel="noopener noreferrer">
            <div className="icon">
              <img src={instaIcon} alt="instagram" />
            </div>
          </a>
          <a href="https://blog.naver.com/kdh-94" target="_blank" rel="noopener noreferrer">
            <div className="icon">
            <img src={blogIcon} alt="blog" />
          </div>
          </a>
        </div>
        <p>ⓒ Copyright | KimDamhee 2026 All Right Reserved.</p>
      </footer>

    </div>
  );
}

export default App;