import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) {
    return (
      <section className='section contact center' id='contact'>
        <h2 className='section__title'>Contact</h2>
        <p>No email available. Connect via <a href='https://www.linkedin.com/in/mettadivya' target='_blank' rel='noopener noreferrer'>LinkedIn</a>.</p>
      </section>
    )
  }

  return (
    <section className='section contact center' target='_blank' rel='noopener noreferrer' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact
