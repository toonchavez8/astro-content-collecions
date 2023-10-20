import { z, defineCollection, reference } from "astro:content";

export const collections = {
	posts: defineCollection({
		type: "content", // v2.5.0 and later
		schema: z.object({
			title: z.string().max(60, {
				message: "Title must be less than 60 characters",
			}),
			description: z.string().max(255, {
				message: "Description must be less than 255 characters",
			}),
			date: z.date(),
			tags: z.array(z.string()),
			image: z.string().optional(),
			author: reference("team").optional(),
			relatedPosts: z.array(reference("posts")).optional(),
		}),
	}),
	team: defineCollection({
		type: "content", // v2.5.0 and later
		schema: ({ image }) =>
			z.object({
				name: z.string(),
				avatar: image(),
				bio: z.string().optional(),
				email: z.string().optional(),
				social: z
					.object({
						twitter: z.string().optional(),
						github: z.string().optional(),
						linkedin: z.string().optional(),
						website: z.string().optional(),
						theads: z.string().optional(),
					})
					.optional(),
				role: z.enum(["Software", "Design", "admin", "Marketing"]),
			}),
	}),
};
