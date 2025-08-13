import { Armchair, Banknote, CreditCard, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      
      <div className="footer_top mx-h-[343px] w-full border-t border-b border-[#e1e3e5] pt-[80px] pb-[60px]">
        <div className="container xl:max-w-screen-xl mx-auto">
          <div className="grid grid-cols-4">
            <div>
              {/* logo wrapper */}
              <div className="logo_wrapper mb-7">
                <Link
                  to="/"
                  className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
                >
                  <Armchair size="2rem" color="#029fae" />
                  Comforty
                </Link>
              </div>
              <p className="text-base text-[#272343] font-inter font-normal mb-3.5 max-w-[350px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                do eiusmod tempor incididunt ut labore
              </p>
              <div className="footer_social flex items-center gap-3">
                <Link className="p-3 rounded-full border-[#007580] inline-block border-[1px]">
                  <Facebook size="1.5rem" color="#007580" />
                </Link>

                <Link className="p-3  inline-block ">
                  <Twitter size="1.5rem" color="#007580" />
                </Link>

                <Link className="p-3  inline-block ">
                  <Instagram size="1.5rem" color="#007580" />
                </Link>

                <Link className="p-3  inline-block ">
                  <Youtube size="1.5rem" color="#007580" />
                </Link>
              </div>
            </div>

            <div className="footer_wrapper">
              <h3 className="text-2xl text-[#9a9caa] font-inter font-medium uppercase">
                Categories
              </h3>
              <ul className="space-y-2 mt-4">
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  {" "}
                  <Link>Sofa</Link>{" "}
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  {" "}
                  <Link>Armchair</Link>{" "}
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  {" "}
                  <Link>Wing Chair</Link>{" "}
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  {" "}
                  <Link>Desk Chair</Link>{" "}
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  {" "}
                  <Link>Wooden Chair</Link>{" "}
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  {" "}
                  <Link>Park Bench</Link>{" "}
                </li>
              </ul>
            </div>

            <div className="footer_wrapper">
              <h3 className="text-2xl text-[#9a9caa] font-inter font-medium uppercase">
                support
              </h3>
              <ul className="space-y-2 mt-4">
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  {" "}
                  <Link>help & support</Link>{" "}
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  {" "}
                  <Link>terms & conditions</Link>{" "}
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  {" "}
                  <Link>Privacy policy</Link>{" "}
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  {" "}
                  <Link>Help</Link>{" "}
                </li>
              </ul>
            </div>

            <div className="newsletter">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">
                newsletter
              </h3>
              <form action="#" className="max-w-[424px] w-full flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="max-w-[285px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2"
                />
                <button type="submit" className="text-base text-white font-semibold capitalize w-[127px] h-[46px] bg-[#007580] rounded-lg cursor-pointer">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom w-full h-[75px] flex items-center justify-center">
        <div className="container xl:max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base text-[#9a9caa] font-normal font-inter">@2025 Blogy- Designed & Develop <span className="text-[#272343] ">Lifeonthecode</span> 

              </p>
            </div>

            <div className="flex items-center gap-3.5">
              <p className="flex items-center gap-2 text-[#9a9caa] text-xl">
                Bank Note<Banknote size='2rem' />
              </p>

               <p className="flex items-center gap-2 text-[#9a9caa] text-xl">
                Credit Card<CreditCard size='2rem' />
              </p>
              

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
