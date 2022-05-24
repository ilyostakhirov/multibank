<template>
  <div id="app" class="main-wrap row">
    <div class="left-sidebar col-md-6">
      <a
        v-if="$route.name !== 'login'"
        @click="$router.go(-1)"
        href="#"
        class="back-link"
      >
        <span class="icon-back"></span>
      </a>
      <div class="left-sidebar-wrap">
        <div class="left-sidebar-header">
          <a href="#" class="logo"><img src="/img/logo.svg" alt="" /></a>
          <b-dropdown
            variant="link"
            toggle-class="text-decoration-none"
            class="ms-auto"
          >
            <template #button-content> Русский </template>
            <b-dropdown-item href="#">Русский</b-dropdown-item>
            <b-dropdown-item href="#">O'zbekcha</b-dropdown-item>
            <b-dropdown-item href="#">English</b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="left-sidebar-content">
          <div class="left-sidebar-content-inner">
            <router-view />
          </div>
        </div>
      </div>
      <div class="left-sidebar-footer">
        <a class="mr-30" href="#">Правила и условия</a>
        <a href="#">Помощь</a>
      </div>
    </div>
    <div class="right-sidebar col-md-6">
      <div class="right-sidebar-wrap">
        <CarouselMain v-if="carousel"></CarouselMain>
        <CarouselSuccess v-else-if="success"></CarouselSuccess>
        <FeaturesSide v-else></FeaturesSide>
      </div>
      <div class="right-sidebar-footer">
        © multibank 2022. Все права защищены.
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
<script>
import FeaturesSide from "@/components/Features";
import CarouselMain from "@/components/Carousel";
import CarouselSuccess from "@/components/CarouselSuccess";
export default {
  components: { CarouselSuccess, CarouselMain, FeaturesSide },
  computed: {
    carousel() {
      return this.$route.meta.carousel;
    },
    success() {
      return this.$route.meta.successfulPage;
    },
  },
};
</script>
