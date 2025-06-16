"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name is required",
    })
    .max(50),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});
const GetInTouchForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(value: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      if (res.status === 200) {
        toast({
          title: "Message sent successfully",
        });
        form.reset();
      }
    } catch (error) {
    
      toast({
        title: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Full name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
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
                <FormControl>
                  <Textarea placeholder="Your Message" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="text-sm font-medium bg-gradient-to-r from-[#9c40ff]/20 to-[#ffaa40]/10 px-3 py-1 rounded-full border border-[#ffaa40]/30" type="submit" variant='ghost'>
            {loading ? (
              <>
                Sending
                <svg
                  className="animate-spin h-5 w-5 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V2.83a1 1 0 00-1.7-.7l-4.5 4.5a1 1 0 000 1.41l4.5 4.5a1 1 0 001.7-.7V8a6 6 0 106 10 1 1 0 00-2 0 8 8 0 01-8-8z"
                  ></path>
                </svg>
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default GetInTouchForm;
