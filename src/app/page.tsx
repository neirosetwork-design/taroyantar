import { CardDay } from "@/components/wellness/card-day";
import { ContactForm } from "@/components/wellness/contact-form";
import { DeepInvite } from "@/components/wellness/deep-invite";
import { SiteFooter } from "@/components/wellness/site-footer";
import { SiteHeader } from "@/components/wellness/site-header";
import { SpreadBanner } from "@/components/wellness/spread-banner";

export default function IndexPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-milk font-sans text-bark">
      <SiteHeader />
      <main>
        <CardDay />
        <SpreadBanner />
        <ContactForm />
        <DeepInvite />
      </main>
      <SiteFooter />
    </div>
  );
}
