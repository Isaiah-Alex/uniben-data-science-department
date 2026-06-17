import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Users,
  Target,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { facultyData } from "@/lib/data/faculty";
import { ContactForm } from "./_components/ContactForm";

const milestones = [
  {
    year: "2018",
    event:
      "Department established as part of UNIBEN's Faculty of Physical Sciences",
  },
  { year: "2019", event: "First cohort of 45 B.Sc. students admitted" },
  {
    year: "2020",
    event: "AI & Machine Learning Lab inuagurated with TETFund support",
  },
  {
    year: "2021",
    event:
      "Postgraduate Diploma programme launched; first international research grant secured",
  },
  {
    year: "2022",
    event:
      "M.Sc. Data Analytics programme begins; NUC full accreditation received",
  },
  {
    year: "2023",
    event:
      "Partnership with Google for Education and Microsoft Research established",
  },
  {
    year: "2024",
    event:
      "Department ranked in top 5 for data science in Nigeria by NUC assessment",
  },
  {
    year: "2025",
    event: "Expansion of research labs; PhD programme approved by Senate",
  },
  {
    year: "2026",
    event:
      "Students win West African Data Analytics Competition; 94% graduate employment rate achieved",
  },
];

const valuesList = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Academic Excellence",
    description:
      "We hold ourselves and our students to the highest standards of rigour, integrity, and intellectual curiosity.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Inclusive Community",
    description:
      "We celebrate diversity across gender, ethnicity, and background, knowing great data science requires many perspectives.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Impactful Research",
    description:
      "We pursue knowledge that addresses real problems — in Nigeria, across Africa, and for the world.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Lifelong Learning",
    description:
      "We equip graduates not just for today's jobs, but for careers that do not yet exist.",
  },
];

export default function AboutRoute() {
  const leadership = facultyData.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 md:px-6 lg:px-16 py-16 md:py-24 flex flex-col justify-center max-w-[600px] mx-auto lg:mx-0">
            <span className="inline-block text-xs font-medium text-primary uppercase tracking-widest mb-4">
              Since 2018
            </span>
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
              Shaping Nigeria's Data-Driven Future
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Department of Data Science at the University of Benin was
              founded with a singular conviction: that rigorous training in data
              science is essential for Nigeria's development. Today we are a
              vibrant community of researchers, educators, and students driving
              that mission forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/programs">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                  Explore Programs
                </Button>
              </Link>
              <Link href="/research">
                <Button
                  variant="outline"
                  className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8"
                >
                  Our Research
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-4/3 lg:aspect-auto min-h-90 lg:min-h-0">
            <ImageWithFallback
              src="/images/classroom-2.jpg"
              alt="Department of Data Science"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-background/20 to-transparent lg:from-transparent" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "280+", label: "Enrolled Students" },
              { value: "12", label: "Faculty Members" },
              { value: "94%", label: "Employment Rate" },
              { value: "25+", label: "Industry Partners" },
            ].map((s, i) => (
              <div key={i}>
                <div
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {s.value}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="border-b border-border bg-background">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-4 border-primary pl-8">
              <h2
                className="text-2xl mb-4 font-bold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class education and research in data science
                that empowers graduates to develop data-driven solutions to
                local, national, and global challenges, while nurturing a
                culture of integrity, collaboration, and lifelong learning.
              </p>
            </div>
            <div className="border-l-4 border-foreground pl-8">
              <h2
                className="text-2xl mb-4 font-bold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To be West Africa's leading centre for data science education
                and research, recognised internationally for the quality of our
                graduates, the relevance of our scholarship, and our
                contribution to evidence-based decision-making across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-[40px] mb-3">Our Values</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            The principles that guide everything we do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesList.map((v, i) => (
              <div
                key={i}
                className="bg-background p-8 border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {v.icon}
                </div>
                <h3
                  className="text-lg mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-b border-border bg-background">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl md:text-[40px] mb-2">Leadership</h2>
              <p className="text-muted-foreground">
                The faculty driving our academic mission
              </p>
            </div>
            <Link
              href="/lecturers"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              All Faculty <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((person) => (
              <Link
                key={person.id}
                href={`/lecturers/${person.id}`}
                className="group flex gap-6 border border-border p-6 hover:border-primary transition-colors bg-background"
              >
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-medium text-lg leading-tight mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {person.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {person.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {person.bio}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-muted border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-[40px] mb-3">Our Story</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Key milestones in our journey of growth.
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-[72px] text-right">
                    <span className="text-sm font-bold text-primary">
                      {m.year}
                    </span>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-1.5 hidden md:block" />
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-background">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-[40px] mb-6">Get In Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you are a prospective student, an industry partner, or a
                fellow researcher, we would love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Department of Data Science, Faculty of Physical Sciences,
                      <br />
                      University of Benin, Ugbowo, Benin City, Edo State,
                      Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      +234 (0) 800 123 4567
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      datascience@uniben.edu.ng
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form (Client Component) */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
