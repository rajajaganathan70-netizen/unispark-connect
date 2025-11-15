import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables, // do not remove or modify

    // the users table is the default users table that is brought in by the authTables
    users: defineTable({
      name: v.optional(v.string()), // name of the user. do not remove
      image: v.optional(v.string()), // image of the user. do not remove
      email: v.optional(v.string()), // email of the user. do not remove
      emailVerificationTime: v.optional(v.number()), // email verification time. do not remove
      isAnonymous: v.optional(v.boolean()), // is the user anonymous. do not remove

      role: v.optional(roleValidator), // role of the user. do not remove
      
      // AI Profile fields
      skills: v.optional(v.array(v.string())),
      lookingFor: v.optional(v.array(v.string())),
      experience: v.optional(v.string()),
      bio: v.optional(v.string()),
      university: v.optional(v.string()),
      year: v.optional(v.string()),
      profileEmbedding: v.optional(v.array(v.number())),
    }).index("email", ["email"]), // index for the email. do not remove or modify

    // Startup Ideas
    ideas: defineTable({
      userId: v.id("users"),
      title: v.string(),
      description: v.string(),
      problemStatement: v.optional(v.string()),
      targetMarket: v.optional(v.string()),
      skillsRequired: v.array(v.string()),
      teamSize: v.optional(v.string()),
      targetLaunchDate: v.optional(v.string()),
      additionalNotes: v.optional(v.string()),
      
      // AI Analysis fields
      aiEvaluation: v.optional(v.object({
        feasibilityScore: v.number(),
        marketAnalysis: v.string(),
        competitors: v.array(v.string()),
        improvements: v.array(v.string()),
        techSuggestions: v.array(v.string()),
        rating: v.number(),
      })),
      
      // AI Generated Assets
      aiAssets: v.optional(v.object({
        logo: v.optional(v.string()),
        tagline: v.optional(v.string()),
        brandColors: v.optional(v.array(v.string())),
        landingPageCopy: v.optional(v.string()),
        pitchDeck: v.optional(v.string()),
        businessPlan: v.optional(v.string()),
      })),
      
      ideaEmbedding: v.optional(v.array(v.number())),
      status: v.optional(v.string()), // draft, active, funded, completed
    })
      .index("by_user", ["userId"])
      .index("by_status", ["status"]),

    // Team Matching
    teamMatches: defineTable({
      ideaId: v.id("ideas"),
      userId: v.id("users"),
      matchScore: v.number(),
      matchReason: v.string(),
      status: v.string(), // pending, accepted, rejected
    })
      .index("by_idea", ["ideaId"])
      .index("by_user", ["userId"])
      .index("by_idea_and_status", ["ideaId", "status"]),

    // Events
    events: defineTable({
      title: v.string(),
      description: v.string(),
      date: v.string(),
      time: v.string(),
      location: v.string(),
      type: v.string(), // Hackathon, Workshop, Pitch Event
      attendees: v.number(),
      organizerId: v.id("users"),
      
      // AI Generated Content
      aiContent: v.optional(v.object({
        posterText: v.optional(v.string()),
        socialMediaCaptions: v.optional(v.array(v.string())),
        emailCampaign: v.optional(v.string()),
        faq: v.optional(v.array(v.object({
          question: v.string(),
          answer: v.string(),
        }))),
      })),
    })
      .index("by_organizer", ["organizerId"])
      .index("by_type", ["type"]),

    // Investor Profiles
    investors: defineTable({
      name: v.string(),
      firm: v.string(),
      focus: v.array(v.string()),
      stage: v.string(),
      description: v.string(),
      email: v.optional(v.string()),
      preferences: v.optional(v.string()),
      preferencesEmbedding: v.optional(v.array(v.number())),
    }).index("by_stage", ["stage"]),

    // Investor Matches
    investorMatches: defineTable({
      ideaId: v.id("ideas"),
      investorId: v.id("investors"),
      matchScore: v.number(),
      pitchMessage: v.string(),
      status: v.string(), // pending, contacted, interested, rejected
    })
      .index("by_idea", ["ideaId"])
      .index("by_investor", ["investorId"]),

    // AI Chat History
    aiChats: defineTable({
      userId: v.id("users"),
      messages: v.array(v.object({
        role: v.string(),
        content: v.string(),
        timestamp: v.number(),
      })),
      context: v.optional(v.string()), // idea-evaluation, pitch-maker, mentor, etc
    }).index("by_user", ["userId"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;