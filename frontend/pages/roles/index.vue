<script lang="ts" setup>
import type {Permissions, Role} from "~/types";

const roles = ref<Role[]>([])

const fetchRoles = async () => {
  const {data, error} = await useApiFetch('/api/roles') // @ts-ignore
  roles.value = data.value?.data as Role[]
  if (error.value)
  {
    useToaster({
      title: "Error Occurred",
      description: "An error Occurred"
    }, "error")
  }
}
fetchRoles()
</script>

<template>
  <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Guard Name</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="role in roles" :key="role.id">
          <TableCell>{{ role.id }}</TableCell>
          <TableCell>{{ role.name }}</TableCell>
          <TableCell>{{ role.guard_name }}</TableCell>
          <TableCell>
            <Button>View</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>

<style scoped></style>
