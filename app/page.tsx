"use client"

import "./style.css";
import { useEffect, useRef, useState } from "react";
import { useInView , motion } from "framer-motion"

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const isInViewHome = useInView(homeRef, { once: true });
  const isInViewAbout = useInView(aboutRef, { once: true });
  const [isHoveredLebihLanjut, setHoveredLebihLanjut] = useState(false)

  useEffect(() => {
    console.log("Element is in view Home: ", isInViewHome);
  }, [isInViewHome]);

  useEffect(() => {
    console.log("Element is in view About: ", isInViewAbout);
  }, [isInViewAbout]);

  
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
      <div className="refAbout" ref={aboutRef}></div>
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
        SCC mendorong pembelajaran kolaboratif dan berbagi pengetahuan, serta menumbuhkan semangat belajar siswa SMK Negeri 7 Semarang dalam bidang teknologi.
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
        Wadah bagi siswa untuk <span className="boldPutih">belajar, berkolaborasi,<br /></span> dan <span className="boldPutih">mengembangkan</span> keterampilan teknologi komputer 
      </motion.p>
      <motion.a href="" className="navLebihLanjut"
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
            x: isHoveredLebihLanjut? "-17.8vw" : 0,
            rotate: isHoveredLebihLanjut? "-90deg" : 0
          }}
          transition={{
            duration: 0.5,
            ease: "easeIn"
          }}
        />
      </motion.a>
      <motion.div className="garis"
        animate={{
          y: isInViewAbout? "50vw" : 0
        }}
        transition={{
          duration: 1,
          ease: "easeIn"
        }}
      ></motion.div>
    </section>
    {/* <section className="tentang" id="about" ref={aboutRefa}>
        
    </section> */}
    </>
  );
}
