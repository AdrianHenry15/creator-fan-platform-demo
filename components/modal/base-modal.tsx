"use client"

import type { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export type BaseModalProps = {
  title: string
  children: ReactNode
  onClose: () => void
  footer?: ReactNode
}

export default function BaseModal({
  title,
  children,
  onClose,
  footer,
}: BaseModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="
          fixed inset-0 z-50
          flex items-end md:items-center justify-center
          bg-black/70 backdrop-blur-sm
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="
            w-full md:max-w-md
            max-h-[90vh]
            flex flex-col
            rounded-t-xl md:rounded-xl
            border border-gray-800
            bg-gray-950 shadow-2xl
          ">
          {/* Header */}
          <div className="flex items-center justify-between px-4 md:px-5 py-4 border-b border-gray-800">
            <h2 className="text-sm font-semibold tracking-wide">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition">
              <X size={16} />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-4 md:px-5 py-4 space-y-4">
            {children}
          </div>

          {/* Footer (Sticky) */}
          {footer && (
            <div className="px-4 md:px-5 py-4 border-t border-gray-800">
              {footer}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
