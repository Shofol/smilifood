import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-br-graybg">
      <div className="max-w-7xl px-5 lg:px-10 xl:px-0 mx-auto flex flex-col">
        <div className="px-5 lg:px-0 grid grid-cols-1 lg:grid-cols-4 text-br-dark pt-16 pb-10">
          <div className="flex flex-col justify-start items-start">
            <Link
              href={"/"}
              className="text-5xl font-bold font-sans text-br-secondary"
            >
              FastFood
            </Link>
            <p className="pt-2 text-br-secondary">
              Save time and money with your FastFood app
            </p>
          </div>

          <div className="flex py-10 lg:py-0 pl-2 lg:pl-0 col-span-2 justify-center">
            <ul className="mb-10 text-br-secondary text-xl flex gap-10 justify-between">
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
          </div>

          <div className="flex gap-4 justify-end">
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

            <Link className="hover:opacity-80" href="/">
              <Image src={"/x.svg"} alt={"X logo"} width={20} height={20} />
            </Link>
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
