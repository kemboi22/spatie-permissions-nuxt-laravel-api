import type {UseFetchOptions} from "#app";
import {useAuthStore} from "~/Store/useAuthStore";

export const useApiFetch = async<T> (url: string, options:  UseFetchOptions<T> = {} ) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.baseUrl+url
  const token = ref(useCookie('XSRF-TOKEN').value)
  const authStore = useAuthStore()
  await $fetch(config.public.baseUrl+'/sanctum/csrf-cookie')
  const response = await useFetch(baseUrl, {
    watch: false,
    ...options,
    headers: {
      Authorization: 'Bearer '+authStore.bearerToken,
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-XSRF-TOKEN": token.value as string,
      ...options.headers
    },
    credentials: "include"
  });
  return response
}
