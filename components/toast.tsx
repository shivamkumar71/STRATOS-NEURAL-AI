"use client"

import { AlertCircle, CheckCircle2, Info, X } from "lucide-react"
import { useEffect, useState } from "react"

export type ToastType = "success" | "error" | "info" | "warning"

interface ToastMessage {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
}

let toastId = 0
let listeners: Array<(toast: ToastMessage) => void> = []

export function useToast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const removeToast = (id: string) => setToasts((prev) => prev.filter((t) => t.id !== id))

  useEffect(() => {
    const handleToast = (toast: ToastMessage) => {
      setToasts((prev) => [...prev, toast])

      if (toast.duration !== Number.POSITIVE_INFINITY) {
        setTimeout(() => {
          removeToast(toast.id)
        }, toast.duration || 3000)
      }
    }

    listeners.push(handleToast)
    return () => {
      listeners = listeners.filter((l) => l !== handleToast)
    }
  }, [])

  return {
    toasts,
    removeToast,
  }
}

export function showToast(type: ToastType, title: string, message?: string, duration?: number) {
  const id = String(toastId++)
  const toast: ToastMessage = { id, type, title, message, duration }
  listeners.forEach((listener) => listener(toast))
}

export function Toast({ toast, onClose }: { toast: ToastMessage; onClose: () => void }) {
  const icons = {
    success: <CheckCircle2 className="h-5 w-5" />,
    error: <AlertCircle className="h-5 w-5" />,
    info: <Info className="h-5 w-5" />,
    warning: <AlertCircle className="h-5 w-5" />,
  }

  const colors = {
    success: "bg-success/10 border-success/20 text-success",
    error: "bg-destructive/10 border-destructive/20 text-destructive",
    info: "bg-primary/10 border-primary/20 text-primary",
    warning: "bg-warning/10 border-warning/20 text-warning",
  }

  return (
    <div
      className={`rounded-lg border p-4 flex items-start gap-3 animate-in slide-in-from-top-2 ${colors[toast.type]}`}
    >
      <div className="flex-shrink-0 mt-0.5">{icons[toast.type]}</div>
      <div className="flex-1">
        <p className="font-semibold text-sm">{toast.title}</p>
        {toast.message && <p className="text-xs mt-1 opacity-80">{toast.message}</p>}
      </div>
      <button
        onClick={onClose}
        className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

export function ToastContainer() {
  const { toasts, removeToast } = useToast()

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-sm">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  )
}
