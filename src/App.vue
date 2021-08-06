<template>
  <TopNav />
  <div class="px-10 w-full flex flex-wrap justify-center">
    <div v-for="(arr, idx) in subArrays" :key="idx" class="w-1/8">
      <div v-for="(card, i) in arr" :key="i" class="w-full p-2">
        <Card :src="card.src" class="w-full" />
      </div>
    </div>
    <div v-for="(arr, idx) in subArrays" :key="idx" class="w-1/8">
      <div v-for="(card, i) in arr" :key="i" class="w-full p-2">
        <Card :src="card.src" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'App',
  data() {
    return {
      cards: [
        {
          src: 'picture-1.jpg',
          category: 'home',
        },
        {
          src: 'picture-2.jpg',
          category: 'home',
        },
        {
          src: 'picture-3.jpg',
          category: 'home',
        },
        {
          src: 'picture-4.jpg',
          category: 'home',
        },
        {
          src: 'picture-5.jpg',
          category: 'home',
        },
        {
          src: 'picture-6.jpg',
          category: 'home',
        },
        {
          src: 'picture-7.jpg',
          category: 'home',
        },
        {
          src: 'picture-8.jpg',
          category: 'home',
        },
        {
          src: 'picture-9.jpg',
          category: 'home',
        },
        {
          src: 'picture-10.jpg',
          category: 'home',
        },
        {
          src: 'picture-22.jpg',
          category: 'home',
        },
        {
          src: 'picture-12.jpg',
          category: 'home',
        },
        {
          src: 'picture-13.jpg',
          category: 'home',
        },
        {
          src: 'picture-14.jpg',
          category: 'home',
        },
        {
          src: 'picture-15.jpg',
          category: 'home',
        },
        {
          src: 'picture-16.jpg',
          category: 'home',
        },
        {
          src: 'picture-17.jpg',
          category: 'home',
        },
        {
          src: 'picture-18.jpg',
          category: 'home',
        },
        {
          src: 'picture-19.jpg',
          category: 'home',
        },
        {
          src: 'picture-20.jpg',
          category: 'home',
        },
        {
          src: 'picture-21.jpg',
          category: 'home',
        },
      ],
    }
  },
  computed: {
    subArrays() {
      let length = Math.ceil(this.cards.length / 5)

      const result = new Array(length).fill().map((item, i) =>  this.cards.splice(i, length))

      return result
    },
  },
  components: {
    TopNav,
    Card,
  },
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    Helvetica, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', メイリオ,
    Meiryo, 'ＭＳ Ｐゴシック', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
}

</style>
