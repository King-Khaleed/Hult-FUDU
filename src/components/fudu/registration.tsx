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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "@/components/animations/reveal";

const formSchema = z.object({
  teamName: z.string().min(2, { message: "Team name must be at least 2 characters." }),
  leaderName: z.string().min(2, { message: "Leader's name is required." }),
  leaderEmail: z.string().email({ message: "Please enter a valid email." }),
  teamMembers: z.string().min(1, { message: "Please list your team members." }),
});

export function Registration() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      leaderName: "",
      leaderEmail: "",
      teamMembers: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Registration Successful!",
      description: `Thank you, ${values.leaderName}. Your team '${values.teamName}' has been registered.`,
    });
    form.reset();
  }

  return (
    <section id="register" className="w-full py-12 md:py-24 lg:py-32 bg-accent/50">
      <div className="container px-4 md:px-6">
        <Reveal>
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold font-headline">Register for Hult Prize FUDU 2026</CardTitle>
              <CardDescription>Fill out the form below to begin your journey. One registration per team.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="teamName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Team Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., The World Changers" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="leaderName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Team Leader's Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="leaderEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Team Leader's Email</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., jane.doe@university.edu" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="teamMembers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Other Team Members (Full Names)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., John Smith, Alex Ray" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" size="lg">Submit Registration</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
