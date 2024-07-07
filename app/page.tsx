"use client"

import "./style.css";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
    <section className="home">
      <div className="navbar">
        <motion.img src="/assets/SCC.png" alt="" draggable="false" className="logoScc" 
          whileHover={{
            cursor: 'pointer'
          }}
        />
        <div className="navigasiNavbar">
          <motion.a className="textNav" href=""
            initial={{
              rotate: 45, opacity: 0
            }}
            animate={{
              rotate: 0, opacity: 1
            }}
            transition={{
              duration: 0.3
            }}
          >
            Beranda
          </motion.a>
          <img src="/assets/pipe.png" alt="" />
          <motion.a className="textNav" href=""
            initial={{
              rotate: 45, opacity: 0
            }}
            animate={{
              rotate: 0, opacity: 1
            }}
            transition={{
              duration: 0.3
            }}
          >
            Tentang
          </motion.a>
          <img src="/assets/pipe.png" alt="" />
          <motion.a className="textNav" href=""
            initial={{
              rotate: 45, opacity: 0
            }}
            animate={{
              rotate: 0, opacity: 1
            }}
            transition={{
              duration: 0.3
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
        whileInView={{
          x:0, opacity: 1
        }}
        transition={{
          ease: 'easeIn',
          delay: 0.5
        }}
      >
        Berbagi ilmu <span className="andFont">&</span><br />berkolaborasi dalam teknologi
      </motion.p>
      <motion.img 
        src="/assets/foto1.png" draggable="false" alt="" className="foto1" 
      />
      <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1
        }}
        animate={{
          rotate: 0
        }}
        transition={{
          ease: 'easeIn'
        }}
        src="/assets/setling.png" draggable="false" alt="" className="asset1" 
      />
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
    </section>
    </>
  );
}
