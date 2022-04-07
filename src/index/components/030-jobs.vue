<template>
  <id-tag id="jobs" />
  <section elevated class="bg-primary" >
    <h3>Çalışmalarımız</h3>
    <article>
      <q-carousel
        v-model="slide"
        swipeable
        animated
        arrows
        navigation
        control-type="regular"
        control-color="white"
        control-text-color="grey-8"
        height="50vh"
        class="rounded-borders"
      >
        <q-carousel-slide name="1" class="q-pa-none">
          <q-scroll-area class="fit">
            <div class="column no-wrap flex-center q-carousel--padding">
              <div class="q-mt-md">
                {{ lorem }}
              </div>
              <div class="q-mt-md">
                {{ lorem }}
              </div>
              <div class="q-mt-md">
                {{ lorem }}
              </div>
              <div class="q-mt-md">
                {{ lorem }}
              </div>
              <div class="q-mt-md">
                {{ lorem }}
              </div>
            </div>
          </q-scroll-area>
        </q-carousel-slide><q-carousel-slide name="2" class="q-pa-none">
          <q-scroll-area class="fit">
            <div class="column no-wrap flex-center q-carousel--padding">
              <div class="q-mt-md">
                {{ lorem }}
              </div>
              <div class="q-mt-md">
                {{ lorem }}
              </div>
              <div class="q-mt-md">
                {{ lorem }}
              </div>
              <div class="q-mt-md">
                {{ lorem }}
              </div>
              <div class="q-mt-md">
                {{ lorem }}
              </div>
            </div>
          </q-scroll-area>
        </q-carousel-slide>
      </q-carousel>
    </article>
  </section>
</template>


<script>
import { ref } from "vue";
export default {
  data() {
    return {
      slide: ref("1"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
};
</script>

<style scoped>

h2 {
  width: 100%;
  padding: 40px;
}
p {
  text-align: center;
}
</style>
