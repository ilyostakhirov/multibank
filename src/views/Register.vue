<template>
  <div>
    <div class="title">Регистрация в системе</div>
    <div class="grey-text f-18 mb-30">Выберите тип регистрации</div>
    <div class="choose-company d-grid">
      <router-link to="/registerwitheimzo" class="btn btn-light mb-30">
        <span class="img">
          <img width="30" height="30" src="img/e-imzo.svg" alt="" />
        </span>
        <div class="text">
          <strong>РЕГИСТРАЦИЯ С ЭЦП (E-IMZO)</strong>
          <span>ДОСТУП КО ВСЕМ СЕРВИСАМ</span>
          <span>Идентифицированный</span>
        </div>
      </router-link>
      <router-link to="/registerwithouteimzo" class="btn btn-light mb-30">
        <span class="img">
          <img width="30" height="30" src="img/tel.svg" alt="" />
        </span>
        <div class="text">
          <strong>РЕГИСТРАЦИЯ БЕЗ ЭЦП (E-IMZO)</strong>
          <span>ОГРАНИЧЕННЫЙ ДОСТУП</span>
          <span>Неидентифицированные</span>
        </div>
      </router-link>
    </div>
    <p>
      Уже зарегестрированы?
      <router-link to="/" class="green-text">Войти</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
};
</script>

<style scoped></style>
