<template>

  <div :id="article.slug" style="background:#080808;">
    <transition name="slug" appear>
    <article>
      
      <div class="relative">
        <img :src="article.thumbnail" class="w-screen" />
        <div class="absolute full-portrait img-cover"></div>
      </div>
      
      <div class="-mt-5 relative">
        <h1 class="h0 main-color nowrap mb-2 slugHeadings">{{ article.title || '' }}</h1>
        <h4 class="mb-1 space slugHeadings">{{ article.title }}</h4>
        <h5 class="mb-1 space slugHeadings">{{ article.category }} - {{ article.tag }}</h5>
        <h6 class="mb-3 space slugHeadings">{{ article.date }}</h6>
        <nuxt-content :document="article" />
      </div>

    </article>
    </transition>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    },

  head: {
    bodyAttrs: { class: 'bodySlug' }
  },
  scrollToTop: true
  }
</script>

<style>
.bodySlug {background-color: #000;}
.nuxt-content-container p {
  width: 95vw;
  padding-left: 1.5vw;
  margin-left: auto;
  margin-right: auto;
}

.nuxt-content-container p img {
  margin-left: -6.5vw;
  width: 100vw;
}

.slug-enter-active, .slug-leave-active {transition: 1.5s cubic-bezier(.5,0,.25,1);}
.slug-enter, .slug-leave-to {background-color: #000;}

.slug-enter-active .slugHeadings, .slug-leave-active .slugHeadings,
.slug-enter-active p, .slug-leave-active p,
.slug-enter-active .img-cover, .slug-leave-active .img-cover {
    transition: 2.5s cubic-bezier(.5,0,.25,1);
}
.slug-enter .slugHeadings, .slug-leave-to .slugHeadings, .slug-enter p, .slug-leave-to p, .slug-enter .img-cover, .slug-leave-to .img-cover {
    opacity: 0;
}

</style>