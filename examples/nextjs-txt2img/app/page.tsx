import Footer from "@/components/footer";
import Nav from "@/components/nav";
import CopyCommand from "@/components/copy-command";
import Playground from "@/components/playground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto items-center py-24 md:p-24">
      <Nav />
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-4xl font-bold text-center">
          A Nextjs App with Civitai
        </h1>
        <CopyCommand />
      </div>

      <div className="flex my-16 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

      <Playground />
      <Footer />
    </main>
  );
}
