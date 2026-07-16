import SectionHeader from "@/components/reusable/SectionHeader";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <SectionHeader
        title="Privacy Policy"
        description="Your privacy matters to us. Learn how CartForGood collects, uses, and protects your information."
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-20 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-[#1A2A56] font-inter text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-[130%] tracking-[0.14px] mb-4">
              Introduction
            </h2>
            <p className="text-[#4A4A4A] font-inter text-[14px] md:text-[16px] font-normal leading-[160%] tracking-[0.08px]">
              Welcome to CartForGood. We are committed to protecting your
              personal information and your right to privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our platform and use our services.
            </p>
          </div>

          <div>
            <h2 className="text-[#1A2A56] font-inter text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-[130%] tracking-[0.14px] mb-4">
              Information We Collect
            </h2>
            <p className="text-[#4A4A4A] font-inter text-[14px] md:text-[16px] font-normal leading-[160%] tracking-[0.08px] mb-4">
              We may collect the following types of information when you use our
              services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#4A4A4A] font-inter text-[14px] md:text-[16px] font-normal leading-[160%] tracking-[0.08px]">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, shipping address, and payment information when you
                make a purchase.
              </li>
              <li>
                <strong>Account Information:</strong> Username, password, and
                profile preferences when you create an account.
              </li>
              <li>
                <strong>Transaction Data:</strong> Details about your purchases,
                donations, and charitable contributions.
              </li>
              <li>
                <strong>Device & Usage Information:</strong> IP address, browser
                type, operating system, and browsing behavior on our platform.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#1A2A56] font-inter text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-[130%] tracking-[0.14px] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-[#4A4A4A] font-inter text-[14px] md:text-[16px] font-normal leading-[160%] tracking-[0.08px] mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#4A4A4A] font-inter text-[14px] md:text-[16px] font-normal leading-[160%] tracking-[0.08px]">
              <li>To process your orders and donations securely.</li>
              <li>
                To communicate with you about your account, transactions, and
                charitable impact.
              </li>
              <li>To improve our platform, services, and user experience.</li>
              <li>
                To send you updates, promotions, and information about causes
                you care about (with your consent).
              </li>
              <li>
                To comply with legal obligations and prevent fraudulent
                activities.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#1A2A56] font-inter text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-[130%] tracking-[0.14px] mb-4">
              Sharing Your Information
            </h2>
            <p className="text-[#4A4A4A] font-inter text-[14px] md:text-[16px] font-normal leading-[160%] tracking-[0.08px]">
              We do not sell your personal information to third parties. We may
              share your information with trusted service providers who assist
              us in operating our platform, processing payments, and delivering
              orders. These partners are contractually obligated to protect your
              data. We may also disclose information when required by law or to
              protect our rights.
            </p>
          </div>

          <div>
            <h2 className="text-[#1A2A56] font-inter text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-[130%] tracking-[0.14px] mb-4">
              Data Security
            </h2>
            <p className="text-[#4A4A4A] font-inter text-[14px] md:text-[16px] font-normal leading-[160%] tracking-[0.08px]">
              We implement industry-standard security measures, including SSL
              encryption, secure payment gateways, and regular security audits
              to protect your personal information. However, no method of
              transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-[#1A2A56] font-inter text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-[130%] tracking-[0.14px] mb-4">
              Your Rights & Choices
            </h2>
            <p className="text-[#4A4A4A] font-inter text-[14px] md:text-[16px] font-normal leading-[160%] tracking-[0.08px] mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#4A4A4A] font-inter text-[14px] md:text-[16px] font-normal leading-[160%] tracking-[0.08px]">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt out of marketing communications at any time.</li>
              <li>Request a copy of the data we hold about you.</li>
              <li>
                Withdraw consent where we rely on your consent to process your
                data.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#1A2A56] font-inter text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-[130%] tracking-[0.14px] mb-4">
              Contact Us
            </h2>
            <p className="text-[#4A4A4A] font-inter text-[14px] md:text-[16px] font-normal leading-[160%] tracking-[0.08px]">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at{" "}
              <a
                href="mailto:support@cartforgood.com"
                className="text-[#395CBC] hover:underline font-medium"
              >
                support@cartforgood.com
              </a>
              .
            </p>
          </div>

          <div className="pt-4">
            <p className="text-[#888888] font-inter text-[12px] md:text-[14px] font-normal leading-[160%] tracking-[0.07px] italic">
              Last updated: July 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
