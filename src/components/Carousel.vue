<template>
  <carousel
    :perPage="1"
    :paginationActiveColor="'#43D498'"
    :paginationColor="'#A9B5C0'"
    :paginationSize="11"
    :paginationPadding="7"
  >
    <slide>
      <img src="img/card.svg" alt="" />
      <div class="mt-50">
        <h4>TRANSFERS</h4>
        <h5>Одно приложение для бизнеса</h5>
        <p>
          Создавайте виртуальную карту для оплаты услуг. <br />multicard
          поддерживает более 500 услуг.
        </p>
      </div>
    </slide>
    <slide>
      <img src="img/card.svg" alt="" />
      <div class="mt-50">
        <h4>TRANSFERS</h4>
        <h5>Одно приложение для бизнеса</h5>
        <p>
          Создавайте виртуальную карту для оплаты услуг. <br />multicard
          поддерживает более 500 услуг.
        </p>
      </div>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "CarouselMain",
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped></style>
