// pages/terms.tsx

import { ISection } from './interfaces';
import Link from 'next/link';

const sections: ISection[] = [
  { id: 'free-trial-orders', title: 'Free-Trial Orders', content: 'This section details the terms for Free-Trial Orders.' },
  { id: 'access-and-use', title: 'Access and Use', content: 'This section outlines the rules for accessing and using our services.' },
  { id: 'support', title: 'Support', content: 'This section describes the support provided with our services.' },
  { id: 'free-trial-subscription', title: 'Free-Trial Subscription', content: 'This section explains the terms for Free-Trial Subscription.' },
  { id: 'apis-and-tools', title: 'APIs and Tools', content: 'This section provides information about APIs and Tools.' },
  { id: 'hosting-and-other-providers', title: 'Hosting and Other Providers', content: 'This section covers details on Hosting and Other Providers.' },
  { id: 'security-and-privacy', title: 'Security and Privacy', content: 'This section outlines our Security and Privacy policies.' },
  { id: 'customer-responsibilities-and-restrictions', title: 'Customer Responsibilities and Restrictions', content: 'This section covers Customer Responsibilities and Restrictions.' },
  { id: 'compliance-with-applicable-laws', title: 'Compliance with Applicable Laws', content: 'This section deals with Compliance with Applicable Laws.' },
  { id: 'ownership', title: 'Ownership', content: 'This section outlines the rules regarding Ownership.' },
  { id: 'confidentiality', title: 'Confidentiality', content: 'This section describes our Confidentiality agreement.' },
  { id: 'disclaimers', title: 'Disclaimers', content: 'This section presents our Disclaimers.' },
  { id: 'term-and-termination', title: 'Term and Termination', content: 'This section outlines the terms and conditions for the termination of the agreement.' },
  { id: 'indemnification', title: 'Indemnification', content: 'This section explains the rules for Indemnification.' },
  { id: 'limitations-of-liability', title: 'Limitations of Liability', content: 'This section explains the Limitations of Liability.' },
  { id: 'publicity', title: 'Publicity', content: 'This section details our Publicity policies.' },
  { id: 'notices', title: 'Notices', content: 'This section outlines how we provide Notices.' },
  { id: 'assignment', title: 'Assignment', content: 'This section provides information on Assignment rules.' },
  { id: 'us-government-customers', title: 'U.S. Government Customers', content: 'This section is specifically for U.S. Government Customers.' },
  { id: 'independent-parties-no-third-party-beneficiaries', title: 'Independent Parties; No Third-Party Beneficiaries', content: 'This section outlines the rules for Independent Parties and No Third-Party Beneficiaries.' },
  { id: 'force-majeure', title: 'Force Majeure', content: 'This section details the terms for Force Majeure.' },
  { id: 'governing-law-venue', title: 'Governing Law; Venue', content: 'This section provides details about Governing Law and Venue.' },
  { id: 'miscellaneous', title: 'Miscellaneous', content: 'This section covers Miscellaneous details.' },
  { id: 'definitions', title: 'Definitions', content: 'This section provides Definitions for certain terms.' },
  { id: 'counterparts', title: 'Counterparts', content: 'This section details the rules for Counterparts.' },
  { id: 'changes-to-this-agreement', title: 'Changes to this Agreement', content: 'This section explains how Changes to this Agreement are handled.' },
];
const Terms = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div style={{ display: 'flex', flexDirection: 'row', padding: '0 20px' }}>
            <div style={{ width: '20%', position: 'fixed' }}>
              <nav>
                <ul>
                  {sections.map((section) => (
                    <li key={section.id}>
                      <Link href={`#${section.id}`}>{section.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div style={{ width: '80%', marginLeft: '25%' }}>
              {sections.map((section) => (
                <div id={section.id} key={section.id}>
                  <h2 style={{ color: 'red', fontSize: '1.5em' }}>{section.title}</h2>
                  <p style={{ color: 'black', fontSize: '1em' }}>{section.content}</p>
                </div>
              ))}
            </div>
          </div>
       </div>
      </div>
    </section>
  );
};

export default Terms;