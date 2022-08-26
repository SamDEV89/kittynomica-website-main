import { ReactComponent as TinyKitty } from "assets/images/tiny-kitty.svg";
import { ReactComponent as Web } from "assets/icons/web.svg";
import { ReactComponent as Email } from "assets/icons/email.svg";
import { ReactComponent as Telegram } from "assets/icons/telegram.svg";

const Footer = () => {
  return (
    <div>
      <div className="px-4 pb-5 mini:pb-0 mini:h-[172px] bg-[#0E0A2B] relative">
        <div className="pt-[75px] flex space-x-10 justify-center items-center">
          {/* <div className="flex space-x-[19px] items-center"> */}
          <Web />
          {/* <span className="font-primary-bold text-base">{LINKS.WEBSITE}</span> */}
          {/* </div> */}
          {/* <div className="flex items-center"> */}
          <Telegram />
          {/* <span className="font-primary-bold text-base">
              {LINKS.TELEGRAM}
            </span> */}
          {/* </div> */}
          {/* <div className="flex space-x-[19px] items-center"> */}
          <Email />
          {/* <span className="font-primary-bold text-base">{LINKS.EMAIL}</span> */}
          {/* </div> */}
        </div>
        <div className="absolute top-[-79px] w-full flex justify-center">
          <TinyKitty />
        </div>
      </div>
      <div className="px-4 h-[50px] bg-[#231E4B] flex items-center justify-center">
        <p className="text-sm text-center text-white font-primary">
          © kittynomica 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
