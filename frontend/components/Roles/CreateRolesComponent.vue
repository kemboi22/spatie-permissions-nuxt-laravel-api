<script lang="ts" setup>
import type {Permissions, Role} from "~/types";
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/vue/20/solid'

const role = ref<Role>(<Role>{})
const permissions = ref<Permissions[]>([])

const selectedPermissions = ref<Permissions[]>([])
const fetchPermissions = async () => {
  const {data, error} = await useApiFetch('/api/permissions') // @ts-ignore
  permissions.value = data.value?.data as Permissions[]
  if (error.value) {
    useToaster({
      title: "Error Occurred",
      description: "An error Occurred"
    }, "error")
  }
}
fetchPermissions()

const submit = async () => {
  const {data, error} = await useApiFetch("/api/roles", {
    method: "POST",
    body: {
      ...role.value,
      permissions: selectedPermissions.value.map((permission) => permission.id)
    }
  })
  if (!error.value)
  {
    useToaster({
      title: "Roles Created Successfully",
      description: "Roles Created Successfully"
    }, "success")
  }else {
    useToaster({
      title: "An error Occurred",
      description: "An error occurred please try again"
    }, "error")
  }
}
</script>

<template>
  <div>
    <Dialog>
      <DialogTrigger as-child>
        <Button>
          Add Role
        </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Role</DialogTitle>
          <DialogDescription>
            Create A new Role
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="col-span-full">
            <Label for="name">
              Name
            </Label>
            <Input id="name" v-model="role.name"/>
          </div>
          <div class="col-span-full">
            <Label>Sim Card Serial</Label>
            <HeadlessListbox v-model="selectedPermissions" multiple>
              <HeadlessListboxButton
                  :class="`flex  w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`">
                {{
                  selectedPermissions.length > 0 ? selectedPermissions.map((permission) => permission.name).join(', ') :
                      'Select Permission'
                }}
<!--                <Badge v-for="permission in permissions" :key="permission.id">-->
<!--                  {{ permission.name }}-->
<!--                </Badge>-->
              </HeadlessListboxButton>
              <HeadlessListboxOptions
                  class="relative overflow-y-auto max-h-[20rem] z-50 min-w-[10rem] overflow-hidden rounded-md bg-background border border-border text-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                <HeadlessListboxOption as="ul"
                                       class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                                       v-for="permission in permissions"
                                       :key="permission.id" :value="permission"
                                       v-slot="{active, selected}">
                  <li :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9 w-full']">
                                        <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                                            {{ permission.name }}
                                        </span>

                    <span v-if="selected"
                          :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                            <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                                          </span>
                  </li>
                </HeadlessListboxOption>
              </HeadlessListboxOptions>
            </HeadlessListbox>
          </div>
        </div>


        <DialogFooter>
          <Button @click.prevent="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<style scoped></style>
