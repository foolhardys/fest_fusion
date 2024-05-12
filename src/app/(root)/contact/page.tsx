import ContactForm from '@/components/shared/ContactForm'
import React from 'react'

const ContactPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col max-w-[1280px] mx-auto items-center justify-center">
      <ContactForm />
    </div>
  )
}

export default ContactPage