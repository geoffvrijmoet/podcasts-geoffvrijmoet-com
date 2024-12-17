import { NextResponse } from 'next/server'
import { google } from 'googleapis'
import { Credentials } from 'google-auth-library'

// Initialize Gmail API client
const gmail = google.gmail('v1')
const OAuth2 = google.auth.OAuth2

const createClient = () => {
  return new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  )
}

// Function to encode the email in base64
function encodeEmail({ to, from, subject, message }: any) {
  const str = [
    'Content-Type: text/plain; charset="UTF-8"\n',
    'MIME-Version: 1.0\n',
    `To: ${to}\n`,
    `From: ${from}\n`,
    `Subject: ${subject}\n\n`,
    message
  ].join('')

  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, podcastName, message } = body

    const oauth2Client = createClient()
    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    })

    const emailContent = `
New contact form submission:

Name: ${name}
Email: ${email}
Podcast: ${podcastName || 'Not provided'}

Message:
${message}
    `

    const encodedEmail = encodeEmail({
      to: process.env.EMAIL_TO,
      from: process.env.EMAIL_FROM,
      subject: `New Contact Form Submission from ${name}`,
      message: emailContent
    })

    await gmail.users.messages.send({
      auth: oauth2Client,
      userId: 'me',
      requestBody: {
        raw: encodedEmail
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
  }
} 