//LegalWritings.jsx 
import React, { useState } from 'react';

const LegalWritings = () => {
    const topics = [
      { title: 'Contract Law', content: 'Contract law governs agreements made between two or more parties, ensuring that they are legally enforceable. It covers various aspects such as formation, validity, interpretation, performance, and breach of contracts.' },
      { title: 'Intellectual Property', content: 'Intellectual property law protects creations of the mind, such as inventions, literary and artistic works, designs, symbols, and names used in commerce. It includes patents, copyrights, trademarks, and trade secrets.' },
      { title: 'Criminal Law', content: 'Criminal law concerns actions or omissions that are considered harmful to society and punishable by the state. It encompasses offenses such as murder, theft, assault, and fraud, and it outlines the procedures for investigation, prosecution, and punishment of criminal acts.' },
      { title: 'Family Law', content: 'Family law deals with legal matters related to family relationships, including marriage, divorce, child custody, adoption, paternity, and domestic violence. It aims to protect the rights and interests of family members and resolve disputes through legal processes.' },
      { title: 'Business Law', content: 'Business law, also known as commercial law, regulates the conduct of businesses and commercial transactions. It covers areas such as contracts, partnerships, corporations, mergers and acquisitions, securities regulation, and employment law.' },
      { title: 'Real Estate Law', content: 'Real estate law governs the ownership, use, and transfer of real property, which includes land and anything permanently attached to it. It encompasses issues such as property rights, leases, mortgages, zoning, and land use regulations.' },
      { title: 'Employment Law', content: 'Employment law governs the relationship between employers and employees, including issues such as hiring, wages, working hours, benefits, workplace safety, discrimination, harassment, and wrongful termination. It aims to ensure fair treatment and protect workers\' rights.' },
      { title: 'Environmental Law', content: 'Environmental law regulates human activities that impact the environment and natural resources. It addresses issues such as pollution control, waste management, conservation of biodiversity, land use planning, and environmental impact assessment.' },
      { title: 'Human Rights Law', content: 'Human rights law protects the fundamental rights and freedoms of individuals against discrimination, oppression, and abuse by governments and other entities. It includes civil liberties, political rights, social and economic rights, and rights related to equality and non-discrimination.' },
      { title: 'International Law', content: 'International law governs relations between states and other international actors, such as international organizations and individuals. It covers areas such as diplomacy, treaties, human rights, armed conflict, trade, and the environment, and it aims to promote cooperation and maintain order in the international community.' },
    ];
  
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div style={{
        maxWidth: '800px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#E6E6FA',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>LEGAL WRITINGS</h1>
  
        <p>Explore insightful legal writings covering diverse topics, providing clarity and understanding on complex legal matters for informed decisions.</p>
  
        <h2 style={{ marginTop: '30px' }}>Topics Covered:</h2>
  
        <div>
          {topics.map((topic, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <div
                style={{
                  backgroundColor: '#ADD8E6',
                  padding: '10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => toggleAccordion(index)}
              >
                <h3 style={{ margin: '0', color: '#333' }}>{topic.title}</h3>
              </div>
              {activeIndex === index && (
                <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
                  <p>{topic.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
  
        <p>Stay informed and empowered with our comprehensive legal writings.</p>
      </div>
    );
  };
  
  export default LegalWritings;
  