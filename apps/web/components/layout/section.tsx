import { Container } from "./container";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({
  children,
  id,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`relative py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}