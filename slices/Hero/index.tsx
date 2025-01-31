import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/button";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section>
      <div className="p-6 border-b border-gray-200">
        <span className="text-tag text-sm font-medium mb-6 block">
          {slice.primary.tag}
        </span>
        <PrismicRichText
          components={{
            heading1: ({ children }) => (
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-2 flex items-center">
                {children}
              </h1>
            ),
          }}
          field={slice.primary.title}
        />

        <PrismicRichText
          components={{
            paragraph: ({ children }) => (
              <p className="text-gray-600 mb-8 text-lg">{children}</p>
            ),
          }}
          field={slice.primary.description}
        />
        <div className="flex gap-4">
          {slice.primary.buttons.length &&
            slice.primary.buttons.map((button, idx) => (
              <Button asChild key={idx} variant={button.variant}>
                <PrismicNextLink field={button} />
              </Button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
