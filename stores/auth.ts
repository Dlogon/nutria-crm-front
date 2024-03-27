import { defineStore } from "pinia";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "~/constants/auth";

export interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", () => {
  const authenticated = ref(false);
  const loading = ref(false);
  const isAuthenticated = computed(() => {
    debugger;
    return (
      authenticated.value &&
      (!!useCookie(ACCESS_TOKEN_COOKIE).value ||
        !!useCookie(REFRESH_TOKEN_COOKIE).value)
    );
  });
  async function authenticateUser({
    email,
    password,
  }: UserPayloadInterface): Promise<{
    statusCode: number;
    messages: [] | string;
  }> {
    const { data, pending, error }: any = await useFetch("auth/signin", {
      baseURL: "http://localhost:8000",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: {
        email,
        password,
      },
    });

    loading.value = pending.value;

    if (error.value) {
      return {
        statusCode: error.value.statusCode,
        messages: error.value.data.message,
      };
    }
    if (data.value) {
      debugger;
      const ttlToken = data.value.access_token_ttl;
      const ttlRefreshToken = data.value.refresh_token_ttl;

      const token = useCookie(ACCESS_TOKEN_COOKIE, { maxAge: ttlToken });
      const refreshToken = useCookie(REFRESH_TOKEN_COOKIE, {
        maxAge: ttlRefreshToken,
      });
      token.value = data?.value?.access_token;
      refreshToken.value = data?.value?.refresh_token;
      authenticated.value = true;
    } else {
      authenticated.value = false;
    }
    return {
      statusCode: 200,
      messages: [],
    };
  }
  function logUserOut() {
    const token = useCookie(ACCESS_TOKEN_COOKIE);
    const refreshToken = useCookie(REFRESH_TOKEN_COOKIE);
    authenticated.value = false;
    token.value = null;
    refreshToken.value = null;
  }

  return { authenticated, isAuthenticated, authenticateUser, logUserOut };
});
