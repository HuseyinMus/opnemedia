export interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  message: string;
  honeypot?: string; // Hidden field for spam protection
  timestamp?: number; // Form submission timestamp
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  isSpam: boolean;
  spamReasons: string[];
}

export const validateForm = (data: FormData): ValidationResult => {
  const errors: Record<string, string> = {};
  const spamReasons: string[] = [];
  let isSpam = false;

  // Basic validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters long';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  // Spam detection
  
  // 1. Honeypot field check
  if (data.honeypot && data.honeypot.trim() !== '') {
    isSpam = true;
    spamReasons.push('Honeypot field filled');
  }

  // 2. Submission time check (too fast = bot)
  if (data.timestamp) {
    const submissionTime = Date.now() - data.timestamp;
    if (submissionTime < 3000) { // Less than 3 seconds
      isSpam = true;
      spamReasons.push('Form submitted too quickly');
    }
  }

  // 3. Content spam detection
  const spamKeywords = [
    'viagra', 'casino', 'lottery', 'winner', 'congratulations',
    'click here', 'free money', 'make money fast', 'work from home',
    'bitcoin', 'cryptocurrency', 'investment opportunity', 'loan',
    'debt', 'credit', 'pharmacy', 'pills', 'weight loss'
  ];

  const fullText = `${data.fullName} ${data.email} ${data.message} ${data.companyName}`.toLowerCase();
  const foundSpamWords = spamKeywords.filter(keyword => fullText.includes(keyword));
  
  if (foundSpamWords.length > 0) {
    isSpam = true;
    spamReasons.push(`Spam keywords detected: ${foundSpamWords.join(', ')}`);
  }

  // 4. Excessive links check
  const linkCount = (data.message.match(/https?:\/\//g) || []).length;
  if (linkCount > 2) {
    isSpam = true;
    spamReasons.push('Too many links in message');
  }

  // 5. Repetitive characters check
  if (/(.)\1{4,}/.test(data.message)) {
    isSpam = true;
    spamReasons.push('Repetitive characters detected');
  }

  // 6. All caps check
  if (data.message.length > 20 && data.message === data.message.toUpperCase()) {
    isSpam = true;
    spamReasons.push('Message is all caps');
  }

  // 7. Email domain validation
  if (data.email && isDisposableEmail(data.email)) {
    isSpam = true;
    spamReasons.push('Disposable email address detected');
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    isSpam,
    spamReasons
  };
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isDisposableEmail = (email: string): boolean => {
  const disposableDomains = [
    '10minutemail.com', 'tempmail.org', 'guerrillamail.com',
    'mailinator.com', 'yopmail.com', 'temp-mail.org',
    'throwaway.email', 'getnada.com', 'maildrop.cc'
  ];
  
  const domain = email.split('@')[1]?.toLowerCase();
  return disposableDomains.includes(domain);
};

export const sanitizeInput = (input: string): string => {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .trim();
};