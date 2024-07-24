"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { QuotesDefaultValues } from "@/constants"
import { Checkbox } from "../ui/checkbox"
import { QuoteSchema } from "@/lib/validator"
import { CreateQuote } from "@/lib/actions/quote.actions"

const DailyQuoteForm = () => {

  const form = useForm<z.infer<typeof QuoteSchema>>({
    resolver: zodResolver(QuoteSchema),
    defaultValues: {
      quote:"",
      author:"",
      title:"",
      viewed:false,
    }
  });
  
  async function onSubmit(values: z.infer<typeof QuoteSchema>) {
   
    try {
      const newQuote = await CreateQuote(values)
      if(newQuote){
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-row gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="quote"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea placeholder="Enter Inspiring Quote here..." {...field} className="textarea rounded-2xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Author ..." {...field} className="input-field" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Author title..." {...field} className="input-field" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="viewed"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center">
                    <label htmlFor="isViewed" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Free Ticket
                    </label>
                    <Checkbox
                      onCheckedChange={field.onChange}
                      checked={field.value}
                      id="isFree"
                      className="mr-2 h-5 w-5 border-2 border-primary-500"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" size="lg"  disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Quote is adding...' : 'Add new Quote'}
        </Button>
      </form>
    </Form>
  );
}

export default DailyQuoteForm;
