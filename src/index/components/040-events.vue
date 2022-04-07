<template>
  <id-tag id="events" />
  <section class="rounded-borders">
    <h3>Etkinliklerimiz</h3>
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
        <q-carousel-slide name="style" class="q-pa-none">
          <q-scroll-area class="fit">
            <div class="column no-wrap flex-center q-carousel--padding">
              <div class="q-mt-md">
                <slot />
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
        <q-carousel-slide name="asdss" class="q-pa-none">
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
      slide: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
};
</script>

<style scoped>
article {
  width: 100%;
  padding: 40px 20px;
}
h2 {
  border-start-end-radius: 20px;
  width: 100%;
  padding: 40px;
  padding-bottom: 0px;
}
p {
  text-align: center;
}
</style>
