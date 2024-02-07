import type {LoginUser, RegisterUser, User} from "~/types";
import {useToaster} from "~/composables/useToaster";

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User>(<User>{})
    const bearerToken = ref<string>('')


    const login = async (loginUser: LoginUser) => {
        const {data, error, status} = await useApiFetch('/api/login', {
            method: "POST",
            body: loginUser
        })
        if (!error.value)
        {
            // @ts-ignore
            user.value = data.value?.data as User
            // @ts-ignore
            bearerToken.value = data.value?.token as string
            useToaster({
                title: "Success Login",
                description: "Success"
            }, "success")
            await navigateTo('/')
        }else {
            useToaster({
                title: "Error",
                description: "Error",
                variant: 'destructive'
            }, "error")
        }
    }

    const register = async (registerUser: RegisterUser) => {
        const {data, error, status} = await useApiFetch('/api/register', {
            method: "POST",
            body: registerUser,
        })
        if (!error.value)
        {
            // @ts-ignore
            user.value = data.value?.data as User
            // @ts-ignore
            bearerToken.value = data.value?.token as string
            useToaster({
                title: "Success Login",
                description: "Success"
            }, "success")
        }else {
            useToaster({
                title: "Error",
                description: "Error",
                variant: 'destructive'
            }, "error")
        }
    }

    const logout = async () => {
        const {data, error} = await useApiFetch('/api/logout', {
            method: "POST"
        })
        if (!error.value)
        {
            bearerToken.value = ""
            user.value = <User>{}
            useToaster({
                title: "Logged Out", // @ts-ignore
                description: data.value?.message as string,
            }, "success")
            await navigateTo("/auth/login")
        }else{
            useToaster({
                title: "Error",
                description: "Error",
                variant: 'destructive'
            }, "error")
        }
    }
    return {user, login, bearerToken, register, logout}
},{
    persist: true
})
