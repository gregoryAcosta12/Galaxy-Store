"use client"

import dynamic from 'next/dynamic'

// Carga framer-motion solo en el cliente
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

const MotionSpan = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.span),
  { ssr: false }
)

const MotionButton = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.button),
  { ssr: false }
)

const MotionArticle = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.article),
  { ssr: false }
)

const MotionAside = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.aside),
  { ssr: false }
)

const MotionSection = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.section),
  { ssr: false }
)

const MotionHeader = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.header),
  { ssr: false }
)

const MotionFooter = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.footer),
  { ssr: false }
)

const MotionA = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.a),
  { ssr: false }
)

const MotionUl = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.ul),
  { ssr: false }
)

const MotionLi = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.li),
  { ssr: false }
)

const MotionP = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.p),
  { ssr: false }
)

const MotionForm = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.form),
  { ssr: false }
)

const MotionH1 = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.h1),
  { ssr: false }
)

const MotionH2 = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.h2),
  { ssr: false }
)

const MotionH3 = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.h3),
  { ssr: false }
)

const MotionH4 = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.h4),
  { ssr: false }
)

const MotionImg = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.img),
  { ssr: false }
)

const MotionNav = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.nav),
  { ssr: false }
)

const MotionMain = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.main),
  { ssr: false }
)

export {
  MotionDiv,
  MotionSpan,
  MotionButton,
  MotionArticle,
  MotionAside,
  MotionSection,
  MotionHeader,
  MotionFooter,
  MotionA,
  MotionUl,
  MotionLi,
  MotionP,
  MotionForm,
  MotionH1,
  MotionH2,
  MotionH3,
  MotionH4,
  MotionImg,
  MotionNav,
  MotionMain
}