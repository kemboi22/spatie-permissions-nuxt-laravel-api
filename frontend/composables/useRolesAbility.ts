import {useAuthStore} from "~/Store/useAuthStore";

export const useRolesAbility = (routeName: string) => {
    const authStore = useAuthStore()
    const permissions = authStore.user.permissions
    if (permissions) {
       return !!permissions.find(permission => permission.name == routeName);
    }
    return false
}
