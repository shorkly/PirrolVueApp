<template>
  <div class="gallery">
    <div class="photo-items">
      <a
        :href="item.link"
        target="_blank"
        class="img"
        v-for="item in items"
        :key="item.title"
      >
        <div class="photo">
          <img :src="item.img" alt="" :title="item.title" />
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "gallery",
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    axios.get("data/gallery.json").then((resp) => {
      this.items = resp.data;
    });
  },
};
</script>