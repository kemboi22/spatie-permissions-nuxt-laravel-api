<script setup lang="ts">
import type {RegisterUser} from "~/types";
import {useAuthStore} from "~/Store/useAuthStore";

definePageMeta({
  layout: 'auth'
})
const authStore = useAuthStore()
const form = ref<RegisterUser>(<RegisterUser>{})
</script>

<template>
  <form class="space-y-4 md:space-y-6" @submit.prevent="authStore.register(form)">
    <div>
      <Label>Email</Label>
      <Input v-model="form.email"/>
    </div>
    <div>
      <Label>Password</Label>
      <Input type="password" v-model="form.password"/>
    </div>
    <div>
      <Label>Confirm Password</Label>
      <Input type="password" v-model="form.confirm_password"/>
    </div>
    <div>
      <Button class="w-full" type="submit">Register</Button>
    </div>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Already Have An Account
      <NuxtLink to="/auth/login" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
        Sign in
      </NuxtLink>
    </p>
  </form>
</template>

<style scoped>

</style>
