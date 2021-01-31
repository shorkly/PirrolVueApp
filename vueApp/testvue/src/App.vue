<template>
  <div id="app">
    <header id="header" :class="{ fixed: fixedHeader }">
      <div class="container">
        <div class="menu">
          <div id="nav">
            <router-link to="/"><span class="logo"></span></router-link>
            <nav>
              <ul>
                <li><router-link to="/home">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <router-view />
    <footer class="footer">
      <div class="container pd">
        <div class="copyrights">
          <h3>Piroll Design, Inc.</h3>
          <p>© 2021 Piroll. All rights reserved. Designed by robirurk.</p>
        </div>
        <div class="contacts">
          <a href="mailto:hello@pirolltheme.com" title="Write us"
            >hello@pirolltheme.com</a
          >
          <a href="tel:+44987065908" title="Call us">+44 987 065 908</a>
        </div>
        <nav>
          <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
        <ul>
          <li>
            <a href="" target="_blank" title="Follow us on Facebook"
              >Facebook</a
            >
          </li>
          <li>
            <a href="" target="_blank" title="Follow us on Twitter">Twitter</a>
          </li>
          <li>
            <a href="" target="_blank" title="Follow us on Instagram"
              >Instagram</a
            >
          </li>
          <li>
            <a href="" target="_blank" title="Follow us on Dribble">Dribble</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
import "@/assets/css/style.css";
import "@/assets/fonts/font.css";
export default {
  name: "siteHeader",
  props: {
    fixedHeader: Boolean,
  },
};
</script>
<style>
#nav {
  display: contents;
}
</style>