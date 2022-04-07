<template>
  <id-tag id="connect" />

  <footer class="q-pa-md rounded-borders fit">
    <h3>Bize Ulaşın</h3>
    <div class="a">
      <!--- Before --->
      <div style="display: flex; flex-wrap: wrap">
        <address vertical-middle style="margin: auto">
          <p>
            Mail :
            <a class="text-secondary" href="mailto:mail@mail.com"
              >mail@mail.com</a
            >
          </p>
          <p>
            Tel :
            <a class="text-secondary" href="tel:+90(500)500 5050"
              >+90(500)500 5050</a
            >
          </p>
          <p>
            Adress : Ayazağa, Azerbaycan Cd. No: 4/a, 34396 Sarıyer/İstanbul
          </p>
          <div class="hori">
            <div>Sosyal Medya Hesaplarımız :</div>
            <div>
              <a href="#" target="_blank" class="text-secondary">
                <q-icon size="sm" name="mdi-instagram" />
              </a>
              <a href="#" target="_blank" class="text-secondary">
                <q-icon size="sm" name="eva-linkedin-outline" />
              </a>
            </div>
          </div>
          <p></p>
        </address>
      </div>

      <q-separator dark vertical />
      <!--- Before --->

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.3384622483927!2d28.98383681557524!3d41.10529862139746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab596fc35b96b%3A0x449d3c8457352b33!2zxLBzdGlueWUgw5xuaXZlcnNpdGVzaSBWYWRpIEthbXDDvHPDvA!5e0!3m2!1sen!2str!4v1642277973961!5m2!1sen!2str"
          class="map"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </footer>
</template>


<script>
import { ref } from "vue";
export default {
  data() {
    return {
      slide: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
};
</script>

<style scoped>
.a {
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
}
.a > div {
  width: calc(50% - 1px);
  padding: 10px;
}
h2 {
  border-start-end-radius: 20px;
  width: 100%;
  padding: 40px;
  padding-bottom: 0px;
}
a {
  text-decoration: none;
  color: black;
}
.map {
  width: 100%;
  height: 50vh;
  border: 0;
}
.hori {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.hori > div {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
}
.hori > div > a {
  margin: auto;
}
</style>

