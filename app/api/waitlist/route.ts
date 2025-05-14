import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

// Initialize Nodemailer transporter with more secure configuration
const transportConfig: SMTPTransport.Options = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
}

const transporter = nodemailer.createTransport(transportConfig)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save to Supabase
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert([{ name, email }])

    if (dbError) {
      console.error('Supabase error:', dbError)
      if (dbError.code === '23505') { // Unique violation error code
        return NextResponse.json(
          { error: 'This email is already registered' },
          { status: 409 }
        )
      }
      return NextResponse.json(
        { error: 'Failed to save your information' },
        { status: 500 }
      )
    }

    // Send confirmation email
    try {
      await transporter.sendMail({
        from: {
          name: 'NeuralArc',
          address: process.env.SMTP_USER!
        },
        to: email,
        subject: 'Welcome to NeuralArc Waitlist!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #2F2C28; margin-bottom: 24px;">Welcome to NeuralArc!</h1>
            <p style="color: #343434; font-size: 16px; line-height: 1.5; margin-bottom: 16px;">Dear ${name},</p>
            <p style="color: #343434; font-size: 16px; line-height: 1.5; margin-bottom: 16px;">Thank you for joining our waitlist. We're excited to have you on board!</p>
            <p style="color: #343434; font-size: 16px; line-height: 1.5; margin-bottom: 16px;">We'll keep you updated about our launch and early access opportunities.</p>
            <div style="margin: 32px 0;">
              <p style="color: #343434; font-size: 16px; line-height: 1.5; margin-bottom: 8px;">Best regards,</p>
              <p style="color: #343434; font-size: 16px; line-height: 1.5; margin-bottom: 0;">The NeuralArc Team</p>
            </div>
          </div>
        `
      })
    } catch (emailError) {
      console.error('Email error:', emailError)
      // Don't return error to client if email fails, they're already in the waitlist
    }

    return NextResponse.json({ 
      success: true,
      message: 'Successfully joined the waitlist!'
    })

  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
} 