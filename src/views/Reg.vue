<template>
  <div>
    <div class="title mb-20">Регистрация в системе</div>
    <div class="login-form">
      <div class="mb-20">
        <label class="form-label">ФИО</label>
        <div class="row">
          <div class="col-4">
            <input type="text" class="form-control" placeholder="Фамилия" />
          </div>
          <div class="col-4">
            <input type="text" class="form-control" placeholder="Имя" />
          </div>
          <div class="col-4">
            <input type="text" class="form-control" placeholder="Отчество" />
          </div>
        </div>
      </div>
      <div class="mb-20">
        <label for="exampleFormControlInput2" class="form-label"
          >Наименование компании</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput2"
          placeholder="Введите наименование вашей компании"
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
  name: "RegisterPage1",
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
