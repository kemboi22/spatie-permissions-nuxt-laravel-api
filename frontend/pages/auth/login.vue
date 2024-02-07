<script setup lang="ts">
import type {LoginUser} from "~/types";
import {useAuthStore} from "~/Store/useAuthStore";

definePageMeta({
  layout: 'auth'
})
const authStore = useAuthStore()
const form = ref<LoginUser>(<LoginUser>{})
</script>

<template>
  <form class="space-y-4 md:space-y-6" @submit.prevent="authStore.login(form)">
    <div>
      <Label>Email</Label>
      <Input v-model="form.email"/>
    </div>
    <div>
      <Label>Password</Label>
      <Input type="password" v-model="form.password"/>
    </div>
    <div>
      <Button class="w-full" type="submit">Login</Button>
    </div>

    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Don’t have an account yet?
      <NuxtLink to="/auth/register" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
        Sign up
      </NuxtLink>
    </p>
  </form>
</template>

<style scoped>

</style>
