<template>
  <AuthForm title="Signup" link="/login" button="Sign Up" alterButton="Sign In" v-bind:fields="fields"></AuthForm>
</template>

<script>
import AuthForm from "@/components/AuthForm";

export default {
  name: "Register.vue",
  data: () => {
    return {
      fields: [
        {
          name: '',
          type: 'text',
          placeholder: 'Username',
        },
        {
          email: '',
          type: 'email',
          placeholder: 'Email',
        },
        {
          password: '',
          type: 'text',
          placeholder: 'Password',
        },
      ]
    }
  },
  components: {
    AuthForm
  }
}
</script>

<style scoped>

</style>