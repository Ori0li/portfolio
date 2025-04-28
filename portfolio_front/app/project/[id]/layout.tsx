import DarkModeToggle from "@/components/utill/DarkModeToggle";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#d4cdbb] dark:bg-[#324041] text-[#324041] dark:text-[#d4cdbb]">
      <main>{children}</main>
      <DarkModeToggle />
    </div>
  );
}
