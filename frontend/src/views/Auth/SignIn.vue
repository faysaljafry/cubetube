<template>
  <div
    id="main"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    "
  >
    <Card style="width: 30rem; padding: 2rem" :loading="loading">
      <template #header>
        <h1 class="text-2xl">CubeTube</h1>
        <h3>Sign In</h3>
      </template>
      <template #content>
        <div class="p-formgroup-inline">
          <div class="p-field">
            <label for="email" class="p-sr-only">Email</label>
            <InputText
              id="email"
              v-model="email"
              type="email"
              class="display-4 mb-4 min-w-full"
              placeholder="Email"
            />
          </div>
          <div class="p-field">
            <label for="Password" class="p-sr-only">Password</label>
            <InputText
              id="password"
              v-model="password"
              type="password"
              class="min-w-full"
              placeholder="Password"
            />
          </div>
        </div>
        <Button type="link" label="Forgot Password?" class="p-button-link" />
      </template>
      <template #footer>
        <Button
          type="button"
          :loading="loading"
          @click="signin"
          class="min-w-full"
          label="Sign In"
        />
        <div style="text-align: end">
          <router-link to="/signup"
            ><Button
              type="button"
              router
              label="Create an Account"
              class="p-button-link"
          /></router-link>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      loading: false,
    };
  },
  methods: {
    async signin(e) {
      e.preventDefault();
      console.log('This is from Sign In funtion');
      if (this.loading) return;
      this.loading = true;

      const data = await this.$store
        .dispatch('signIn', { email: this.email, password: this.password })
        .catch((err) => {
          this.loading = false;
          console.log('The Errors Are:', err);
          this.$refs.form.setErrors({
            Email: ['We dont recognize this email...'],
            Password: ['We dont Recognize this Password'],
          });
        });
      if (!data) {
        return;
      }
      const user = await this.$store
        .dispatch('getCurrentUser', data.token)
        .catch((err) => console.log(err));

      if (!user) return;
      this.loading = false;
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style scoped>
#main {
  background: #ed213a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #93291e,
    #ed213a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #93291e,
    #ed213a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
