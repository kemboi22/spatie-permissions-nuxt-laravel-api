import {useAuthStore} from "~/Store/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    const permissions = authStore.user.permissions
    if (permissions)
    {
        for (let i = 0; i < permissions.length; i++)
        {
            if (permissions[i].name === to.name)
            {
                navigateTo(to.fullPath)
                break
            }
        }
        navigateTo('/')
    }else if (permissions == undefined)
    {
        navigateTo(from.fullPath)
    }
    return navigateTo('/')
})
