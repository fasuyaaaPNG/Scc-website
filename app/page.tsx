"use client"

import "./style.css";
import { useEffect, useRef, useState } from "react";
import { useInView , motion } from "framer-motion"

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const secRef = useRef(null);
  const isInViewHome = useInView(homeRef, { once: true });
  const isInViewAbout = useInView(aboutRef, { once: true });
  const isInViewSec = useInView(secRef, { once: true });
  const [isHoveredLebihLanjut, setHoveredLebihLanjut] = useState(false)
  const [isClickedProg, setIsClickedProg] = useState(false);
  const [isClickedCyb, setIsClickedCyb] = useState(false);

  useEffect(() => {
    console.log("Element is in view Home: ", isInViewHome);
  }, [isInViewHome]);

  useEffect(() => {
    console.log("Element is in view About: ", isInViewAbout);
  }, [isInViewAbout]);

  useEffect(() => {
    console.log("Element is in view About: ", isInViewSec);
  }, [isInViewSec]);

  const handleClickProg = () => {
    setIsClickedProg(prevState => !prevState);  // Toggle isClickedProg
    setIsClickedCyb(false);  // Pastikan isClickedCyb menjadi false
  };
  
  const handleClickCyb = () => {
    setIsClickedCyb(prevState => !prevState);  // Toggle isClickedCyb
    setIsClickedProg(false);  // Pastikan isClickedProg menjadi false
  };
  
  return (
    <>
    <section className="home">
      <div className="navbar">
        <motion.img src="/assets/SCC.png" alt="" draggable="false" className="logoScc" ref={homeRef}
          whileHover={{
            cursor: 'pointer'
          }}
        />
        <div className="navigasiNavbar">
          <motion.a className="textNav" href=""
            transition={{
              ease: "easeIn"
            }}
            whileHover={{
              scale: 0.97,
              color: "#0C4651"
            }}
          >
            Beranda
          </motion.a>
          <motion.img src="/assets/pipe.png" alt="" 
            initial={{
              rotate: 90
            }}
            animate={{
              rotate: 0
            }}
            transition={{
              ease: "easeIn"
            }}
          />
          <motion.a className="textNav" href="#about"
            transition={{
              ease: "easeIn",
            }}
            whileHover={{
              scale: 0.97,
              color: "#0C4651"
            }}
          >
            Tentang
          </motion.a>
          <motion.img src="/assets/pipe.png" alt="" 
            initial={{
              rotate: 90
            }}
            animate={{
              rotate: 0
            }}
            transition={{
              ease: "easeIn"
            }}
          />
          <motion.a className="textNav" href=""
            transition={{
              ease: "easeIn",
            }}
            whileHover={{
              scale: 0.97,
              color: "#0C4651"
            }}
          >
            Blog
          </motion.a>
        </div>
      </div>
      <motion.p className="deskripsi"
        initial={{ 
          x: -10, opacity: 0 
        }}
        animate={{
          x:0, opacity: 1
        }}
        transition={{
          ease: 'easeIn',
          delay: 0.5
        }}
      >
        Berbagi ilmu dan berkolaborasi dalam teknologi
      </motion.p>
      <motion.img 
        src="/assets/foto1.png" draggable="false" alt="" className="foto1" 
      />
      <motion.img
        initial={{
          opacity: 1,
          x: "-39vw"
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        animate={{
          rotate: 0
        }}
        transition={{
          duration: 2,
          ease: 'easeIn'
        }}
        src="/assets/setling.png" draggable="false" alt="" className="asset1" 
      />
      <a href="#about">
        <motion.img
          initial={{ 
            y: -10
          }} 
          whileInView={{
            opacity: 1
          }}
          animate={{
            y: [5, -5, 5, -5, 5], 
            opacity: [1, 1, 1, 1, 1, 1]
          }}
          whileHover={{
            cursor: 'pointer'
          }}
          transition={{
            delay:2,
            duration: 1, 
            repeat: Infinity, 
            repeatDelay: 3,
            ease: 'easeIn'
          }}
          src="/assets/next.png" draggable="false" alt="" className="nextButton" 
        />
      </a>
    </section>
    <section className="tentang" id="about">
      <div className="ref" ref={aboutRef}></div>
      <div className="judulPanah">
        <p className="judulTentang">
            TENTANG KAMI
        </p>
        <img src="/assets/panah.png" alt="" className="panah" />
      </div>
      <motion.p className="deskripsiTentang"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: isInViewAbout? 1 : 0
        }}
        transition={{
          duration: 0.7,
          ease: "easeIn"
        }}
      >
        Mengembangkan pemahaman dan kemampuan melalui diskusi, kompetisi, dan sharing melalui pengajar
      </motion.p>
      <motion.p className="teks1Kanan"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: isInViewAbout? 1 : 0
        }}
        transition={{
          delay: 0.2,
          duration: 0.7,
          ease: "easeIn"
        }}
      >
        <span className="boldPutih">Stemba Computer Club (SCC)</span>  adalah<br /> komunitas komputer di SMK Negeri 7 Semarang 
      </motion.p>
      <motion.p className="teks2Kanan"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: isInViewAbout? 1 : 0
        }}
        transition={{
          delay:0.4,
          duration: 0.7,
          ease: "easeIn"
        }}
      >
        <span className="boldPutih">SCC</span> mendorong pembelajaran <span className="boldPutih">kolaboratif</span> dan  <span className="boldPutih">berbagi pengetahuan</span>, serta menumbuhkan <span className="boldPutih">semangat belajar</span> siswa SMK Negeri 7 Semarang dalam bidang <span className="boldPutih">teknologi</span>
      </motion.p>
      <motion.a href="#sec" className="navLebihLanjut"
        onMouseEnter={() => setHoveredLebihLanjut(true)}
        onMouseLeave={() => setHoveredLebihLanjut(false)}
      >
        <motion.div className="borderLebihLanjut"
          layout
          initial={{
            padding: "0.8vw 1.7vw 0.8vw 1.7vw",
            opacity: 0
          }}
          animate={{
            padding: isHoveredLebihLanjut? "0.8vw 1.7vw 0.8vw 3.7vw" : "0.8vw 1.7vw 0.8vw 1.7vw",
            opacity: isInViewAbout? 1 : 0,
            animationDelay: '2s'
          }}
          transition={{
            duration: 0.5,
            ease: "easeIn"
          }}
        >
          <motion.p className="lebihLanjut"
            animate={{
              x: isHoveredLebihLanjut? "0.5vw" : "0"
            }}
            transition={{
              duration: 0.5,
              ease: "easeIn"
            }}
          >
            LEBIH LANJUT
          </motion.p>
        </motion.div>
        <motion.img src="/assets/panahBawah.png" alt="" className="panahBawah" 
          initial={{
            x: "-15.2vw",
            rotate: "-90deg"
          }}
          animate={{
            x: isHoveredLebihLanjut? "-15vw" : 0,
            rotate: isHoveredLebihLanjut? "-90deg" : 0
          }}
          transition={{
            duration: 0.5,
            ease: "easeIn"
          }}
        />
      </motion.a>
      <div className="blueDiv"></div>
    </section>
    <section className="bidang" id="sec">
      <div className="ref" ref={secRef}></div>
      <div className="judulBidang">
        <p className="judulBidangTeks">
          BIDANG SCC
        </p>
        <img src="/assets/panahBidang.png" alt="" className="judulBidangPanah" />
      </div>
      <p className="deskripsiBidang">
        Di Stemba Computer Club (SCC), siswa akan mempelajari empat bidang utama: Programming, Cyber Security, Networking, dan UI/UX (User Interface & User Experience)
      </p>
      <div className="buttonBidang">
        <motion.div 
          className={`bidangScc ${isClickedProg ? "bidangSccCyber" : ""}`}
          onClick={handleClickProg}
          whileTap={{ scale: 0.99 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="kotakBidang">
            <div className="nomorBidang">
              <p className="isiNomorBidang">
                1
              </p>
            </div>
            <p className="namaBidang">
              Programming
            </p>
          </div>
        </motion.div>
        <motion.div 
        className={`bidangScc ${isClickedCyb ? "bidangSccCyber" : ""}`}
        onClick={handleClickCyb}
        whileTap={{ scale: 0.99 }}
        whileHover={{ scale: 1.01 }}
        >
          <div className="kotakBidang">
            <div className="nomorBidang">
              <p className="isiNomorBidang">
                2
              </p>
            </div>
            <p className="namaBidang">
              Cyber security
            </p>
          </div>
          <img src="/assets/panahPutih.png" alt="" className="panahAtas" />
          <p className="deskripsiCyber">
            Keamanan siber adalah praktik melindungi sistem, jaringan, dan program dari serangan digital
          </p>
          <motion.div
            className="kategoriCyber"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.2 }}
          >
            <p className="malwareCyber">
              Malware
            </p>
            <p className="phisingCyber">
              Phising
            </p>
            <p className="ctfCyber">
              CTF
            </p>
          </motion.div>
        </motion.div>
        <div className="bidangScc">
          <div className="kotakBidang">
            <div className="nomorBidang">
              <p className="isiNomorBidang">
                3
              </p>
            </div>
            <p className="namaBidang">
              Networking
            </p>
          </div>
        </div>
        <div className="bidangScc">
          <div className="kotakBidang">
            <div className="nomorBidang">
              <p className="isiNomorBidang">
                4
              </p>
            </div>
            <p className="namaBidang">
              ui / ux
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
