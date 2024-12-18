import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// Initialize Gmail API client
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

function encodeEmail({ to, from, subject, message }: any) {
  const str = [
    'Content-Type: text/plain; charset="UTF-8"\n',
    'MIME-Version: 1.0\n',
    `To: ${to}\n`,
    `From: ${from}\n`,
    `Subject: ${subject}\n\n`,
    message
  ].join('');

  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function POST(request: Request) {
  try {
    console.log('Contact form submission received');
    const body = await request.json();
    console.log('Form data:', body);

    const { name, email, podcastName, message } = body;

    const emailContent = `
New contact form submission:

Name: ${name}
Email: ${email}
Podcast: ${podcastName || 'Not provided'}

Message:
${message}
    `;

    console.log('Attempting to send email with content:', emailContent);

    const encodedEmail = encodeEmail({
      to: process.env.EMAIL_TO,
      from: process.env.EMAIL_FROM,
      subject: `New Contact Form Submission from ${name}`,
      message: emailContent
    });

    console.log('Sending email via Gmail API...');
    
    const response = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail
      }
    });
    
    console.log('Gmail API response:', response.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json({ 
      error: 'Error sending email',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 