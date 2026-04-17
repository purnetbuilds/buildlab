// lib/projects.ts
export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Spendsmart",
    subtitle: "Financial Advisor Powered by Claude",
    description:
      "Real Claude API integration for personalized financial insights. Users get spending analysis, subscription optimization, and BNPL health checks — all powered by Claude's understanding of their financial data.",
    tags: ["NextJS", "Claude-API", "FinTech"],
    href: "https://github.com/purnetm/Spendsmart",
  },
  {
    title: "Post Call Analysis",
    subtitle: "No-Code Dashboard Builder",
    description:
      "Built entirely with Claude Code + Figma MCP. Users build custom dashboards with any metrics they choose. Shows how AI can enable non-technical users to create sophisticated analytics tools.",
    tags: ["Claude-Code", "Figma-MCP", "NoCode"],
    href: "https://github.com/purnetm/PostCallAnalysis",
  },
  {
    title: "Calora",
    subtitle: "E-commerce with AI Recommendations",
    description:
      "Gourmet dessert e-commerce platform with AI-powered recommendations, smart search, and personalized product suggestions. Shows how to add intelligence to existing products without losing UX quality.",
    tags: ["Claude-API", "E-commerce", "Recommendations"],
    href: "https://github.com/purnetm/Calora",
  },
];
