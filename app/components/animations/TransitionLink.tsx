"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

type TransitionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function TransitionLink({
  href,
  children,
  className,
}: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    // Dejamos funcionar Cmd/Ctrl + click,
    // botón central, etc.
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();

    if (
      !("startViewTransition" in document)
    ) {
      router.push(href);
      return;
    }

    document.startViewTransition(() => {
      router.push(href);
    });
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}