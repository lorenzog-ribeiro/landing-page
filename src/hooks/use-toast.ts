import { toast as sonnerToast } from "sonner";

type ToastProps = {
    title?: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
    variant?: "default" | "success" | "error" | "warning" | "info";
};

function toast({ title, description, action, variant = "default" }: ToastProps) {
    const message = title || description || "";
    const secondaryMessage = title && description ? description : undefined;

    const toastOptions = {
        description: secondaryMessage,
        action: action
            ? {
                label: action.label,
                onClick: action.onClick,
            }
            : undefined,
    };

    switch (variant) {
        case "success":
            return sonnerToast.success(message, toastOptions);
        case "error":
            return sonnerToast.error(message, toastOptions);
        case "warning":
            return sonnerToast.warning(message, toastOptions);
        case "info":
            return sonnerToast.info(message, toastOptions);
        default:
            return sonnerToast(message, toastOptions);
    }
}

// Helper functions para manter compatibilidade
toast.success = (message: string, options?: Omit<ToastProps, "variant">) => {
    return toast({ ...options, title: message, variant: "success" });
};

toast.error = (message: string, options?: Omit<ToastProps, "variant">) => {
    return toast({ ...options, title: message, variant: "error" });
};

toast.warning = (message: string, options?: Omit<ToastProps, "variant">) => {
    return toast({ ...options, title: message, variant: "warning" });
};

toast.info = (message: string, options?: Omit<ToastProps, "variant">) => {
    return toast({ ...options, title: message, variant: "info" });
};

// Promise toast para operações assíncronas
toast.promise = sonnerToast.promise;

// Custom toast para casos específicos
toast.custom = sonnerToast.custom;

// Dismiss function
toast.dismiss = (toastId?: string | number) => {
    if (toastId) {
        sonnerToast.dismiss(toastId);
    } else {
        sonnerToast.dismiss();
    }
};

function useToast() {
    return { toast };
}

export { useToast, toast };