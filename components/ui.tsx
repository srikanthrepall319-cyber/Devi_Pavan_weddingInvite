import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

export function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "sm"
      ? "h-9 px-4 text-sm"
      : size === "lg"
        ? "h-12 px-6 text-base"
        : "h-10 px-5 text-sm";
  const variantClass =
    variant === "ghost"
      ? "bg-white/55 text-ink hover:bg-white/80"
      : variant === "outline"
        ? "border border-gold/60 bg-transparent text-maroon hover:bg-gold/10"
        : "bg-maroon text-white hover:bg-maroon/90";
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        sizeClass,
        variantClass,
        className
      )}
      {...props}
    />
  );
}

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { className?: string }) {
  return <div className={cn("rounded-3xl border border-white/40 bg-white/65 p-6 shadow-soft backdrop-blur-xl", className)} {...props} />;
}
