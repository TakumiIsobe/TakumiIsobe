<template>
    <div>
        <div class='container'>
          <div class='reveal'>
            <img src='https://images.unsplash.com/photo-1505201372024-aedc618d47c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80%20634w'>
          </div>
        </div>
        <div class='container'>
          <div class='reveal'>
            <img src='https://images.unsplash.com/photo-1505201372024-aedc618d47c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80%20634w'>
          </div>
        </div>
        <div class='container'>
          <div class='reveal'>
            <img src='https://images.unsplash.com/photo-1531727991582-cfd25ce79613?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80%20634w'>
          </div>
        </div>
        <div class='container'>
          <div class='reveal'>
            <img src='https://images.unsplash.com/photo-1580215935060-a5adc57c5157?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80'>
          </div>
          <div class="credit"><a href="https://thisisadvantage.com" target="_blank">Made by Advantage</a></div>
        </div>  
    </div>
</template>



<script>
import { gsap } from 'gsap'

export default {
/*
    head: {
        script: [
            { src: 'js/scrollTrigger.js', body: true }
        ]
    }
*/

  data() {
    return {tl: gsap.timeline()}
  },
  mounted() {
    this.animateOnScroll()
  },

  methods: {
    animateOnScroll(){
    let revealContainers = document.querySelectorAll(".reveal")
    revealContainers.forEach((container) => {
        let image = container.querySelector("img")
        //let tl = gsap.timeline()
           this.tl
           .set('.reveal', { autoAlpha: 1 })
           .from('.reveal', 1, {xPercent: -100,ease: 'Expo.inOut',
                 scrollTrigger: {trigger: container,toggleActions: "play pause resume reset"}
                })
           .from(image, 1, {xPercent: 100,scale: 1.65,delay: -1,ease: 'Expo.inOut'})
        })
 }
  }




/*
//Working properly
  data() {
    return {tl: gsap.timeline()}
  },
  mounted() {
    this.animateOnScroll()
  },

  methods: {
    animateOnScroll() {
    let container = document.querySelectorAll(".container");
    let revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline()
           this.tl
           .set(container, { autoAlpha: 1 })
           .from(container, 1, {xPercent: -100,ease: 'Expo.inOut',
             scrollTrigger: {trigger: container,toggleActions: "play pause resume reset"}
            })
           .from(image, 1, {xPercent: 100,scale: 1.65,delay: -1,ease: 'Expo.inOut'})
        })
    }
  }
*/

}
</script>






<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
}

.container:nth-child(1) {
  background: #b6916d;
}

.container:nth-child(2) {
  background: #bcb8ad;
}

.container:nth-child(3) {
  background: #b69187;
}

.container:nth-child(4) {
  background: #3c564f;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform-origin: left;
}

.reveal {
  visibility: hidden;
  position: relative;
  width: 80%;
  height: 80%;
  max-width: 920px;
  overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.credit {
  font-family: Termina, sans-serif;
  position: absolute;
  bottom: 10px;
}
.credit a {
  color: white;
}

.cursor {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  contain: layout style size;
  pointer-events: none;
}
.cursor.media-blend {
  z-index: 100;
  mix-blend-mode: exclusion;
}
.cursor.media-blend .cursor-media {
  filter: invert(1);
}
.cursor:before {
  content: "";
  position: absolute;
  top: -24px;
  left: -24px;
  display: block;
  width: 48px;
  height: 48px;
  transform: scale(0.2);
  background: black;
  border-radius: 50%;
}
.cursor .cursor-media {
  display: block;
  height: 350px;
  width: 350px;
  overflow: hidden;
  border-radius: 100%;
  transform: scale(0);
  margin: -175px 0 0 -175px;
  position: relative;
}
.cursor .cursor-media video {
  height: 350px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
}
</style>