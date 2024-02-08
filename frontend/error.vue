<script setup lang="ts">
import {buttonVariants} from "~/components/ui/button/index.ts";
import type {NuxtError} from "#app";
defineProps({
  error: Object as () => NuxtError
})
onBeforeMount(() => {
  clearError()
})
</script>

<template>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <Card>
      <CardHeader>
        <CardTitle>
          An Error Occurred Check The error Below
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div class="text-2xl space-y-2">
          <h1 class="font-bold">Dang</h1>
          <p>It looks like something broke.</p>
          <p>Sorry about that.</p>
          <p> <span class="font-bold font-mono">{{ error?.message }}</span></p>
          <NuxtLink to="/" :class="buttonVariants({variant: 'default'})">Back To Dashboard</NuxtLink>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>

</style>
