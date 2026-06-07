'use client'
import { useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'

export function useVRCubeIntro() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const trigger = useCallback(() => {
    const el = overlayRef.current
    if (!el || el.classList.contains('vri-active')) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      router.push('/concept-1/cube-series/inquire')
      return
    }
    const cubes = ['vri-hero', 'vri-d1', 'vri-d2', 'vri-d3', 'vri-d4']
    cubes.forEach(cls => {
      const c = document.createElement('div')
      c.className = `vri-cube ${cls}`
      for (let i = 0; i < 6; i++) {
        const f = document.createElement('div')
        f.className = `vri-face vri-f${i}`
        c.appendChild(f)
      }
      el.appendChild(c)
    })
    el.classList.add('vri-active')
    setTimeout(() => router.push('/concept-1/cube-series/inquire'), 3600)
  }, [router])

  return { overlayRef, trigger }
}

export function VRCubeOverlay({ overlayRef }: { overlayRef: React.RefObject<HTMLDivElement> }) {
  return (
    <>
      <div ref={overlayRef} id="vr-intro" aria-hidden="true" />
      <style>{`
        #vr-intro { display: none; position: fixed; inset: 0; z-index: 9999; pointer-events: all; perspective: 900px; perspective-origin: 50% 50%; }
        @media (prefers-reduced-motion: no-preference) {
          #vr-intro.vri-active { display: block; animation: vri-bg 3.5s cubic-bezier(0.4,0,0.2,1) forwards; }
          @keyframes vri-bg { 0%,48% { background:#020208; opacity:1; } 70% { background:#f8f8f8; opacity:1; } 100% { background:#fff; opacity:0; } }
          .vri-cube { position:absolute; transform-style:preserve-3d; will-change:transform,opacity; }
          .vri-face { position:absolute; backface-visibility:hidden; border:1.5px solid rgba(255,255,255,0.22); box-shadow:inset 0 0 28px rgba(255,255,255,0.09); }
          .vri-hero { top:50%; left:50%; margin:-90px 0 0 -90px; width:180px; height:180px; animation:vri-rush 3.5s cubic-bezier(0.12,0,0.4,1) forwards; }
          @keyframes vri-rush { 0% { opacity:0; transform:rotateX(-32deg) rotateY(-55deg) scale(0.22); } 18% { opacity:1; transform:rotateX(-20deg) rotateY(-32deg) scale(0.52); } 50% { opacity:1; transform:rotateX(-4deg) rotateY(25deg) scale(1.05); } 78% { opacity:0.7; transform:rotateX(14deg) rotateY(-6deg) scale(7); } 100% { opacity:0; transform:rotateX(16deg) rotateY(-6deg) scale(12); } }
          .vri-hero .vri-face { width:180px; height:180px; }
          .vri-hero .vri-f0 { transform:rotateY(0deg) translateZ(90px); background:radial-gradient(ellipse 70% 50% at 30% 35%,rgba(100,180,255,0.55) 0%,transparent 65%),linear-gradient(148deg,#001166,#0044cc 42%,#1177ff 68%,#44aaff); }
          .vri-hero .vri-f1 { transform:rotateY(180deg) translateZ(90px); background:radial-gradient(ellipse 55% 60% at 65% 28%,rgba(255,140,180,0.5) 0%,transparent 60%),linear-gradient(135deg,#550011,#cc1133 40%,#ff2255 65%,#ff7799); }
          .vri-hero .vri-f2 { transform:rotateY(-90deg) translateZ(90px); background:radial-gradient(ellipse 60% 45% at 40% 60%,rgba(60,220,200,0.45) 0%,transparent 65%),linear-gradient(155deg,#003322,#007755 38%,#00bb88 62%,#33ddaa); }
          .vri-hero .vri-f3 { transform:rotateY(90deg) translateZ(90px); background:radial-gradient(ellipse 50% 55% at 55% 40%,rgba(255,200,80,0.4) 0%,transparent 60%),linear-gradient(128deg,#441100,#993300 38%,#dd6600 62%,#ffaa33); }
          .vri-hero .vri-f4 { transform:rotateX(90deg) translateZ(90px); background:radial-gradient(ellipse 65% 50% at 35% 55%,rgba(200,100,255,0.45) 0%,transparent 60%),linear-gradient(142deg,#220044,#660099 40%,#aa22dd 64%,#cc66ff); }
          .vri-hero .vri-f5 { transform:rotateX(-90deg) translateZ(90px); background:radial-gradient(ellipse 55% 60% at 60% 35%,rgba(100,220,120,0.4) 0%,transparent 65%),linear-gradient(160deg,#001100,#004422 40%,#008844 64%,#22bb66); }
          .vri-d1 { top:13%; left:8%; width:60px; height:60px; animation:vri-d1 3.2s ease-out 0.1s forwards; }
          @keyframes vri-d1 { 0%{opacity:0;transform:rotateX(20deg) rotateY(32deg) scale(0);} 15%{opacity:0.8;} 78%{opacity:0.22;transform:rotateX(210deg) rotateY(320deg) scale(0.9) translate(-280px,-185px);} 100%{opacity:0;transform:rotateX(230deg) rotateY(350deg) scale(0.15) translate(-520px,-340px);} }
          .vri-d1 .vri-face { width:60px; height:60px; }
          .vri-d1 .vri-f0{transform:rotateY(0deg) translateZ(30px);background:linear-gradient(135deg,#001166,#0044cc 55%,#1177ff);}
          .vri-d1 .vri-f1{transform:rotateY(180deg) translateZ(30px);background:linear-gradient(135deg,#550011,#cc1133 55%,#ff2255);}
          .vri-d1 .vri-f2{transform:rotateY(-90deg) translateZ(30px);background:linear-gradient(135deg,#003322,#007755 55%,#00bb88);}
          .vri-d1 .vri-f3{transform:rotateY(90deg) translateZ(30px);background:linear-gradient(135deg,#441100,#993300 55%,#dd6600);}
          .vri-d1 .vri-f4{transform:rotateX(90deg) translateZ(30px);background:linear-gradient(135deg,#220044,#660099 55%,#aa22dd);}
          .vri-d1 .vri-f5{transform:rotateX(-90deg) translateZ(30px);background:linear-gradient(135deg,#001100,#004422 55%,#008844);}
          .vri-d2 { bottom:15%; right:7%; width:76px; height:76px; animation:vri-d2 3.3s ease-out 0.08s forwards; }
          @keyframes vri-d2 { 0%{opacity:0;transform:rotateX(-16deg) rotateY(-28deg) scale(0);} 20%{opacity:0.7;} 78%{opacity:0.18;transform:rotateX(-155deg) rotateY(-215deg) scale(0.9) translate(215px,168px);} 100%{opacity:0;transform:rotateX(-175deg) rotateY(-245deg) scale(0.12) translate(400px,310px);} }
          .vri-d2 .vri-face { width:76px; height:76px; }
          .vri-d2 .vri-f0{transform:rotateY(0deg) translateZ(38px);background:linear-gradient(135deg,#441100,#993300 55%,#dd6600);}
          .vri-d2 .vri-f1{transform:rotateY(180deg) translateZ(38px);background:linear-gradient(135deg,#003322,#007755 55%,#00bb88);}
          .vri-d2 .vri-f2{transform:rotateY(-90deg) translateZ(38px);background:linear-gradient(135deg,#220044,#660099 55%,#aa22dd);}
          .vri-d2 .vri-f3{transform:rotateY(90deg) translateZ(38px);background:linear-gradient(135deg,#001166,#0044cc 55%,#1177ff);}
          .vri-d2 .vri-f4{transform:rotateX(90deg) translateZ(38px);background:linear-gradient(135deg,#550011,#cc1133 55%,#ff2255);}
          .vri-d2 .vri-f5{transform:rotateX(-90deg) translateZ(38px);background:linear-gradient(135deg,#001100,#004422 55%,#008844);}
          .vri-d3 { top:18%; right:10%; width:50px; height:50px; animation:vri-d3 3.1s ease-out 0.18s forwards; }
          @keyframes vri-d3 { 0%{opacity:0;transform:rotateX(34deg) rotateY(-40deg) scale(0);} 18%{opacity:0.7;} 78%{opacity:0.16;transform:rotateX(275deg) rotateY(-315deg) scale(0.9) translate(185px,-140px);} 100%{opacity:0;transform:rotateX(300deg) rotateY(-345deg) scale(0.12) translate(350px,-275px);} }
          .vri-d3 .vri-face { width:50px; height:50px; }
          .vri-d3 .vri-f0{transform:rotateY(0deg) translateZ(25px);background:linear-gradient(135deg,#003322,#007755 55%,#00bb88);}
          .vri-d3 .vri-f1{transform:rotateY(180deg) translateZ(25px);background:linear-gradient(135deg,#001166,#0044cc 55%,#1177ff);}
          .vri-d3 .vri-f2{transform:rotateY(-90deg) translateZ(25px);background:linear-gradient(135deg,#550011,#cc1133 55%,#ff2255);}
          .vri-d3 .vri-f3{transform:rotateY(90deg) translateZ(25px);background:linear-gradient(135deg,#001100,#004422 55%,#008844);}
          .vri-d3 .vri-f4{transform:rotateX(90deg) translateZ(25px);background:linear-gradient(135deg,#441100,#993300 55%,#dd6600);}
          .vri-d3 .vri-f5{transform:rotateX(-90deg) translateZ(25px);background:linear-gradient(135deg,#220044,#660099 55%,#aa22dd);}
          .vri-d4 { bottom:22%; left:6%; width:44px; height:44px; animation:vri-d4 3.0s ease-out 0.25s forwards; }
          @keyframes vri-d4 { 0%{opacity:0;transform:rotateX(-22deg) rotateY(40deg) scale(0);} 16%{opacity:0.65;} 78%{opacity:0.16;transform:rotateX(-195deg) rotateY(295deg) scale(0.9) translate(-195px,155px);} 100%{opacity:0;transform:rotateX(-215deg) rotateY(325deg) scale(0.1) translate(-370px,290px);} }
          .vri-d4 .vri-face { width:44px; height:44px; }
          .vri-d4 .vri-f0{transform:rotateY(0deg) translateZ(22px);background:linear-gradient(135deg,#220044,#660099 55%,#aa22dd);}
          .vri-d4 .vri-f1{transform:rotateY(180deg) translateZ(22px);background:linear-gradient(135deg,#441100,#993300 55%,#dd6600);}
          .vri-d4 .vri-f2{transform:rotateY(-90deg) translateZ(22px);background:linear-gradient(135deg,#550011,#cc1133 55%,#ff2255);}
          .vri-d4 .vri-f3{transform:rotateY(90deg) translateZ(22px);background:linear-gradient(135deg,#003322,#007755 55%,#00bb88);}
          .vri-d4 .vri-f4{transform:rotateX(90deg) translateZ(22px);background:linear-gradient(135deg,#001166,#0044cc 55%,#1177ff);}
          .vri-d4 .vri-f5{transform:rotateX(-90deg) translateZ(22px);background:linear-gradient(135deg,#001100,#004422 55%,#008844);}
        }
      `}</style>
    </>
  )
}
