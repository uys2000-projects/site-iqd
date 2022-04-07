<template>
  <id-tag id="sups" />
  <section class="bg-primary">
      <h3>Suponsorlarımız</h3>
    <article>
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-avatar
            size="100px"
            font-size="52px"
            color="teal"
            text-color="white"
            icon="directions"
          />
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-avatar
            size="100px"
            font-size="52px"
            color="teal"
            text-color="white"
            icon="directions"
          />
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-avatar
            size="100px"
            font-size="52px"
            color="teal"
            text-color="white"
            icon="directions"
          />
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-avatar
            size="100px"
            font-size="52px"
            color="teal"
            text-color="white"
            icon="directions"
          />
        </q-carousel-slide>
      </q-carousel>
    </article>
  </section>
</template>
<script>
export default {
  data() {
    return {
      slide: "style",
    };
  },
};
</script>