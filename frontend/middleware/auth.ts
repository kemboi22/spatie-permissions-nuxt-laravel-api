import {useAuthStore} from "~/Store/useAuthStore";
import type {User} from "~/types";

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    if (authStore.bearerToken === ''  || !authStore.user)
    {
        return navigateTo("/auth/login")
    }
})
