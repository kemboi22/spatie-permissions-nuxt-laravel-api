<script lang="ts" setup>
import type {Role } from "~/types";
import {DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Dialog, DialogClose, DialogTrigger} from
      "~/components/ui/dialog";

const props = defineProps<{
  isOpen: boolean,
  selectedRole: Role
}>()
const emits = defineEmits(['close'])
const roles = ref<Role>(<Role>{})
const fetchRole = async (id: number | undefined) => {
  const {data, error} = await useApiFetch('/api/roles/'+id) // @ts-ignore
  roles.value = data.value?.data as Role[]
  if (error.value)
  {
    useToaster({
      title: "Error Occurred",
      description: "An error Occurred"
    }, "error")
  }
}
watch(() => props.selectedRole, (role) => {
  fetchRole(role.id)
})
</script>

<template>
  <div>
    <Dialog :open="isOpen" class="">
      <DialogContent class="sm:max-w-[425px] max-h-[600px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Roles</DialogTitle>
          <DialogDescription>
            Selected Role {{ selectedRole.name }}
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <p>
            Role: <span>{{ selectedRole.name }}</span>
          </p>
          <p>
            Guard Name: <span>{{ selectedRole.guard_name }}</span>
          </p>
          <div>
            <Table >
              <TableHeader>
                <TableRow>
                  <TableHead>Id</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Guard Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody >
                <TableRow v-for="permission in roles.permissions" :key="permission.id">
                  <TableCell>{{ permission.id }}</TableCell>
                  <TableCell>{{ permission.name }}</TableCell>
                  <TableCell>{{ permission.guard_name }}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" @click.prevent="$emit('close')">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<style scoped></style>
