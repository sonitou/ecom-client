// src/app/page.tsx
"use client";

// import CategoryCard from "@/components/category/CategoryCard";
import { Button } from "@/components/ui/button";
import { Search, Star, Truck, Shield, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Khám phá thế giới mua sắm
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        Hàng triệu sản phẩm chất lượng với giá tốt nhất
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <div className="relative max-w-md mx-auto sm:mx-0">
                            <input
                                type="text"
                                placeholder="Tìm kiếm sản phẩm..."
                                className="w-full px-4 py-3 pr-12 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                        <Button
                            size="lg"
                            className="bg-white text-blue-600 hover:bg-gray-100"
                        >
                            Tìm kiếm
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                Giao hàng nhanh
                            </h3>
                            <p className="text-gray-600">
                                Giao hàng trong 24h tại TP.HCM
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                Bảo hành chính hãng
                            </h3>
                            <p className="text-gray-600">
                                Bảo hành 12 tháng cho tất cả sản phẩm
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <RotateCcw className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                Đổi trả dễ dàng
                            </h3>
                            <p className="text-gray-600">
                                Đổi trả trong 30 ngày
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Star className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                Chất lượng cao
                            </h3>
                            <p className="text-gray-600">
                                Sản phẩm được kiểm định kỹ lưỡng
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Danh mục sản phẩm
                        </h2>
                        <p className="text-gray-600">
                            Khám phá các danh mục sản phẩm đa dạng
                        </p>
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/categories">
                            <Button variant="outline" size="lg">
                                Xem tất cả danh mục
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Sản phẩm nổi bật
                        </h2>
                        <p className="text-gray-600">
                            Những sản phẩm được yêu thích nhất
                        </p>
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/products">
                            <Button variant="outline" size="lg">
                                Xem tất cả sản phẩm
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Đăng ký nhận tin tức
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Nhập email của bạn"
                            className="flex-1 px-4 py-3 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <Button className="bg-white text-blue-600 hover:bg-gray-100">
                            Đăng ký
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
