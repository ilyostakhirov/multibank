<template>
  <div class="login-form">
    <div class="title">Вход в систему</div>
    <div
      v-if="alert"
      class="alert alert-warning d-flex align-items-center mb-50"
      role="alert"
    >
      <div class="bi flex-shrink-0 me-2">
        <span class="icon-alert"></span>
      </div>
      <div>Неправильный логин или пароль. Пожалуйста попробуйте еще раз.</div>
    </div>
    <div class="mb-30">
      <label for="exampleFormControlInput1" class="form-label"
        >Логин или телефон</label
      >
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Введите свой логин или телефон"
      />
    </div>
    <div class="mb-30">
      <label for="passwordInput" class="form-label d-flex"
        >Пароль <a class="green-text ms-auto" href="#">Не могу войти</a></label
      >
      <div class="password-input">
        <input
          :type="type"
          class="form-control"
          id="passwordInput"
          placeholder="Введите свой пароль"
        />
        <span
          @click="showPassword"
          :class="type === 'password' ? 'icon-eye' : 'icon-eye-c'"
        ></span>
      </div>
    </div>
    <div class="d-grid mx-auto">
      <button
        @click="alert = true"
        type="button"
        class="btn btn-secondary btn-block"
      >
        Войти
      </button>
    </div>
    <div class="divider">или</div>
    <div class="links d-grid">
      <router-link to="/eimzo" class="btn btn-outline-secondary mb-15">
        <img width="30" height="30" src="/img/eimzo.svg" alt="" /><span
          >Войти через E-imzo</span
        ></router-link
      >
      <router-link to="/chooseprofile" class="btn btn-outline-secondary mb-15">
        <img width="30" height="30" src="/img/telegram.svg" alt="" /><span
          >Войти через Telegram</span
        ></router-link
      >
      <router-link to="/chooseprofile" class="btn btn-outline-secondary mb-15">
        <img width="30" height="30" src="/img/google.svg" alt="" /><span
          >Войти через Google</span
        ></router-link
      >
    </div>
    <p>
      Впервые на multibank?
      <router-link to="/register" class="green-text"
        >Зарегистрируйтесь бесплатно</router-link
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "LoginMain",
  data() {
    return {
      alert: false,
      type: "password",
    };
  },
  methods: {
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>

<style scoped></style>
