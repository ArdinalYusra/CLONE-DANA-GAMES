import React from "react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type NavlinkMobileProps = {
  icon?: LucideIcon;
  children: React.ReactNode;
  href: string;
  className?: string;
};

const Navlinks_Mobile = ({
  icon: Icon,
  children,
  href,
  className,
}: NavlinkMobileProps) => {
  return (
    <Link href={href} className={`border-b py-5 flex gap-3 ${className}`}>
      {Icon && <Icon size={20} className="text-white" />}
      {children}
    </Link>
  );
};

export default Navlinks_Mobile;
