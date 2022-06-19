<template>
  <div class="start-background">
    <div class="start-background_item">
      <h1>{{ title }}</h1>
    </div>
    <div class="start-background_item">
      <p>{{ paragraph }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  methods: {},
  props: {
    title: String,
    paragraph: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

  .start-background {
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: column;

    align-items: center;
    justify-content: space-around;

    background-color: #DDFDFF;

    animation: bounce 1s;
  }

  .start-background_item {
    width: 50%;
    height: 50%;

    display: flex;
    flex-flow: column;

    align-items: center;
    justify-content: flex-end;
  }
  .start-background_item:last-child {
    padding-bottom: 100px;
  }

  H1 {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 32pt;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 18pt;
  }

  h1:hover {
    cursor: default;
  }
  p:hover {
    cursor: default;
  }

  /* Animations */
  @keyframes bounce {
    0%, 20%, 60%, 100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    40% {
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
    }

    80% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
    }
  }
</style>
