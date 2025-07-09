export interface EmailData {
  fullName: string;
  email: string;
  companyName: string;
  message: string;
  timestamp: string;
  userAgent: string;
  ipAddress?: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Send email to heser000@gmail.com
    const response = await fetch('https://formspree.io/f/xpwagkqr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.fullName,
        email: data.email,
        company: data.companyName,
        message: data.message,
        timestamp: data.timestamp,
        _replyto: data.email,
        _subject: `New Contact Form Submission from ${data.fullName}`,
      }),
    });

    if (response.ok) {
      return true;
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending failed, using fallback method:', error);
    
    // Fallback: Create mailto link as backup
    const subject = encodeURIComponent(`New Contact Form Submission from ${data.fullName}`);
    const body = encodeURIComponent(`
Name: ${data.fullName}
Email: ${data.email}
Company: ${data.companyName || 'Not provided'}

Message:
${data.message}

Submitted at: ${data.timestamp}
    `);
    
    const mailtoLink = `mailto:heser000@gmail.com?subject=${subject}&body=${body}`;
    
    // Try to open default email client
    try {
      window.open(mailtoLink, '_blank');
      return true;
    } catch (mailtoError) {
      console.error('Mailto fallback failed:', mailtoError);
      return false;
    }
  }
};

export const sendNotificationToAdmin = async (data: EmailData): Promise<void> => {
  // Additional notification methods can be added here
  try {
    // Send a simple notification email to admin
    await fetch('https://formspree.io/f/xpwagkqr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _subject: 'New Lead - openMedia Contact Form',
        message: `
New contact form submission:

Name: ${data.fullName}
Email: ${data.email}
Company: ${data.companyName || 'Not provided'}

Message: ${data.message}

Submitted at: ${data.timestamp}
        `,
        _replyto: 'heser000@gmail.com',
      }),
    });
  } catch (error) {
    console.log('Admin notification failed:', error);
  }
};