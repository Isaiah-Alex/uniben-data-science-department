import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";

export function AboutPreview() {
  return (
    <section className="bg-background">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <ImageWithFallback
              src="/images/classroom-2.jpg"
              alt="Department of Data Science"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-[40px] mb-6">
              About the Department
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Department of Data Science at the University of Benin is at
              the forefront of data-driven innovation in West Africa. We combine
              rigorous academic training with practical industry experience to
              prepare the next generation of data scientists and analysts.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 mb-6">
              <p className="text-lg italic text-foreground leading-relaxed mb-3">
                &ldquo;Our mission is to empower students with the knowledge and
                skills to transform data into actionable insights that drive
                societal progress.&rdquo;
              </p>
              <footer className="text-sm">
                <strong>Prof. Adebayo Okonkwo</strong>
                <br />
                <span className="text-muted-foreground">
                  Head of Department
                </span>
              </footer>
            </blockquote>
            <Link href="/about">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
