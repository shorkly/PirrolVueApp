<template>
  <div class="home">
    <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
    <section class="sec1">
      <div class="text">
        <h2>UI/UX & Graphic Designer</h2>
        <p class="descr">
          I am a Graphic & Web Designer based in New York, specializing in User
          Interface Design and Development.
        </p>
      </div>
    </section>
    <section class="sec2">
      <gallery />
    </section>
  </div>
</template>

<script>
import "@/assets/css2/style.css";
import gallery from "@/components/Gallery.vue";
export default {
  components: {
    gallery,
  },
};
</script>