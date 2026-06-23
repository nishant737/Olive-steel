/**
 * ObfuscatedContact Component
 * Renders email and phone numbers in an obfuscated way to prevent bot harvesting
 * Text is encoded via ROT47 and rendered as-is to hide from regex patterns
 */

import { useEffect, useRef } from 'react'
import { encodeROT47, decodeROT47, CONTACT_INFO } from '../utils/contactObfuscation'

/**
 * Obfuscated Email Link
 * Displays encoded text that decodes on hover/focus
 */
export function ObfuscatedEmail({ className = '' }) {
  const linkRef = useRef(null)
  const encoded = encodeROT47(CONTACT_INFO.email)

  useEffect(() => {
    const link = linkRef.current
    if (!link) return

    // Decode on hover
    const handleMouseEnter = () => {
      link.textContent = CONTACT_INFO.email
    }

    // Re-encode when mouse leaves (to hide from bots that read DOM)
    const handleMouseLeave = () => {
      link.textContent = encoded
    }

    // Decode on focus for keyboard navigation
    const handleFocus = () => {
      link.textContent = CONTACT_INFO.email
    }

    const handleBlur = () => {
      link.textContent = encoded
    }

    link.addEventListener('mouseenter', handleMouseEnter)
    link.addEventListener('mouseleave', handleMouseLeave)
    link.addEventListener('focus', handleFocus)
    link.addEventListener('blur', handleBlur)

    return () => {
      link.removeEventListener('mouseenter', handleMouseEnter)
      link.removeEventListener('mouseleave', handleMouseLeave)
      link.removeEventListener('focus', handleFocus)
      link.removeEventListener('blur', handleBlur)
    }
  }, [encoded])

  return (
    <a
      ref={linkRef}
      href={`mailto:${CONTACT_INFO.email}`}
      className={className}
      title="Send us an email"
      aria-label="Send email"
    >
      {encoded}
    </a>
  )
}

/**
 * Obfuscated Phone Link
 * Displays encoded text that decodes on hover/focus
 */
export function ObfuscatedPhone({ className = '' }) {
  const linkRef = useRef(null)
  const encoded = encodeROT47(CONTACT_INFO.phoneDisplay)

  useEffect(() => {
    const link = linkRef.current
    if (!link) return

    // Decode on hover
    const handleMouseEnter = () => {
      link.textContent = CONTACT_INFO.phoneDisplay
    }

    // Re-encode when mouse leaves
    const handleMouseLeave = () => {
      link.textContent = encoded
    }

    // Decode on focus
    const handleFocus = () => {
      link.textContent = CONTACT_INFO.phoneDisplay
    }

    const handleBlur = () => {
      link.textContent = encoded
    }

    link.addEventListener('mouseenter', handleMouseEnter)
    link.addEventListener('mouseleave', handleMouseLeave)
    link.addEventListener('focus', handleFocus)
    link.addEventListener('blur', handleBlur)

    return () => {
      link.removeEventListener('mouseenter', handleMouseEnter)
      link.removeEventListener('mouseleave', handleMouseLeave)
      link.removeEventListener('focus', handleFocus)
      link.removeEventListener('blur', handleBlur)
    }
  }, [encoded])

  return (
    <a
      ref={linkRef}
      href={`tel:${CONTACT_INFO.phone}`}
      className={className}
      title="Call us"
      aria-label="Call us"
    >
      {encoded}
    </a>
  )
}

/**
 * Obfuscated Email Text (for non-linked display)
 * Useful for privacy policy and terms pages
 */
export function ObfuscatedEmailText({ className = '' }) {
  const spanRef = useRef(null)
  const encoded = encodeROT47(CONTACT_INFO.email)

  useEffect(() => {
    const span = spanRef.current
    if (!span) return

    // Show decoded on interaction
    const handleMouseEnter = () => {
      span.textContent = CONTACT_INFO.email
    }

    const handleMouseLeave = () => {
      span.textContent = encoded
    }

    span.addEventListener('mouseenter', handleMouseEnter)
    span.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      span.removeEventListener('mouseenter', handleMouseEnter)
      span.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [encoded])

  return (
    <span ref={spanRef} className={className} title="support@olivesteel.com">
      {encoded}
    </span>
  )
}

/**
 * Obfuscated Phone Text (for non-linked display)
 */
export function ObfuscatedPhoneText({ className = '' }) {
  const spanRef = useRef(null)
  const encoded = encodeROT47(CONTACT_INFO.phone)

  useEffect(() => {
    const span = spanRef.current
    if (!span) return

    const handleMouseEnter = () => {
      span.textContent = CONTACT_INFO.phone
    }

    const handleMouseLeave = () => {
      span.textContent = encoded
    }

    span.addEventListener('mouseenter', handleMouseEnter)
    span.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      span.removeEventListener('mouseenter', handleMouseEnter)
      span.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [encoded])

  return (
    <span ref={spanRef} className={className} title={CONTACT_INFO.phone}>
      {encoded}
    </span>
  )
}
