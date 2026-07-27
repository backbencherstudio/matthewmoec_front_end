"use client";

import SectionHeader from "@/components/reusable/SectionHeader";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What is CartForGood?",
    answer:
      "CartForGood is a free shopping app and website that turns your everyday online purchases into charitable donations at no extra cost to you. You tap a store button, shop normally on the retailer's website, and the store pays CartForGood a small commission. We share a portion of that commission with charity every month. You pay nothing extra. Ever.",
  },
  {
    question: "How does the donation process work?",
    answer:
      "When you tap a store button in CartForGood and make a purchase on the retailer's website the retailer pays CartForGood a small commission from their marketing budget. You pay nothing extra. The price you see is always the same price you pay. CartForGood collects these commissions and donates a portion to charity on the first of every month. Every donation is posted publicly on our website with a receipt the same day it goes out.",
  },
  {
    question: "Which charities does CartForGood support?",
    answer:
      "Three months are permanently reserved. July goes entirely to Tunnels to Towers Foundation. November goes entirely to Feeding America. December goes entirely to Toys for Tots. All other months CartForGood spins a charity wheel live on Facebook, Instagram, and TikTok on the first of the month. Local community organizations are selected through the Little Wheel. You can nominate local charities through the nomination form on our website.",
  },
  {
    question: "Can I choose which charity receives my donation?",
    answer:
      "You do not choose a specific charity for each purchase. CartForGood donates to the monthly featured charity from the total commissions received that month. However you can nominate local charities for the Little Wheel through our website. The community influences which local organizations get helped every month.",
  },
  {
    question: "How do I nominate a local charity?",
    answer:
      "Go to cartforgood.com and find the charity nomination form. Fill in the charity name, website, address, and contact information. CartForGood will verify the charity is a registered 501c3 organization before adding them to the Little Wheel. Each charity may only be nominated once. We are not able to respond to every nomination individually.",
  },
  {
    question: "How many times can a charity win the Little Wheel?",
    answer:
      "Each local charity may win the Little Wheel a maximum of two times per calendar year. After two wins they are removed from the wheel until January 1st of the following year. The maximum donation per charity per Little Wheel win is $2,500. CartForGood determines the number of winners each month based on total commissions received.",
  },
  {
    question: "When does CartForGood donate to charity?",
    answer:
      "Donations go out on the first of every month from commissions that have been received and confirmed. Retailers pay commissions on varying schedules typically between 30 and 60 days after purchase. They also wait for return windows to close before releasing payment. There is a startup period before CartForGood's first donation goes out. After that a donation goes out every single month without exception.",
  },
  {
    question: "Where can I see the donations?",
    answer:
      "Every donation to charity is posted publicly at cartforgood.com/receipts with a full receipt the same day it goes out. You can see exactly which charity received money and how much.",
  },
  {
    question: "Does CartForGood work for online orders picked up in store?",
    answer:
      "Yes. As long as you tap the store button through CartForGood and pay online at checkout the commission counts. This includes buy online pick up in store orders at retailers like Walmart, Target, and Home Depot.",
  },
  {
    question: "Does CartForGood work if I pay in store?",
    answer:
      "No. The commission is only earned when the purchase is completed online during the same browser session after tapping through CartForGood.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "CartForGood does not collect any personal information. No accounts are required. No sign up is needed. No personal data is stored or shared. CartForGood does not track you. You are never the product. When you tap a store button and shop on the retailer's website that retailer's own privacy policy governs any information you provide them.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. CartForGood requires no account and no sign up. Just tap a store button and shop normally. That is it.",
  },
  {
    question: "Does CartForGood track my shopping or purchases?",
    answer:
      "No. CartForGood does not track your shopping activity, purchases, or personal data. The only data CartForGood tracks is the number of times each store button is tapped. This is anonymous count data only. No personal information is associated with these counts.",
  },
  {
    question: "What stores are available?",
    answer:
      "Amazon, Walmart, Target, Home Depot, Chewy, Wayfair, Etsy, and eBay are currently available. We add new stores regularly so check back often.",
  },
  {
    question: "Is CartForGood available in Spanish?",
    answer:
      "Yes. CartForGood is available in English and Spanish. Use the language toggle in the app or on the website to switch languages.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes. CartForGood is available on iPhone and Android. Search for CartForGood in the Apple App Store or Google Play Store. The app is completely free to download with no in app purchases and no ads.",
  },
  {
    question: "Can I get a refund for a purchase?",
    answer:
      "CartForGood does not process any purchases. All purchases happen directly on the retailer's website under that retailer's own refund and return policy. For any issue with a purchase please contact the retailer directly.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "CartForGood requires no account. There is nothing to create and nothing to delete.",
  },
  {
    question: "How do I report a bug or problem with the app?",
    answer:
      "Email us at cartforgood@gmail.com and describe the issue. We will respond as quickly as possible.",
  },
  {
    question: "How do I contact CartForGood?",
    answer:
      "Email us at cartforgood@gmail.com. You can also visit cartforgood.com/support for answers to common questions.",
  },
];

export default function SupportAndFaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <SectionHeader
        title="Support & FAQ"
        description="Find answers to common questions or reach out to our support team."
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-20 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Contact Info */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <h2 className="text-[#1A2A56] font-inter text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-[130%] tracking-[0.14px] mb-4">
              Contact Us
            </h2>
            <p className="text-[#4A4A4A] font-inter text-[14px] md:text-[16px] font-normal leading-[160%] tracking-[0.08px] mb-4">
              {`Have a question not listed here? Email us and we'll get back to you as soon as possible.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:cartforgood@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#395CBC] text-white font-inter text-[14px] md:text-[16px] font-medium leading-[100%] rounded-[30px] hover:bg-[#2A4A9E] transition-colors"
              >
                Email Support
              </a>
              <a
                href="mailto:cartforgood@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#395CBC] text-[#395CBC] font-inter text-[14px] md:text-[16px] font-medium leading-[100%] rounded-[30px] hover:bg-[#F0F4FF] transition-colors"
              >
                cartforgood@gmail.com
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-[#1A2A56] font-inter text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-[130%] tracking-[0.14px] mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-[#1A2A56] font-inter text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-[140%] tracking-[0.09px] pr-4">
                      {faq.question}
                    </span>
                    <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#F0F4FF] text-[#395CBC]">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                      <p className="text-[#4A4A4A] font-inter text-[14px] md:text-[16px] font-normal leading-[160%] tracking-[0.08px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
