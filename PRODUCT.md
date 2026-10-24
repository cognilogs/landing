# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are support leaders and support-operations teams at B2B SaaS companies running Freshdesk. Their job is to keep response and resolution times predictable without scaling headcount in proportion to ticket volume.

Secondary users are support agents who receive escalations. They need the full context, evidence, and customer history already assembled when an automated run stops.

No other audience has been confirmed.

## Product Purpose

CogniLogs automates the full support workflow that begins with a Freshdesk ticket: intake, intent classification, missing-information collection, knowledge retrieval, issue diagnosis, feature-request routing, reply drafting, confidence gating, escalation, and SLA follow-through.

The product exists so support teams can resolve repeatable work end to end instead of adding more macros, more triage steps, and more handoffs. Success means a ticket reaches a correct resolution or a well-prepared human handoff without losing time, context, or accountability.

## Positioning

CogniLogs is not a reply suggester. It executes the support process: it runs scenario-specific diagnostic playbooks and product admin APIs, verifies what it finds, checks confidence, and then either resolves the ticket or hands a complete case to a human.

The first deployment model is local. CogniLogs runs on customer-operated servers or inside the customer's network, so ticket content, credentials, and run history stay in the environment the customer controls. Local deployment is a product requirement, not a later hosting option.

The durable mechanism is the closed loop: Freshdesk event, intent-specific path, evidence-backed resolution, confidence gate, parent/child escalation, and SLA monitoring until the loop closes.

## Operating Context

- Freshdesk ticket events are the entry point. Both created and replied events can start or continue an automated session.
- Tickets are classified as a query, an issue, a feature request, or other.
- Queries use dynamic retrieval over the knowledge base or product data.
- Issues use a selected diagnostic playbook, sandboxed terminal or log-query tools, and product admin APIs.
- Feature requests call internal admin APIs to verify feature flags or enablement and can be routed to an internal tracker.
- A prerequisite checklist decides whether enough information exists to continue.
- A confidence evaluator chooses between customer auto-reply, internal private note plus human queue assignment, and escalation to the internal team.
- Escalation creates a linked child ticket, records severity, and registers the case in an SLA database.
- A background worker checks open child tickets for SLA activity every 15 minutes, syncs updates to the parent, and escalates reminders or breaches.
- A human must remain able to review, override, and take over any automated action.
- The first deployment target is local: customer servers or the customer's own network. The customer controls the host, network, credentials, backups, and retention policy.
- Compliance positioning should focus on control, data residency, network fit, and auditability. Do not claim certifications or guarantees that have not been issued.

## Capabilities and Constraints

Confirmed capabilities from `Cognilogs_architecture.txt`:

- Freshdesk ticket ingestion with pre-processing and context sanitization.
- Intent classification and entity extraction.
- Missing-information loop that replies to the customer and sets the ticket to awaiting customer.
- Query path: dynamic RAG retrieval, draft answer generation, confidence scoring.
- Issue path: diagnostic playbook selection, sandboxed terminal or log query execution, log analysis, and resolution verification.
- Feature-request path: internal admin API call, feature flag or enablement verification.
- Confidence gate at a default threshold of 0.85.
- Auto-reply and resolved status on high confidence.
- Internal private note and human queue assignment below threshold.
- Escalation path that creates a linked child ticket, records P0-P3 severity, and registers SLA tracking.
- SLA monitoring every 15 minutes, parent-note sync, automatic close on resolution, follow-up reminders, and breach escalation to a manager (Slack alerting is intended, not confirmed).

Confirmed deployment direction (user, October 2026):

- Local deployment is the first deployment model. The product runs on customer servers or inside the customer's network.
- The site may explain the benefits of local deployment: data control, fewer third-party processors, network fit, and simpler security review.
- The site must not claim SOC 2, ISO 27001, HIPAA, or any other certification, nor guarantee compliance or data residency outcomes that have not been documented.

Constraints and undecided facts:

- Freshdesk is the first and only confirmed ticketing integration.
- No live integration catalog has been verified. Slack, Jira, Linear, Notion, Confluence, GitHub, and Datadog may be described only as planned or intended workflow surfaces, not as shipped integrations, unless evidence is added.
- No pricing, packaging, customer count, benchmark, or production deployment claim has been verified. Local deployment is the first target, not a claim of a live production deployment.
- The public site is open for early access; the existing Google Sheets waitlist form is the current conversion mechanism.
- The waitlist and legal pages exist at `/waitlist`, `/privacy`, and `/terms`. The site is served from the domain root, without a base path.

## Brand Commitments

- Product name: CogniLogs.
- The existing brand accent is orange.
- The user explicitly designated `mausbot.com` as the binding redesign reference. Its design may be reverse engineered for structure, visual grammar, and infographic language; its brand assets, proprietary illustrations, and verbatim copy may not be reused.
- The website should make the transition from backend investigation to end-to-end support automation explicit.

## Evidence on Hand

- `Cognilogs_architecture.txt` is the authoritative source for product workflow and terminology.
- The user confirmed in October 2026 that the first deployment model is local, on customer servers or inside the customer's network.
- The existing website code and legal copy are the only other product material in the repository.
- There are no verified customer logos, named testimonials, case studies, benchmarks, usage numbers, pricing, or screenshots of a live production product.
- The current `50,000+`, `73%`, `85%` metrics and named testimonials are unsupported and must not be reused.
- Product interface fragments on the site may be clearly presented as product previews, but must not imply real customer data.

## Product Principles

1. **Resolve before routing.** The product earns its place by finishing the work, not by summarizing it for someone else.
2. **Show the evidence.** Every answer or escalation should carry the ticket context, sources, diagnostic output, and confidence behind it.
3. **Keep judgment human.** Automation may act, but a person can inspect, override, and take over at any point.
4. **Close the loop.** A reply is not a resolution; SLA ownership continues until the case is closed.
5. **Keep data close.** The first deployments run inside the customer's network, so ticket content and run history stay under the team's control.
6. **Go deep before wide.** Freshdesk and the core support paths come first; integration breadth follows proven depth.
