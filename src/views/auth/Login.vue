<template>
  <AuthForm title="Login" link="/" button="Sign In" alterButton="Sing Up" v-bind:fields="fields"></AuthForm>
</template>

<script>
import AuthForm from "@/components/AuthForm";

export default {
  name: "Login",
  data: () => {
    return {
      fields: [
        {
          email: '',
          type: 'email',
          placeholder: 'Email',
        },
        {
          password: '',
          type: 'password',
          placeholder: 'Password',
        }
      ]
    }
  },
  components: {AuthForm},
}
</script>

<style scoped>

</style>