import { LegalPage } from '@/components/legal/LegalPage'

export const metadata = {
  title: 'Terms & Conditions',
  description:
    'The terms that govern your access to and use of the Telephant website, digital products, templates, and related services.',
}

const INTRO = [
  'By accessing or using the Telephant website, browsing our template collection, purchasing digital products, or using any of our Services, you agree to be bound by these Terms & Conditions.',
  'Please read these Terms carefully before using our website or purchasing any products. If you do not agree with these Terms, you should not access or use our website or Services.',
  'Telephant is operated by Dstudio Agency ("Company", "we", "us", or "our"), based in the United States. These Terms govern your access to and use of the Telephant website, digital products, templates, and related services (collectively referred to as the "Services").',
  'By placing an order or otherwise using our Services, you acknowledge that you have read, understood, and agreed to these Terms, along with our Privacy Policy and any applicable product-specific licence terms.',
  'We reserve the right to update these Terms from time to time. Your continued use of our Services following the publication of updated Terms constitutes acceptance of the revised Terms, to the extent permitted by applicable law.',
]

const SECTIONS = [
  {
    heading: 'Ownership and Intellectual Property',
    blocks: [
      {
        type: 'p',
        text: 'Unless otherwise stated, all content, materials, designs, templates, graphics, illustrations, branding, website content, and other intellectual property available through Telephant are owned by Dstudio Agency, its licensors, or the respective creators who have authorised their distribution through Telephant.',
      },
      {
        type: 'p',
        text: 'All such materials are protected by applicable intellectual property and copyright laws.',
      },
      { type: 'h3', text: 'Ownership of Digital Products' },
      {
        type: 'p',
        text: 'When you purchase a template or digital product from Telephant, you are purchasing a licence to use that product, not ownership of the underlying intellectual property.',
      },
      {
        type: 'p',
        text: 'Your purchase grants you a limited, non-exclusive, non-transferable licence to use the purchased product in accordance with the applicable product licence and these Terms.',
      },
      { type: 'p', text: 'Unless a product-specific licence states otherwise, you may:' },
      {
        type: 'ul',
        items: [
          'Download and access the purchased digital product.',
          'Use the template for your own personal or business projects.',
          'Customise, modify, and adapt the template for your intended project.',
          'Incorporate permitted template elements into your own finished website, application, or digital project.',
        ],
      },
      { type: 'h3', text: 'Restrictions on Use' },
      {
        type: 'p',
        text: 'Unless expressly authorised by us in writing or permitted by the applicable product licence, you may not:',
      },
      {
        type: 'ul',
        items: [
          'Resell, redistribute, sublicense, or commercially distribute the original template or its source files.',
          'Share, publish, or make purchased template files publicly available for download.',
          'Repackage, reproduce, or redistribute templates as competing digital products.',
          'Claim ownership or authorship of the original template or its underlying design.',
          'Use our branding, trademarks, or other intellectual property without prior written permission.',
          'Use purchased products in a manner that infringes upon the rights of third parties or violates applicable law.',
        ],
      },
      {
        type: 'p',
        text: 'If a product has additional licensing conditions, those conditions will be communicated on its product page or through accompanying documentation. In the event of a conflict, the product-specific licence will govern the permitted use of that particular product.',
      },
      { type: 'h3', text: 'Third-Party Assets and Resources' },
      {
        type: 'p',
        text: 'Some templates may include or reference third-party fonts, icons, images, illustrations, plugins, integrations, or other resources.',
      },
      {
        type: 'p',
        text: 'Such materials may be subject to separate licensing terms and conditions imposed by their respective owners.',
      },
      {
        type: 'p',
        text: 'Your purchase of a Telephant template does not automatically grant you ownership of or additional rights to third-party assets beyond those permitted by their applicable licences.',
      },
      {
        type: 'p',
        text: 'You are responsible for reviewing and complying with any additional licensing requirements associated with third-party resources used in your projects.',
      },
      { type: 'h3', text: 'Links to Other Websites' },
      {
        type: 'p',
        text: 'Our website may contain links to third-party websites, services, platforms, or resources that are not owned or controlled by Telephant or Dstudio Agency.',
      },
      {
        type: 'p',
        text: 'These links may include payment providers, design platforms, software tools, external resources, or websites referenced within our templates.',
      },
      {
        type: 'p',
        text: 'We provide these links for convenience and informational purposes only.',
      },
      {
        type: 'p',
        text: 'We do not control and are not responsible for the content, availability, security, policies, or practices of third-party websites or services.',
      },
      {
        type: 'p',
        text: 'Your access to and use of any third-party website or service is entirely at your own discretion and subject to its respective terms and conditions.',
      },
      {
        type: 'p',
        text: 'We encourage you to review the applicable terms and privacy policies before engaging with any third-party services.',
      },
    ],
  },
  {
    heading: 'Indemnification',
    blocks: [
      {
        type: 'p',
        text: 'You agree to indemnify, defend, and hold harmless Dstudio Agency, Telephant, and their respective owners, employees, contractors, affiliates, and representatives from and against any claims, liabilities, damages, losses, costs, or expenses, including reasonable legal fees, arising out of or relating to:',
      },
      {
        type: 'ul',
        items: [
          'Your violation of these Terms & Conditions.',
          'Your misuse of our website, Services, or purchased digital products.',
          'Your unauthorised redistribution, resale, or commercial exploitation of our templates or intellectual property.',
          'Your violation of any applicable law or regulation.',
          'Your infringement of the intellectual property, privacy, or other rights of a third party.',
          'Any content, materials, or information you submit to us that gives rise to a third-party claim.',
        ],
      },
      {
        type: 'p',
        text: 'This obligation applies to the extent permitted by applicable law.',
      },
      {
        type: 'p',
        text: 'We reserve the right to assume exclusive control of the defence of any matter subject to indemnification, in which case you agree to cooperate with our reasonable defence efforts.',
      },
    ],
  },
  {
    heading: 'Limitation of Liability',
    blocks: [
      {
        type: 'p',
        text: 'To the maximum extent permitted by applicable law, Dstudio Agency, Telephant, and their respective owners, employees, contractors, affiliates, and representatives shall not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages arising out of or relating to your use of our website, Services, or purchased digital products.',
      },
      { type: 'p', text: 'This includes, without limitation:' },
      {
        type: 'ul',
        items: [
          'Loss of profits, revenue, business opportunities, or anticipated savings.',
          'Loss of data, files, or business information.',
          'Business interruption or operational disruption.',
          'Website downtime, service interruptions, or technical failures.',
          'Compatibility issues involving third-party software, platforms, plugins, or integrations.',
          'Errors, omissions, or limitations in templates or digital resources.',
        ],
      },
      {
        type: 'p',
        text: 'To the maximum extent permitted by law, our total aggregate liability arising out of or relating to any claim connected with the Services or a purchased product shall not exceed the amount you paid to Telephant for the specific product or service giving rise to the claim during the twelve (12) months preceding the event giving rise to the claim.',
      },
      {
        type: 'p',
        text: 'Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law, including rights or remedies available to consumers under applicable US federal or state laws.',
      },
    ],
  },
  {
    heading: 'The Service',
    blocks: [
      {
        type: 'p',
        text: 'Telephant provides a digital marketplace and curated gallery of website templates, design resources, and other digital products intended to help individuals, businesses, agencies, and creators build digital experiences.',
      },
      { type: 'p', text: 'Our Services may include:' },
      {
        type: 'ul',
        items: [
          'Browsing and purchasing digital templates.',
          'Accessing and downloading purchased digital products.',
          'Viewing product descriptions, previews, and demonstrations.',
          'Accessing product-specific documentation or resources.',
          'Submitting enquiries for custom design services.',
          'Receiving customer support and purchase-related assistance.',
        ],
      },
      { type: 'h3', text: 'Digital Product Availability' },
      {
        type: 'p',
        text: 'We make reasonable efforts to ensure that products displayed on our website are accurately described and available for purchase.',
      },
      {
        type: 'p',
        text: 'However, we reserve the right to modify, update, discontinue, or remove any product, listing, feature, or part of our Services at any time.',
      },
      {
        type: 'p',
        text: 'We also reserve the right to correct pricing errors, product description inaccuracies, or other mistakes, subject to applicable law and any rights arising from an accepted purchase.',
      },
    ],
  },
  {
    heading: 'Purchases and Payments',
    blocks: [
      {
        type: 'p',
        text: 'All prices displayed on Telephant are presented in the currency specified on the relevant product page or at checkout.',
      },
      {
        type: 'p',
        text: 'You agree to provide accurate and complete billing information when making a purchase.',
      },
      {
        type: 'p',
        text: 'Payments are processed through third-party payment service providers. Your transaction may also be subject to the terms and conditions of the relevant payment provider.',
      },
      {
        type: 'p',
        text: 'We do not guarantee that every payment method will always be available.',
      },
      {
        type: 'p',
        text: 'We reserve the right to cancel or refuse an order where reasonably necessary, including in cases involving suspected fraudulent activity, unauthorised transactions, pricing errors, or violations of these Terms.',
      },
      {
        type: 'p',
        text: 'Where a payment has been successfully collected for an order that we cancel, any applicable refund will be handled in accordance with our Refund Policy and applicable law.',
      },
      { type: 'h3', text: 'Digital Product Delivery' },
      {
        type: 'p',
        text: 'Telephant primarily offers digital products. Following a successful purchase, access to the purchased product may be provided through a download link, email notification, customer account, or another delivery method specified at checkout.',
      },
      {
        type: 'p',
        text: 'You are responsible for ensuring that your email address and other purchase details are accurate and that your device and software meet the requirements necessary to access the purchased product.',
      },
      {
        type: 'p',
        text: 'If you experience difficulty accessing or downloading a purchased product, please contact our support team for assistance.',
      },
      { type: 'h3', text: 'Product Compatibility' },
      {
        type: 'p',
        text: 'Our templates may be designed for specific platforms, software applications, frameworks, or design tools.',
      },
      {
        type: 'p',
        text: 'Any relevant compatibility information, technical requirements, and platform dependencies should be reviewed on the applicable product page before purchasing.',
      },
      {
        type: 'p',
        text: 'We do not guarantee that every template will work with every software version, device, browser, plugin, integration, or third-party service.',
      },
      {
        type: 'p',
        text: 'You are responsible for ensuring that a template is suitable for your intended use and that you have access to any required third-party platforms, subscriptions, or tools.',
      },
    ],
  },
  {
    heading: 'Custom Design Services',
    blocks: [
      {
        type: 'p',
        text: 'In addition to digital templates, Telephant may provide opportunities to enquire about custom design services offered by Dstudio Agency.',
      },
      {
        type: 'p',
        text: 'Custom design services are separate from standard template purchases and may be subject to a separate proposal, statement of work, project agreement, pricing arrangement, or other written terms.',
      },
      {
        type: 'p',
        text: 'The scope, deliverables, timelines, fees, revisions, ownership rights, and other project-specific conditions will be communicated and agreed upon separately.',
      },
      {
        type: 'p',
        text: 'Purchasing a standard template does not automatically include customisation, implementation, development, or ongoing support unless expressly stated in the applicable product description or agreement.',
      },
    ],
  },
  {
    heading: 'Customer Responsibilities',
    blocks: [
      {
        type: 'p',
        text: 'You agree to use Telephant and its Services lawfully and responsibly.',
      },
      { type: 'p', text: 'You are responsible for:' },
      {
        type: 'ul',
        items: [
          'Providing accurate information when making purchases.',
          'Maintaining the confidentiality of your account credentials, where applicable.',
          'Protecting your purchased digital files and download links.',
          'Using purchased templates in accordance with their applicable licences.',
          'Obtaining any necessary third-party licences, subscriptions, or permissions.',
          'Ensuring that your use of our Services does not violate any applicable laws or third-party rights.',
        ],
      },
      {
        type: 'p',
        text: 'We reserve the right to suspend or restrict access to our Services if we reasonably believe that a user has violated these Terms or engaged in fraudulent, abusive, or unauthorised activity.',
      },
    ],
  },
  {
    heading: 'Disclaimers',
    blocks: [
      {
        type: 'p',
        text: 'Our website, Services, and digital products are provided on an "as is" and "as available" basis, to the maximum extent permitted by applicable law.',
      },
      {
        type: 'p',
        text: 'While we make reasonable efforts to maintain the quality, accuracy, and availability of our products and website, we do not guarantee that:',
      },
      {
        type: 'ul',
        items: [
          'Our website or Services will always be available without interruption.',
          'All templates will be completely free from errors or defects.',
          'Every digital product will meet your specific business or project requirements.',
          'Our Services will be compatible with all third-party software, platforms, or devices.',
          'Any particular commercial, financial, marketing, or business outcome will result from using our templates.',
        ],
      },
      {
        type: 'p',
        text: 'Templates are provided as design resources and starting points. Their effectiveness and suitability depend on how they are customised, implemented, and used.',
      },
      {
        type: 'p',
        text: 'You are responsible for reviewing, testing, and adapting purchased templates before deploying them in a live environment.',
      },
      {
        type: 'p',
        text: 'To the maximum extent permitted by law, we disclaim all warranties, whether express, implied, statutory, or otherwise, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      },
      {
        type: 'p',
        text: 'Nothing in this section excludes any warranty or consumer protection right that cannot legally be excluded under applicable law.',
      },
    ],
  },
  {
    heading: 'Refunds and Cancellations',
    blocks: [
      {
        type: 'p',
        text: 'Telephant primarily sells digital products that may be made available for download or access immediately after a successful purchase.',
      },
      {
        type: 'p',
        text: 'Because digital products cannot be physically returned, purchases are generally considered final once the digital product has been delivered or access has been provided, except where a refund is required by applicable law or expressly approved by Telephant.',
      },
      {
        type: 'p',
        text: 'If you experience an issue with a purchase, receive an incorrect product, encounter a technical problem preventing access, or believe that a transaction was made in error, please contact our support team.',
      },
      {
        type: 'p',
        text: 'We will review refund requests on a case-by-case basis in accordance with our published Refund Policy and applicable law.',
      },
      {
        type: 'p',
        text: 'Any specific refund conditions, exceptions, or eligibility requirements displayed during checkout or on the relevant product page will form part of the applicable purchase terms.',
      },
      {
        type: 'p',
        text: 'Nothing in this section limits any mandatory rights or remedies available to you under applicable consumer protection laws.',
      },
    ],
  },
  {
    heading: 'Governing Law',
    blocks: [
      {
        type: 'p',
        text: 'These Terms & Conditions and any dispute arising out of or relating to your access to or use of Telephant, our Services, or purchased digital products shall be governed by and interpreted in accordance with the laws of the State of Utah, United States, without regard to its conflict-of-law principles.',
      },
      {
        type: 'p',
        text: 'To the extent permitted by applicable law, any legal action or proceeding arising out of or relating to these Terms shall be brought before the state or federal courts located in Utah, United States.',
      },
      {
        type: 'p',
        text: 'You agree to submit to the jurisdiction of those courts for the resolution of such disputes.',
      },
      {
        type: 'p',
        text: 'Nothing in these Terms is intended to deprive consumers of any mandatory rights or protections available under applicable federal or state law.',
      },
    ],
  },
  {
    heading: 'Changes to These Terms',
    blocks: [
      {
        type: 'p',
        text: 'We reserve the right to modify, update, or replace these Terms & Conditions at any time at our discretion.',
      },
      {
        type: 'p',
        text: 'Any changes will become effective when the revised Terms are published on our website, unless a different effective date is specified.',
      },
      {
        type: 'p',
        text: 'The "Last updated" date at the beginning of this page will be revised to reflect the latest changes.',
      },
      {
        type: 'p',
        text: 'We encourage you to review these Terms periodically to stay informed about your rights and responsibilities when using Telephant.',
      },
      {
        type: 'p',
        text: 'Your continued use of our website or Services after updated Terms become effective constitutes acceptance of the revised Terms, to the extent permitted by applicable law.',
      },
      {
        type: 'p',
        text: 'If you do not agree with the revised Terms, you should discontinue using our Services.',
      },
    ],
  },
  {
    heading: 'Contact and Support',
    blocks: [
      // NOTE: in the source design this sentence references "License Agreement"
      // and "a Product" (copied from the Licence page) — reproduced as-is; flagged.
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

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lastUpdated="November 17, 2026"
      intro={INTRO}
      sections={SECTIONS}
    />
  )
}
