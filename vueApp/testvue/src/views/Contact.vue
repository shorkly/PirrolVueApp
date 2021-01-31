<template>
  <div class="contact">
    <section class="sec7">
      <div class="container flex">
        <div class="contacts">
          <h3>Contact Info:</h3>
          <p class="descr">
            To give give beginning divide, cattle. Give moving won't, there the
            abundantly she'd she'd brought air upon. Light hath subdue. Life
            days creature upon first heaven gathering dry.
          </p>
          <ul>
            <li>
              <b>Adress:</b> <span>10111 Santa Monica Boulevard, LA</span>
            </li>
            <li>
              <b>Phone: </b> <a href="tel:+44987065908">+44 987 065 908</a>
            </li>
            <li>
              <b>Email: </b>
              <a href="mailto:info@Example.com">info@Example.com</a>
            </li>
            <li><b>Fax: </b> <a href="fax:+44987065909">+44 987 065 909</a></li>
          </ul>
        </div>
        <div class="getInTouch">
          <form action="#" id="my_form" method="POST">
            <div class="inp1">
              <input
                type="text"
                name="name"
                id="name"
                v-model="name"
                placeholder="Your Name"
                required
                title="Obligatory field"
              />
              <input
                type="text"
                name="contact"
                id="email"
                v-model="email"
                placeholder="Your Email"
                required
                title="Obligatory field"
              />
            </div>
            <input
              type="text"
              name="contact"
              id="title"
              v-model="title"
              placeholder="Your Title"
              required
              title="Obligatory field"
            />
            <textarea
              name="contact"
              id="comment"
              v-model="comment"
              cols="30"
              rows="10"
              placeholder="Your Comment"
              required
              title="Obligatory field"
            ></textarea>
          </form>
          <button type="button" id="send" v-on:click="sendMessage">
            Send Message
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import "@/assets/css2/style.css";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueAxios, axios);
Vue.use(VueToast);

export default {
  name: "Feedback",
  data() {
    return {
      comment: "",
      name: "",
      email: "",
      title: "",
    };
  },
  methods: {
    sendMessage() {
      let valid = true;
      if (
        this.comment == "" ||
        this.name == "" ||
        this.email == "" ||
        this.title == ""
      ) {
        valid = false;
      }

      if (valid) {
        const BOT_KEY = "1561468131:AAGJ67rQ5kwuMDpPEj3HxfOwj2cUbsKvgBM";
        const CHAT_ID = "-1001434033498";
        let msgText = encodeURI(
          "<b>Name </b>: " +
            this.name +
            "\n<b>Email </b>: " +
            this.email +
            "\n<b>Title </b>: " +
            this.title +
            "\n<b>Comment </b>: " +
            this.comment
        );

        axios
          .get(
            "https://api.telegram.org/bot" +
              BOT_KEY +
              "/sendMessage?chat_id=" +
              CHAT_ID +
              "&parse_mode=html&text=" +
              msgText
          )
          .then((resp) => {
            if (resp.data.ok) {
              this.name = "";
              this.email = "";
              this.title = "";
              this.comment = "";
              Vue.$toast.success("Thanks. You will be contacted soon!", {
                position: "top",
              });
            } else {
              Vue.$toast.error("Some error occures", { position: "top" });
            }
          })
          .catch((err) => {
            console.log(err);
            Vue.$toast.error(err);
          });
      } else {
        Vue.$toast.error("Fill all fields", { position: "top" });
      }
    },
  },
};
</script>