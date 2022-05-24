<template>
  <carousel
    :perPage="1"
    :paginationActiveColor="'#43D498'"
    :paginationColor="'#A9B5C0'"
    :paginationSize="11"
    :paginationPadding="7"
  >
    <slide>
      <img style="max-height: 450px" src="img/phone.png" alt="" />
      <div class="mt-50">
        <h4>TRANSFERS</h4>
        <h5>Одно приложение для бизнеса</h5>
        <p>
          Создавайте виртуальную карту для оплаты услуг. <br />multicard
          поддерживает более 500 услуг.
        </p>
      </div>
      <div class="mt-20">
        <a class="mr-30" href="#"><img src="img/appstore.svg" alt="" /></a>
        <a href="#"><img src="img/googleplay.svg" alt="" /></a>
      </div>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "CarouselSuccess",
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped></style>
