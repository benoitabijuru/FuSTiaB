'use client'

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { Input } from "../ui/input"
import { EmailSubscribeSchema } from "@/lib/validator"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubscribeEmail } from "@/lib/actions/email.actions"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from "react"

const EmailSubscribe = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const form = useForm<z.infer<typeof EmailSubscribeSchema>>({
    resolver: zodResolver(EmailSubscribeSchema),
    defaultValues:{
      email:"",
    },
    
  });

  async function onSubmit(values:z.infer<typeof EmailSubscribeSchema>){
    try {
       await SubscribeEmail(values)
       form.reset({ email: "" });  

       toast.success("Email submitted successfully!", {
        onClose: () => setIsToastVisible(false)
      });
      setIsToastVisible(true);

    } catch (error) {
      console.log(error);
       toast.error("Failed to submit email.", {
        onClose: () => setIsToastVisible(false)
      });
      setIsToastVisible(true);
    }

  }
  
  return (
<>
<Form {...form}>
      <form
      onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input {...field} className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type="email" name="email" placeholder="Enter your email for Newsletter"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
         
          <Button type="submit" className="bg-blue-700 text-white py-3 my-3 w-full rounded-lg hover:bg-green-700">Subscribe To Newsletter</Button>
      </form>

    </Form>
    <ToastContainer />
    </>
  )
}

export default EmailSubscribe