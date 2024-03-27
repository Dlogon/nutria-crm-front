<template>
  <div
    class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
    v-bind:style="{ 'background-image': 'url(' + backGroundUrl + ')' }"
  >
    <div
      class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8"
    >
      <div class="text-white">
        <div class="mb-8 flex flex-col items-center">
          <h1 class="mb-2 text-2xl">Nutria CRM</h1>
          <span class="text-gray-300">Enter Login Details</span>
        </div>
        <form action="#" @submit.prevent="login">
          <div class="mb-4 tex</form>t-lg flex flex-col">
            <label htmlFor="">Email</label>

            <InputText
              class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="text"
              name="username"
              placeholder="id@email.com"
              v-model="formData.email"
              :vname="'email'"
              :v$="v$"
            />
          </div>

          <div class="mb-4 text-lg flex flex-col">
            <label htmlFor="">Pass</label>

            <InputText
              class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="text"
              name="password"
              placeholder="***"
              v-model="formData.password"
              :vname="'password'"
              :v$="v$"
            />
          </div>

          <div class="mt-8 flex justify-center text-lg text-black">
            <button
              type="submit"
              class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const backGroundUrl =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
import { required, email, sameAs, minLength } from "@vuelidate/validators";
import { useAuthStore, type UserPayloadInterface } from "@/stores/auth";
import { useVuelidate } from "@vuelidate/core";

const snackbar = useSnackbar();
const formData = reactive({
  email: "",
  password: "",
});

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  };
});

const v$ = useVuelidate(rules, formData);
const authStore = useAuthStore();

const login = async () => {
  v$.value.$validate();
  if (!!v$.value.$error) {
    snackbar.add({
      type: "error",
      text: "please fix the form errors before submitting.",
    });
    return;
  }
  const payload: UserPayloadInterface = {
    email: formData.email,
    password: formData.password,
  };
  const loginResult = await authStore.authenticateUser(payload);
  if (loginResult) {
    if (loginResult.statusCode == 200) {
      return navigateTo("/dashboard");
    }

    const messages = loginResult.messages;
    if (typeof messages === "object" && messages instanceof Array) {
      messages.forEach((element) => {
        snackbar.add({
          type: loginResult.statusCode == 200 ? "success" : "error",
          text: element,
        });
      });
    } else
      snackbar.add({
        type: "error",
        text: messages,
      });
  }
};

definePageMeta({
  layout: "guest",
});
</script>

<style></style>
