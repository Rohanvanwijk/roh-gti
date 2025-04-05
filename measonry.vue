<template>
  <div class="content">
    <h1 id="page-title">Rohan GTI</h1>
    <ul class="list">
      <li>Golf 8 GTI 🏁</li>
      <li>245PK</li>
      <li>370NM</li>
      <li>Moonstone Grey</li>
      <li>Instagram: <a href="https://instagram.com/roh.gti" target="_blank" rel="noreferrer">roh.gti</a></li>
    </ul>
  </div>
  <div class="grid-container">
    <div  v-for="(item, index) in items" :key="item.src" class="grid-item" :ref="`grid-${index}`">
      <img class="image" :src="item.src" :alt="item.alt" :title="index" />
    </div>
  </div>
</template>

<script setup>
import data from '/data/gti-gallery.json';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {CSSPlugin} from 'gsap/CSSPlugin';

const workerApi = 'https://imagekit.rohan-10.workers.dev';

const items = data.images.map((image, index) => {
  return {
    src: `${workerApi}?url=${image.src}`,
    alt: image.alt,
    title: image.src,
    ref: useTemplateRef(`grid-${index}`),
  }
});

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSPlugin)

onMounted(() => {
  items.forEach((item) => {
    gsap.to(item.ref.value[0], {
      scrollTrigger: item.ref.value[0],
      y: -16,
      skewX: 0,
      toggleAction: 'play revert play reset',
    })
  })
});
</script>

<style>
html {
  font-family: Arial, sans-serif;
}
body {
  margin: 1rem;
  font-size: 1.5rem;
}
.grid-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 12rem), 1fr));
  overflow: hidden;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
li {
  padding-block: .2rem;
  padding-left: 1rem;
}
li::marker {
  content: "🔴"
}
.grid-item {
  transform: skew(-16deg, 0deg);
  max-width: 300px;
}
.content {
  margin: 0 auto;
}
</style>