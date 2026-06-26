"use client"

import { motion } from "framer-motion"

// Exporta todos los componentes de motion como client components
export const MotionDiv = motion.div
export const MotionSection = motion.section
export const MotionArticle = motion.article
export const MotionSpan = motion.span
export const MotionButton = motion.button
export const MotionUl = motion.ul
export const MotionLi = motion.li
export const MotionHeader = motion.header
export const MotionFooter = motion.footer
export const MotionA = motion.a
export const MotionAside = motion.aside
export const MotionH1 = motion.h1
export const MotionP = motion.p
export const MotionForm = motion.form

// Hooks y utilidades de animación
export const useAnimation = () => {
  return {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    },
    fadeInDelay: (delay: number) => ({
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay }
    }),
    staggerContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    },
    staggerItem: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    scaleOnHover: {
      whileHover: { scale: 1.05 },
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  }
}