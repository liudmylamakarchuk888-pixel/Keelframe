import type { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
}

/** Eyebrow + heading on the left, supporting sentence on the right. */
export function SectionHead({ eyebrow, title, text }: Props) {
  return (
    <div className="section-head">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}
