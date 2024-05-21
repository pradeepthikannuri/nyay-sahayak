//Draft.jsx  
import React from 'react';

const LegalDocument = () => {
    return (
      <div style={{
        maxWidth: '800px',
        margin: 'auto',
        padding: '20px',
         backgroundImage: 'url("faq.jpg")', // Replace "stepbystep.jpg" with the actual path to your background image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        color: 'blue',
        fontFamily: 'Arial, sans-serif',
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Contract Agreement</h1>
  
        <p>This Contract Agreement ("Agreement") is entered into as of [Date] by and between:</p>
  
        <div style={{ marginBottom: '20px' }}>
          <h4>Party A: [Name]</h4>
          <p>Address: [Address]</p>
          <p>(hereinafter referred to as "Party A")</p>
        </div>
  
        <div style={{ marginBottom: '20px' }}>
          <h4>Party B: [Name]</h4>
          <p>Address: [Address]</p>
          <p>(hereinafter referred to as "Party B")</p>
        </div>
  
        <h4>1. Scope of Agreement</h4>
        <p>This Agreement sets forth the terms and conditions under which Party A agrees to provide [description of services] to Party B, and Party B agrees to pay for such services.</p>
  
        <h4>2. Term</h4>
        <p>This Agreement shall commence on [start date] and shall continue until terminated as provided herein.</p>
  
        <h4>3. Payment</h4>
        <p>Party B shall pay Party A the sum of [amount] for the services provided under this Agreement. Payment shall be made [payment terms].</p>
  
        <h4>4. Termination</h4>
        <p>This Agreement may be terminated by either party upon [termination conditions] with [notice period] written notice to the other party.</p>
  
        <h4>5. Governing Law</h4>
        <p>This Agreement shall be governed by and construed in accordance with the laws of [jurisdiction].</p>
  
        <h4>6. Entire Agreement</h4>
        <p>This Agreement constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior agreements and understandings, whether written or oral, relating to such subject matter.</p>
  
        <h4>7. Signature</h4>
        <p>This Agreement may be executed in counterparts, each of which shall be deemed an original, but all of which together shall constitute one and the same instrument.</p>
  
        <p>In Witness Whereof, the parties hereto have executed this Agreement as of the date first above written.</p>
  
        <div style={{ marginBottom: '20px' }}>
          <p>_</p>
          <p>Party A: [Signature]</p>
        </div>
  
        <div style={{ marginBottom: '20px' }}>
          <p>_</p>
          <p>Party B: [Signature]</p>
        </div>
      </div>
    );
  };
  
  export default LegalDocument;
  