<template>
  <div :class="{'start-background': true, 'swipe': disabled}" v-on:click="swipeTheStartPage">
    <div class="start-background_item">
      <h1>{{ title }}</h1>
    </div>
    <div class="start-background_item">
      <p>{{ paragraph }}</p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'StartPage',
  data: () => {
    return {
      title: 'Blo',
      paragraph: 'click to unlock',
      disabled: false
    }
  },
  methods: {
    swipeTheStartPage: function () {
      this.disabled = true;

      setTimeout(() => {
        $('.start-background').css({
          'display': 'none'
        });

        this.disabled = false;
      }, 400);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .start-background {
    width: 100%;
    height: 100%;

    position: absolute;
    display: flex;
    flex-flow: column;

    align-items: center;
    justify-content: space-around;

    background-color: #DDFDFF;

    animation: bounce 1s;
  }
  .swipe {
    animation: swiping 0.5s;
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

  @keyframes swiping {
    from {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    to {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }
</style>
