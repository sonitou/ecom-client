export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-900">
            <div className="w-full max-w-md p-6 bg-white dark:bg-neutral-800 rounded-lg shadow">
                {children}
            </div>
        </div>
    );
}
