import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dbConnect from '@/lib/mongodb';
import DemoRequest from '@/models/DemoRequest';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      companyName,
      jobTitle,
      phoneNumber,
      teamSize,
      preferredDate,
      preferredTime,
      timezone,
      message
    } = body;

    // Basic validation
    if (!fullName || !email || !companyName || !jobTitle || !preferredDate || !preferredTime || !timezone) {
      return NextResponse.json(
        { message: 'Required fields missing' },
        { status: 400 }
      );
    }

    // Format date for email
    const formattedDate = new Date(preferredDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Create email content with professional design
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Demo Request</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; color: #333333;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(90deg, #6D28D9 0%, #9747FF 100%); text-align: center; padding: 30px 20px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Demo Request Received</h1>
            </td>
          </tr>
          
          <!-- Intro -->
          <tr>
            <td style="padding: 30px 30px 20px; text-align: center; border-bottom: 1px solid #f0f0f0;">
              <p style="font-size: 16px; line-height: 1.6; margin: 0; color: #555555;">
                A new request for a product demonstration has been submitted. 
                Please review the details below and follow up with the prospect.
              </p>
            </td>
          </tr>
          
          <!-- Contact Information Section -->
          <tr>
            <td style="padding: 25px 30px 5px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 15px; font-size: 18px; font-weight: 600; color: #6D28D9; border-bottom: 2px solid #6D28D9; padding-bottom: 8px; display: inline-block;">
                      Contact Information
                    </h2>
                    
                    <table width="100%" cellpadding="8" cellspacing="0" border="0" style="margin-bottom: 20px;">
                      <tr>
                        <td width="130" style="font-weight: 600; color: #444444;">Name:</td>
                        <td style="color: #333333;">${fullName}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: 600; color: #444444;">Email:</td>
                        <td style="color: #333333;">
                          <a href="mailto:${email}" style="color: #6D28D9; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-weight: 600; color: #444444;">Phone:</td>
                        <td style="color: #333333;">${phoneNumber || 'Not provided'}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Company Information Section -->
          <tr>
            <td style="padding: 5px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 15px; font-size: 18px; font-weight: 600; color: #6D28D9; border-bottom: 2px solid #6D28D9; padding-bottom: 8px; display: inline-block;">
                      Company Information
                    </h2>
                    
                    <table width="100%" cellpadding="8" cellspacing="0" border="0" style="margin-bottom: 20px;">
                      <tr>
                        <td width="130" style="font-weight: 600; color: #444444;">Company:</td>
                        <td style="color: #333333;">${companyName}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: 600; color: #444444;">Job Title:</td>
                        <td style="color: #333333;">${jobTitle}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: 600; color: #444444;">Team Size:</td>
                        <td style="color: #333333;">${teamSize}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Schedule Details Section -->
          <tr>
            <td style="padding: 5px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 15px; font-size: 18px; font-weight: 600; color: #6D28D9; border-bottom: 2px solid #6D28D9; padding-bottom: 8px; display: inline-block;">
                      Schedule Details
                    </h2>
                    
                    <table width="100%" cellpadding="8" cellspacing="0" border="0" style="margin-bottom: 20px; background-color: #f9f9ff; border-radius: 6px;">
                      <tr>
                        <td width="130" style="font-weight: 600; color: #444444;">Date:</td>
                        <td style="color: #333333;">${formattedDate}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: 600; color: #444444;">Time:</td>
                        <td style="color: #333333;">${preferredTime}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: 600; color: #444444;">Timezone:</td>
                        <td style="color: #333333;">${timezone}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          ${message ? `
          <!-- Additional Information Section -->
          <tr>
            <td style="padding: 5px 30px 25px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 15px; font-size: 18px; font-weight: 600; color: #6D28D9; border-bottom: 2px solid #6D28D9; padding-bottom: 8px; display: inline-block;">
                      Additional Information
                    </h2>
                    
                    <div style="background-color: #f9f9ff; border-left: 3px solid #6D28D9; padding: 15px; border-radius: 0 6px 6px 0; color: #333333; font-size: 14px; line-height: 1.6;">
                      ${message}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          ` : ''}
          
          <!-- Action Button -->
          <tr>
            <td style="padding: 20px 30px 30px; text-align: center; border-top: 1px solid #f0f0f0;">
              <p style="margin-bottom: 20px; font-size: 15px; color: #555555;">
                Please schedule this demo at your earliest convenience.
              </p>
              <a href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Demo+with+${encodeURIComponent(fullName)}+from+${encodeURIComponent(companyName)}&details=Demo+request+from+${encodeURIComponent(fullName)}+at+${encodeURIComponent(companyName)}%0A%0AEmail:+${encodeURIComponent(email)}%0APhone:+${encodeURIComponent(phoneNumber || 'Not provided')}" 
                style="background: linear-gradient(90deg, #6D28D9 0%, #9747FF 100%); color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: 500; display: inline-block; text-align: center; font-size: 15px;">
                Add to Calendar
              </a>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f8f8; padding: 25px; text-align: center; font-size: 13px; color: #777777; border-top: 1px solid #eeeeee;">
              <p style="margin: 0; margin-bottom: 10px;">© ${new Date().getFullYear()} OpsZ. All rights reserved.</p>
              <p style="margin: 0;">This is an automated message. Please do not reply directly to this email.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;
    
    try {
      // Priority 1: Send the email first
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_SECURE ? '465' : (process.env.EMAIL_PORT || '587')),
        secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      
      const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_RECIPIENT,
        subject: `New Demo Request: ${companyName} - ${fullName}`,
        html: emailHtml,
        replyTo: email,
      });
      
      // Priority 2: Save to database after successful email send
      try {
        await dbConnect();
        await DemoRequest.create({
          fullName,
          email,
          companyName,
          jobTitle,
          phoneNumber,
          teamSize,
          preferredDate,
          preferredTime,
          timezone,
          message
        });
      } catch (dbError) {
        console.error("Database error:", dbError);
        // Continue since email was already sent successfully
      }
      
      return NextResponse.json(
        { 
          message: 'Demo request submitted successfully. Our team will contact you shortly.',
          status: 'success'
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      
      // Email failed - return error to client
      return NextResponse.json(
        { 
          message: 'Unable to process your request at this time. Please try again later.',
          status: 'error',
          error: 'Email delivery failed'
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Demo request processing error:', error);
    return NextResponse.json(
      { message: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}