<script lang="ts" setup>
import type {Permissions} from "~/types";

const permissions = ref<Permissions[]>([])
const fetchPermissions = async () => {
  const {data, error} = await useApiFetch('/api/permissions') // @ts-ignore
  permissions.value = data.value?.data as Permissions[]
  if (error.value)
  {
    useToaster({
      title: "Error Occurred",
      description: "An error Occurred"
    }, "error")
  }
}
fetchPermissions()
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
        <TableRow v-for="permission in permissions" :key="permission.id">
          <TableCell>{{ permission.id }}</TableCell>
          <TableCell>{{ permission.name }}</TableCell>
          <TableCell>{{ permission.guard_name }}</TableCell>
          <TableCell>
            <Button>View</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>

<style scoped></style>
