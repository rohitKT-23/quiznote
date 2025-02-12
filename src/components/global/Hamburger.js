"use client"
import { MenuIcon, XIcon } from "@/components/icons"

export default function HamburgerButton({ toggleMenu, onToggle }) {
  function handleToggleMenu() {
    onToggle(prev => (prev = !prev))
  }

  return (
    <button
      onClick={handleToggleMenu}
      className="p-2 md:hidden flex items-center justify-center bg-white border border-zinc-200 rounded-full duration-500"
      aria-label="Toggle navigation menu"
      aria-expanded={toggleMenu ? "true" : "false"}
    >
      {toggleMenu ? (
        <XIcon width={20} height={20} aria-hidden="true" />
      ) : (
        <MenuIcon width={20} height={20} aria-hidden="true" />
      )}
    </button>
  )
}
