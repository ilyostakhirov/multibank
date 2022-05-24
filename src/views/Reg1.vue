<template>
  <div>
    <div class="title mb-20">Регистрация в системе</div>
    <div class="login-form">
      <div class="choose-company d-grid">
        <div to="/register2" class="btn btn-light mb-30 active">
          <span class="img">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.6666 35H3.33331V31.6667H4.99998V6.66667C4.99998 6.22464 5.17557 5.80072 5.48814 5.48816C5.8007 5.17559 6.22462 5 6.66665 5H30C30.442 5 30.8659 5.17559 31.1785 5.48816C31.4911 5.80072 31.6666 6.22464 31.6666 6.66667V15H35V31.6667H36.6666V35ZM28.3333 31.6667H31.6666V18.3333H21.6666V31.6667H25V21.6667H28.3333V31.6667ZM28.3333 15V8.33333H8.33331V31.6667H18.3333V15H28.3333ZM11.6666 18.3333H15V21.6667H11.6666V18.3333ZM11.6666 25H15V28.3333H11.6666V25ZM11.6666 11.6667H15V15H11.6666V11.6667Z"
                fill="#A6B2BD"
              ></path>
            </svg>
          </span>
          <div class="text">
            <strong>OOO MICROS24</strong>
            <span>ВЕКСЛЕР ВИКТОР АЛЕКСАНДРОВИЧ</span>
            <span>123456789</span>
          </div>
          <b-button
            variant="link"
            class="btn-tooltip"
            v-b-popover.hover.bottomright="
              'Срок действия сертификата:\n' + '15.12.2022 - 15.12.2025\n!'
            "
          >
            <span class="icon-alert"></span>
          </b-button>
        </div>
      </div>
      <div class="mb-20">
        <label for="exampleFormControlInput2" class="form-label">E-mail</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput2"
          placeholder="Введите ваш E-mail"
        />
      </div>
      <div class="mb-20">
        <label for="exampleFormControlInput3" class="form-label"
          >Номер телефона</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput3"
          placeholder="Введите ваш номер телефона"
        />
      </div>
      <div class="mb-20">
        <label for="exampleFormControlInput4" class="form-label">Логин</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput4"
          placeholder="Придумайте логин"
        />
      </div>
      <div class="mb-20 row">
        <div class="col-6">
          <label for="passwordInput" class="form-label">Пароль</label>
          <div class="password-input">
            <input
              :type="type"
              class="form-control"
              id="passwordInput"
              placeholder="Пароль"
            />
            <span
              @click="showPassword"
              :class="type === 'password' ? 'icon-eye' : 'icon-eye-c'"
            ></span>
          </div>
        </div>
        <div class="col-6">
          <label for="passwordInput1" class="form-label"
            >Подтвердите пароль</label
          >
          <div class="password-input">
            <input
              :type="type"
              class="form-control"
              id="passwordInput1"
              placeholder="Пароль"
            />
            <span
              @click="showPassword"
              :class="type === 'password' ? 'icon-eye' : 'icon-eye-c'"
            ></span>
          </div>
        </div>
      </div>
      <div class="form-check mb-20">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          I agree to all the <a class="green-text" href="#">Terms</a> and
          <a class="green-text" href="#">Privacy policy</a>
        </label>
      </div>
      <div class="d-grid mx-auto mb-30">
        <router-link to="/success" class="btn btn-secondary btn-block">
          Зарегистрироваться
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage2",
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
