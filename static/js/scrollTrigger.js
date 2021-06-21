let revealContainers = document.querySelectorAll(".reveal")
let container = document.querySelectorAll(".container")
revealContainers.forEach((container) => {
    let image = container.querySelector("img")
    let tl = gsap.timeline()
       this.tl
       .set(.container, { autoAlpha: 1 })
       .from(.container, 1, {xPercent: -100,ease: 'Expo.inOut',
             scrollTrigger: {trigger: container,toggleActions: "play pause resume reset"}
            })
       .from(image, 1, {xPercent: 100,scale: 1.65,delay: -1,ease: 'Expo.inOut'})
    })