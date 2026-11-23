import { LegalPage } from '@/components/legal/LegalPage'

export const metadata = {
  title: 'License Agreement',
  description:
    'The rights and restrictions that apply to templates and digital products purchased from Telephant, under the Single User and Multi User licences.',
}

const INTRO = [
  'By purchasing, downloading, accessing, or using any digital product or template available through Telephant, you agree to the terms of this License Agreement.',
  'This Agreement explains the rights and restrictions associated with using templates and other digital products purchased from Telephant.',
  'This License Agreement is entered into between Dstudio Agency, operating as Telephant ("Company", "we", "us", or "our"), and the individual or legal entity purchasing or accessing a valid licence ("Customer", "you", or "your").',
  'Telephant operates from:',
  {
    type: 'contact',
    lines: ['585 W 500 S #130', 'Bountiful, UT 84010', 'United States'],
  },
  'This Agreement applies to all templates, digital assets, design resources, and related products offered through Telephant (collectively referred to as the "Products").',
]

const PREAMBLE = [
  {
    heading: 'Important',
    blocks: [
      { type: 'p', text: 'Telephant offers two types of commercial licences:' },
      {
        type: 'ul',
        items: [
          {
            label: 'Single User License',
            text: 'Intended for an individual who purchases and uses a Product independently.',
          },
          {
            label: 'Multi User License',
            text: 'Intended for teams and organisations that require multiple authorised individuals to access and use a purchased Product.',
          },
        ],
      },
      {
        type: 'p',
        text: 'The applicable licence type is determined by the option selected and purchased during checkout.',
      },
      {
        type: 'p',
        text: 'By purchasing a Product, you agree to comply with the terms, conditions, permissions, and restrictions associated with your selected licence.',
      },
    ],
  },
  {
    heading: 'License Summary',
    blocks: [
      {
        type: 'p',
        text: 'Both licence types grant permission to use purchased Products for personal and commercial projects, subject to the conditions of this Agreement.',
      },
      {
        type: 'table',
        columns: ['Feature', 'Single User', 'Multi User'],
        rows: [
          ['Individual access', '1 user', 'Multiple authorised users'],
          ['Personal projects', 'Yes', 'Yes'],
          ['Commercial projects', 'Yes', 'Yes'],
          ['Client projects', 'Yes', 'Yes'],
          ['Template customisation', 'Yes', 'Yes'],
          ['Redistribution of original files', 'Not permitted', 'Not permitted'],
          ['Sharing with unlicensed users', 'Not permitted', 'Not permitted'],
          // NOTE: this row repeats the "Redistribution of original files" label in
          // the source design (likely a Figma typo) — reproduced as-is; flagged to client.
          ['Redistribution of original files', 'Team access', 'Within purchased seats'],
        ],
      },
      {
        type: 'p',
        text: 'The Multi User License is limited to the number of users or seats specified at the time of purchase.',
      },
    ],
  },
]

