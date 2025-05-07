<template>
  <div v-if="items.length">
    <VSlickCarousel v-bind="settings" @beforeChange="handleChange">
      <div v-for="(item, index) in items" :key="index" class="item">
        <img class="item__image" :src="item.src" :alt="item.alt" />
      </div>
    </VSlickCarousel>
  </div>
</template>
<script setup>
import { VSlickCarousel } from 'v-slick-carousel';
import 'v-slick-carousel/style.css';
import data from "~/data/gti-gallery.json";

const settings = {
  slidesToShow: 1,
  dots: false,
  arrows: false,
  groupsToShow: 1,
  groupsToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  draggable: true,
  lazyLoad: 'ondemand',
  variableWidth: false,
  infinite: true,
  swipe: true,
  widthDetection: 'manual',
  responsive: [
    {
      "breakpoint": 480,
      "settings": {
        "groupsToShow": 2
      }
    },
    {
      "breakpoint": 680,
      "settings": {
        "groupsToShow": 3
      }
    },
    {
      "breakpoint": 1080,
      "settings": {
        "groupsToShow": 4
      }
    },
  ]
}

const workerApi = 'https://imagekit.rohan-10.workers.dev';

const items = data.images.map((image, index) => {
  return {
    src: `${workerApi}?url=${image.src}`,
    alt: image.alt,
    title: image.src,
    ref: useTemplateRef(`grid-${index}`),
  }
});

const handleChange = (slider) => {
  const flag = document.querySelector('#flag');
  flag.classList.add('flag--animate');
  setTimeout(() => {
    flag.classList.remove('flag--animate');
  }, 1000);
}
</script>
<style>
.v-slick-slide-group {
  aspect-ratio: 1;
}
.v-slick-track {
  margin: 0 -.5rem;
}
.active {
  margin: 0 .5rem;
}
.item {
  height: 100%;
}
.item__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>