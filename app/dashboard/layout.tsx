import Sidebar from "@/containers/Sidebar/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col gap-4 text-black">
            <div className="relative flex w-full items-end justify-end">
                <Sidebar />
                {children}
            </div>
        </main>
    );
}