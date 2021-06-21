let revealContainers = document.querySelectorAll(".snap-align");

revealContainers.forEach((slug) => {
  let image = slug.querySelector("img");
  let tl = gsap.timeline();

  tl.set(".op svg path", { opacity: 0 },"op");
  tl.to(".op svg path", 1.5,{ opacity: 1, y: "-2.5vw", ease: "expo.inOut", stagger: "0.045" },"op+=0.5");
  tl.to(".op svg path", 1.5, {opacity: 0, y: "-4.5vw", ease: "expo.inOut", stagger: "0.05" },"op+=1.75");
  tl.to(".op", 1, {x: "100vw", ease: "expo.inOut" },"op+=3.5");
  tl.from("image", 1, { scale: 1.25, ease: "expo.inOut" },"op+=4.5");
});