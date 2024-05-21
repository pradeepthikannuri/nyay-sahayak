import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FAQstyle.css'; // Import your FAQ styles CSS file

class FAQ extends React.Component {
  render() {
    return (
      <div className="faq-container">
        <div className="container mt-5">
          <h1 className="text-center mb-4" style={{ color: 'white' }}>FAQ</h1>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{ backgroundColor: '#007bff', color: '#fff' }}> Is the legal information provided by the digital assistant reliable and up-to-date?</Accordion.Header>
              <Accordion.Body>
                Yes, the digital assistant sources its legal information from reputable and verified sources. We continuously update our database to ensure that the information provided is accurate and reflects the latest legal regulations and changes.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header style={{ backgroundColor: '#007bff', color: '#fff' }}>Can I access the digital assistant on my smartphone or tablet?</Accordion.Header>
              <Accordion.Body>
                Yes, absolutely! The digital assistant is accessible through various devices, including smartphones, tablets, and desktop computers. You can access it through a web browser or by downloading our dedicated mobile app from the app store. This ensures convenience and accessibility on the go.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header style={{ backgroundColor: '#007bff', color: '#fff' }}>Can the digital assistant provide personalized legal advice for my specific situation?</Accordion.Header>
              <Accordion.Body>
                While the digital assistant can provide general legal information and guidance, it is not a substitute for personalized legal advice from a qualified professional. For complex legal matters or specific situations, we recommend consulting with a lawyer or legal expert who can provide tailored advice based on your individual circumstances.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default FAQ;
