<template>
  <div class="container">
    <div class="form-container">
      <h1 class="form-title">
        {{ title }}
      </h1>
      <div class="form-fields">
        <div class="form-field" v-for="field in fields">
          <input v-bind:type="field.type" v-model="field.name" v-bind:placeholder="field.placeholder" />
        </div>
      </div>
      <div class="form-buttons">
        <input class="button" v-bind:value="button" type="button" />
        <div class="divider">or</div>
        <input v-on:click="redirect" class="button alter-button" v-bind:data-link="link" v-bind:value="alterButton" type="button" />
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: "AuthForm",
  methods: {
    redirect: function () {
      this.$router.push($('.alter-button').attr('data-link'));
    }
  },
  props: {
    title: String,
    link: String,
    button: String,
    alterButton: String,
    fields: Array,
  }
}
</script>

<style scoped>
  .container {
    font-family: 'Roboto', sans-serif;

    width: 100%;
    height: 100vh;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    background: #F1F5FE;
  }

  .form-container {
    width: 100%;
    max-width: 415px;

    background: #FFFFFF;
    box-shadow: 0 5px 50px rgba(217, 229, 255);
    border-radius: 20px;
    padding: 38px 30px;
  }
  input[placeholder] {
    height: 45px;
    width: 100%;

    color: #3B5983;
    font-size: 14px;
    line-height: 16px;

    border: 2px solid #E9F2FF;
    border-radius: 5px;

    padding-left: 25px;
  }
  .form-title {
    color: #30507D;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;

    margin-bottom: 38px;
  }
  .form-field {
    margin-bottom: 13px;
  }
  .button {
    height: 35px;
    width: 100%;
    display: block;

    background: #247FFF;
    border-radius: 5px;
    border: 2px solid #E9F2FF;
    color: #FFFFFF;

    font-size: 14px;
    text-transform: uppercase;
    horiz-align: center;

    cursor: pointer;
  }
  .button:hover {
    background-color: #0D6CF2;
  }
  a.button {
    text-decoration: none;
  }
  .alter-button {
    color: #C6CFDC;
    background: #F2F6FF;
  }
  .alter-button:hover {
    background: #E2E6F0;
    color: #FFFFFF;
  }
  .divider {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #405D87;
    text-align: center;

    padding: 25px 0;
  }
</style>
