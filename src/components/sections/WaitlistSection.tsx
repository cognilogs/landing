import ScrollReveal from "@/components/ui/ScrollReveal";
import WaitlistForm from "@/components/ui/WaitlistForm";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="scroll-mt-24 py-20 sm:py-24">
      <div className="shell">
        <ScrollReveal>
          <div className="overflow-hidden rounded-[32px] bg-accent px-6 py-10 text-accent-ink sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
              <div className="lg:col-span-7">
                <h2 className="display-2 max-w-[560px]">
                  Put the queue on autopilot.
                </h2>
                <p className="mt-5 max-w-[480px] text-[16px] leading-7 text-accent-ink sm:text-[17px]">
                  CogniLogs is onboarding a small group of Freshdesk teams for
                  local deployment. Tell us where the queue hurts, and we&apos;ll
                  show you the loop on your workflow.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-medium text-accent-ink">
                  <span>Local deployment</span>
                  <span>Freshdesk-first</span>
                  <span>Human override built in</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <WaitlistForm />
                <p className="mt-3 text-[12px] text-accent-ink">
                  No spam. One note when design-partner spots open.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
