"use client";

import { signupSchema } from "@/app/components/module/auth/schema";
import { signupUser } from '@/app/services/auth/signup';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type SignupFormData = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } =
    useForm<z.infer<typeof signupSchema>>({
      resolver: zodResolver(signupSchema),
    });


  const onSubmit = async (data: SignupFormData) => {
    const formData = new FormData();

    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("class", data.class);
    formData.append("roll", data.roll);
    formData.append("gender", data.gender);


    if (data.photo?.[0]) {
      formData.append("photo", data.photo[0]);
    }

    try {
      setLoading(true);
      const result = await signupUser(formData);

      if (result.success) {
        toast.success("Account created & logged in ✅");
        router.push("/");
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Signup failed");
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }

  };


  return (
    <Card className="w-full max-w-md shadow-md mt-12">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>Enter your details to sign up</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          {/* First Name */}
          <div>
            <Label>First Name</Label>
            <Input {...register("firstName")} />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <Label>Last Name</Label>
            <Input {...register("lastName")} />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label>Email</Label>
            <Input type="email" {...register("email")} />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <Label>Password</Label>
            <Input type="password" {...register("password")} />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Class */}
          <div>
            <Label>Class</Label>
            <Input {...register("class")} />
            {errors.class && (
              <p className="text-red-500 text-sm">{errors.class.message}</p>
            )}
          </div>

          {/* Roll */}
          <div>
            <Label>Roll</Label>
            <Input {...register("roll")} />
            {errors.roll && (
              <p className="text-red-500 text-sm">{errors.roll.message}</p>
            )}
          </div>



          {/* Gender */}
          <div>
            <Label>Gender</Label>
            <select
              {...register("gender")}
              className="w-full border rounded-md h-10 px-2"
            >
              <option value="">Select</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label>Photo</Label>
            <Input
              type="file"
              accept="image/*"
              {...register("photo")}
            />
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="text-sm justify-center">
        Already have an account?
        <Link href="/login" className="ml-1 underline">
          Login
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SignupForm;
