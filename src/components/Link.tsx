"use client";
import clsx from "clsx";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface LinkProps extends PropsWithChildren<NextLinkProps> {
  activeClassName?: string;
  className?: string;
}

const Link = ({
  href,
  activeClassName = "",
  className,
  children,
  ...rest
}: LinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink
      href={href}
      className={clsx(className, { [activeClassName]: isActive })}
      {...rest}
    >
      {children}
    </NextLink>
  );
};

export default Link;
