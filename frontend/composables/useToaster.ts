import {useToast} from "~/components/ui/toast";
import type {Toast} from "~/components/ui/toast/use-toast";

export const useToaster = (props: Toast, type: string) => {
  const toast = useToast()
  toast.toast({
    duration: 2000,
    variant: type === 'error' ? 'destructive': 'default',
    class: type === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600',
    ...props
  })
}
