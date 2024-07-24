import { z } from "zod";
// Post schema 

// Technology form schema 
export const ArticleFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  content: z.string().min(50, "Content must be at least 50 character"),
  imageUrl: z.string(),
  categoryId: z.string(),
  author: z.string(),
  comment: z.string(),
  path: z.string(),
  slug:z.string().min(1, { message: "Slug cannot be empty" }).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: "Slug must contain only lowercase letters, numbers, and hyphens. It should not start or end with a hyphen or contain consecutive hyphens.",
  }),
});

// Business form schema
export const BusinessPostFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  content: z.string().min(50, "Content must be at least 50 character"),
  imageUrl: z.string(),
  categoryId: z.string(),
  author: z.string(),
  comment: z.string(),
  path: z.string(),
  slug:z.string().min(1, { message: "Slug cannot be empty" }).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: "Slug must contain only lowercase letters, numbers, and hyphens. It should not start or end with a hyphen or contain consecutive hyphens.",
  }),
});
// Business form schema
export const RecommendationPostFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  content: z.string().min(50, "Content must be at least 50 character"),
  imageUrl: z.string(),
  categoryId: z.string(),
  author: z.string(),
  comment: z.string(),
  path: z.string(),
  slug:z.string().min(1, { message: "Slug cannot be empty" }).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: "Slug must contain only lowercase letters, numbers, and hyphens. It should not start or end with a hyphen or contain consecutive hyphens.",
  }),
});
// gameChangers form schema
export const GameChangersPostFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  content: z.string().min(50, "Content must be at least 50 character"),
  imageUrl: z.string(),
  categoryId: z.string(),
  author: z.string(),
  comment: z.string(),
  path: z.string(),
  slug:z.string().min(1, { message: "Slug cannot be empty" }).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: "Slug must contain only lowercase letters, numbers, and hyphens. It should not start or end with a hyphen or contain consecutive hyphens.",
  }),
});


export const QuoteSchema = z.object({
  quote: z.string().min(3,"Daily quote must be at least 3 character and required"),
  author: z.string().min(1, "Quote Author is important" ),
  title: z.string(),
  viewed: z.boolean(),
  
});

export const validateString = (value:unknown, maxLength: number) =>{
  if(!value || typeof value !== "string" || value.length > maxLength){
    return false;
  } 
  return true;
}

export const EmailSubscribeSchema = z.object({
  email:z.string().email(),
});

export const EmailFormSchema = z.object({
  fullname: z.string().min(2).max(50),
  email:z.string().email(),
  subject:z.string(),
  message:z.string().min(10).max(5000),
})