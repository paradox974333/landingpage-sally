"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Liquid "glass" background, fixed behind everything.
 * Safe to render once near the root layout.
 */
export const LiquidGlassBackground = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Blurry gradient blobs */}
      <div
        className="absolute left-[-10%] top-[-10%] h-[45vw] w-[45vw] rounded-full blur-[100px] opacity-70"
        style={{
          background:
            "radial-gradient(45% 45% at 30% 30%, rgba(59,130,246,0.35), rgba(59,130,246,0))",
          animation: "blob 28s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute right-[-15%] top-[5%] h-[55vw] w-[55vw] rounded-full blur-[110px] opacity-60"
        style={{
          background:
            "radial-gradient(45% 45% at 70% 30%, rgba(147,51,234,0.32), rgba(147,51,234,0))",
          animation: "blob 32s ease-in-out -6s infinite alternate",
        }}
      />
      <div
        className="absolute left-[15%] bottom-[-15%] h-[50vw] w-[50vw] rounded-full blur-[95px] opacity-60"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 70%, rgba(16,185,129,0.30), rgba(16,185,129,0))",
          animation: "blob 36s ease-in-out -12s infinite alternate",
        }}
      />
      {/* Soft highlight layers */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-40"
        style={{
          background:
            "radial-gradient(1200px circle at 50% 15%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(900px circle at 85% 85%, rgba(255,255,255,0.08), transparent 38%)",
        }}
      />
      {/* Optional subtle noise to sell the glass */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.7) 0, rgba(0,0,0,0.7) 1px, transparent 1px, transparent 2px)",
          mixBlendMode: "overlay",
          filter: "blur(0.3px)",
        }}
      />

      {/* Animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          33% {
            transform: translate3d(2%, -3%, 0) scale(1.05);
          }
          66% {
            transform: translate3d(-3%, 2%, 0) scale(0.98);
          }
          100% {
            transform: translate3d(1%, 1%, 0) scale(1.03);
          }
        }
      `}</style>
    </div>
  );
};

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(16px) saturate(1.8)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255,255,255,0.18) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
        WebkitBackdropFilter: visible ? "blur(16px) saturate(1.8)" : "none",
        background: visible
          ? "linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.10))"
          : "transparent",
        border: visible ? "1px solid rgba(255,255,255,0.22)" : "transparent",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
        visible && "ring-1 ring-white/20 backdrop-blur-xl dark:ring-white/10",
        className,
      )}
    >
      {/* Glass edge highlight */}
      {visible && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.06)",
          }}
        />
      )}
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100/60 dark:bg-neutral-800/60"
              style={{
                backdropFilter: "blur(4px) saturate(1.2)",
                WebkitBackdropFilter: "blur(4px) saturate(1.2)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(16px) saturate(1.8)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255,255,255,0.18) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "18px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        WebkitBackdropFilter: visible ? "blur(16px) saturate(1.8)" : "none",
        background: visible
          ? "linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.10))"
          : "transparent",
        border: visible ? "1px solid rgba(255,255,255,0.22)" : "transparent",
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "ring-1 ring-white/20 backdrop-blur-xl dark:ring-white/10",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-2xl bg-white/10 px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(255,_255,_255,_0.15)_inset] ring-1 ring-white/20 backdrop-blur-xl backdrop-saturate-150 dark:bg-neutral-900/10 dark:ring-white/10",
            className,
          )}
          style={{
            WebkitBackdropFilter: "blur(16px) saturate(1.5)",
            border: "1px solid rgba(255,255,255,0.22)",
          }}
          onClick={(e) => {
            // allow outside logic to close if you want to
            // but keep same API
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="https://imperialx.io"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <img
        src="logo.svg"
        style={{ filter: "invert(1) brightness(2)" }}
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-black dark:text-white">Imperial X</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
