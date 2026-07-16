"use client";

import SectionHeader from "@/components/reusable/SectionHeader";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What is CartForGood?",
    answer:
      "CartForGood is a simple shopping platform that turns everyday purchases into charitable impact. Every time you shop through our platform, a portion of the proceeds goes to supporting charitable causes you care about.",
  },
  {
    question: "How does the donation process work?",
    answer:
      "When you make a purchase through CartForGood, we allocate a percentage of the sale price to the charitable cause of your choice. You can select from a list of verified charities during checkout, and we handle the rest. You'll receive a receipt for your donation for tax purposes.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we take data security very seriously. We use industry-standard SSL encryption, secure payment gateways, and follow best practices to protect your personal and payment information. Please see our Privacy Policy for more details.",
  },
  {
    question: "How do I create an account?",
    answer:
      "You can create an account by clicking on the 'Sign Up' button at the top of the page. You'll need to provide your name, email address, and create a password. Once registered, you can track your orders, donations, and charitable impact.",
  },
  {
    question: "Can I track my donations?",
    answer:
      "Absolutely! Your account dashboard provides a complete history of your purchases and the corresponding donations made to your selected charities. You can also download monthly receipts for your records.",
  },
  {
    question: "Which charities can I support?",
    answer:
      "We partner with a curated list of verified charitable organizations across various causes including education, healthcare, environment, and disaster relief. You can browse the full list of charities on our platform and choose where you want your contributions to go.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team by emailing support@cartforgood.com. We typically respond within 24-48 hours during business days. For urgent inquiries, please include 'URGENT' in the subject line.",
  },
  {
    question: "Can I get a refund for my purchase?",
    answer:
      "Refund policies vary by product and retailer. Please check the product listing for specific return policies. If you have any issues with your order, contact our support team and we'll help facilitate the process.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "You can request account deletion by visiting the Account Deletion page or by contacting our support team. Please note that once your account is deleted, your order history and donation records will be permanently removed.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Yes! CartForGood is available on both iOS and Android platforms. You can download the app from the Apple App Store or Google Play Store for a faster and more convenient shopping experience.",
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
              {`Have a question not listed here? We'd love to hear from you. Reach out to us and we'll get back to you as soon as possible.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:support@cartforgood.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#395CBC] text-white font-inter text-[14px] md:text-[16px] font-medium leading-[100%] rounded-[30px] hover:bg-[#2A4A9E] transition-colors"
              >
                Email Support
              </a>
              <a
                href="mailto:support@cartforgood.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#395CBC] text-[#395CBC] font-inter text-[14px] md:text-[16px] font-medium leading-[100%] rounded-[30px] hover:bg-[#F0F4FF] transition-colors"
              >
                support@cartforgood.com
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
