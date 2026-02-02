"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"

interface MatchState {
  selectedTeam: string
  selectedPatch: string
  selectedPhase: string
  selectedRole: string
  isLoading: boolean
  error: string | null
}

interface MatchContextType {
  state: MatchState
  updateTeam: (team: string) => void
  updatePatch: (patch: string) => void
  updatePhase: (phase: string) => void
  updateRole: (role: string) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  resetFilters: () => void
}

const MatchContext = createContext<MatchContextType | undefined>(undefined)

const initialState: MatchState = {
  selectedTeam: "vs",
  selectedPatch: "STRATOS 1.0 (PRO)",
  selectedPhase: "Synchronized Full",
  selectedRole: "Neural Core",
  isLoading: false,
  error: null,
}

export function MatchProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<MatchState>(initialState)

  const updateTeam = useCallback((team: string) => {
    setState((prev) => ({ ...prev, selectedTeam: team }))
  }, [])

  const updatePatch = useCallback((patch: string) => {
    setState((prev) => ({ ...prev, selectedPatch: patch }))
  }, [])

  const updatePhase = useCallback((phase: string) => {
    setState((prev) => ({ ...prev, selectedPhase: phase }))
  }, [])

  const updateRole = useCallback((role: string) => {
    setState((prev) => ({ ...prev, selectedRole: role }))
  }, [])

  const setLoading = useCallback((loading: boolean) => {
    setState((prev) => ({ ...prev, isLoading: loading }))
  }, [])

  const setError = useCallback((error: string | null) => {
    setState((prev) => ({ ...prev, error }))
  }, [])

  const resetFilters = useCallback(() => {
    setState(initialState)
  }, [])

  return (
    <MatchContext.Provider
      value={{
        state,
        updateTeam,
        updatePatch,
        updatePhase,
        updateRole,
        setLoading,
        setError,
        resetFilters,
      }}
    >
      {children}
    </MatchContext.Provider>
  )
}

export function useMatch() {
  const context = useContext(MatchContext)
  if (!context) {
    throw new Error("useMatch must be used within MatchProvider")
  }
  return context
}
