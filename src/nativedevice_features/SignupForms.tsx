import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const signupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignupFormValues = z.infer<typeof signupSchema>;

const SignupForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    try {
      const res = await axios.post("http://localhost:5000/register", data);
      alert(res.data.message); // Show success message
    } catch (error: any) { // Explicitly typing error as 'any'
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data?.error || "Signup failed"); // Handle API error
      } else {
        alert("An unexpected error occurred"); // Handle unexpected errors
      }
    }
  };
  
  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", background: "#222", color: "#fff", borderRadius: "10px" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
