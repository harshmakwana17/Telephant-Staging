import { LegalPage } from '@/components/legal/LegalPage'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Telephant (operated by Dstudio Agency) collects, uses, stores, and shares your personal information when you visit our website or purchase our digital products.',
}

const INTRO = [
  'At Telephant, your privacy matters to us. We are committed to protecting your personal information and being transparent about how we collect, use, store, and share it when you visit our website or purchase our digital products.',
  'Telephant is operated by Dstudio Agency ("Company", "we", "us", or "our"), based in the United States. This Privacy Policy explains how we handle personal information when you visit our website, browse our template collection, make a purchase, contact us, or otherwise interact with our services.',
  'We believe in keeping things simple and transparent. This policy outlines what information we collect, why we collect it, how it is used, and the choices and rights available to you.',
  'If you do not agree with this Privacy Policy, please discontinue using our website and services.',
  'This Privacy Policy applies to all information collected through our website, including browsing activities, purchases, customer communications, marketing activities, and any related services (collectively referred to as the "Services").',
]

const SECTIONS = [
  {
    heading: 'What Information Do We Collect?',
    blocks: [
      {
        type: 'p',
        text: 'We collect personal information that you voluntarily provide to us, information generated through your use of our website, and certain information received from third-party services that help us operate our business.',
      },
      {
        type: 'p',
        text: 'The information we collect depends on how you interact with Telephant and the Services you use.',
      },
      { type: 'h3', text: 'Personal Information You Provide to Us' },
      {
        type: 'ul',
        items: [
          {
            label: 'Contact Information',
            text: 'Your name, email address, billing address, and other contact details.',
          },
          {
            label: 'Account Information',
            text: 'Your email address, login credentials, and other information required to create or manage an account, if account registration is available.',
          },
          {
            label: 'Purchase Information',
            text: 'Details about the templates or digital products you purchase, transaction history, order references, and purchase-related records.',
          },
          {
            label: 'Payment Information',
            text: 'Payment-related details required to complete a transaction. Payments may be processed through third-party payment providers. We do not intend to store complete payment card details on our own servers.',
          },
        ],
      },
      {
        type: 'p',
        text: 'You are responsible for ensuring that the personal information you provide to us is accurate and up to date.',
      },
      { type: 'h3', text: 'Information Automatically Collected' },
      {
        type: 'p',
        text: 'When you access our website, certain information may automatically be collected through cookies, analytics tools, and similar technologies.',
      },
      {
        type: 'p',
        text: 'This information may include:',
      },
      {
        type: 'ul',
        items: [
          'IP address and general location information.',
          'Browser type, device type, and operating system.',
          'Pages visited and links clicked.',
          'Date, time, and duration of website visits.',
          'Referring websites and traffic sources.',
          'Website interactions, browsing patterns, and usage information.',
        ],
      },
      {
        type: 'p',
        text: 'This information helps us understand how visitors interact with Telephant and allows us to improve our website, products, and overall shopping experience.',
      },
      { type: 'h3', text: 'Payment and Transaction Information' },
      {
        type: 'p',
        text: 'When you purchase a digital product from Telephant, payment transactions are handled through third-party payment processing providers.',
      },
      {
        type: 'p',
        text: 'Depending on the payment method, these providers may collect and process information such as your payment card details, billing information, and transaction identifiers.',
      },
      {
        type: 'p',
        text: 'We may receive transaction confirmations, payment status, order details, and other information necessary to process your purchase, provide access to your digital products, and maintain appropriate business records.',
      },
      {
        type: 'p',
        text: 'Your payment information is subject to the privacy policies and security practices of the respective payment provider.',
      },
    ],
  },
  {
    heading: 'How Do We Use Your Information?',
    blocks: [
      {
        type: 'p',
        text: 'We use the personal information we collect for legitimate business purposes, including providing our Services, fulfilling purchases, communicating with customers, improving our website, and meeting applicable legal obligations.',
      },
      {
        type: 'p',
        text: 'More specifically, we may use your information for the following purposes:',
      },
      { type: 'h3', text: 'To Process Purchases and Deliver Digital Products' },
      { type: 'p', text: 'We use your information to:' },
      {
        type: 'ul',
        items: [
          'Process and confirm your purchases.',
          'Provide access to purchased templates and digital downloads.',
          'Send order confirmations, receipts, and purchase-related notifications.',
          'Maintain records of transactions and product access.',
          'Assist with issues relating to downloads, access, or purchased products.',
        ],
      },
      { type: 'h3', text: 'To Communicate With You' },
      { type: 'p', text: 'We may use your contact information to:' },
      {
        type: 'ul',
        items: [
          'Respond to enquiries and customer support requests.',
          'Provide updates regarding your purchases.',
          'Notify you about important changes to our Services or policies.',
          'Share relevant information about products or services you have requested.',
        ],
      },
      { type: 'h3', text: 'To Improve Our Website and Products' },
      { type: 'p', text: 'We may analyse website usage and customer interactions to:' },
      {
        type: 'ul',
        items: [
          'Understand how visitors discover and use Telephant.',
          'Identify popular templates and product categories.',
          'Improve website navigation and functionality.',
          'Evaluate the performance of our website and marketing activities.',
          'Develop new products and improve existing offerings.',
        ],
      },
      {
        type: 'p',
        text: 'Where reasonably possible, we may use aggregated or anonymised information for analytical and business purposes.',
      },
      { type: 'h3', text: 'To Send Marketing Communications' },
      {
        type: 'p',
        text: 'If you have subscribed to our mailing list or otherwise consented to receive marketing communications, we may send you information about new templates, product launches, offers, updates, and other relevant content.',
      },
      {
        type: 'p',
        text: 'You can unsubscribe from marketing emails at any time by using the unsubscribe link included in the email or contacting us directly.',
      },
      {
        type: 'p',
        text: 'We will continue to send essential transactional communications relating to your purchases and account where necessary.',
      },
      { type: 'h3', text: 'To Protect Our Business and Comply With Legal Obligations' },
      { type: 'p', text: 'We may use your information to:' },
      {
        type: 'ul',
        items: [
          'Detect and prevent fraudulent transactions.',
          'Protect the security of our website and Services.',
          'Enforce our applicable terms, licenses, and policies.',
          'Resolve disputes and investigate potential misuse.',
          'Comply with applicable laws, regulations, and lawful requests.',
        ],
      },
    ],
  },
  {
    heading: 'Will Your Information Be Shared With Anyone?',
    blocks: [
      {
        type: 'p',
        text: 'We respect your privacy and do not share personal information indiscriminately.',
      },
      {
        type: 'p',
        text: 'However, certain information may be shared with trusted third parties when necessary to operate our business, provide our Services, process transactions, or meet legal obligations.',
      },
      { type: 'p', text: 'We may share information in the following circumstances:' },
      { type: 'h3', text: 'Service Providers and Business Partners' },
      {
        type: 'p',
        text: 'We may share relevant information with third-party service providers who assist us in operating Telephant.',
      },
      { type: 'p', text: 'These providers may include:' },
      {
        type: 'ul',
        items: [
          'Website hosting and infrastructure providers.',
          'Payment processing providers.',
          'Email delivery and communication platforms.',
          'Website analytics and performance monitoring providers.',
          'Customer support and business management tools.',
          'Security, fraud prevention, and technical service providers.',
        ],
      },
      {
        type: 'p',
        text: 'These providers are permitted to process personal information only as necessary to perform services on our behalf or as otherwise permitted by applicable law.',
      },
      { type: 'h3', text: 'Legal Requirements' },
      {
        type: 'p',
        text: 'We may disclose personal information when required to do so by applicable law, regulation, court order, subpoena, or other valid legal process.',
      },
      {
        type: 'p',
        text: 'We may also disclose information when reasonably necessary to protect our legal rights, investigate suspected fraud, enforce our policies, or protect the safety and security of our customers and business.',
      },
      { type: 'h3', text: 'Business Transfers' },
      {
        type: 'p',
        text: 'If Dstudio Agency or Telephant is involved in a merger, acquisition, restructuring, financing, or sale of all or part of its business or assets, personal information may be transferred as part of that transaction, subject to applicable privacy requirements.',
      },
      { type: 'h3', text: 'Advertising and Analytics Partners' },
      {
        type: 'p',
        text: 'We may use third-party analytics or advertising services to understand website performance and, where enabled, deliver relevant advertisements.',
      },
      {
        type: 'p',
        text: 'These services may collect information about your interactions with our website through cookies, pixels, and similar technologies.',
      },
      {
        type: 'p',
        text: 'Where applicable privacy laws require it, we will provide appropriate notice and choices regarding the sharing of personal information for targeted advertising.',
      },
      {
        type: 'p',
        text: 'We do not sell personal information to third parties in exchange for monetary payment. However, certain data sharing activities for advertising purposes may be considered a "sale" or "sharing" under specific US state privacy laws, depending on the technologies and services we use.',
      },
    ],
  },
  {
    heading: 'Do We Use Cookies and Other Tracking Technologies?',
    blocks: [
      {
        type: 'p',
        text: 'Yes. Telephant may use cookies and similar tracking technologies to improve your browsing experience and understand how visitors interact with our website.',
      },
      {
        type: 'p',
        text: 'Cookies are small text files stored on your device when you visit a website. They help websites remember certain information and provide a more consistent experience.',
      },
      { type: 'p', text: 'We may use the following types of cookies:' },
      { type: 'h3', text: 'Essential Cookies' },
      {
        type: 'p',
        text: 'These cookies are necessary for the website to function properly. They may support website navigation, shopping functionality, account authentication, and security.',
      },
      { type: 'h3', text: 'Analytics Cookies' },
      {
        type: 'p',
        text: 'These cookies help us understand website traffic, visitor behaviour, and how customers interact with different pages and products.',
      },
      { type: 'h3', text: 'Functional Cookies' },
      {
        type: 'p',
        text: 'These cookies may remember your preferences and improve your overall browsing experience.',
      },
      { type: 'h3', text: 'Advertising and Marketing Cookies' },
      {
        type: 'p',
        text: 'Where enabled, these cookies may help measure advertising performance and deliver relevant advertisements based on browsing activity.',
      },
      {
        type: 'p',
        text: 'You can manage or disable cookies through your browser settings. You may also be presented with additional cookie preferences through our website, where applicable.',
      },
      {
        type: 'p',
        text: 'Please note that disabling certain cookies may affect the functionality of some website features.',
      },
    ],
  },
  {
    heading: 'How Long Do We Keep Your Information?',
    blocks: [
      {
        type: 'p',
        text: 'We retain personal information only for as long as reasonably necessary to fulfil the purposes described in this Privacy Policy.',
      },
      { type: 'p', text: 'The length of time we retain information depends on factors such as:' },
      {
        type: 'ul',
        items: [
          'Whether you have an active customer account.',
          'Whether you have completed a purchase.',
          'Our need to maintain transaction and accounting records.',
          'Ongoing customer support or business requirements.',
          'Applicable legal, tax, and regulatory obligations.',
          'The resolution of disputes or enforcement of our agreements.',
        ],
      },
      {
        type: 'p',
        text: 'When personal information is no longer required, we will take reasonable steps to delete, anonymise, or securely dispose of it, subject to applicable legal and operational requirements.',
      },
      {
        type: 'p',
        text: 'Please note that certain information may remain in backup systems for a limited period before being permanently removed.',
      },
    ],
  },
  {
    heading: 'How Do We Keep Your Information Safe?',
    blocks: [
      {
        type: 'p',
        text: 'We take reasonable technical, administrative, and organisational measures to protect personal information against unauthorised access, disclosure, alteration, loss, or misuse.',
      },
      {
        type: 'p',
        text: 'These measures may include access controls, secure infrastructure, appropriate authentication procedures, and the use of trusted third-party service providers.',
      },
      {
        type: 'p',
        text: 'However, no method of transmitting information over the internet or storing information electronically is completely secure.',
      },
      {
        type: 'p',
        text: 'While we make reasonable efforts to protect your personal information, we cannot guarantee absolute security. You should use our website and Services within a secure digital environment and take appropriate precautions when sharing personal information online.',
      },
    ],
  },
  {
    heading: 'Do We Collect Information From Children?',
    blocks: [
      {
        type: 'p',
        text: 'Telephant is intended for individuals who are at least 18 years old.',
      },
      {
        type: 'p',
        text: 'We do not knowingly collect personal information from children under the age of 13 or knowingly direct our Services toward children.',
      },
      {
        type: 'p',
        text: 'If we become aware that we have collected personal information from a child under 13 without the required parental consent, we will take reasonable steps to delete that information.',
      },
      {
        type: 'p',
        text: 'If you believe that a child has provided personal information to us, please contact us using the details provided below.',
      },
    ],
  },
  {
    heading: 'What Are Your Privacy Rights?',
    blocks: [
      {
        type: 'p',
        text: 'Depending on where you reside in the United States, you may have certain rights regarding the personal information we collect and process.',
      },
      { type: 'p', text: 'These rights may include:' },
      { type: 'h3', text: 'Right to Know and Access' },
      {
        type: 'p',
        text: 'You may have the right to request information about the personal information we collect, use, disclose, or otherwise process about you.',
      },
      { type: 'h3', text: 'Right to Correct' },
      {
        type: 'p',
        text: 'You may request that we correct inaccurate personal information that we maintain about you.',
      },
      { type: 'h3', text: 'Right to Delete' },
      {
        type: 'p',
        text: 'You may request the deletion of personal information we have collected about you, subject to certain legal exceptions and retention requirements.',
      },
      { type: 'h3', text: 'Right to Data Portability' },
      {
        type: 'p',
        text: 'Where applicable, you may request a copy of certain personal information in a portable and readily usable format.',
      },
      { type: 'h3', text: 'Right to Opt Out' },
      {
        type: 'p',
        text: 'Depending on applicable state law, you may have the right to opt out of certain activities, including:',
      },
      {
        type: 'ul',
        items: [
          'The sale of personal information.',
          'The sharing of personal information for targeted advertising.',
          'Certain types of profiling that produce significant legal or similarly significant effects.',
        ],
      },
      { type: 'h3', text: 'Right to Non-Discrimination' },
      {
        type: 'p',
        text: 'We will not unlawfully discriminate against you for exercising privacy rights available under applicable law.',
      },
      { type: 'h3', text: 'How to Exercise Your Rights' },
      {
        type: 'p',
        text: 'To submit a privacy-related request, please contact us using the details provided in the Contact Us section of this policy.',
      },
      {
        type: 'p',
        text: 'We may need to verify your identity before processing certain requests to protect your personal information.',
      },
      {
        type: 'p',
        text: 'Where required by applicable law, we will respond within the prescribed timeframe. If we cannot fulfil a request, we will explain the reason where legally required and provide information about any available appeal process.',
      },
      {
        type: 'p',
        text: 'Certain rights and exemptions may vary depending on your state of residence.',
      },
    ],
  },
  {
    heading: 'Additional Privacy Rights for California Residents',
    blocks: [
      {
        type: 'p',
        text: 'Subject to applicable requirements and exceptions, these rights may include:',
      },
      {
        type: 'ul',
        items: [
          'The right to know what categories of personal information we collect and the purposes for which it is used.',
          'The right to request access to specific personal information we maintain about you.',
          'The right to request deletion of personal information.',
          'The right to request correction of inaccurate personal information.',
          'The right to opt out of the sale or sharing of personal information, where applicable.',
          'The right to limit certain uses of sensitive personal information, where applicable.',
          'The right not to receive discriminatory treatment for exercising your privacy rights.',
        ],
      },
      {
        type: 'p',
        text: 'We do not knowingly sell personal information of individuals under 16 years of age.',
      },
      {
        type: 'p',
        text: 'If you are a California resident and would like to exercise your rights, please contact us using the information provided below.',
      },
    ],
  },
  {
    heading: 'Additional Privacy Rights for Residents of Other US States',
    blocks: [
      {
        type: 'p',
        text: 'Several US states have enacted privacy laws that provide residents with specific rights concerning their personal information.',
      },
      {
        type: 'p',
        text: 'Depending on your state of residence and the applicability of relevant laws, you may have rights to access, correct, delete, or obtain a copy of your personal information, as well as opt out of certain data processing activities.',
      },
      {
        type: 'p',
        text: 'These rights may be available to residents of states including Colorado, Connecticut, Delaware, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, and Virginia, among others.',
      },
      {
        type: 'p',
        text: 'The availability and scope of these rights depend on applicable state law, including any applicable exemptions and eligibility requirements.',
      },
      {
        type: 'p',
        text: 'You may contact us to submit a privacy request or obtain further information about your rights.',
      },
    ],
  },
  {
    heading: 'Third-Party Websites and Services',
    blocks: [
      {
        type: 'p',
        text: 'Our website may contain links to third-party websites, services, platforms, or resources.',
      },
      {
        type: 'p',
        text: 'For example, you may be redirected to an external payment provider to complete a purchase or access a third-party platform associated with a digital template.',
      },
      {
        type: 'p',
        text: 'These third-party websites and services operate independently of Telephant and have their own privacy policies and practices.',
      },
      {
        type: 'p',
        text: 'We are not responsible for the privacy, security, or content practices of external websites or services.',
      },
      {
        type: 'p',
        text: 'We encourage you to review the applicable privacy policies before sharing personal information with third parties.',
      },
    ],
  },
  {
    heading: 'Do We Respond to Do Not Track Signals?',
    blocks: [
      {
        type: 'p',
        text: 'Some web browsers offer a Do Not Track ("DNT") feature that allows users to express a preference regarding online tracking.',
      },
      {
        type: 'p',
        text: 'There is currently no universally adopted standard for how websites should interpret all DNT signals.',
      },
      {
        type: 'p',
        text: 'Our website may not respond to every DNT signal. However, we will honour applicable browser-based privacy signals and opt-out preference signals where required by applicable US privacy laws.',
      },
      {
        type: 'p',
        text: 'You may also manage your privacy preferences through your browser settings and any cookie preference tools made available on our website.',
      },
    ],
  },
  {
    heading: 'Do We Make Updates to This Privacy Policy?',
    blocks: [
      {
        type: 'p',
        text: 'Yes. We may update this Privacy Policy from time to time to reflect changes in our business practices, website functionality, third-party services, or applicable legal requirements.',
      },
      {
        type: 'p',
        text: 'Whenever we make changes, we will update the "Last updated" date displayed at the beginning of this page.',
      },
      {
        type: 'p',
        text: 'If we make material changes that significantly affect how we handle personal information, we may provide additional notice through our website or other appropriate communication channels where required by law.',
      },
      {
        type: 'p',
        text: 'We encourage you to review this page periodically to stay informed about how we protect your information.',
      },
    ],
  },
  {
    heading: 'How Can You Contact Us About This Policy?',
    blocks: [
      {
        type: 'p',
        text: 'If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us.',
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
        email: { label: 'Email:', value: '[Insert official privacy/contact email]' },
      },
      {
        type: 'p',
        text: 'We will make reasonable efforts to review and respond to privacy-related enquiries within the timeframes required by applicable law.',
      },
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="November 15, 2026"
      intro={INTRO}
      sections={SECTIONS}
    />
  )
}
