"use client";
import { useEffect, useState } from "react";
import { NAVIGATION } from "@/constants";
import Link from "./Link";

const navItems: { title: string; to: NAVIGATION }[] = [
  { title: "Bio", to: NAVIGATION.ROOT },
  { title: "Experience", to: NAVIGATION.EXPERIENCE },
  { title: "Skills", to: NAVIGATION.SKILLS },
  { title: "Education", to: NAVIGATION.EDUCATION },
];

const Navigation = () => (
  <nav className="text-lg w-full">
    <ul className="flex flex-col gap-y-6">
      {navItems.map(({ title, to }, index) => (
        <li key={index}>
          <Link
            className="flex before:w-8"
            activeClassName="before:content-['->']"
            href={to}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
