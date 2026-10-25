# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are support leaders and support-operations teams at B2B SaaS and enterprise companies running a ticketing system. Their job is to keep response and resolution times predictable without scaling headcount in proportion to ticket volume.

Secondary users are support agents who receive escalations. They need the full context, evidence, and customer history already assembled when an automated run stops.

No other audience has been confirmed.

## Product Purpose

cognilogs automates the full support workflow that begins with a ticket from any ticketing system: intake, sanitization, intent classification, missing-information collection, knowledge retrieval, issue investigation, feature enablement with approval, RCA drafting, confidence gating, escalation, SLA follow-through, customer reply, and CSAT.

The product exists so support teams can resolve repeatable work end to end instead of adding more macros, more triage steps, and more handoffs. Success means a ticket reaches a correct resolution or a well-prepared human handoff without losing time, context, or accountability.

## Positioning

cognilogs is not a reply suggester. It executes the support process: it runs scenario-specific diagnostic playbooks and product admin APIs, verifies what it finds, checks confidence, and then either resolves the ticket or hands a complete case to a human.

The first deployment model is local. cognilogs runs on customer-operated servers or inside the customer's network, so ticket content, credentials, and run history stay in the environment the customer controls. Local deployment is a product requirement, not a later hosting option.

The durable mechanism is the closed loop: ticket event, intent-specific path, evidence-backed resolution, confidence gate, parent/child escalation, SLA monitoring, customer reply, and CSAT until the loop closes.

## Operating Context

- Ticket events from any ticketing system are the entry point. Both created and replied events can start or continue an automated session.
- A scheduler polls the ticketing system on a configurable interval, from every five minutes to every hour.
- Tickets are sanitized and classified as a query, an issue, or a feature enablement request.
- Queries use dynamic retrieval over official documentation, internal notes, and previous agent replies.
- Issues check audit logs, the codebase, databases, and observability tools such as Kibana, Sentry, and Datadog. In-scope checks and fixes can be automated from resolution data.
- Feature enablement can run through an API or browser automation, including clicking through an internal admin panel or the customer portal. Sensitive changes can wait for an approver.
- A prerequisite checklist decides whether enough information exists to continue.
- A confidence evaluator chooses between customer auto-reply, internal private note plus human queue assignment, and escalation to the internal team.
- RCA documents are drafted from the available context and always receive human review before they are sent.
- Escalation creates a linked child ticket, records severity and priority, and registers the case in an SLA tracker.
- A background worker checks open child tickets for SLA activity every 15 minutes, syncs updates to the parent, and sends Slack or email notifications. After three notifications without movement, the manager is notified.
- When a child ticket is resolved, the agent checks whether the answer can be shared with the customer and drafts a reply. A CSAT request can follow a successful resolution.
- The agent can handle five to ten tickets at a time, depending on complexity and the checks each ticket needs.
- All model actions, tool calls, browser actions, approvals, and replies are recorded for audit.
- A human must remain able to review, override, and take over any automated action.
- The first deployment target is local: customer servers or the customer's own network. The customer controls the host, network, credentials, backups, and retention policy.
- Any local model the customer's infrastructure can serve is supported. Stronger models produce better work; the evidence, approval, and audit rules stay the same.

## Capabilities and Constraints

Confirmed capabilities from `cognilogs_architecture.txt` and the product context provided by the user:

- Ticketing ingestion from any system, with configurable polling and context sanitization.
- Intent classification and entity extraction.
- Missing-information loop that replies to the customer and sets the ticket to awaiting customer.
- Query path: dynamic RAG retrieval from docs, internal notes, and previous agent replies; draft answer generation with citations; confidence scoring.
- Issue path: audit logs, codebase search, database queries, observability checks, sandboxed terminal or log-query execution, log analysis, and resolution verification.
- Automated checks and fixes trained from resolution steps.
- Feature enablement path: API call or browser automation, approval loop for sensitive changes, enablement verification, and customer reply.
- RCA drafting from run context with mandatory human review before sending.
- Confidence gate at a default threshold of 0.85.
- Auto-reply and resolved status on high confidence.
- Internal private note and human queue assignment below threshold.
- Escalation path that creates a linked child ticket, records severity and priority, and registers SLA tracking.
- SLA monitoring every 15 minutes, parent-note sync, automatic close on resolution, Slack or email follow-up reminders, manager escalation after three notifications, and child-resolution to customer reply.
- CSAT request after a successful resolution, customizable per deployment.
- Audit trail for model actions, tool calls, browser actions, approvals, and replies.
- Concurrency of five to ten tickets at a time, depending on complexity.

Confirmed deployment direction (user, October 2026):

- Local deployment is the first deployment model. The product runs on customer servers or inside the customer's network.
- Any local model the customer can serve is supported. Stronger models improve output quality.
- The site may explain the benefits of local deployment: data control, fewer third-party processors, network fit, and simpler security review.
- The site must not claim SOC 2, ISO 27001, HIPAA, or any other certification that has not been issued. Certification work is in progress.

Constraints and undecided facts:

- Any ticketing system can be polled. Zendesk, Intercom, Jira Service Management, HubSpot, and Salesforce are examples. The product is not positioned around a single ticketing vendor.
- Evidence and action surfaces include audit logs, codebases, databases, Kibana, Sentry, Datadog, Slack, email, and browser automation.
- No customer count, benchmark, or production deployment claim has been verified.
- Early customers can get a ticket resolved for as low as ₹10. Final pricing depends on model, infrastructure, volume, and resolution depth.
- The public site is open for early access; the existing Google Sheets waitlist form is the current conversion mechanism.
- The waitlist and legal pages exist at `/waitlist`, `/privacy`, and `/terms`. Local builds serve from the domain root. The GitHub Pages project build uses `/landing` as its base path.

## Brand Commitments

- Product name: cognilogs.
- The existing brand accent is orange.
- The user explicitly designated `mausbot.com` as the binding redesign reference. Its design may be reverse engineered for structure, visual grammar, and infographic language; its brand assets, proprietary illustrations, and verbatim copy may not be reused.
- The website should make the transition from backend investigation to end-to-end support automation explicit.

## Evidence on Hand

- `cognilogs_architecture.txt` is the authoritative source for the original workflow and terminology.
- The user provided updated product context in October 2026: any ticketing system, cron polling, local models, audit/code/database checks, feature enablement, RCA review, CSAT, child-ticket SLA, Slack/email notifications, and five-to-ten-ticket concurrency.
- The user confirmed in October 2026 that the first deployment model is local, on customer servers or inside the customer's network.
- The user confirmed the early-access price floor of ₹10 per resolved ticket.
- The existing website code and legal copy are the only other product material in the repository.
- There are no verified customer logos, named testimonials, case studies, benchmarks, or usage numbers.
- Product interface fragments on the site may be clearly presented as product previews, but must not imply real customer data.

## Product Principles

1. **Resolve before routing.** The product earns its place by finishing the work, not by summarizing it for someone else.
2. **Show the evidence.** Every answer or escalation should carry the ticket context, sources, diagnostic output, and confidence behind it.
3. **Keep judgment human.** Automation may act, but a person can inspect, override, and take over at any point.
4. **Close the loop.** A reply is not a resolution; SLA ownership continues until the case is closed.
5. **Keep data close.** The first deployments run inside the customer's network, so ticket content and run history stay under the team's control.
6. **Go deep before wide.** Any ticketing system can be polled. The depth of the investigation matters more than the length of the connector list.
