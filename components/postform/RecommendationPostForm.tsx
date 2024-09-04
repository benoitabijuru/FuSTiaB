"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { recommendationPostDefaultValues } from "@/constants"
import { Textarea } from "../ui/textarea"
import {FileUploader} from "../shared/FileUploader"
import { useState} from "react"
import { useUploadThing } from "@/lib/uploadthing"
import { useRouter } from "next/navigation"
import Tiptap from "../editor/Tiptap"
import {  RecommendationPostFormSchema } from "@/lib/validator"
import Dropdown from "../shared/Dropdown"
import  { IRecommendationPost } from "@/lib/database/model/recomendationPost.model"
import { createRecommendationPost } from "@/lib/actions/recommendation.action"
import KeywordsInput from "../shared/KeywordsInput"
import { Checkbox } from "../ui/checkbox"


type RecommendationPostFormProps = {
    userId: string
    type: "Create" | "Update",
    recommendationPost?: IRecommendationPost,
    recommendationPostId?: string,
  }

const RecommendationPostForm = ({userId, type, recommendationPost, recommendationPostId}:RecommendationPostFormProps) => {
    const [files, setFiles] = useState<File[]>([])
    const [content, setContent] = useState<string>('')

    const initialValues = recommendationPost && type === 'Update'
    ?{
        
    }
    :recommendationPostDefaultValues;

    const router = useRouter();

    const {  startUpload } = useUploadThing('imageUploader')


    const form = useForm<z.infer<typeof RecommendationPostFormSchema>>({
        resolver: zodResolver(RecommendationPostFormSchema),
        defaultValues: initialValues 
      })

      
  
      async function onSubmit(values: z.infer<typeof RecommendationPostFormSchema>) { 

        let uploadedImageUrl = values.imageUrl;

        if(files.length > 0) {
            const uploadedImages = await startUpload(files)
      
            if(!uploadedImages) {
              return
            }
      
            uploadedImageUrl = uploadedImages[0].url
          }
          if(type === 'Create') {
            try {
              const newRecommendationPost = await createRecommendationPost({
                recommendationPost: { ...values, imageUrl: uploadedImageUrl },
                userId,
                path:'/recommendation',
              })
      
              if(newRecommendationPost) {
                form.reset();
                router.push(`/recommendation/${newRecommendationPost.slug}`)
                
              }

            } catch (error) {
              console.log(error);
            }
            
          }
      }


  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 ">
          <div className="flex flex-col gap-5 md:flex-row">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Title of Article" {...field} className="input-field"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Slug of Article" {...field} className="input-field"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Dropdown onChangeHandler={field.onChange} value={field.value}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
          <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="h-72">
                      <Textarea placeholder="Article Description" {...field} className="textarea rounded-2xl"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="h-72">
                     <FileUploader 
                     onFieldChange={field.onChange}
                     imageUrl={field.value}
                     setFiles={setFiles}
                     /> 
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageCaption"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="">
                      <Input placeholder="add image caption and credits" {...field} className="input-field"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
       
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Tiptap
                         content={content}
                         onChange={field.onChange}
                         setContent={setContent}
                        />
                     
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
              />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
         
               <FormField
                        control={form.control}
                        name="isNewsTrending"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex items-center">
                                <label htmlFor="isNewsTrending" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Is News Trending</label>
                                <Checkbox
                                  onCheckedChange={field.onChange}
                                  checked={field.value}
                                id="isNewsTrending" className="mr-2 h-5 w-5 border-2 border-primary-500" />
                              </div>
          
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      /> 
                <FormField
                        control={form.control}
                        name="isFeatured"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex items-center">
                                <label htmlFor="isFeatured" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Is Featured</label>
                                <Checkbox
                                  onCheckedChange={field.onChange}
                                  checked={field.value}
                                id="isFeatured" className="mr-2 h-5 w-5 border-2 border-primary-500" />
                              </div>
          
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />  
                        <FormField
                        control={form.control}
                        name="isRelatedToAfrica"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex items-center">
                                <label htmlFor="isRelatedToAfrica" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Is Related To Africa</label>
                                <Checkbox
                                  onCheckedChange={field.onChange}
                                  checked={field.value}
                                id="isRelatedToAfrica" className="mr-2 h-5 w-5 border-2 border-primary-500" />
                              </div>
          
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />    
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
          <FormField
                control={form.control}
                name="seo.metaTitle"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="metaTitle" {...field} className="input-field"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="seo.metaDescription"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="metaDescription" {...field} className="input-field"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="seo.keywords"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <KeywordsInput value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}

              />
          </div>
          <Button type="submit" size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full">
            {form.formState.isSubmitting ? ('Publishing article ....'):`${type} Article`}
            </Button>
        </form>
    </Form>
  )
}

export default RecommendationPostForm