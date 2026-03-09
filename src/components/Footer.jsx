import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Dharmik Panchani. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
