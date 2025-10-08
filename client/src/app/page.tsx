import Link from "next/link";

export default function HomePage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-6">Trang chủ</h1>
            <Link
                href="/login"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Đăng nhập
            </Link>
        </main>
    );
}
