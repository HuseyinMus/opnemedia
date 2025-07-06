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
    // Using EmailJS or similar service
    // For now, we'll simulate the email sending
    
    const emailContent = {
      to: 'heser000@gmail.com',
      subject: `New Contact Form Submission from ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f97316, #ea580c); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1f2937; margin-top: 0;">Contact Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #f97316;">
              <p><strong>Name:</strong> ${data.fullName}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              <p><strong>Company:</strong> ${data.companyName || 'Not provided'}</p>
            </div>
            
            <h3 style="color: #1f2937;">Message</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="line-height: 1.6; margin: 0;">${data.message}</p>
            </div>
            
            <div style="background: #e5e7eb; padding: 15px; border-radius: 8px; font-size: 12px; color: #6b7280;">
              <p><strong>Submission Time:</strong> ${data.timestamp}</p>
              <p><strong>User Agent:</strong> ${data.userAgent}</p>
              ${data.ipAddress ? `<p><strong>IP Address:</strong> ${data.ipAddress}</p>` : ''}
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${data.email}" style="background: #f97316; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Reply to ${data.fullName}</a>
            </div>
          </div>
        </div>
      `
    };

    // In a real implementation, you would use a service like:
    // - EmailJS
    // - Formspree
    // - Netlify Forms
    // - Your own backend API
    
    console.log('Email would be sent:', emailContent);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

export const sendNotificationToAdmin = async (data: EmailData): Promise<void> => {
  // Send a simple notification email to admin
  const notificationData = {
    to: 'heser000@gmail.com',
    subject: 'New Lead - openMedia Contact Form',
    text: `
      New contact form submission:
      
      Name: ${data.fullName}
      Email: ${data.email}
      Company: ${data.companyName || 'Not provided'}
      
      Message: ${data.message}
      
      Submitted at: ${data.timestamp}
    `
  };
  
  console.log('Admin notification:', notificationData);
};