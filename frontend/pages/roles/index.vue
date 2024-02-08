<script lang="ts" setup>
import type {Permissions, Role, User} from "~/types";
definePageMeta({
  middleware: ['auth', 'permission'],
  name: 'roles.index'
})
const roles = ref<Role[]>([])

const fetchRoles = async () => {
  const {data, error} = await useApiFetch('/api/roles') // @ts-ignore
  roles.value = data.value?.data as Role[]
  if (error.value)
  {
    useToaster({
      title: "Error Occurred",
      description: error.value.data.message
    }, "error")
  }
}
fetchRoles()
const isViewModalOpen = ref<boolean>(false)
const selectedRole = ref<Role>(<Role>{})
const openViewModel = (role: Role) => {
  isViewModalOpen.value = true
  selectedRole.value = role
}
</script>

<template>
  <div>
    <RolesCreateRolesComponent/>
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
            <Button  @click.prevent="openViewModel(role)">View</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <RolesViewPermissionsComponent @close="() => isViewModalOpen = false" :is-open="isViewModalOpen"
                                   :selected-role="selectedRole"/>
  </div>
</template>

<style scoped></style>
