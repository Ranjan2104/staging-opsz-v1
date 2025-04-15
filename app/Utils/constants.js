// this is for use case section data for before OpsZ
export const carouselItems = [
  {
    userInfo: {
      name: "Priya",
      role: "Senior SRE",
      img: "/avatarImage.png",
      goals:
        "Ensure uptime, respond to alerts fast, automate incident response",
      frustrations: "Alert fatigue, manual triage, too many tools",
    },
    before_OpsZ: {
      title: "Before OpsZ: A Day in the Life",
      description: [
        "PagerDuty alert → Logs into Datadog, then switches to Kibana",
        "Triage an issue, opens Confluence to find incident runbook",
        "Joins war room, jumps between Slack, Grafana, and Jira",
        "Writes post-mortem manually, emails team updates",
        "Kicks off patching manually via Ansible",
        "Reviews monitoring gaps across AWS + GCP → spreadsheet hell",
        "Constant context switching = fatigue, human error, delays",
      ],
      image: "/afterImage.png",
    },
    after_OpsZ: {
      title: "After OpsZ: The OpsZ Transformation",
      description: [
        "OpsZ detects anomaly, auto-triages logs + metrics (Automate)",
        "Automation runbook kicks in via integrated workflow (Automate)",
        "Slack receives contextual update; Jira ticket auto-created (Unify)",
        "Post-mortem auto-generated with incident timeline (Unify)",
        "Patch window starts → pre-approved handles patching (Scale)",
        "Central dashboard shows health across AWS/GCP (Unify)",
        "Better MTTR metrics, less human intervention (Scale)",
      ],
      image: "/afterOpsZ.png",
      descriptionImpact: [
        "40% reduction in MTTR (Automate)",
        "70% fewer manual steps (Automate)",
        "Single pane of glass = Visibility without context switching (Unify)",
      ],
    },
  },
  {
    userInfo: {
      name: "Jake",
      role: "DevOps Engineer",
      img: "/jack.png",
      goals: "Ship infrastructure fast, maintain CI/CD reliability",
      frustrations:
        "Manual deployments, tool fragmentation, slow feedback loops",
    },
    before_OpsZ: {
      title: "Before OpsZ: A Day in the Life",
      description: [
        "Troubleshooting a failed Jenkins pipeline by checking build logs",
        "Logs into GitLab, then AWS Console, then Terraform",
        "Coordination delays with SRE over resource access",
        "Manual rollback of bad deployment",
        "Writing automation script from scratch (again)",
        "Teams ping him for updates — no visibility",
      ],
      image: "/afterImage.png",
    },
    after_OpsZ: {
      title: "After OpsZ: The OpsZ Transformation",
      description: [
        "OpsZ flags failed build + root cause from logs (Automate)",
        "CI/CD pipeline auto-patched from template (Automate)",
        "Resource provisioning auto-approved + auto-tagged (Scale)",
        "Rollback triggered via workflow, logged in system of record (Automate)",
        "Reusable automation library = no reinventing (Scale)",
        "Teams see status via shared OpsZ dashboard (Unify)",
      ],
      image: "/afterOpsZ.png",
      descriptionImpact: [
        "50% reduction in deployment friction (Unify)",
        "Standardized infra = fewer errors (Unify)",
        "Unified visibility = proactive alerts, less noise (Unify)",
      ],
    },
  },
  {
    userInfo: {
      name: "Mei",
      role: "Lead DBA",
      img: "/mei.png",
      goals: "Ensure database health, handle scale, apply patches",
      frustrations:
        "Manual patching, no centralized view, repetitive tasks",
    },
    before_OpsZ: {
      title: "Before OpsZ: A Day in the Life",
      description: [
        "Checks health on Oracle, then MongoDB, then RDS — 3 different tools to check",
        "Performs manual backup across environments",
        "Starts security patching — tedious, needs approvals",
        "Handles performance issue flagged by DevOps",
        "Late night maintenance window = burnout"
      ],
      image: "/afterImage.png",
    },
    after_OpsZ: {
      title: "After OpsZ: The OpsZ Transformation",
      description: [
        "Unified DB health dashboard across Oracle, Mongo, RDS (Unify)",
        "Backup runs via an automated schedule with validation",
        "Security patch auto-approved + deployed with rollback safety (Automate)",
        "Rollback triggered via workflow, logged in system of record (Automate)",
        "Performance degradation auto-detected, fix suggested (Scale)",
        "Night window eliminated → auto-orchestrated patch cycles",
      ],
      image: "/afterOpsZ.png",
      descriptionImpact: [
        "75% faster patching time (Scale)",
        "Consolidated tooling = fewer logins (Unify)",
        "Less reactive work = focus on performance tuning (Automate)",
      ],
    },
  },
  {
    userInfo: {
      name: "Sam",
      role: "Customer Service Manager",
      img: "/sam.jpg",
      goals: "Resolve tickets fast, improve CSAT, track patterns",
      frustrations:
        "Repetitive handoffs, no visibility into IT/SRE updates",
    },
    before_OpsZ: {  
      title: "Before OpsZ: A Day in the Life",
      description: [
        "Escalates incident to IT via email, waits for reply → no resolution yet",
        "No visibility on root cause → escalates again",
        "Customer angry → no clear ETA",
        "Update comes in Slack — too late, resolution unclear",
        "Manually updates ticket and sends apology email"
      ],
      image: "/afterImage.png",
    },
    after_OpsZ: {
      title: "After OpsZ: The OpsZ Transformation",
      description: [
        "Customer-facing dashboard updated automatically (Unify)",
        "CS sees real-time status + estimated resolution (Automate)",
        "Automated workflows keep customers in the loop (Automate)",
        "No pinging — system updates ticket with RCA (Automate)",
        "CSAT goes up, tickets down (Scale)"
      ],
      image: "/afterOpsZ.png",
      descriptionImpact: [
        "35% reduction in escalations (Automate)",
        "Improved customer trust through transparency (Unify)",
        "Fewer tickets = better CS coverage (Scale)",
      ],
    },
  },
  {
    userInfo: {
      name: "Alex",
      role: "VP of Infrastructure & Operations",
      img: "/alex.png",
      goals: "Drive efficiency, reduce risk, control cost, align IT with business",
      frustrations: "No real-time visibility, siloed tools, high MTTR, costly manual ops",
    },
    before_OpsZ: {
      title: "Before OpsZ: A Day in the Life",
      description: [
        "Pressed on outages and IT spend in exec sync meeting → no visibility",
        "Delayed, fragmented incident reports",
        "Chasing cloud costs and compliance gaps",
        "Reactive work consumes 40% of team time",
        "New tool proposals increase complexity",
        "Justifying headcount to maintain operations",
      ],
      image: "/afterImage.png",
    },
    after_OpsZ: {
      title: "After OpsZ: The OpsZ Transformation",
      description: [
        "Exec sync: showcases 35% downtime drop",
        "Real-time, consistent incident updates",
        "Live view of ROI, resilience, and cost",
        "Ops teams see 25% productivity boost",
        "Focus shifts to transformation, not maintenance",
      ],
      image: "/afterOpsZ.png",
      descriptionImpact: [
        "30–50% less operational overhead (Scale)",
        "Faster decisions via real-time insights (Scale)",
        "Unified IT-business visibility (Unify)",
        "IT becomes strategic, not just support (Scale)",
      ],
    },
  }
  ,
];

// this is for footer links for sub sections
export const navigationLinks = [
  { name: "Back to Top", href: "#top", ariaLabel: "Navigate to top of page" },
  {
    name: "The Product",
    href: "/product",
    ariaLabel: "Learn about our product",
  },
  {
    name: "The Company",
    href: "/company",
    ariaLabel: "Learn about our company",
  },
];

// this is for footer links
export const legalLinks = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
    ariaLabel: "Read our privacy policy",
  },
  {
    name: "Terms and Conditions",
    href: "/terms-condition",
    ariaLabel: "View terms of Conditions",
  },
  { name: "Cookie Policy", href: "/cookie-policy", ariaLabel: "View cookie policy" },
];

// this is for navbar links
export const NavLink = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "The Product",
    url: "/product",
  },
  {
    name: "The Company",
    url: "/company",
  },
];

// this is for secure routes
export const secureRoutes = [
  "/product",
  "/company",
  "/",
  "/chatbot",
  "/privacy-policy",
  "/terms-condition",
  "/cookie-policy",
];
