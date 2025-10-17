// src/components/layout/Footer.tsx
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-4">
                            ECommerce
                        </h3>
                        <p className="text-sm">
                            Nền tảng thương mại điện tử hàng đầu Việt Nam với đa
                            dạng sản phẩm và dịch vụ chất lượng cao.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Về chúng tôi
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-white"
                                >
                                    Giới thiệu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-white"
                                >
                                    Liên hệ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/careers"
                                    className="hover:text-white"
                                >
                                    Tuyển dụng
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="hover:text-white">
                                    Tin tức
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Chính sách
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/shipping"
                                    className="hover:text-white"
                                >
                                    Vận chuyển
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/returns"
                                    className="hover:text-white"
                                >
                                    Đổi trả
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="hover:text-white"
                                >
                                    Bảo mật
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="hover:text-white"
                                >
                                    Điều khoản
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">
                            Kết nối
                        </h4>
                        <div className="space-y-2 text-sm">
                            <p>Hotline: 1900 1234</p>
                            <p>Email: support@ecommerce.com</p>
                            <div className="flex gap-4 mt-4">
                                <a href="#" className="hover:text-white">
                                    Facebook
                                </a>
                                <a href="#" className="hover:text-white">
                                    Instagram
                                </a>
                                <a href="#" className="hover:text-white">
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    <p>&copy; 2025 ECommerce. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
