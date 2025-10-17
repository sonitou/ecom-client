// // src/components/forms/RegisterForm.tsx
// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/hooks/useAuth";
// import { RegisterFormData, SendOTPFormData } from "@/types";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Eye, EyeOff } from "lucide-react";
// import { z } from "zod";

// const registerSchema = z
//     .object({
//         name: z
//             .string()
//             .min(1, "Tên không được để trống")
//             .max(100, "Tên quá dài"),
//         email: z.string().email("Email không hợp lệ"),
//         phoneNumber: z
//             .string()
//             .min(9, "Số điện thoại phải có ít nhất 9 số")
//             .max(15, "Số điện thoại quá dài"),
//         password: z
//             .string()
//             .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
//             .max(100, "Mật khẩu quá dài"),
//         confirmPassword: z.string(),
//         code: z.string().length(6, "Mã OTP phải có 6 ký tự"),
//     })
//     .refine((data) => data.password === data.confirmPassword, {
//         message: "Mật khẩu không khớp",
//         path: ["confirmPassword"],
//     });

// export default function RegisterForm() {
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [error, setError] = useState<string | null>(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [otpSent, setOtpSent] = useState(false);
//     const [otpLoading, setIsOtpLoading] = useState(false);
//     const [acceptTerms, setAcceptTerms] = useState(false);

//     const { register: registerUser, sendOTP } = useAuth();
//     const router = useRouter();

//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm<RegisterFormData>({
//         resolver: zodResolver(registerSchema),
//         defaultValues: {
//             name: "",
//             email: "",
//             phoneNumber: "",
//             password: "",
//             confirmPassword: "",
//             code: "",
//         },
//     });

//     const watchedEmail = watch("email");

//     const handleSendOTP = async () => {
//         if (!watchedEmail) {
//             setError("Vui lòng nhập email trước");
//             return;
//         }

//         try {
//             setIsOtpLoading(true);
//             setError("");

//             await sendOTP({
//                 email: watchedEmail,
//                 type: "REGISTER",
//             });

//             setOtpSent(true);
//         } catch (err) {
//             const errorMessage =
//                 err instanceof Error ? err.message : "Gửi mã OTP thất bại";
//             setError(errorMessage);
//         } finally {
//             setIsOtpLoading(false);
//         }
//     };

//     const onSubmit = async (data: RegisterFormData) => {
//         if (!acceptTerms) {
//             setError("Vui lòng đồng ý với điều khoản sử dụng");
//             return;
//         }

//         try {
//             setIsLoading(true);
//             setError("");

//             await registerUser(data);

//             router.push("/login?registered=true");
//         } catch (err) {
//             const errorMessage =
//                 err instanceof Error ? err.message : "Đăng ký thất bại";
//             setError(errorMessage);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <div>
//                 <Label htmlFor="name">Họ và tên</Label>
//                 <Input
//                     id="name"
//                     type="text"
//                     {...register("name")}
//                     className="mt-1"
//                     placeholder="Nhập họ và tên của bạn"
//                 />
//                 {errors.name && (
//                     <p className="text-sm text-red-600 mt-1">
//                         {errors.name.message}
//                     </p>
//                 )}
//             </div>

//             <div>
//                 <Label htmlFor="email">Email</Label>
//                 <div className="flex gap-2 mt-1">
//                     <Input
//                         id="email"
//                         type="email"
//                         {...register("email")}
//                         placeholder="Nhập email của bạn"
//                         className="flex-1"
//                     />
//                     <Button
//                         type="button"
//                         onClick={handleSendOTP}
//                         disabled={otpLoading || !watchedEmail}
//                         variant="outline"
//                     >
//                         {otpLoading ? "Đang gửi..." : "Gửi OTP"}
//                     </Button>
//                 </div>
//                 {errors.email && (
//                     <p className="text-sm text-red-600 mt-1">
//                         {errors.email.message}
//                     </p>
//                 )}
//             </div>

//             <div>
//                 <Label htmlFor="phoneNumber">Số điện thoại</Label>
//                 <Input
//                     id="phoneNumber"
//                     type="tel"
//                     {...register("phoneNumber")}
//                     className="mt-1"
//                     placeholder="Nhập số điện thoại của bạn"
//                 />
//                 {errors.phoneNumber && (
//                     <p className="text-sm text-red-600 mt-1">
//                         {errors.phoneNumber.message}
//                     </p>
//                 )}
//             </div>

//             <div>
//                 <Label htmlFor="password">Mật khẩu</Label>
//                 <div className="relative mt-1">
//                     <Input
//                         id="password"
//                         type={showPassword ? "text" : "password"}
//                         {...register("password")}
//                         placeholder="Nhập mật khẩu của bạn"
//                         className="pr-10"
//                     />
//                     <button
//                         type="button"
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                     >
//                         {showPassword ? (
//                             <EyeOff className="w-5 h-5" />
//                         ) : (
//                             <Eye className="w-5 h-5" />
//                         )}
//                     </button>
//                 </div>
//                 {errors.password && (
//                     <p className="text-sm text-red-600 mt-1">
//                         {errors.password.message}
//                     </p>
//                 )}
//             </div>

//             <div>
//                 <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
//                 <div className="relative mt-1">
//                     <Input
//                         id="confirmPassword"
//                         type={showConfirmPassword ? "text" : "password"}
//                         {...register("confirmPassword")}
//                         placeholder="Nhập lại mật khẩu của bạn"
//                         className="pr-10"
//                     />
//                     <button
//                         type="button"
//                         onClick={() =>
//                             setShowConfirmPassword(!showConfirmPassword)
//                         }
//                         className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                     >
//                         {showConfirmPassword ? (
//                             <EyeOff className="w-5 h-5" />
//                         ) : (
//                             <Eye className="w-5 h-5" />
//                         )}
//                     </button>
//                 </div>
//                 {errors.confirmPassword && (
//                     <p className="text-sm text-red-600 mt-1">
//                         {errors.confirmPassword.message}
//                     </p>
//                 )}
//             </div>

//             <div>
//                 <Label htmlFor="code">Mã OTP</Label>
//                 <Input
//                     id="code"
//                     type="text"
//                     {...register("code")}
//                     className="mt-1"
//                     placeholder="Nhập mã OTP 6 chữ số"
//                     maxLength={6}
//                     disabled={!otpSent}
//                 />
//                 {errors.code && (
//                     <p className="text-sm text-red-600 mt-1">
//                         {errors.code.message}
//                     </p>
//                 )}
//                 {!otpSent && (
//                     <p className="text-sm text-gray-500 mt-1">
//                         Vui lòng nhấn "Gửi OTP" để nhận mã xác thực
//                     </p>
//                 )}
//             </div>

//             <div className="flex items-center space-x-2">
//                 <Checkbox
//                     id="terms"
//                     checked={acceptTerms}
//                     onCheckedChange={(checked) =>
//                         setAcceptTerms(checked as boolean)
//                     }
//                 />
//                 <Label htmlFor="terms" className="text-sm">
//                     Tôi đồng ý với{" "}
//                     <a
//                         href="/terms"
//                         className="text-blue-600 hover:text-blue-800"
//                     >
//                         Điều khoản sử dụng
//                     </a>{" "}
//                     và{" "}
//                     <a
//                         href="/privacy"
//                         className="text-blue-600 hover:text-blue-800"
//                     >
//                         Chính sách bảo mật
//                     </a>
//                 </Label>
//             </div>

//             {error && (
//                 <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
//                     {error}
//                 </div>
//             )}

//             <Button
//                 type="submit"
//                 className="w-full"
//                 disabled={isLoading || !otpSent}
//             >
//                 {isLoading ? "Đang đăng ký..." : "Đăng ký"}
//             </Button>

//             <div className="text-center">
//                 <span className="text-sm text-gray-600">
//                     Đã có tài khoản?{" "}
//                     <a
//                         href="/login"
//                         className="text-blue-600 hover:text-blue-800"
//                     >
//                         Đăng nhập ngay
//                     </a>
//                 </span>
//             </div>
//         </form>
//     );
// }
