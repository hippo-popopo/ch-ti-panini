'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Motion(){
 useGSAP(()=>{
  const media=gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)',()=>{
   gsap.from('.hero-copy > *',{y:22,opacity:0,duration:.8,stagger:.1,ease:'power3.out',clearProps:'all'});
   gsap.from('.hero-photo',{scale:.92,opacity:0,duration:1.2,ease:'power3.out',clearProps:'all'});
   gsap.from('.formula-row',{y:24,opacity:0,duration:.8,stagger:.16,ease:'power3.out',scrollTrigger:{trigger:'.formula-list',start:'top 85%'},clearProps:'all'});
   gsap.to('.hero-photo img',{yPercent:5,scale:1.08,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
  });
  media.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)',()=>{
   ScrollTrigger.create({trigger:'.formula-heading',start:'top 110px',end:'+=70',pin:true,pinSpacing:false});
  });
  return()=>media.revert();
 },[]);
 return null;
}
