import {
  ChevronRight,
  Clock,
  FileText,
  HandHelping,
  Heart,
  HeartHandshake,
  Mail,
  Phone,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function ClientServices() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Family Concierge Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Compassionate support for families during their time of loss
          </p>
        </div>

        <Separator className="my-8" />

        <div className="prose prose-gray max-w-none">
          <p className="text-lg">
            When you lose a loved one, managing the many necessary arrangements
            can be overwhelming. Our Family Concierge Service provides
            personalized assistance to help you navigate this difficult time
            with dignity and care, allowing you to focus on what matters
            most—honoring your loved one and beginning the healing process.
          </p>
        </div>

        <div className="my-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">
                  Official Notifications
                </CardTitle>
              </div>
              <CardDescription>
                Ensuring all necessary authorities are properly informed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-primary" />
                  <span>
                    Notification to medical professionals (doctors, hospital
                    staff)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Communication with authorities (police, coroner)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Coordination with funeral homes and crematoriums</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-primary" />
                  <span>
                    Assistance with death certificates and official
                    documentation
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">
                  Family & Friend Support
                </CardTitle>
              </div>
              <CardDescription>
                Helping you inform and coordinate with your support network
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-primary" />
                  <span>
                    Compassionate notification to immediate family members
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-primary" />
                  <span>
                    Assistance with informing extended family and friends
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Coordination of family gatherings and support</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-primary" />
                  <span>
                    Management of incoming condolences and offers of help
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">
                  Dependent Care Arrangements
                </CardTitle>
              </div>
              <CardDescription>
                Ensuring all family members are cared for during this time
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Temporary care arrangements for children</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Support for elderly family members</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Pet care coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Household management during funeral arrangements</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="my-12 rounded-lg bg-muted p-8">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-2xl font-bold">
              How Our Concierge Service Works
            </h2>
            <p className="text-lg">
              Our service begins with a single call. From there, our
              compassionate team takes on the burden of notifications and
              arrangements, providing you with regular updates and seeking your
              input only when necessary.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background">
                  <HandHelping className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Initial Contact</h3>
                <p className="text-sm text-muted-foreground">
                  A single call activates our full support system
                </p>
              </div>

              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Personalized Plan</h3>
                <p className="text-sm text-muted-foreground">
                  We create a tailored approach based on your family&apos;s
                  needs
                </p>
              </div>

              <div className="space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background">
                  <HeartHandshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Ongoing Support</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous assistance throughout the entire process
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 rounded-lg bg-primary/5 p-8">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-center text-2xl font-bold">
              Contact Our Family Concierge Team
            </h2>
            <p className="text-center">
              Our compassionate team is available 24/7 to provide immediate
              assistance during your time of need.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg bg-background p-4">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Call Anytime</h3>
                  <p className="text-sm text-muted-foreground">
                    <a href="tel:5551234567" className="hover:underline">
                      (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-background p-4">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-sm text-muted-foreground">
                    <a
                      href="mailto:concierge@example.com"
                      className="hover:underline"
                    >
                      concierge@example.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 rounded-lg border p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium">
                Available When You Need Us Most
              </h3>
              <p className="mt-1 text-muted-foreground">
                Our Family Concierge Service is available 24 hours a day, 7 days
                a week. We understand that loss doesn&apos;t follow a schedule,
                and we&apos;re here to provide immediate support whenever you
                need it.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="space-y-4 text-center">
          <p className="text-muted-foreground">
            For more information about our services or to schedule a
            consultation, please contact us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/about">About Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/testimonials">Client Testimonials</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/faq">Frequently Asked Questions</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
