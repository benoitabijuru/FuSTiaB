'use client'

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { Input } from "../ui/input"

export default function Newsletter(){
  const form = useForm()
  
  return (

<Form {...form}>
      <form>
        <FormField
                  control={form.control}
                  name="newsletter"
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
  )
}
 


