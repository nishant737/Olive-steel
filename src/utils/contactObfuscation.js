/**
 * Contact Information Obfuscation Utility
 * Prevents spam bots from harvesting email and phone numbers
 * Decodes on client-side for legitimate users
 */

// ROT47 encoding/decoding - obscures email/phone from regex patterns
const ROT47_CHARS = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

export function encodeROT47(str) {
  return str.replace(/./g, (char) => {
    const index = ROT47_CHARS.indexOf(char);
    if (index === -1) return char;
    return ROT47_CHARS[(index + 47) % ROT47_CHARS.length];
  });
}

export function decodeROT47(str) {
  return str.replace(/./g, (char) => {
    const index = ROT47_CHARS.indexOf(char);
    if (index === -1) return char;
    return ROT47_CHARS[(index - 47 + ROT47_CHARS.length) % ROT47_CHARS.length];
  });
}

// Obfuscated contact information (using ROT47)
export const CONTACT_INFO = {
  email: 'support@olivesteel.com',
  emailEncoded: encodeROT47('support@olivesteel.com'),
  phone: '+917353374444',
  phoneEncoded: encodeROT47('+917353374444'),
  phoneDisplay: '7353374444',
  phoneDisplayEncoded: encodeROT47('7353374444'),
  whatsappUrl: 'https://wa.me/917353374444'
};

/**
 * Generate mailto link with obfuscated display text
 * Decodes on hover/click for user experience
 */
export function ObfuscatedEmailLink({
  text = 'support@olivesteel.com',
  className = ''
}) {
  const encodedText = encodeROT47(text);

  return {
    href: `mailto:${CONTACT_INFO.email}`,
    'data-obfuscated': encodedText,
    className,
    title: 'Send us an email'
  };
}

/**
 * Generate tel link with obfuscated display text
 */
export function ObfuscatedPhoneLink({
  text = CONTACT_INFO.phoneDisplay,
  className = ''
}) {
  const encodedText = encodeROT47(text);

  return {
    href: `tel:${CONTACT_INFO.phone}`,
    'data-obfuscated': encodedText,
    className,
    title: 'Call us'
  };
}

/**
 * Helper function to decode ROT47 on client side
 * Used for rendering obfuscated text back to human-readable form
 */
export function getDecodedText(encodedText) {
  try {
    return decodeROT47(encodedText);
  } catch (e) {
    return encodedText;
  }
}
