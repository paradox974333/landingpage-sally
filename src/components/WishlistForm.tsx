"use client";

import React from "react";
import { Link } from "react-router-dom";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import AnoAI from "@/components/animated-shader-background";

// Local cn helper
function cn(...inputs: Array<string | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

export function WishlistForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Simple inline toast state
  type ToastType = "loading" | "success" | "error";
  const [toast, setToast] = React.useState<{
    open: boolean;
    type: ToastType;
    message: string;
  }>({ open: false, type: "loading", message: "" });

  const hideTimerRef = React.useRef<number | null>(null);

  const showToast = (type: ToastType, message: string, autoHideMs = 4000) => {
    setToast({ open: true, type, message });
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    hideTimerRef.current = window.setTimeout(() => {
      setToast((t) => ({ ...t, open: false }));
      hideTimerRef.current = null;
    }, autoHideMs);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    showToast("loading", "Joining waitlist...", 10000);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://hook.eu2.make.com/ra6ioi2vs3fqvn3cstzeodowbllwd2ta",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        console.error("Webhook error:", res.status, res.statusText);
        showToast(
          "error",
          "Something went wrong. Please try again.",
          5000
        );
        setIsSubmitting(false);
        return;
      }

      showToast(
        "success",
        "Welcome to Sally AI! You're now on the waitlist. 🎉",
        5000
      );
      form.reset();
    } catch (err) {
      console.error("Network error:", err);
      showToast("error", "Network error. Please try again.", 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* ✨ Liquid Glass Toast */}
      <LiquidGlassToast open={toast.open} type={toast.type} message={toast.message} />

      {/* ✨ Full-screen AnoAI background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-screen bg-black">
          <AnoAI />
        </div>
      </div>

      {/* Inline CSS for Aceternity shadow-input */}
      <style>{`
        .shadow-input {
          box-shadow:
            0px 2px 3px -1px rgba(0,0,0,0.1),
            0px 1px 0px 0px rgba(25,28,33,0.02),
            0px 0px 0px 1px rgba(25,28,33,0.08);
        }
      `}</style>

      {/* 🌠 Form Container */}
      <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-transparent p-4 md:rounded-2xl md:p-8 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white text-center">
          Join Sally AI Waitlist
        </h2>
        <p className="mt-2 max-w-sm text-sm text-gray-300 text-center mx-auto">
          Be among the first to experience advanced AI trading intelligence
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="Tyler"
                type="text"
                required
                disabled={isSubmitting}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Durden"
                type="text"
                required
                disabled={isSubmitting}
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              required
              disabled={isSubmitting}
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Joining..." : "Join Wishlist"}
            <BottomGradient />
          </button>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

// ✨ Liquid Glass Toast Component, now top and full width
function LiquidGlassToast(props: { 
  open: boolean; 
  type: "loading" | "success" | "error"; 
  message: string;
}) {
  const { open, type, message } = props;

  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: -32 }}
      animate={{
        opacity: open ? 1 : 0,
        y: open ? 0 : -32,
        pointerEvents: open ? "auto" : "none",
      }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="fixed top-0 left-0 w-full flex justify-center z-50"
      style={{ pointerEvents: open ? 'auto' : 'none' }}
    >
      <div className="relative w-full max-w-2xl mx-auto mt-4">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10 rounded-xl" />
        <div className="relative flex items-center gap-3 px-6 py-4">
          {type === "loading" && (
            <div className="relative w-5 h-5">
              <div className="absolute inset-0 rounded-full border-2 border-white/30" />
              <div className="absolute inset-0 rounded-full border-2 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin" />
            </div>
          )}
          {type === "success" && (
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          )}
          {type === "error" && (
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          )}
          <span className="text-sm font-medium text-white text-center select-none">
            {message}
          </span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}

// ✨ Bottom glow effect under button
const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

// 🏗️ Label & Input Container
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

// 🏷️ Label
const Label = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      )}
    >
      {children}
    </label>
  );
};

// 🎨 Interactive Motion Input
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  const radius = 100;
  const [visible, setVisible] = React.useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            #3b82f6,
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group/input rounded-lg p-[2px] transition duration-300"
    >
      <input
        type={type}
        className={cn(
          "shadow-input flex h-10 w-full rounded-md border-none bg-zinc-900/80 backdrop-blur-sm px-3 py-2 text-sm text-white transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600",
          className
        )}
        ref={ref}
        {...props}
      />
    </motion.div>
  );
});
Input.displayName = "Input";
