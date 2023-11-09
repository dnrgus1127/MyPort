import { useEffect, useRef } from "react";


interface useMorphProps {
    texts: Array<string>;
    morphTime?: number;
    cooldownTime?: number;
}

export default function useMorphing({texts, morphTime = 1.5, cooldownTime = 0.5} : useMorphProps) {
    const textRef1 = useRef<HTMLHeadingElement>(null);
    const textRef2 = useRef<HTMLHeadingElement>(null);
    
    useEffect(() => {
        if (!textRef1.current || !textRef2.current) return;
        let animationFrameId : number;

        let textIndex = texts.length - 1;
        let time = new Date();
        let morph = 0;
        let cooldown = cooldownTime;
    
        textRef1.current.textContent = texts[textIndex % texts.length];
        textRef2.current.textContent = texts[(textIndex +1 ) % texts.length];
    
        function doMorph() {
          morph -= cooldown;
          cooldown = 0;
    
          let fraction = morph / morphTime;
    
          if (fraction > 1) {
              cooldown = cooldownTime;
              fraction = 1;
          }
          setMorph(fraction);
    }
      
        function setMorph(fraction :number) {
          if (!textRef1.current || !textRef2.current) return;
            textRef2.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            textRef2.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        
            fraction = 1 - fraction;
            textRef1.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            textRef1.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        
            textRef1.current.textContent = texts[textIndex % texts.length];
            textRef2.current.textContent = texts[(textIndex +1) % texts.length];
        }
        
        function doCooldown() {
          if (!textRef1.current || !textRef2.current) return;
            morph = 0;
        
            textRef2.current.style.filter = "";
            textRef2.current.style.opacity = "100%";
        
            textRef1.current.style.filter = "";
            textRef1.current.style.opacity = "0%";
        }
        
        function animate() {
          
          animationFrameId = requestAnimationFrame(animate);
        
            let newTime = new Date();
            let shouldIncrementIndex = cooldown > 0;
            let dt = (newTime.getTime() - time.getTime()) / 1000;
            time = newTime;
        
            cooldown -= dt;
        
            if (cooldown <= 0) {
                if (shouldIncrementIndex) {
                    textIndex++;
                }
        
                doMorph();
            } else {
                doCooldown();
            }
      }
        animationFrameId = requestAnimationFrame(animate);
        
        return () => {
          cancelAnimationFrame(animationFrameId);
        }
    }, [morphTime,cooldownTime,texts])
    
    const filter = <svg id="filters">
    <defs>
        <filter id="threshold">
            <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140" />
          </filter>
      </defs>
  </svg>

    return {textRef1, textRef2,filter}
}
