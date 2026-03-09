import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitContact, resetContact } from '../store/slices/contactSlice'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

const initialForm = {
  name: '',
  email: '',
  number: '',
  address: '',
  message: '',
}

const nameRegex = /^[A-Za-z\s]{1,50}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[6-9]\d{9}$/

function validate(form) {
  const errors = {}

  if (!form.name.trim()) {
    errors.name = 'Name is required'
  } else if (!nameRegex.test(form.name.trim())) {
    errors.name = 'Name must contain only letters and spaces (max 50 characters)'
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (form.email.length > 100) {
    errors.email = 'Email must not exceed 100 characters'
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Enter a valid email address'
  }

  if (!form.number.trim()) {
    errors.number = 'Phone number is required'
  } else if (!phoneRegex.test(form.number.trim())) {
    errors.number = 'Enter a valid 10-digit Indian mobile number (starts with 6–9)'
  }

  if (form.address.trim() === '' && form.address.length > 0) {
    errors.address = 'Address cannot contain only spaces'
  } else if (form.address.length > 200) {
    errors.address = 'Address must not exceed 200 characters'
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
  } else if (form.message.length > 600) {
    errors.message = 'Message must not exceed 600 characters'
  }

  return errors
}

function Contact() {
  const dispatch = useDispatch()
  const { status, error } = useSelector((state) => state.contact)

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const infoRef = useScrollReveal()
  const formRef = useScrollReveal({ threshold: 0.08 })

  const handleChange = (e) => {
    const { name, value } = e.target
    const sanitized = name === 'number' ? value.replace(/\D/g, '') : value
    setForm((prev) => ({ ...prev, [name]: sanitized }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    dispatch(submitContact(form))
      .unwrap()
      .then(() => {
        setForm(initialForm)
        setErrors({})
      })
      .catch(() => { })
  }

  const handleReset = () => {
    dispatch(resetContact())
    setForm(initialForm)
    setErrors({})
  }

  return (
    <div className="contact-page page-section">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">Have a project in mind? Let's talk.</p>
        <div className="divider" />

        <div className="contact-layout">
          {/* Info Panel */}
          <div className="contact-info reveal" ref={infoRef}>
            <div className="card contact-info-card">
              <h2 className="contact-info-heading gradient-text">Let's Connect</h2>
              <p className="contact-info-desc">
                Whether you have a project idea, a question, or just want to say hi — feel free to
                reach out. I'll get back to you as soon as possible.
              </p>

              <div className="contact-details">
                {[
                  {
                    label: 'Name',
                    value: 'Dharmik Panchani',
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Email',
                    value: 'dharmikpanchani96@email.com',
                    href: 'dharmikpanchani96@email.com',
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Mobile',
                    value: '+91 97128 72793',
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                        <line x1="12" y1="18" x2="12.01" y2="18" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Location',
                    value: 'India, ahmedabad',
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                  },
                  // {
                  //   label: 'Availability',
                  //   value: 'Open to Opportunities',
                  //   valueClass: 'available',
                  //   icon: (
                  //     <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  //       <circle cx="12" cy="12" r="10" />
                  //       <polyline points="12 6 12 12 16 14" />
                  //     </svg>
                  //   ),
                  // },
                ].map(({ label, value, valueClass, href, icon }) => (
                  <div className="contact-detail-item" key={label}>
                    <div className="detail-icon-wrap">{icon}</div>
                    <div>
                      <p className="detail-label">{label}</p>
                      {href ? (
                        <a
                          // href={href}
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${href}`}
                          className={`detail-value detail-link ${valueClass || ''}`}
                          target="_blank"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className={`detail-value ${valueClass || ''}`}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap reveal" ref={formRef} style={{ transitionDelay: '0.15s' }}>
            {status === 'success' ? (
              <div className="card success-card">
                <div className="success-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-desc">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button className="btn-reset" onClick={handleReset}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="card contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row two-col">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                      placeholder="Your full name"
                      maxLength={50}
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className="error-msg">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                      placeholder="your@email.com"
                      maxLength={100}
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row two-col">
                  <div className="form-group">
                    <label className="form-label" htmlFor="number">
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      id="number"
                      name="number"
                      type="tel"
                      className={`form-input ${errors.number ? 'input-error' : ''}`}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      value={form.number}
                      onChange={handleChange}
                    />
                    {errors.number && <span className="error-msg">{errors.number}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="address">
                      Address
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      className={`form-input ${errors.address ? 'input-error' : ''}`}
                      placeholder="Your address (optional)"
                      maxLength={200}
                      value={form.address}
                      onChange={handleChange}
                    />
                    {errors.address && <span className="error-msg">{errors.address}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                    placeholder="Write your message here..."
                    maxLength={600}
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="error-msg">{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <div className="submit-error-banner">
                    {error || 'Something went wrong. Please try again.'}
                  </div>
                )}

                <button type="submit" className="submit-btn" disabled={status === 'loading'}>
                  {status === 'loading' ? (
                    <>
                      <span className="btn-spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
