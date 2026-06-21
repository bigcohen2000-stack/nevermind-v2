'use server'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function addContact(formData: FormData) {
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;

    try {
          await resend.contacts.create({
                  email: email,
                  firstName: name,
                  audienceId: process.env.RESEND_AUDIENCE_ID as string,
                });
          return { success: true };
        } catch (error) {
          return { success: false };
        }
  }
