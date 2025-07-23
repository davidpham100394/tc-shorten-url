import FooterLogo from "../../assets/images/logo-footer.svg";
import { FOOTER_SECTIONS, SOCIAL_LINKS } from "../../constants";

export const Footer = () => {
  return (
    <>
      <footer className="pt-[4.4rem] px-[1.5rem] pb-[4rem] bg-[#232127]">
        <div className="footer-section mx-auto flex flex-col items-center text-center text-white gap-12 md:flex-row md:justify-between md:items-start md:text-left md:gap-[1.5rem] md:mx-[4rem]">
          <a href="#">
            <img src={FooterLogo} alt="Shortly" />
          </a>

          <div className="footer-nav flex flex-col gap-12 text-center m-0 md:flex-row md:gap-[4.5rem] md:text-left md:ml-[8rem]">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <div className="text-[1rem] font-bold mb-[1.25rem]">{section.title}</div>
                {section.links.map((link) => (
                  <div className="m-0" key={link.label}>
                    <a className="no-underline text-gray-400 text-[0.9rem] transition-colors duration-300 hover:text-cyan-400" href={link.href}>
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-center items-center flex-wrap pl-0 gap-[1.5rem] mt-8 md:mt-0">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.alt} className="transition-all duration-300 hover:filter hover:[filter:invert(63%)_sepia(76%)_saturate(408%)_hue-rotate(131deg)_brightness(140%)_contrast(94%)]" href={social.href}>
                <img src={social.icon} alt={social.alt} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};
