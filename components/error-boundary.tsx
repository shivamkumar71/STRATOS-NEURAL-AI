"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { AlertTriangle } from "lucide-react"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setHasError(true)
      setError(event.error)
    }

    window.addEventListener("error", handleError)
    return () => window.removeEventListener("error", handleError)
  }, [])

  if (hasError) {
    return (
      fallback || (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="max-w-md rounded-lg border border-destructive/50 bg-destructive/10 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-foreground">Something went wrong</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  An unexpected error occurred. Please try refreshing the page.
                </p>
                {error?.message && <p className="text-xs text-muted-foreground mt-2 font-mono">{error.message}</p>}
              </div>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 w-full px-4 py-2 bg-destructive text-white rounded-lg font-medium hover:bg-destructive/90 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    )
  }

  return <>{children}</>
}
