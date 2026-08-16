interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--content-width)] px-[var(--page-padding)] ${className}`}
    >
      {children}
    </div>
  );
}