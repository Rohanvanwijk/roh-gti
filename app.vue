<template>
  <div>
    <div class="container">
      <h1>ROHGTI <span id="flag" class="flag">🏁</span></h1>
      <p>
        Welcome to my personal photo gallery featuring the Volkswagen Golf GTI Mk8 — a modern hot hatch known for its performance, design, and driving experience. This site is dedicated to showcasing high-quality images of my GTI, highlighting its unique details and styling.
      </p>
      <p>
        For more updates, behind-the-scenes shots, and reels, follow me on Instagram <a target="_blank" rel="noreferrer" href="https://instagram.com/rohgti">@rohgti</a> or visit my blog at
        <a target="_blank" rel="noreferrer" href="https://blog.rohanvanwijk.nl">blog.rohanvanwijk.nl</a>.
      </p>
    </div>
    <Slider />
  </div>
</template>
<script setup lang="ts">
import Slider from "~/slider.vue";

useSeoMeta({
  title: 'Volkswagen Golf GTI Mk8 Photo Gallery | @rohgti',
  ogTitle: 'Volkswagen Golf GTI Mk8 Photo Gallery | @rohgti',
  description: 'Explore a high-quality photo gallery of the Volkswagen Golf GTI Mk8 by @rohgti. Featuring exterior shots, details, and styling highlights.',
  ogDescription: 'Explore a high-quality photo gallery of the Volkswagen Golf GTI Mk8 by @rohgti. Featuring exterior shots, details, and styling highlights.',
  ogImage: 'https://imagekit.rohan-10.workers.dev?url=https://ik.imagekit.io/rhn00jwt/tr:w-1200,h-630/roh-gti/20250330_windmolenpark-enkhuizen_0021.jpg',
  ogUrl: 'https://rohgti.nl',
})

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
body {
  margin: 0;
  font-family: "Noto Sans", sans-serif;
  font-size: 1.2rem;
}
a {
  color: #dd0b1e;
}
.container {
  max-width: 800px;
  margin-inline: auto;
  padding-inline: 1rem;
}
.flag {
  position: absolute;
  transition: rotate 1s;
}
.flag--animate {
  rotate: 180deg;
}
</style>