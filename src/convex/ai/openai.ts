"use node";

import { v } from "convex/values";
import { action } from "../_generated/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";

// Helper function to call OpenAI API
async function callOpenAI(messages: Array<{ role: string; content: string }>, model = "gpt-4o-mini") {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// Generate embeddings for text
async function generateEmbedding(text: string): Promise<number[]> {
  const response = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-embedding-3-small",
      input: text,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI Embedding API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.data[0].embedding;
}

// 1. AI Startup Idea Evaluator
export const evaluateIdea = action({
  args: {
    title: v.string(),
    description: v.string(),
    problemStatement: v.optional(v.string()),
    targetMarket: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const prompt = `You are an expert startup advisor. Evaluate this startup idea and provide detailed analysis:

Title: ${args.title}
Description: ${args.description}
Problem: ${args.problemStatement || "Not specified"}
Target Market: ${args.targetMarket || "Not specified"}

Provide a JSON response with:
1. feasibilityScore (0-10)
2. marketAnalysis (detailed paragraph)
3. competitors (array of 3-5 competitor names)
4. improvements (array of 3-5 suggestions)
5. techSuggestions (array of 3-5 technology recommendations)
6. rating (overall rating 1-10)

Format as valid JSON only.`;

    const response = await callOpenAI([
      { role: "system", content: "You are a startup evaluation expert. Always respond with valid JSON." },
      { role: "user", content: prompt },
    ]);

    try {
      return JSON.parse(response);
    } catch (e) {
      // Fallback if JSON parsing fails
      return {
        feasibilityScore: 7,
        marketAnalysis: response,
        competitors: [],
        improvements: [],
        techSuggestions: [],
        rating: 7,
      };
    }
  },
});

// 2. Generate Profile Embedding for Matchmaking
export const generateProfileEmbedding = action({
  args: {
    skills: v.array(v.string()),
    lookingFor: v.array(v.string()),
    experience: v.string(),
    bio: v.string(),
  },
  handler: async (ctx, args) => {
    const profileText = `Skills: ${args.skills.join(", ")}. Looking for: ${args.lookingFor.join(", ")}. Experience: ${args.experience}. Bio: ${args.bio}`;
    return await generateEmbedding(profileText);
  },
});

// 3. Generate Idea Embedding
export const generateIdeaEmbedding = action({
  args: {
    title: v.string(),
    description: v.string(),
    skillsRequired: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const ideaText = `${args.title}. ${args.description}. Skills needed: ${args.skillsRequired.join(", ")}`;
    return await generateEmbedding(ideaText);
  },
});

// 4. AI Pitch Maker
export const generatePitch = action({
  args: {
    idea: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    const prompt = `Create a compelling pitch for this startup idea:

Idea: ${args.idea}
Description: ${args.description}

Provide a JSON response with:
1. oneLiner (one sentence pitch)
2. elevatorPitch (30-second pitch, 2-3 sentences)
3. pitchDeckOutline (array of 3 slide titles with brief descriptions)
4. problemSolution (object with 'problem' and 'solution' strings)

Format as valid JSON only.`;

    const response = await callOpenAI([
      { role: "system", content: "You are a pitch expert. Always respond with valid JSON." },
      { role: "user", content: prompt },
    ]);

    try {
      return JSON.parse(response);
    } catch (e) {
      return {
        oneLiner: "Innovative solution for modern problems",
        elevatorPitch: response,
        pitchDeckOutline: [],
        problemSolution: { problem: "", solution: "" },
      };
    }
  },
});

// 5. AI Startup Assets Generator
export const generateStartupAssets = action({
  args: {
    idea: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    const prompt = `Generate complete startup branding assets for:

Idea: ${args.idea}
Description: ${args.description}

Provide a JSON response with:
1. tagline (catchy 5-7 word tagline)
2. brandColors (array of 3 hex color codes)
3. landingPageCopy (3 paragraphs of compelling copy)
4. businessPlan (structured business plan with sections: Executive Summary, Market Analysis, Revenue Model, Go-to-Market Strategy)
5. monetizationPlan (detailed monetization strategy)

Format as valid JSON only.`;

    const response = await callOpenAI([
      { role: "system", content: "You are a branding and business strategy expert. Always respond with valid JSON." },
      { role: "user", content: prompt },
    ], "gpt-4o");

    try {
      return JSON.parse(response);
    } catch (e) {
      return {
        tagline: "Innovation meets opportunity",
        brandColors: ["#3B82F6", "#8B5CF6", "#EC4899"],
        landingPageCopy: response,
        businessPlan: "",
        monetizationPlan: "",
      };
    }
  },
});

// 6. AI Mentor Chat
export const chatWithMentor = action({
  args: {
    message: v.string(),
    context: v.optional(v.string()),
    chatHistory: v.optional(v.array(v.object({
      role: v.string(),
      content: v.string(),
    }))),
  },
  handler: async (ctx, args) => {
    const systemPrompt = `You are an expert AI mentor for student entrepreneurs. You help with:
- Technical questions (coding, architecture, tech stack)
- Business strategy (business models, market analysis, SWOT)
- Startup frameworks (Lean Canvas, MVP planning)
- Pitch preparation
- Team building advice
- Hackathon strategies

Be concise, practical, and encouraging. Provide actionable advice.`;

    const messages = [
      { role: "system", content: systemPrompt },
      ...(args.chatHistory || []),
      { role: "user", content: args.message },
    ];

    return await callOpenAI(messages, "gpt-4o-mini");
  },
});

// 7. AI Event Content Generator
export const generateEventContent = action({
  args: {
    title: v.string(),
    description: v.string(),
    type: v.string(),
    date: v.string(),
  },
  handler: async (ctx, args) => {
    const prompt = `Generate promotional content for this event:

Title: ${args.title}
Type: ${args.type}
Date: ${args.date}
Description: ${args.description}

Provide a JSON response with:
1. posterText (compelling poster headline and subheadline)
2. socialMediaCaptions (array of 3 captions for different platforms)
3. emailCampaign (professional email invitation)
4. faq (array of 5 FAQ objects with 'question' and 'answer')

Format as valid JSON only.`;

    const response = await callOpenAI([
      { role: "system", content: "You are an event marketing expert. Always respond with valid JSON." },
      { role: "user", content: prompt },
    ]);

    try {
      return JSON.parse(response);
    } catch (e) {
      return {
        posterText: args.title,
        socialMediaCaptions: [],
        emailCampaign: "",
        faq: [],
      };
    }
  },
});

// 8. AI Idea-to-Task Breakdown
export const generateTaskBreakdown = action({
  args: {
    idea: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    const prompt = `Break down this startup idea into actionable tasks:

Idea: ${args.idea}
Description: ${args.description}

Provide a JSON response with:
1. tasks (array of task objects with 'title', 'description', 'priority', 'estimatedTime')
2. techStack (array of recommended technologies)
3. mvpVersion (description of MVP)
4. roadmap (object with 'week1', 'month1', 'month3' arrays of milestones)

Format as valid JSON only.`;

    const response = await callOpenAI([
      { role: "system", content: "You are a project management expert. Always respond with valid JSON." },
      { role: "user", content: prompt },
    ], "gpt-4o");

    try {
      return JSON.parse(response);
    } catch (e) {
      return {
        tasks: [],
        techStack: [],
        mvpVersion: response,
        roadmap: { week1: [], month1: [], month3: [] },
      };
    }
  },
});

// 9. AI Investor Pitch Optimizer
export const optimizeInvestorPitch = action({
  args: {
    pitchText: v.string(),
    ideaDescription: v.string(),
  },
  handler: async (ctx, args) => {
    const prompt = `Analyze and improve this investor pitch:

Pitch: ${args.pitchText}
Idea: ${args.ideaDescription}

Provide a JSON response with:
1. missingElements (array of what's missing)
2. riskAnalysis (detailed risk assessment)
3. revenueModel (suggested revenue model)
4. improvements (array of specific improvements)
5. sampleSlides (array of 5 slide titles with content suggestions)
6. elevatorPitch (optimized 30-second pitch)

Format as valid JSON only.`;

    const response = await callOpenAI([
      { role: "system", content: "You are an investor pitch expert. Always respond with valid JSON." },
      { role: "user", content: prompt },
    ], "gpt-4o");

    try {
      return JSON.parse(response);
    } catch (e) {
      return {
        missingElements: [],
        riskAnalysis: response,
        revenueModel: "",
        improvements: [],
        sampleSlides: [],
        elevatorPitch: "",
      };
    }
  },
});

// 10. Auto Startup Generator (SUPER FEATURE)
export const generateCompleteStartup = action({
  args: {
    oneSentence: v.string(),
  },
  handler: async (ctx, args) => {
    const prompt = `Generate a complete startup package from this one sentence:

"${args.oneSentence}"

Provide a comprehensive JSON response with:
1. startupName (creative, memorable name)
2. tagline (catchy tagline)
3. logoPrompt (detailed DALL-E prompt for logo generation)
4. mvpDescription (detailed MVP description)
5. techStack (array of technologies with reasons)
6. uiWireframe (detailed description of key screens/pages)
7. roadmap (object with 'week1', 'month1', 'month3', 'month6' milestones)
8. pitchDeck (array of 10 slide objects with 'title' and 'content')
9. targetMarket (detailed market analysis)
10. competitiveAdvantage (unique selling points)

Format as valid JSON only.`;

    const response = await callOpenAI([
      { role: "system", content: "You are a comprehensive startup consultant. Always respond with valid JSON." },
      { role: "user", content: prompt },
    ], "gpt-4o");

    try {
      return JSON.parse(response);
    } catch (e) {
      return {
        startupName: "Innovative Startup",
        tagline: "Building the future",
        logoPrompt: "",
        mvpDescription: response,
        techStack: [],
        uiWireframe: "",
        roadmap: {},
        pitchDeck: [],
        targetMarket: "",
        competitiveAdvantage: "",
      };
    }
  },
});
