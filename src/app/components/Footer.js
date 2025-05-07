'use client';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '2rem' }}>
      {/* Top Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', borderBottom: '1px solid #444', paddingBottom: '2rem' }}>
        
        {/* Newsletter */}
        <div style={{ flex: 1, minWidth: '250px', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>BE THE FIRST TO KNOW</h3>
          <p style={{ fontSize: '0.9rem' }}>Sign up for updates from mettā muse.</p>
          <div style={{ display: 'flex', marginTop: '1rem' }}>
            <input type="email" placeholder="Enter your e-mail..." style={{
              flex: 1,
              padding: '0.5rem',
              border: 'none',
              marginRight: '0.5rem',
              fontSize: '0.9rem'
            }} />
            <button style={{
              padding: '0.5rem 1rem',
              border: 'none',
              backgroundColor: '#333',
              color: '#fff',
              cursor: 'pointer'
            }}>
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Contact & Currency */}
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>CONTACT US</h3>
          <p style={{ fontSize: '0.9rem' }}>+44 221 133 5360</p>
          <p style={{ fontSize: '0.9rem' }}>customercare@mettamuse.com</p>

          <h3 style={{ marginTop: '1rem', fontSize: '0.9rem', fontWeight: 'bold' }}>CURRENCY</h3>
          <p style={{ fontSize: '0.9rem' }}>
            <span role="img" aria-label="flag">🇺🇸</span> USD
          </p>
          <p style={{ fontSize: '0.75rem', color: '#aaa' }}>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '2rem' }}>
        
        {/* Links */}
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h4 style={{ fontWeight: 'bold' }}>mettā muse</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div style={{ flex: 1, minWidth: '200px' }}>
          <h4 style={{ fontWeight: 'bold' }}>QUICK LINKS</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Social & Payments */}
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h4 style={{ fontWeight: 'bold' }}>FOLLOW US</h4>
          <div style={{ display: 'flex', gap: '1rem', margin: '0.5rem 0' }}>
            <div style={{ backgroundColor: '#222', padding: '0.5rem', borderRadius: '50%' }}>📸</div>
            <div style={{ backgroundColor: '#222', padding: '0.5rem', borderRadius: '50%' }}>💼</div>
          </div>

          <h4 style={{ fontWeight: 'bold', marginTop: '1rem' }}>mettā muse ACCEPTS</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
            <img src="/icons/gpay.png" alt="GPay" height="25" />
            <img src="/icons/mastercard.png" alt="MasterCard" height="25" />
            <img src="/icons/visa.png" alt="Visa" height="25" />
            <img src="/icons/amex.png" alt="Amex" height="25" />
            <img src="/icons/applepay.png" alt="ApplePay" height="25" />
            <img src="/icons/paypal.png" alt="PayPal" height="25" />
          </div>
        </div>
      </div>
    </footer>
  );
}
