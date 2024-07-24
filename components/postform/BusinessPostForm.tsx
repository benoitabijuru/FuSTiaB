"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { businessPostDefaultValues } from "@/constants"
import { Textarea } from "../ui/textarea"
import {FileUploader} from "../shared/FileUploader"
import { useState, useRef, useEffect } from "react"
import { useUploadThing } from "@/lib/uploadthing"
import { useRouter } from "next/navigation"
import Tiptap from "../editor/Tiptap"
import { IBusinessPost } from "@/lib/database/model/businessPost.model"
import { BusinessPostFormSchema } from "@/lib/validator"
import { createBusinessPost } from "@/lib/actions/businessPost.action"
import Dropdown from "../shared/Dropdown"


type BusinessPostFormProps = {
    userId: string
    type: "Create" | "Update",
    businessPost?: IBusinessPost,
    businessPostId?: string,
  }

const BusinessPostForm = ({userId, type, businessPost, businessPostId}:BusinessPostFormProps) => {
    const [files, setFiles] = useState<File[]>([])
    const [content, setContent] = useState<string>('')

    const initialValues = businessPost && type === 'Update'
    ?{
        
    }
    :businessPostDefaultValues;

    const router = useRouter();

    const {  startUpload } = useUploadThing('imageUploader')


    const form = useForm<z.infer<typeof BusinessPostFormSchema>>({
        resolver: zodResolver(BusinessPostFormSchema),
        defaultValues: initialValues 
      })

      
  
      async function onSubmit(values: z.infer<typeof BusinessPostFormSchema>) { 

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
              const newBusinessPost = await createBusinessPost({
                businessPost: { ...values, imageUrl: uploadedImageUrl },
                userId,
                path:'/business',
              })
      
              if(newBusinessPost) {
                form.reset();
                router.push(`/business/${newBusinessPost.slug}`)
                
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
                  <Input placeholder="Title of Article" {...field} className="input-field"/>
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
      </div>
      <div className="">
   
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
            name="author"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="">
                  <Input placeholder="author" {...field} className="input-field"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
      </div>
      <Button type="submit" size="lg"
      disabled={form.formState.isSubmitting}
      className="button col-span-2 w-full">
        {form.formState.isSubmitting ? ('Publishing article ....'):`${type} Technology Article`}
        </Button>
    </form>
</Form>
  )
}

export default BusinessPostForm