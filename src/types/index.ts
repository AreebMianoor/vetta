export interface TalentCard {
  id: string;
  name: string;
  headline: string;
  skills: Array<{
    name: string;
    evidence: string[];
  }>;
  work_style: string[];
  comms_summary: string;
  highlight_clip_url: string;
  location: string;
  availability: string;
  preferences: {
    modes: string[];
    domains: string[];
  };
  spotlight_url: string;
  stripe_connected: boolean;
}

export interface ManagerCard {
  id: string;
  contact: {
    name: string;
    role: string;
  };
  mission: string;
  stack: string[];
  constraints: string[];
  collab_style: string[];
  engagement: {
    mode: 'paid_bounty' | 'collab' | 'contract' | 'hire';
    budget_range: string;
    window: string;
  };
  promote_opt_in: boolean;
}

export interface Opportunity {
  id: string;
  title: string;
  reward_usd: number;
  duration: string;
  outcome: string;
  lead_id: string;
  intro_video: string;
  tags: string[];
}

export interface MicroChallenge {
  id: string;
  domain: string;
  prompt: string;
  duration_seconds: number;
  scoring_criteria: {
    reasoning: string[];
    clarity: string[];
    tradeoffs: string[];
  };
}
