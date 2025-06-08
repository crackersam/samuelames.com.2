"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { contactAction } from "./contact-action";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(1, "Name is required"),
  body: z.string().min(1, "Email content is required"),
  hcaptchaToken: z.string().min(1, "Please complete the captcha"),
});

type FormValues = z.infer<typeof formSchema>;

const Page = () => {
  const hcaptchaRef = useRef<HCaptcha>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      body: "",
      hcaptchaToken: "",
    },
  });

  async function onSubmit(values: FormValues) {
    // Do something with the form values and hCaptcha token
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("name", values.name);
    formData.append("body", values.body);
    formData.append("hcaptchaToken", values.hcaptchaToken);
    const res = await contactAction(formData);
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("Thank you for your message!");
      form.reset();
      hcaptchaRef.current?.resetCaptcha();
    }
  }

  return (
    <div className="max-w-6xl mx-auto flex gap-4 flex-wrap sm:flex-nowrap justify-center items-center py-24 px-6 bg-softwhite">
      <div className="max-w-6xl flex-1">
        <h2 className="font-serif font-bold text-3xl mb-8 inline-block border-primary pb-2">
          <span className="underline decoration-primary underline-offset-4 decoration-3 text-black">
            Lec
          </span>
          ture the Planet
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-lg">
          Contact me to discuss your project. I am always open to new
          opportunities and collaborations. Whether you have a question, want to
          work together, or just want to say hello, feel free to reach out. I
          will get back to you as soon as possible.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-xl w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tim Berners-Lee"
                    {...field}
                    className="border border-gray-400 bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="tim@berners-lee.com"
                    {...field}
                    className="border border-gray-400 bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Content</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="border border-gray-400 bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* hCaptcha Field */}
          <FormField
            control={form.control}
            name="hcaptchaToken"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Security Check</FormLabel>
                <FormControl>
                  <div className="border border-gray-400 w-fit bg-white rounded-sm mb-2">
                    <HCaptcha
                      sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                      ref={hcaptchaRef}
                      onVerify={(token) => field.onChange(token)}
                      onError={(err) => console.error("hCaptcha error:", err)}
                      onExpire={() => field.onChange("")}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="text-[var(--color-soft)] hover:bg-accent hover:cursor-pointer"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
