import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

// Create a new idea
export const create = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    problemStatement: v.optional(v.string()),
    targetMarket: v.optional(v.string()),
    skillsRequired: v.array(v.string()),
    teamSize: v.optional(v.string()),
    targetLaunchDate: v.optional(v.string()),
    additionalNotes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }

    return await ctx.db.insert("ideas", {
      userId,
      ...args,
      status: "draft",
    });
  },
});

// Get all ideas
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("ideas").order("desc").collect();
  },
});

// Get user's ideas
export const myIdeas = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return [];
    }

    return await ctx.db
      .query("ideas")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .order("desc")
      .collect();
  },
});

// Get idea by ID
export const getById = query({
  args: { id: v.id("ideas") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Update idea with AI evaluation
export const updateWithEvaluation = mutation({
  args: {
    ideaId: v.id("ideas"),
    evaluation: v.object({
      feasibilityScore: v.number(),
      marketAnalysis: v.string(),
      competitors: v.array(v.string()),
      improvements: v.array(v.string()),
      techSuggestions: v.array(v.string()),
      rating: v.number(),
    }),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.ideaId, {
      aiEvaluation: args.evaluation,
    });
  },
});

// Update idea with AI assets
export const updateWithAssets = mutation({
  args: {
    ideaId: v.id("ideas"),
    assets: v.object({
      logo: v.optional(v.string()),
      tagline: v.optional(v.string()),
      brandColors: v.optional(v.array(v.string())),
      landingPageCopy: v.optional(v.string()),
      pitchDeck: v.optional(v.string()),
      businessPlan: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.ideaId, {
      aiAssets: args.assets,
    });
  },
});

// Update idea embedding
export const updateEmbedding = mutation({
  args: {
    ideaId: v.id("ideas"),
    embedding: v.array(v.number()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.ideaId, {
      ideaEmbedding: args.embedding,
    });
  },
});
