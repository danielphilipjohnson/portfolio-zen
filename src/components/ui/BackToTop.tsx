"use client"

import { cn } from "@/lib/utils"

interface BackToTopProps {
  className?: string
}

const BackToTop = ({ className }: BackToTopProps) => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      href="#"
      className={cn(
        "inline-flex items-center gap-1 text-xs font-medium text-stone-500 hover:text-stone-700 hover:underline transition-colors",
        className
      )}
      onClick={handleScrollToTop}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleScrollToTop(e)
        }
      }}
      aria-label="Scroll back to top of page"
      role="button"
      tabIndex={0}
    >
      Back to Top
      <span aria-hidden="true">↑</span>
    </a>
  )
}

export default BackToTop 