<script lang="ts" setup>
import type {Role, User} from "~/types";

definePageMeta({
  name:"users.index",
  middleware: "auth"
})
const users = ref<User[]>([])
const fetchUsers = async () => {
  const {data, error} = await useApiFetch('/api/users')
  // @ts-ignore
  users.value = data.value?.data as User[]
  if (error.value)
  {
    useToaster({
      title: "Error",
      description: "An error Occurred"
    }, "error")
  }
}
fetchUsers()


</script>

<template>
  <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="user in users" :key="user.id">
          <TableCell>{{ user.id }}</TableCell>
          <TableCell>{{ user.name }}</TableCell>
          <TableCell>{{ user.email }}</TableCell>
          <TableCell>
            <Button>View</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

  </div>
</template>

<style scoped></style>
