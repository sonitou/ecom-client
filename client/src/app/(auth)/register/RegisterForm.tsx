"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setError("");

        if (password !== confirmPassword) {
            setError("Mật khẩu không khớp.");
            return;
        }

        // TODO: Gửi data đến server
        console.log({ email, password });

        router.push("/login");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-4 py-2 rounded"
            />

            <input
                type="password"
                placeholder="Mật khẩu"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-4 py-2 rounded"
            />

            <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border px-4 py-2 rounded"
            />

            {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Đăng ký
            </button>

            <p className="mt-4 text-center text-sm">
                Đã có tài khoản?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                    Đăng nhập
                </Link>
            </p>
        </form>
    );
}
