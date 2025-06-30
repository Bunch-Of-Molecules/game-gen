import {Separator} from "import/components/ui/separator";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,

} from "import/components/ui/card"

export default function Home() {
  return (
      <div>
          //ribbon
          <div className="ribbon">
              <header className="flex items-center justify-between pl-1 pr-5 py-7 text-white shadow">
                  <div className="text-3xl font-semibold">Game Generator</div>

                  <div className="flex items-center gap-4">
                      <button className="hover:opacity-70 transition mx-5">
                          <a href="https://github.com/Bunch-Of-Molecules/game-gen">
                              <img src="/icons/github.svg" alt="Github" className="w-8 h-8" />
                          </a>
                      </button>
                      <button className="hover:opacity-70 transition">
                          <img src="/icons/dark.svg" alt="DarkMode" className="w-6 h-6" />
                      </button>
                  </div>
              </header>
          </div>
              {/*game window*/}
          <div className="flex flex-col lg:flex-row gap-2 mt-20 px-6 py-4">
              <div className="flex-1/3">
                  <Card>
                      <CardHeader>
                          <CardTitle>Game</CardTitle>
                      </CardHeader>
                      <Separator />
                      <CardContent>
                          {/*Phaser goes here, idk how tho*/}
                      </CardContent>
                  </Card>
              </div>
              {/*control panel*/}
              <div className="flex-1">
                  <Card>
                      <CardHeader>
                          <CardTitle>Control Panel</CardTitle>
                      </CardHeader>
                      <Separator />
                      <CardContent>
                          {/*Make a form component*/}
                      </CardContent>
                  </Card>
              </div>
          </div>
      </div>
  );
}
