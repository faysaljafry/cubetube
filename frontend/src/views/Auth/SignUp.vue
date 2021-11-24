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
    <Card style="width: 30rem; padding: 2rem">
      <template #header>
        <h1 class="text-2xl">CubeTube</h1>
        <h3>Sign Up</h3>
      </template>
      <template #content>
        <form ref="form">
          <div class="p-formgroup-inline">
            <div class="p-field">
              <label for="channelName *" class="p-sr-only">Full Name</label>
              <!-- <Field name="channelName" :rules="isRequired"> -->
              <InputText
                id="channelName"
                name="channelName"
                v-model="channelName"
                type="text"
                class="display-4 mb-4 min-w-full"
                placeholder="Channel Name"
              />
              <span> {{ errorMessage }}</span>
              <!-- </Field> -->
            </div>
            <!-- <div class="p-formgroup-inline"> -->
            <div class="p-field">
              <label for="email" class="p-sr-only">Email</label>
              <InputText
                id="email"
                v-model="email"
                type="email"
                class="display-4 mb-4 min-w-full"
                placeholder="Email"
                required
              />
              <!-- </div>
          <div class="p-field"> -->
              <label for="Password" class="p-sr-only">Password</label>
              <InputText
                id="password"
                v-model="password"
                type="password"
                class="min-w-full"
                placeholder="Password"
              />
              <label for="Password" class="p-sr-only mb-3">Password</label>
              <InputText
                id="c_password"
                v-model="confirmPassword"
                type="password"
                class="min-w-full"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <Button
            type="button"
            @click="signUp"
            class="min-w-full"
            label="Sign Up"
          />
        </form>
        <Button type="link" label="Forgot Password?" class="p-button-link" />
      </template>
      <template #footer>
        <router-link to="signin">
          <div style="text-align: end">
            <Button type="link" label="Sign In Instead" class="p-button-link" />
          </div>
        </router-link>
      </template>
    </Card>

    <!-- <Form v-slot="{ errors }">
      <Field name="field" :rules="isRequired" />
      <span> {{ errors.field }}</span>
    </Form> -->
  </div>
</template>

<script>
import { useField } from 'vee-validate';
export default {
  name: 'SignUp',
  setup() {
    const isRequired = (value) => (value ? true : 'This field is required');
    const { value, errorMessage } = useField('channelName', isRequired);
    return {
      value,
      errorMessage,
    };
  },
  data: () => ({
    email: '',
    channelName: '',
    password: '',
    confirmPassword: '',
    loading: false,
  }),
  components: {
    useField,
  },
  methods: {
    async signUp(e) {
      e.preventDefault();
      console.log('In Sign Up Function', this.email);
      this.loading = true;

      const data = await this.$store
        .dispatch('signUp', {
          email: this.email,
          channelName: this.channelName,
          password: this.password,
        })
        .catch((err) => {
          this.loading = false;
          console.log('Error Occured', err.response.data.error);
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
