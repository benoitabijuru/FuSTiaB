import { z } from "zod"

export const ArticleFormSchema = z.object({
   title:z.string().min(3,'Title must be at least 3 characters'),
   description:z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
   content:z.string().min(500, 'Content must be at least 500 characters'),
   imageUrl:z.string(),
   categoryId:z.string(),
   author:z.string(),
   comment:z.string(),
   slug:z.string().url(),
   locatepost:z.string()

  })
  