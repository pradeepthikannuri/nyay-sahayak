//Rights.jsx  
import React from 'react';

const Rights = () => {
    return (
      <div style={{ 
        maxWidth: '600px', 
        margin: 'auto',
        backgroundImage: 'url("rights.jpg")', // Replace "path_to_your_image.jpg" with the actual path to your image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '20px',
        borderRadius: '8px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Legal Rights of Citizens of India</h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li>
            <strong>Right to Equality:</strong> This includes equality before law, prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth, and equality of opportunity in matters of public employment.
          </li>
          <li>
            <strong>Right to Freedom:</strong> This encompasses freedom of speech and expression, freedom of assembly, freedom to form associations or unions, freedom of movement throughout the territory of India, freedom to reside and settle in any part of the country, and freedom of profession, occupation, trade, or business.
          </li>
          <li>
            <strong>Right against Exploitation:</strong> The Constitution prohibits trafficking, forced labor, and employment of children in hazardous industries.
          </li>
          <li>
            <strong>Right to Freedom of Religion:</strong> This guarantees individuals the right to freely profess, practice, and propagate religion, subject to public order, morality, and health.
          </li>
          <li>
            <strong>Cultural and Educational Rights:</strong> These include the right of any section of citizens to conserve their culture, language, or script, and the right of minorities to establish and administer educational institutions of their choice.
          </li>
          <li>
            <strong>Right to Constitutional Remedies:</strong> Citizens have the right to move the court if they believe their fundamental rights are being violated. This allows individuals to seek enforcement of their rights through writs such as habeas corpus, mandamus, prohibition, certiorari, and quo warranto.
          </li>
          <li>
            <strong>Right to Privacy:</strong> While not explicitly mentioned in the Constitution, the Supreme Court of India has recognized the right to privacy as a fundamental right derived from the right to life and personal liberty under Article 21 of the Constitution.
          </li>
          <li>
            <strong>Right to Information:</strong> Citizens have the right to access information under the Right to Information (RTI) Act, which enables them to seek information from public authorities.
          </li>
          <li>
            <strong>Right to Education:</strong> The Right of Children to Free and Compulsory Education Act, 2009, ensures free and compulsory education for children between the ages of 6 and 14.
          </li>
          <li>
            <strong>Right to Vote:</strong> Citizens of India who are 18 years of age or older have the right to vote in elections, as provided by the Representation of the People Act.
          </li>
        </ol>
      </div>
    );
  };
  
  export default Rights;
  