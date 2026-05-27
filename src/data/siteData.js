import {
  ArrowUpRight,
  BadgeDollarSign,
  Banknote,
  BarChart3,
  Blocks,
  Building2,
  CircleGauge,
  CreditCard,
  FileCheck2,
  Fingerprint,
  HandCoins,
  Landmark,
  LayoutDashboard,
  MonitorSmartphone,
  Network,
  PanelTop,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UsersRound,
} from "lucide-react";

export const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "About us", href: "#footer" },
];

export const trustedBy = ["CB7", "Veridium", "Fusion", "Apexium", "Synerise", "Lendstreet"];

export const solutions = [
  {
    title: "Core Banking CB7",
    copy: "CB7 helps your financial institution process the full customer lifecycle, keep product configuration flexible, and operate all front-to-back banking processes from your single source of truth.",
    icon: Landmark,
  },
  {
    title: "Digital Banking N7",
    copy: "N7 brings the capabilities across banking, finance, mobile banking, internet banking, service channels, and customer journeys into one modern digital layer.",
    icon: MonitorSmartphone,
  },
  {
    title: "Open Banking",
    copy: "Our API banking layer lets you give ecosystem partners secure access to payments, account information, onboarding, and consented data services.",
    icon: Network,
  },
  {
    title: "Loan Origination System",
    copy: "A smart lending workflow covers scoring, financial analysis, documentation, approvals, and loan generation inside one guided origination process.",
    icon: FileCheck2,
  },
  {
    title: "Loan Management System",
    copy: "Manage high-volume loan portfolios with repayment schedules, collections, restructuring, and loan servicing connected to your core.",
    icon: HandCoins,
  },
];

export const coreBenefits = [
  "Customer On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Internet Calculation",
  "Payments processing incl. transfers, remittance, NEFT, RTGS etc.",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursement and loan restructuring",
  "Managing interest calculations, account closures, statement generation",
];

export const digitalBenefits = [
  "Pre-integrated Security System",
  "Fully Compliant With Regulatory Requirements",
  "Digitally Connected Core",
  "Plug-in Connected Channels",
  "Digital Transformation Capability",
  "Optimized, Adaptable and Scalable",
];

export const blogPosts = [
  {
    title: "How to transition from a traditional to a digital bank",
    category: "Digital bank",
    icon: Sparkles,
  },
  {
    title: "How to transition from a traditional to a digital bank",
    category: "Open banking",
    icon: Blocks,
  },
  {
    title: "How to transition from a traditional to a digital bank",
    category: "Core banking",
    icon: BarChart3,
  },
];

export const caseStudies = [
  {
    name: "BLOMB Bank",
    result: "How we help brand reach out to more people",
    copy: "A complete modernization program across digital channels and core operations.",
    icon: Building2,
  },
  {
    name: "Retail Bank",
    result: "A faster paperless customer onboarding flow",
    copy: "Reduced branch effort and improved time to account activation.",
    icon: UsersRound,
  },
  {
    name: "Digital Lender",
    result: "Connected loan origination with servicing",
    copy: "Created a single operational view from approval to repayment.",
    icon: BadgeDollarSign,
  },
];

export const footerGroups = [
  {
    title: "Solutions",
    links: [
      "Core Banking CB7",
      "Digital Banking N7",
      "Open Banking",
      "Loan Origination",
      "Loan Management",
      "System Integration",
    ],
  },
  {
    title: "N7 Banking",
    links: ["About us", "Solutions", "Customers", "Company", "Careers", "Blog"],
  },
  {
    title: "Our socials",
    links: ["LinkedIn", "X", "YouTube", "Facebook"],
  },
];

export const phoneScreens = [
  {
    title: "Fully compliant with regulatory requirements",
    copy: "The governance of risk management with regulators is achieved by the risk management framework that is fully integrated to work with digital and branch environments.",
    icon: Smartphone,
  },
  {
    title: "No legacy IT systems",
    copy: "Our digital banking solution and configured approach help financial institutions take advantage of digital transformation while staying optimized, local, and regulatory-compliant.",
    icon: CircleGauge,
  },
  {
    title: "No traditional branches",
    copy: "Our digital banking set of the box helps you re-establish processes while keeping customers connected anywhere through a seamless omnichannel experience.",
    icon: PanelTop,
  },
];

export const heroStats = [
  { label: "Balance", value: "$4,280.00", icon: Banknote },
  { label: "Loan status", value: "Approved", icon: ShieldCheck },
  { label: "Card limit", value: "$12,000", icon: CreditCard },
  { label: "Dashboard", value: "Live", icon: LayoutDashboard },
  { label: "Verification", value: "Passed", icon: Fingerprint },
  { label: "Open APIs", value: "Ready", icon: ArrowUpRight },
];
