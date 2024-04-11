"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { ArticleFormSchema } from "@/lib/validator"
import { articleDefaultValues } from "@/constants"
import Dropdown from "../shared/Dropdown"
import { Textarea } from "../ui/textarea"
import {FileUploader} from "../shared/FileUploader"
import { useState } from "react"


import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { useUploadThing } from "@/lib/uploadthing"
import { createArticle, updateArticle } from "@/lib/actions/articles.actions"
import { useRouter } from "next/navigation"
import { IArticle } from "@/lib/database/model/articles.model"
import QuillEditor from "../shared/ContentEditor"




type ArticleFormProps = {
  userId: string
  type: "Create" | "Update"
  article?: IArticle,
  articleId?: string
}

const ArticleForm = ({ userId, type, article, articleId }: ArticleFormProps) => {
  const [files, setFiles] = useState<File[]>([])
  
  const initialValues = article && type === 'Update' 
  ? { 
    ...article, 
  }
  : articleDefaultValues;
  
  const router = useRouter();

  const { startUpload } = useUploadThing('imageUploader')

  const form = useForm<z.infer<typeof ArticleFormSchema>>({
    resolver: zodResolver(ArticleFormSchema),
    //articleDefaultValues:""
    
    
    
    
  })
 
  async function onSubmit(values: z.infer<typeof ArticleFormSchema>) {
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
        const newArticle = await createArticle({
          article: { ...values, imageUrl: uploadedImageUrl },
          userId,
          path: '/technology'
        })

        if(newArticle) {
          form.reset();
          router.push(`/technology/${newArticle._id}`)
          
        }
      } catch (error) {
        console.log(error);
      }
      
    }

    // if(type === 'Update') {
    //   if(!articleId) {
    //     router.back()
    //     return;
    //   }

    //   try {
    //     const updatedEvent = await updateArticle({
    //       adminId,
    //       article: { ...values, image: uploadedImageUrl, _id: articleId },
    //       path: `/events/${articleId}`
    //     })

    //     if(updatedEvent) {
    //       form.reset();
    //       router.push(`/events/${updatedEvent._id}`)
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
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
          <div className="flex flex-col gap-5 md:flex-row">
               <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="">
                      <Input placeholder="created by" {...field} className="input-field"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                 {/* <FormField
                control={form.control}
                name="socialMedia"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="h-72">
                      <Textarea placeholder="social links" {...field} className="textarea rounded-2xl"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
          </div>
          <div className="">
       
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <QuillEditor
        
                        /> 
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
              />
          </div>
          <Button type="submit">Publish This Article</Button>
        </form>
    </Form>
  )
}

export default ArticleForm