import type {LoginUser, RegisterUser, User} from "~/types";
import {useToast} from "~/components/ui/toast";

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User>(<User>{})
    const bearerToken = ref<string>('')
    const toast = useToast()

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
            toast.toast({
                title: "Success Login",
                description: "Success"
            })
        }else {
            toast.toast({
                title: "Error",
                description: "Error",
                variant: 'destructive'
            })

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
            toast.toast({
                title: "Success Login",
                description: "Success"
            })
        }else {
            toast.toast({
                title: "Error",
                description: "Error",
                variant: 'destructive'
            })
        }
    }

    return {user, login, bearerToken, register}
})
