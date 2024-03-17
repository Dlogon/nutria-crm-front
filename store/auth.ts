import { defineStore } from "pinia";

interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      const { data, pending }: any = await useFetch(process.env.API_URL, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          password,
        },
      });
      this.loading = pending;

      if (data.value) {
        const token = useCookie("access_token");
        const refreshToken = useCookie("refresh_token");
        token.value = data?.value?.access_token;
        refreshToken.value = data?.value?.refresh_token;
        this.authenticated = true;
      }
    },
    logUserOut() {
      const token = useCookie("access_token");
      const refreshToken = refreshToken("refresh_token");
      this.authenticated = false;
      token.value = null;
    },
  },
});
