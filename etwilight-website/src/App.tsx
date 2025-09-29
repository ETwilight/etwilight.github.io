import TopNav from "@/components/TopNav";
import BotBar from "@/components/BotBar";
import RouteLibrary from "./RouteLibrary";
import { ThemeLangProvider } from "@/components/ThemeLangProvider";

const App = () => {
  return (
    <ThemeLangProvider>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-[#242424] dark:text-white">
        <TopNav />
        <main className="flex-1 pt-20 flex justify-center">
          <div className="w-full text-center">
            <RouteLibrary />
          </div>
        </main>
        <BotBar />
      </div>
    </ThemeLangProvider>
  );
};

export default App;