const SECTIONS = [
  {
    // NOTE: the source design duplicates this entire "License Grant and Scope"
    // block (incl. 1.1/1.2) twice — reproduced once here; flagged to client.
    heading: 'License Grant and Scope',
    blocks: [
      {
        type: 'p',
        text: 'Upon successful purchase, Telephant grants you a limited, non-exclusive, non-transferable, worldwide licence to access and use the purchased Product in accordance with this Agreement.',
      },
      {
        type: 'p',
        text: 'The licence allows you to use the Product to create customised websites, applications, digital experiences, and other permitted end products for personal or commercial purposes.',
      },
      {
        type: 'p',
        text: 'A licence does not transfer ownership of the Product or its underlying intellectual property to you.',
      },
      {
        type: 'p',
        text: 'Unless otherwise stated on the relevant product page, the licence is ongoing and does not expire as long as you comply with this Agreement.',
      },
      { type: 'h3', text: '1.1 Single User License' },
      // NOTE: this sentence is privacy-policy text mis-pasted in the source design —
      // reproduced verbatim; flagged to client to confirm the correct copy.
      {
        type: 'p',
        text: 'When you access our website, certain information may automatically be collected through cookies, analytics tools, and similar technologies.',
      },
      { type: 'p', text: 'Under this licence:' },
      {
        type: 'ul',
        items: [
          'Only one individual may access and work with the purchased Product.',
          'The licence cannot be shared with colleagues, friends, clients, or other individuals.',
          'Login credentials, download links, source files, and other access details must remain private.',
          'The licence cannot be transferred or reassigned to another individual without our written approval.',
        ],
      },
      {
        type: 'p',
        text: 'If you require multiple individuals to access the same Product, you must purchase the Multi User License.',
      },
      { type: 'h3', text: '1.2 Multi User License' },
      {
        type: 'p',
        text: 'The Multi User License is intended for businesses, agencies, studios, and teams that require multiple individuals to access and use the same purchased Product.',
      },
      { type: 'p', text: 'Under this licence:' },
      {
        type: 'ul',
        items: [
          'Multiple authorised users within the purchasing organisation may access and use the Product.',
          'The number of authorised users must not exceed the number of seats purchased.',
          'Access must remain within the purchasing organisation.',
          'Each authorised user must comply with this License Agreement.',
          'The licence cannot be shared with unrelated organisations or external individuals outside the permitted scope.',
        ],
      },
      {
        type: 'p',
        text: 'The organisation purchasing the licence is responsible for ensuring that all authorised users comply with these terms.',
      },
      {
        type: 'p',
        text: 'If additional users need access beyond the purchased seat limit, you must upgrade your licence or purchase additional seats, subject to availability.',
      },
      {
        type: 'p',
        text: 'Multi User Licenses do not permit public distribution, resale, or unrestricted sharing of the original Product files.',
      },
    ],
  },
  {
    heading: 'Permitted Use',
    blocks: [
      {
        type: 'p',
        text: 'Subject to the selected licence type and the restrictions outlined in this Agreement, you are permitted to use purchased Products for personal, professional, and commercial projects.',
      },
      { type: 'p', text: 'You may:' },
      {
        type: 'ul',
        items: [
          'Download and access the purchased Product.',
          'Customise, modify, and adapt the template to suit your requirements.',
          'Use the Product to create websites, web applications, landing pages, and other digital experiences.',
          'Use the Product for your own business, brand, or personal projects.',
          'Use the Product to create websites or digital projects for clients.',
          'Combine the Product with other design assets, resources, and technologies.',
          'Modify the original design, layout, content, and visual elements.',
          'Publish completed projects for public or commercial use.',
          'Use the customised end product as part of a business, service, or commercial offering.',
        ],
      },
      { type: 'h3', text: 'Examples of Permitted Use' },
      {
        type: 'p',
        text: 'The following are examples of acceptable use under both licence types, subject to the applicable user limits:',
      },
      {
        type: 'ul',
        items: [
          'Building a business website using a purchased template.',
          'Creating a landing page for a marketing campaign.',
          'Developing a website for a client or customer.',
          'Customising a template for an agency or business project.',
          'Using a template as the foundation for a commercial website or application.',
          'Incorporating customised template elements into a larger digital project.',
        ],
      },
      { type: 'h3', text: 'End Product Definition' },
      {
        type: 'p',
        text: 'An "End Product" refers to a completed or customised website, application, digital experience, or other deliverable created using a Telephant Product.',
      },
      {
        type: 'p',
        text: 'An End Product must represent a customised implementation of the original Product and must not allow third parties to extract, access, or reuse the original template files, source assets, or underlying components as standalone resources.',
      },
      {
        type: 'p',
        text: 'The licence allows you to distribute and commercially use your completed End Products, but not the original Product itself.',
      },
    ],
  },
  {
    heading: 'Prohibited Use',
    blocks: [
      {
        type: 'p',
        text: 'You may not use, distribute, or exploit Telephant Products in ways that violate this Agreement or infringe upon our intellectual property rights.',
      },
      {
        type: 'p',
        text: 'Unless expressly authorised by us in writing, you are not permitted to:',
      },
      {
        type: 'ul',
        items: [
          'Sell, resell, sublicense, or redistribute the original Product files.',
          'Share, publish, or make purchased templates publicly available for download.',
          'Distribute original or modified template files as standalone digital products.',
          'Include purchased templates in another template marketplace, UI kit, design system, component library, or competing product.',
          'Repackage or modify a purchased template for resale or redistribution.',
          'Share Single User License access with other individuals.',
          'Exceed the permitted user limit under a Multi User License.',
          'Share login credentials, download links, or access credentials with unauthorised individuals.',
          'Use purchased Products to create competing products intended for resale or public distribution.',
          'Claim ownership or authorship of the original Telephant Product.',
          'Remove copyright notices, ownership information, or applicable attribution requirements.',
          'Use any Product in a manner that violates applicable laws or infringes upon third-party rights.',
        ],
      },
      { type: 'h3', text: 'Sharing and Group Purchases' },
      {
        type: 'p',
        text: 'Organising or participating in group purchases, shared accounts, or collective purchasing arrangements intended to distribute a single licence among unauthorised users is strictly prohibited.',
      },
      {
        type: 'p',
        text: 'Each individual accessing a Product must be covered by an applicable licence.',
      },
      {
        type: 'p',
        text: 'Multi User Licenses may only be shared within the purchasing organisation and within the number of authorised seats purchased.',
      },
    ],
  },
  {
    heading: 'Team and User Access',
    blocks: [
      {
        type: 'p',
        text: 'Licences are based on the number of individuals authorised to access and use a purchased Product.',
      },
      {
        type: 'p',
        text: 'A "User" refers to an individual who directly accesses, downloads, modifies, or works with the purchased template files, design assets, or related resources.',
      },
      { type: 'h3', text: 'Single User Access' },
      { type: 'p', text: 'Single User Licenses are restricted to one individual.' },
      {
        type: 'p',
        text: 'They cannot be shared, reassigned, or transferred to another individual without our written approval.',
      },
      { type: 'h3', text: 'Multi User Access' },
      {
        type: 'p',
        text: 'Multi User Licenses allow multiple individuals within the purchasing organisation to access the purchased Product, subject to the purchased seat limit.',
      },
      {
        type: 'p',
        text: 'The organisation is responsible for managing user access and ensuring that only authorised individuals use the Product.',
      },
      {
        type: 'p',
        text: 'If an employee or team member leaves the organisation, their access should be revoked and reassigned internally where permitted under the purchased licence.',
      },
      { type: 'h3', text: 'Additional Users and Licence Upgrades' },
      {
        type: 'p',
        text: 'If your team grows and additional individuals require access, you must upgrade your existing licence or purchase additional seats.',
      },
      {
        type: 'p',
        text: 'Any upgrade pricing, seat availability, and applicable adjustments will be communicated during the upgrade process or through our support team.',
      },
      {
        type: 'p',
        text: 'Purchasing a Multi User License does not automatically grant unlimited access to all employees, contractors, affiliates, or external partners.',
      },
    ],
  },
  {
    heading: 'Ownership and Intellectual Property',
    blocks: [
      {
        type: 'p',
        text: 'All Telephant Products, including their original designs, layouts, graphics, illustrations, documentation, source files, components, and related materials, remain the intellectual property of Dstudio Agency or their respective licensors and creators.',
      },
      {
        type: 'p',
        text: 'Your purchase grants you a limited licence to use the Product. It does not transfer ownership of the original Product or any associated intellectual property rights.',
      },
      { type: 'h3', text: 'Ownership of End Products' },
      {
        type: 'p',
        text: 'You retain ownership of the original content, materials, and other elements you independently create and incorporate into your customised End Product.',
      },
      {
        type: 'p',
        text: 'Your completed website, application, or other End Product may be used, published, and commercially distributed in accordance with this Agreement.',
      },
      {
        type: 'p',
        text: 'However, this does not transfer ownership of the original Telephant template, its underlying design assets, or any third-party materials included within it.',
      },
      { type: 'h3', text: 'Third-Party Assets' },
      {
        type: 'p',
        text: 'Certain Products may include or reference third-party resources such as fonts, icons, images, illustrations, plugins, software libraries, or other digital assets.',
      },
      {
        type: 'p',
        text: 'These resources may be subject to separate licensing conditions imposed by their respective owners.',
      },
      {
        type: 'p',
        text: 'Your purchase of a Telephant Product does not automatically grant additional rights to third-party assets beyond those permitted under their applicable licences.',
      },
      {
        type: 'p',
        text: 'You are responsible for reviewing and complying with any third-party licensing requirements before using such resources in your projects.',
      },
    ],
  },
  {
    heading: 'Product Updates and Support',
    blocks: [
      {
        type: 'p',
        text: 'Telephant may provide updates, improvements, fixes, or additional resources for certain Products.',
      },
      {
        type: 'p',
        text: 'However, unless expressly stated on the relevant product page or agreed upon separately in writing, we are not obligated to provide:',
      },
      {
        type: 'ul',
        items: [
          'Ongoing updates or upgrades.',
          'Additional features or functionality.',
          'Customisation or implementation services.',
          'Technical support for third-party platforms or software.',
          'Ongoing maintenance or troubleshooting.',
          'Future versions or replacement Products.',
        ],
      },
      {
        type: 'p',
        text: 'Support availability and the scope of assistance may vary depending on the Product and the information provided on its product page.',
      },
      {
        type: 'p',
        text: 'We make reasonable efforts to assist customers with purchase-related enquiries, download issues, and questions concerning their licence.',
      },
      {
        type: 'p',
        text: 'However, we do not guarantee specific response times or ongoing support commitments unless separately agreed.',
      },
    ],
  },
  {
    heading: 'Licence Violations and Enforcement',
    blocks: [
      {
        type: 'p',
        text: 'We reserve the right to investigate suspected violations of this Agreement and take appropriate action where unauthorised use or distribution of our Products is identified.',
      },
      { type: 'p', text: 'Examples of violations include:' },
      {
        type: 'ul',
        items: [
          'Unauthorised sharing or redistribution of Product files.',
          'Sharing access credentials with unlicensed users.',
          'Exceeding purchased user limits.',
          'Reselling or repackaging original Products.',
          'Using Products to create competing digital resources.',
          'Participating in unauthorised group purchases or shared access arrangements.',
        ],
      },
      { type: 'h3', text: 'Actions We May Take' },
      {
        type: 'p',
        text: 'If we reasonably believe that a material violation of this Agreement has occurred, we may:',
      },
      {
        type: 'ul',
        items: [
          'Request that the unauthorised use or distribution stop immediately.',
          'Suspend or revoke access to the affected Product.',
          'Terminate the applicable licence.',
          'Restrict or suspend associated customer accounts.',
          'Refuse future purchases where legally permitted.',
          'Pursue available legal remedies to protect our intellectual property and business interests.',
        ],
      },
      {
        type: 'p',
        text: 'Where appropriate, we may provide an opportunity to resolve or remedy a violation before taking further action.',
      },
      {
        type: 'p',
        text: 'Termination of a licence does not affect any rights or remedies that may be available to us under applicable law.',
      },
    ],
  },
  {
    heading: 'Termination',
    blocks: [
      {
        type: 'p',
        text: 'This Agreement remains in effect for as long as you retain and use a valid licence.',
      },
      {
        type: 'p',
        text: 'We may suspend or terminate your licence if you materially breach the terms of this Agreement and fail to remedy the breach where a reasonable opportunity to do so is provided, or where immediate action is reasonably necessary to protect our intellectual property, security, or business interests.',
      },
      { type: 'p', text: 'Upon termination:' },
      {
        type: 'ul',
        items: [
          'You must stop using the affected Product.',
          'You must stop accessing or distributing the original Product files.',
          'You must remove any unauthorised copies or shared versions under your control.',
          'You must ensure that any unauthorised access granted to other individuals is discontinued.',
        ],
      },
      {
        type: 'p',
        text: 'Termination does not automatically transfer ownership of any intellectual property or eliminate liabilities arising from a prior breach.',
      },
      {
        type: 'p',
        text: 'Any refund resulting from termination will be determined in accordance with our Refund Policy and applicable law.',
      },
    ],
  },
  {
    heading: 'Refund Policy',
    blocks: [
      {
        type: 'p',
        text: 'All purchases made through Telephant are subject to our Refund Policy and applicable consumer protection laws.',
      },
      {
        type: 'p',
        text: 'Because Telephant primarily offers digital products, refunds may be subject to specific conditions once a Product has been delivered, downloaded, or accessed.',
      },
      {
        type: 'p',
        text: 'Please review the relevant product information and licence details before completing your purchase.',
      },
      {
        type: 'p',
        text: 'If you experience issues accessing a purchased Product, receive an incorrect file, or encounter a technical issue that prevents you from using the purchased Product as described, please contact our support team.',
      },
      {
        type: 'p',
        text: 'Refund eligibility will be assessed in accordance with our published Refund Policy and applicable law.',
      },
      {
        type: 'p',
        text: 'Nothing in this Agreement excludes any mandatory consumer rights or remedies available under applicable federal or state laws.',
      },
    ],
  },
  {
    heading: 'Disclaimer of Warranties',
    blocks: [
      {
        type: 'p',
        text: 'Telephant Products are provided on an "as is" and "as available" basis, to the maximum extent permitted by applicable law.',
      },
      {
        type: 'p',
        text: 'While we make reasonable efforts to ensure that our Products are accurately described and function as intended, we do not guarantee that:',
      },
      {
        type: 'ul',
        items: [
          'Every Product will meet your specific requirements.',
          'Products will be compatible with all third-party platforms, software, or devices.',
          'Products will operate without errors or interruptions.',
          'Products will remain available in their original form indefinitely.',
          'Any particular business, commercial, or financial outcome will result from using a Product.',
        ],
      },
      {
        type: 'p',
        text: 'You are responsible for reviewing the product descriptions, compatibility information, and applicable requirements before making a purchase.',
      },
      {
        type: 'p',
        text: 'To the maximum extent permitted by applicable law, we disclaim all express and implied warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      },
      {
        type: 'p',
        text: 'Nothing in this section excludes any warranty or consumer protection right that cannot legally be excluded.',
      },
    ],
  },
  {
    heading: 'Limitation of Liability',
    blocks: [
      {
        type: 'p',
        text: 'To the maximum extent permitted by applicable law, Dstudio Agency, Telephant, and their respective owners, employees, contractors, and representatives shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising out of or relating to your use of our Products or Services.',
      },
      {
        type: 'p',
        text: 'This includes loss of revenue, business opportunities, data, profits, or anticipated savings.',
      },
      {
        type: 'p',
        text: 'To the maximum extent permitted by law, our total aggregate liability arising out of or relating to this Agreement shall not exceed the amount paid by you for the specific Product giving rise to the claim.',
      },
      {
        type: 'p',
        text: 'Nothing in this section limits liability that cannot legally be excluded under applicable law.',
      },
    ],
  },
  {
    heading: 'Governing Law',
    blocks: [
      {
        type: 'p',
        text: 'This License Agreement shall be governed by and interpreted in accordance with the laws of the State of Utah, United States, without regard to its conflict-of-law principles.',
      },
      {
        type: 'p',
        text: 'To the extent permitted by applicable law, any dispute arising out of or relating to this Agreement shall be subject to the jurisdiction of the state and federal courts located in Utah, United States.',
      },
      {
        type: 'p',
        text: 'Nothing in this section is intended to limit mandatory consumer rights or protections available under applicable federal or state laws.',
      },
    ],
  },
  {
    heading: 'Changes to This Agreement',
    blocks: [
      {
        type: 'p',
        text: 'We reserve the right to modify, update, or replace this License Agreement from time to time.',
      },
      {
        type: 'p',
        text: 'Any changes will be published on the Telephant website, together with an updated revision date.',
      },
      {
        type: 'p',
        text: 'Unless otherwise stated, updated terms will apply prospectively to purchases made after the effective date of the revised Agreement.',
      },
      {
        type: 'p',
        text: 'Changes to the Agreement will not automatically remove or reduce the rights granted under a previously purchased licence, unless required by law or agreed upon by the parties.',
      },
      {
        type: 'p',
        text: 'We encourage you to review this Agreement periodically to remain informed about the terms governing the use of Telephant Products.',
      },
    ],
  },
  {
    heading: 'Contact and Support',
    blocks: [
      {
        type: 'p',
        text: 'If you have questions about this License Agreement, your purchased licence, user access, or permitted use of a Product, please contact us.',
      },
      {
        type: 'contact',
        name: 'Telephant',
        lines: [
          'Operated by Dstudio Agency',
          '585 W 500 S #130',
          'Bountiful, UT 84010',
          'United States',
        ],
        email: { label: 'Email:', value: 'sales@telephant.store' },
      },
      {
        type: 'p',
        text: 'When contacting us about a purchase or licence, please include your order reference and the email address associated with your purchase so that we can assist you.',
      },
    ],
  },
]

export default function LicenseAgreementPage() {
  return (
    <LegalPage
      title="License Agreement"
      lastUpdated="November 17, 2026"
      intro={INTRO}
      preamble={PREAMBLE}
      sections={SECTIONS}
    />
  )
}
