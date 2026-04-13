import Container from "@/app/components/ui/Container";
import LeftArrowIcon from "@/components/icons/LeftArrowIcon";
import Love2Icon from "@/components/icons/Love2Icon";
import RightArrowICon2 from "@/components/icons/RightArrowICon2";
import AccessibleIcon from "./../../icons/AccessibleIcon";
import EffortlessIcon from "./../../icons/EffortlessIcon";
import PrivateIcon from "./../../icons/PrivateIcon";

const features = [
  {
    icon: <Love2Icon className="h-7 w-7" />,
    title: "Transparent",
    description:
      "Every confirmed donation posted publicly. Real receipts, numbers. No vague 'portion' claims.",
  },
  {
    icon: <EffortlessIcon className="h-7 w-7" />,
    title: "Effortless",
    description:
      "Zero extra steps. No account, no setup, no changes to how you shop. Just tap and buy.",
  },
  {
    icon: <PrivateIcon className="h-7 w-7" />,
    title: "Private",
    description:
      "No user accounts. No tracking. No data collected. Your shopping history stays completely yours.",
  },
  {
    icon: <AccessibleIcon className="h-7 w-7" />,
    title: "Accessible",
    description:
      "18pt minimum fonts. WCAG 2.1 compliant. Designed for all ages including elderly users.",
  },
];

const WhatWeStandFor = () => {
  return (
    <div className="bg-white px-4 sm:px-8 md:px-16 py-12 md:py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#1A2A56] mb-3 md:mb-4">
            What we stand for.
          </h1>
          <p className="text-sm md:text-base text-[#7D828F] mx-auto leading-relaxed">
            We believe small actions, repeated by many people, can create a real
            and measurable impact.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center gap-4 border border-[#ECEFF3] rounded-2xl bg-[#F6F8FA] px-6 py-10 md:px-8 md:py-12 text-center"
            >
              <div className="flex items-center">
                {/* Left line */}
                <RightArrowICon2 className="flex-1" />

                {/* Center heart */}
                <div className="border-2 border-[#395CBC] rounded-full p-4 shrink-0">
                  {feature?.icon}
                </div>

                {/* Right line */}
                <LeftArrowIcon className="flex-1" />
              </div>
              <h2 className="text-lg md:text-2xl font-semibold text-[#1A2A56] leading-[116%] tracking-[0.12px]">
                {feature.title}
              </h2>
              <p className="text-sm md:text-base text-[#7D828F] leading-[132%] traking-[0.08px] mt-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhatWeStandFor;
