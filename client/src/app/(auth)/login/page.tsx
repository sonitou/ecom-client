"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h1>
            <form className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border px-4 py-2 rounded"
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    className="w-full border px-4 py-2 rounded"
                />
                {/* <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Đăng nhập
                </button> */}
                <Button> Đăng nhập</Button>
            </form>

            <p className="mt-4 text-center text-sm">
                Chưa có tài khoản?{" "}
                <Link
                    href="/register"
                    className="text-blue-600 hover:underline"
                >
                    Đăng ký
                </Link>
            </p>
        </div>
    );
}
