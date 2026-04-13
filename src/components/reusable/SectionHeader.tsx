interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  showBlobs?: boolean;
  minHeight?: string;
}

const SectionHeader = ({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  showBlobs = true,
  minHeight = "lg:h-105",
}: SectionHeaderProps) => {
  return (
    <div
      className={`${minHeight} bg-white overflow-hidden relative ${className}`}
    >
      <section className="py-10 lg:p-0">
        <div>
          <p
            className={`lg:pt-24.25 text-[#1A2A56] text-center font-inter text-[24px] md:text-[32px] lg:text-[52px] font-semibold leading-[120%] tracking-[0.26px] mb-1.5 lg:mb-4 ${titleClassName}`}
          >
            {title}
          </p>

          {description && (
            <p
              className={`text-[#1A2A56] text-center font-inter text-[16px] md:text-[18px] font-normal leading-[150%] tracking-[0.09px] ${descriptionClassName}`}
            >
              {description}
            </p>
          )}
        </div>

        {showBlobs && (
          <>
            <div className="w-[130.537px] lg:w-[294.537px] h-[180.934px] lg:h-[416.934px] rotate-[-80.577deg] rounded-[416.934px] bg-linear-to-b from-[#A1BAFF] to-[#FFF] blur-[50px] absolute left-0 -bottom-22 overflow-hidden" />
            <div className="w-[130.537px] lg:w-[294.537px] h-[180.934px] lg:h-[416.934px] rotate-[80.577deg] rounded-[416.934px] bg-linear-to-b from-[#A1BAFF] to-[#FFF] blur-[50px] absolute right-0 -bottom-22 overflow-hidden" />
          </>
        )}
      </section>
    </div>
  );
};

export default SectionHeader;
