<template>
<transition>
    <div :id="id" class="snap-align w-full">
    <NuxtLink :to="slug" class="slug relative w h-pr ib radius-5 mb-15" 
        v-on:click="toggleMenu" :class="{'is-active': isActive}">
    
        <!--<v-img src="thumbnail" alt="title" class="bg w-full h-full absolute radius-5" />-->
        <img :src="thumbnail" class="bg w-full h-full absolute radius-5 transition" />
        <h1 class="h0 main-color absolute nowrap">{{ title }}</h1>
        <div class="absolute t-80 w-full">
            <h5 class="mb-1 space">{{ title }}</h5>
            <h4 class="mb-1 space nowrap">{{ category }} - {{ tag }}</h4>
            <h5 class="space">{{ date }}</h5>
        </div>
        <div class="absolute t-full button full-radius main-color h1 flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="12.5" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" style="fill: var(--mainColor);"/></svg>
        </div>
    </NuxtLink>
    </div>
  </transition>  

</template>

<script>

export default {

data: () => {
    return {isActive: false}
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
    }
  },

  props: {
    id: String,
    title: String,
    link: String,
    date: String,
    category: String,
    tag: String,
    slug: String,
    thumbnail: String,
  }
}
</script>

<style>
.slug {
    transition: 1s cubic-bezier(.75,0,.25,1);
}

</style>