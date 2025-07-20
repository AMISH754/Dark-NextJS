import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300 ">
     <div className="max-w-3xl text-center space-y-10">
      <h1 className="text-6xl font-semibold">Next.js Dark Tutorial</h1> 
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     
     <div className="space-x-2">
      <Button>Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      
     </div>
     <ThemeToggle/>
    </div>     
    </div>
  );
}
