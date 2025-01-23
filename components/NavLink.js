"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link href={href} className={path === href ? "active" : ""}>
      {children}
    </Link>
  );
}

export default NavLink;
