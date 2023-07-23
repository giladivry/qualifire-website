// pages/terms.tsx

import { ISection } from './interfaces';
import Link from 'next/link';

const sections: ISection[] = [
  { id: 'free-trial-orders', title: 'Free-Trial Orders', content: 'This Agreement sets forth the terms pursuant to which Customer may access and use the Free-Trial Services in connection with one or more Free-Trial Orders. Subject to the terms of a Free-Trial Order, the Free-Trial Services will support Customer’s collection, monitoring, management and analysis of data generated by systems, platforms, services, software, devices, sites and/or networks that Customer uses in its own internal business operations (collectively, but exclusive of all Free-Trial Services and Paid Services, “Customer’s Environment”).  ' },
  { id: 'access-and-use', title: 'Access and Use', content: 'Subject to the applicable Free-Trial Order and this Agreement, Qualifire hereby grants to Customer the right to access and use the Free-Trial Services in accordance with the Documentation during the Free-Trial Term for Customer’s Environment.  As between the Parties, Customer controls Customer’s Environment and its individual components (each, a “Customer Component”), whether owned, leased or licensed by Customer, located on Customer’s premises or cloud-based, used by Customer on a software-as-a-service basis or otherwise. Customer will be able to use the Free-Trial Services by establishing integrations or other connections to one or more Customer Components (each, a “Connection”). By implementing a Connection to a Customer Component, Customer hereby grants to Qualifire the right, and is expressly instructing Qualifire, to access and interoperate with that Customer Component during the Free-Trial Term in order to provide and support the Free-Trial Services. Customer is responsible for complying with all applicable third-party terms, policies and licenses governing its access and use of Customer Components and associated data (collectively, “Third-Party Terms”).  Through Customer’s configuration and use of Connections and Free-Trial Services, Customer has control over the types and amounts of data from Customer’s Environment that are submitted for Processing by the Services (collectively, “Customer Data”). By submitting Customer Data to the Free-Trial Services, Customer hereby grants to Qualifire the right, and is expressly instructing Qualifire, to Process Customer Data during the Free-Trial Term in order to provide and support the Free-Trial Services and as otherwise provided in this Agreement.  All rights granted by each Party to the other under this Section 2 are limited, nonexclusive and, except as otherwise provided in this Agreement, non-transferable.' },
  { id: 'support', title: 'Support', content: 'This section describes the support provided with our services.' },
  { id: 'free-trial-subscription', title: 'Free-Trial Subscription', content: 'This section explains the terms for Free-Trial Subscription.' },
  { id: 'apis-and-tools', title: 'APIs and Tools', content: 'This section provides information about APIs and Tools.' },
  { id: 'hosting-and-other-providers', title: 'Hosting and Other Providers', content: 'This section covers details on Hosting and Other Providers.' },
  { id: 'security-and-privacy', title: 'Security and Privacy', content: 'This section outlines our Security and Privacy policies.' },
  { id: 'customer-responsibilities-and-restrictions', title: 'Customer Responsibilities', content: 'This section covers Customer Responsibilities and Restrictions.' },
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
  { id: 'independent-parties-no-third-party-beneficiaries', title: 'Independent Parties; No Third-Party', content: 'This section outlines the rules for Independent Parties and No Third-Party Beneficiaries.' },
  { id: 'force-majeure', title: 'Force Majeure', content: 'This section details the terms for Force Majeure.' },
  { id: 'governing-law-venue', title: 'Governing Law; Venue', content: 'This section provides details about Governing Law and Venue.' },
  { id: 'miscellaneous', title: 'Miscellaneous', content: 'This section covers Miscellaneous details.' },
  { id: 'definitions', title: 'Definitions', content: 'This section provides Definitions for certain terms.' },
  { id: 'counterparts', title: 'Counterparts', content: 'This section details the rules for Counterparts.' },
  { id: 'changes-to-this-agreement', title: 'Changes to this Agreement', content: 'This section explains how Changes to this Agreement are handled.' },
];
const Terms = () => {
  return (
    <section className="bg-gradient-to-b from-gray-200 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div style={{ display: 'flex', flexDirection: 'row', padding: '0 20px' }}>
            <div style={{ width: '30%', position: 'fixed' }}>
              <nav>
                <ul>
                  {sections.map((section) => (
                    <li key={section.id}>
                      <Link href={`/terms#${section.id}`}>{section.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div style={{ width: '80%', marginLeft: '35%' }}>
              {sections.map((section) => (
                <div id={section.id} key={section.id}>
                  <h2 style={{ color: 'black',fontWeight: 'bold', fontSize: '1.2em' }}>{section.title}</h2>
                  <p style={{ color: 'black', fontSize: '0.8em' }}>{section.content}</p>
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