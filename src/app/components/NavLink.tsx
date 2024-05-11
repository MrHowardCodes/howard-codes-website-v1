import Link from "next/link";

const NavLink = ({ href, compName }: any) => {
  return (
    <Link href={href} className="block py-2 pl-2 pr-2">
      {compName}
    </Link>
  );
};
export default NavLink;
