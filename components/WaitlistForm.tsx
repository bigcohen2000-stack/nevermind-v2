'use client'
import { addContact } from '@/app/actions/resend'
import { useState } from 'react'

export default function WaitlistForm() {
    const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(formData: FormData) {
        await addContact(formData);
        setSubmitted(true);
  }

  if (submitted) {
        return <p className="text-[#1A1A1A] mt-8 text-lg font-medium">הפרטים נקלטו. אנחנו נעדכן.</p>p>;
  }
  
    return (
          <form action={handleSubmit} className="flex flex-col gap-6 mt-10 max-w-md w-full">
                <input
                          type="text"
                          name="name"
                          placeholder="השם שלך"
                          required
                          className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A] transition-colors"
                        />
                <input
                          type="email"
                          name="email"
                          placeholder="הכתובת אליה נשלח את העדכון"
                          required
                          className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#1A1A1A] text-[#1A1A1A] transition-colors"
                        />
                <button type="submit" className="bg-[#1A1A1A] text-[#FAFAF8] px-8 py-4 mt-4 font-medium text-center hover:bg-black transition-colors">
                        שלח לי את העדכון
                </button>button>
          </form>form>
        )
}</p>
