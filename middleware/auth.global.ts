import { useAuthStore } from "@/stores/auth";
import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from "~/constants/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  debugger;
  const authStore = useAuthStore();
  const { authenticated } = storeToRefs(authStore);
  const guestRoutes = ["/login", "/"];

  const access_token = useCookie(ACCESS_TOKEN_COOKIE);
  const refresh_token = useCookie(REFRESH_TOKEN_COOKIE);

  if (access_token.value) {
    authenticated.value = true;
  }

  if (!authenticated.value) {
    if (guestRoutes.includes(to.path)) {
      return true;
    }
    return navigateTo("/login");
  }

  if (authenticated.value) {
    if (guestRoutes.includes(to.path)) {
      return navigateTo("/dashboard");
    }
  }
});
