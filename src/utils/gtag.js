export const LABELS = {
  contactForm: 'DZbzCLze1NOcEO21374D',
  whatsappClick: 'xJC9CPf8jtUcEO21374D'
}

export function trackConversion(label, options = {}) {
  if (typeof window.gtag !== 'function') {
    if (options.callback) {
      options.callback()
    }
    return
  }

  let callbackFired = false
  const invokeCallback = () => {
    if (!callbackFired && options.callback) {
      callbackFired = true
      options.callback()
    }
  }

  window.gtag('event', 'conversion', {
    'send_to': `AW-936893165/${label}`,
    'value': options.value || 1000,
    'currency': 'INR',
    'event_callback': invokeCallback
  })

  setTimeout(invokeCallback, 1000)
}
