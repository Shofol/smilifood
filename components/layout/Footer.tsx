import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-br-graybg">
      <div className="max-w-7xl px-5 lg:px-10 xl:px-0 mx-auto flex flex-col">
        <div className="px-5 lg:px-0 grid grid-cols-1 lg:grid-cols-3 text-br-dark pt-16 pb-10">
          <div className="flex flex-col justify-start items-start ">
            <Link
              href={"/"}
              className="text-5xl font-bold font-sans text-br-secondary"
            >
              FastFood
            </Link>
            <p className="pt-2 lg:pt-6 text-br-secondary">
              Save time and money with your FastFood app
            </p>
          </div>

          <div className="flex flex-col py-10 lg:py-0 pl-2 lg:pl-0">
            <ul className="mb-10 text-br-secondary text-xl">
              <li className="mb-4 flex flex-col">
                <span>Solutions</span>
                <Link
                  className="text-br-dark text-sm hover:text-br-primary"
                  href={"/solutions"}
                >
                  Connected Menu
                </Link>
                <Link
                  className="text-br-dark text-sm hover:text-br-primary"
                  href={"/blog"}
                >
                  Order Online
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:text-br-primary" href={"/"}>
                  Resources
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:text-br-primary" href={"/"}>
                  The Team
                </Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <Link className="hover:opacity-80" href="/">
                <Image
                  src={"/instagram.svg"}
                  alt={"instagram logo"}
                  width={24}
                  height={24}
                />
              </Link>

              <Link className="hover:opacity-80" href="/">
                <Image
                  src={"/facebook.svg"}
                  alt={"facebook logo"}
                  width={24}
                  height={24}
                />
              </Link>

              <Link className="hover:opacity-80" href="/">
                <Image
                  src={"/linkedin.svg"}
                  alt={"linkedin logo"}
                  width={24}
                  height={24}
                />
              </Link>

              <Link
                className="hover:opacity-80 flex items-center justify-center"
                href="/"
              >
                <Image src={"/x.svg"} alt={"X logo"} width={20} height={20} />
              </Link>
            </div>
          </div>
          <div className="max-w-lg bg-br-gray text-br-secondary flex flex-col max-h-min px-10 pt-5 pb-10 rounded-md">
            <h3 className="text-4xl font-semibold">Newsletter</h3>
            <p className="pt-2">
              Subscribe to our newsletter and receive monthly articles on bars
              and restaurants
            </p>
            <div className="mt-4 flex flex-col lg:flex-row flex-wrap gap-2">
              <input
                type="text rounded"
                className="rounded-md bg-white border-white border-2 pl-2"
              />
              <button className="px-4 py-1 bg-br-primary text-white rounded-md hover:opacity-80">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-br-lgreen h-px"></div>

        <div className="flex flex-col lg:flex-row justify-between text-br-lgreen pt-2 pb-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Fastfood, All Rights Reserved</p>
          <Link href={"/"}>Legal notices</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
