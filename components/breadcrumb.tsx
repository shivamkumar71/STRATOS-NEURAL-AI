"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface BreadcrumbProps {
  items: Array<{
    label: string
    href: string
    active?: boolean
  }>
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          <Link
            href={item.href}
            className={`hover:text-foreground transition-colors ${item.active ? "text-foreground font-medium" : ""}`}
          >
            {item.label}
          </Link>
          {index < items.length - 1 && <ChevronRight className="h-4 w-4" />}
        </div>
      ))}
    </div>
  )
}
