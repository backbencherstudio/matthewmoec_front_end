/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";

import { RegisterOptions } from "react-hook-form";

type Field = {
  name: string;
  label: string;
  type: "text" | "url" | "textarea" | "select";
  placeholder?: string;
  options?: { label: string; value: string }[];
  validation?: RegisterOptions;
};

interface EditModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  fields: Field[];
  defaultValues?: Record<string, any>;
  onSubmit: (data: any) => void;
}

export default function EditModal({
  open,
  onOpenChange,
  title,
  fields,
  defaultValues,
  onSubmit,
}: EditModalProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
  });

  const handleFormSubmit = async (data: any) => {
    onSubmit(data);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white rounded-[24px] p-8 w-full md:min-w-xl border border-[#ECEFF3] shadow-lg">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-[#1A2A56] text-xl lg:text-[28px] leading-[132%] tracking-[0.14px] font-semibold">
            {title}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <div className="flex flex-col gap-4">
            {fields.map((field) => (
              <div key={field.name}>
                <label className="label-edit">{field.label}</label>

                {/* TEXT / URL */}
                {field.type === "text" || field.type === "url" ? (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className={`w-full p-4 rounded-[12px] border bg-[#F6F8FA] text-base placeholder:text-base ${
                      errors[field.name] ? "border-red-400" : "border-[#ECEFF3]"
                    }`}
                    {...register(
                      field.name,
                      field.validation as RegisterOptions,
                    )}
                  />
                ) : null}

                {/* TEXTAREA */}
                {field.type === "textarea" ? (
                  <textarea
                    rows={3}
                    placeholder={field.placeholder}
                    className="w-full p-4 rounded-[12px] border bg-[#F8F9FC] text-base placeholder:text-base border-[#ECEFF3]"
                    {...register(field.name)}
                  />
                ) : null}

                {/* SELECT — shadcn */}
                {field.type === "select" && field.options ? (
                  <Controller
                    name={field.name}
                    control={control}
                    render={({ field: ctrl }) => (
                      <Select value={ctrl.value} onValueChange={ctrl.onChange}>
                        <SelectTrigger
                          className={`w-full cursor-pointer p-6! rounded-[12px] border bg-[#F8F9FC] ${
                            errors[field.name]
                              ? "border-red-400"
                              : "border-[#ECEFF3]"
                          }`}
                        >
                          <SelectValue
                            placeholder={
                              field.placeholder ?? "Select an option"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options!.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                ) : null}

                {/* Error */}
                {errors[field.name] && (
                  <p className="text-xs text-red-500 mt-1">
                    {(errors as any)[field.name]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-full bg-linear-to-b from-[#3658B3] to-[#1F3265] text-white cursor-pointer"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>

            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="px-6 py-2.5 rounded-full border cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
