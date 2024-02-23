"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { ReloadIcon } from "@radix-ui/react-icons";
import { SuccessIcon } from "./ui/success-icon";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { usePlaygroundForm } from "@/hooks/use-form";
import { FormValues, cn, formSchema } from "@/lib/utils";
import { toast } from "sonner";
import { generate } from "@/lib/actions";
import Dropzone from "./dropzone";

export default function Playground() {
  const router = useRouter();
  const form = usePlaygroundForm();

  const [imageUrl, setImageUrl] = useState("");
  // Form states
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  async function onSubmit(values: FormValues) {
    setSubmitting(true);
    try {
      generate(values).then((id) => {
        router.push(`/t/${id}`);
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to generate image: " + error);
      setSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col gap-8 mx-auto px-8 md:px-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
              <Dropzone />

              <div className="flex justify-end space-x-2">
                <Button
                  disabled={isSubmitting}
                  className={cn(
                    "w-full md:w-[140px] h-10",
                    isSuccess &&
                      "text-white duration-150 bg-green-500 hover:bg-green-600 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:scale-100 active:bg-green-800 active:text-green-100"
                  )}
                  type="submit"
                >
                  {isSubmitting ? (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  ) : isSuccess ? (
                    <SuccessIcon />
                  ) : (
                    <div className="flex items-center justify-center gap-x-2">
                      <Image
                        className="filter invert dark:filter-none lg:-ml-1"
                        width={15}
                        height={15}
                        src={"/sparkling-icon.png"}
                        alt={"Generate"}
                      />

                      <span>Generate</span>
                    </div>
                  )}
                </Button>
              </div>
            </div>
            <div className="relative h-[320px] w-[320px] md:h-[500px] md:w-[500px] rounded-md border bg-muted">
              {isSubmitting ? (
                <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full gap-3">
                  <div className="absolute bottom-4 w-full text-center text-slate-500 text-xs">
                    Takes 30 seconds to generate.
                  </div>
                </div>
              ) : (
                imageUrl && (
                  <Link
                    className="relative h-[320px] w-[320px] md:h-[500px] md:w-[500px] flex bg-muted rounded-md overflow-hidden group"
                    href={imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      alt="Glyph image output"
                      src={imageUrl}
                      width={512}
                      height={512}
                      className="object-cover transition-all md:hover:scale-105"
                    />
                  </Link>
                )
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
