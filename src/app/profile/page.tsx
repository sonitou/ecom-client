// // src/app/profile/page.tsx
// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { User, Mail, Phone, Calendar, LogOut } from "lucide-react";
// import { useState } from "react";

// export default function ProfilePage() {
//     const { user, logout, isLoading } = useAuth();
//     const [isEditing, setIsEditing] = useState(false);
//     const [formData, setFormData] = useState({
//         name: user?.name || "",
//         email: user?.email || "",
//         phoneNumber: user?.phoneNumber || "",
//     });

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSave = () => {
//         // TODO: Implement profile update
//         console.log("Save profile:", formData);
//         setIsEditing(false);
//     };

//     const handleCancel = () => {
//         setFormData({
//             name: user?.name || "",
//             email: user?.email || "",
//             phoneNumber: user?.phoneNumber || "",
//         });
//         setIsEditing(false);
//     };

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//             </div>
//         );
//     }

//     if (!user) {
//         return (
//             <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//                 <div className="text-center">
//                     <h1 className="text-2xl font-bold text-gray-900 mb-4">
//                         Không tìm thấy thông tin người dùng
//                     </h1>
//                     <Button onClick={() => logout()}>Đăng nhập lại</Button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="container mx-auto px-4 py-8">
//                 <div className="max-w-4xl mx-auto">
//                     {/* Header */}
//                     <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-4">
//                                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
//                                     <User className="w-8 h-8 text-blue-600" />
//                                 </div>
//                                 <div>
//                                     <h1 className="text-2xl font-bold text-gray-900">
//                                         {user.name}
//                                     </h1>
//                                     <p className="text-gray-600">
//                                         {user.email}
//                                     </p>
//                                 </div>
//                             </div>
//                             <Button
//                                 variant="outline"
//                                 onClick={() => logout()}
//                                 className="flex items-center gap-2"
//                             >
//                                 <LogOut className="w-4 h-4" />
//                                 Đăng xuất
//                             </Button>
//                         </div>
//                     </div>

//                     {/* Profile Information */}
//                     <div className="bg-white rounded-lg shadow-sm border p-6">
//                         <div className="flex items-center justify-between mb-6">
//                             <h2 className="text-xl font-semibold text-gray-900">
//                                 Thông tin cá nhân
//                             </h2>
//                             {!isEditing && (
//                                 <Button onClick={() => setIsEditing(true)}>
//                                     Chỉnh sửa
//                                 </Button>
//                             )}
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <Label htmlFor="name">Họ và tên</Label>
//                                 <div className="relative mt-1">
//                                     <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                                     <Input
//                                         id="name"
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleInputChange}
//                                         disabled={!isEditing}
//                                         className="pl-10"
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <Label htmlFor="email">Email</Label>
//                                 <div className="relative mt-1">
//                                     <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                                     <Input
//                                         id="email"
//                                         name="email"
//                                         type="email"
//                                         value={formData.email}
//                                         onChange={handleInputChange}
//                                         disabled={true} // Email cannot be changed
//                                         className="pl-10 bg-gray-50"
//                                     />
//                                 </div>
//                                 <p className="text-sm text-gray-500 mt-1">
//                                     Email không thể thay đổi
//                                 </p>
//                             </div>

//                             <div>
//                                 <Label htmlFor="phoneNumber">
//                                     Số điện thoại
//                                 </Label>
//                                 <div className="relative mt-1">
//                                     <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                                     <Input
//                                         id="phoneNumber"
//                                         name="phoneNumber"
//                                         type="tel"
//                                         value={formData.phoneNumber}
//                                         onChange={handleInputChange}
//                                         disabled={!isEditing}
//                                         className="pl-10"
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <Label>Ngày tham gia</Label>
//                                 <div className="relative mt-1">
//                                     <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                                     <Input
//                                         value={new Date(
//                                             user.createdAt
//                                         ).toLocaleDateString("vi-VN")}
//                                         disabled
//                                         className="pl-10 bg-gray-50"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {isEditing && (
//                             <div className="flex gap-4 mt-6">
//                                 <Button onClick={handleSave}>
//                                     Lưu thay đổi
//                                 </Button>
//                                 <Button
//                                     variant="outline"
//                                     onClick={handleCancel}
//                                 >
//                                     Hủy
//                                 </Button>
//                             </div>
//                         )}
//                     </div>

//                     {/* Account Status */}
//                     <div className="bg-white rounded-lg shadow-sm border p-6 mt-8">
//                         <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                             Trạng thái tài khoản
//                         </h2>
//                         <div className="flex items-center gap-4">
//                             <div
//                                 className={`px-3 py-1 rounded-full text-sm font-medium ${
//                                     user.status === "ACTIVE"
//                                         ? "bg-green-100 text-green-800"
//                                         : "bg-red-100 text-red-800"
//                                 }`}
//                             >
//                                 {user.status === "ACTIVE"
//                                     ? "Hoạt động"
//                                     : "Không hoạt động"}
//                             </div>
//                             <span className="text-gray-600">
//                                 Tài khoản của bạn đang{" "}
//                                 {user.status === "ACTIVE"
//                                     ? "hoạt động bình thường"
//                                     : "bị tạm khóa"}
//                             </span>
//                         </div>
//                     </div>

//                     {/* Quick Actions */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//                         <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
//                             <h3 className="font-semibold text-gray-900 mb-2">
//                                 Đơn hàng
//                             </h3>
//                             <p className="text-gray-600 mb-4">
//                                 Xem lịch sử đơn hàng
//                             </p>
//                             <Button variant="outline" className="w-full">
//                                 Xem đơn hàng
//                             </Button>
//                         </div>

//                         <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
//                             <h3 className="font-semibold text-gray-900 mb-2">
//                                 Yêu thích
//                             </h3>
//                             <p className="text-gray-600 mb-4">
//                                 Sản phẩm đã lưu
//                             </p>
//                             <Button variant="outline" className="w-full">
//                                 Xem yêu thích
//                             </Button>
//                         </div>

//                         <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
//                             <h3 className="font-semibold text-gray-900 mb-2">
//                                 Địa chỉ
//                             </h3>
//                             <p className="text-gray-600 mb-4">
//                                 Quản lý địa chỉ giao hàng
//                             </p>
//                             <Button variant="outline" className="w-full">
//                                 Quản lý địa chỉ
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
