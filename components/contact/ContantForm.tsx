"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Textarea } from "../ui/textarea"
import { EmailFormSchema } from "@/lib/validator"
import { sendEmail } from "@/lib/actions/email.actions"






const ContactForm = () => {
 
     // 1. Define your form.
  const form = useForm<z.infer<typeof EmailFormSchema>>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      fullname: "",
      email:"",
      subject:"",
      message:"",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof EmailFormSchema>) {
    try {
      await sendEmail(values)
      form.reset({ email: "" });
    } catch (error) {
      console.log(error);
    }
   
  }
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="">
      <FormField
        control={form.control}
        name="fullname"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your FullName:</FormLabel>
            <FormControl>
              <Input 
              placeholder="Enter your Fullname ...."
              {...field} 
              className="input-field"
               />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
     
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Enter Your Email Address:</FormLabel>
            <FormControl>
              <Input 
              placeholder="Enter Your Email...." 
              {...field}
              className="input-field"
               />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="subject"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What is Your enquiry about:</FormLabel>
            <FormControl>
            <Input 
              placeholder="Enter Your Email...." 
              {...field}
              className="input-field"
               />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Enter Your Message:</FormLabel>
            <FormControl> 
              <Textarea
              placeholder="Message here"  
              {...field} 
              className="textarea rounded-2xl h-72"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" className="button col-span-2 w-full font-bold hover:bg-green-700">Submit</Button>
    </form>
  </Form>
  </div>
  )
}

export default ContactForm