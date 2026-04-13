import Container from "@/components/clientComponents/homePage/Container";

export default function OurMission() {
  const items = [
    "Make charitable giving effortless and automatic by turning your everyday actions into meaningful impact without any extra steps.",
    "Ensure every action taken by users contributes to a clear and measurable impact.",
    "Build trust through complete transparency in how donations are earned and shared.",
    "Create a system where small individual actions come together to make a meaningful difference.",
  ];

  return (
    <div className="bg-[#F0F3F9] px-4 py-10">
      <Container>
        <div className="bg-white border border-gray-200 rounded-2xl px-8 py-10 mx-auto sm:px-12">
          <h2 className="text-center text-[#1a2d6e] text-xl lg:text-[48px] leading-[124%] tracking-[0.24px] font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-center text-[#1A2A56] text-lg leading-[132%] tracking-[0.09px] mb-4 lg:mb-10">
            You shop, we give back every month — completely free, with no ads
            and no tracking.
          </p>
          <hr className="border-gray-200 mb-8" />
          <ul className="flex flex-col gap-4">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
              >
                <svg
                  className="w-4.5 h-4.5 shrink-0 mt-0.5"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <circle cx="9" cy="9" r="9" fill="#395CBC" />
                  <path
                    d="M5 9.2l2.8 2.8 5-5.5"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-base text-[#1A2A56] leading-[160%] tracking-[0.08px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
