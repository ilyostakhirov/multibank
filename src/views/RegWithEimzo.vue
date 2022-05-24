<template>
  <div>
    <div class="title">Регистрация в системе</div>
    <div class="grey-text f-18 mb-30">Выберите ключ ЭЦП</div>
    <div class="choose-company d-grid">
      <router-link to="/register2" class="btn btn-light mb-30 active">
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
      </router-link>
      <a class="btn btn-light mb-30" href="#">
        <span class="img">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66669 36.6667C6.66669 33.1305 8.07144 29.7391 10.5719 27.2386C13.0724 24.7381 16.4638 23.3334 20 23.3334C23.5362 23.3334 26.9276 24.7381 29.4281 27.2386C31.9286 29.7391 33.3334 33.1305 33.3334 36.6667H30C30 34.0145 28.9465 31.471 27.0711 29.5956C25.1957 27.7203 22.6522 26.6667 20 26.6667C17.3479 26.6667 14.8043 27.7203 12.929 29.5956C11.0536 31.471 10 34.0145 10 36.6667H6.66669ZM20 21.6667C14.475 21.6667 10 17.1917 10 11.6667C10 6.14169 14.475 1.66669 20 1.66669C25.525 1.66669 30 6.14169 30 11.6667C30 17.1917 25.525 21.6667 20 21.6667ZM20 18.3334C23.6834 18.3334 26.6667 15.35 26.6667 11.6667C26.6667 7.98335 23.6834 5.00002 20 5.00002C16.3167 5.00002 13.3334 7.98335 13.3334 11.6667C13.3334 15.35 16.3167 18.3334 20 18.3334Z"
              fill="#A6B2BD"
            ></path>
          </svg>
        </span>
        <div class="text">
          <strong>ФИЗИЧЕСКОЕ ЛИЦО</strong>
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
      </a>
      <a class="btn btn-light mb-30" href="#">
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
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegWithEimzo",
};
</script>

<style scoped></style>
