import Image from "next/image";
import mainBg from "./images/main-bg.webp"
import horse from "./images/horse.png"
import cliff from "./images/cliff.webp"
import trees from "./images/trees.webp"
import stars from "./images/stars.png"
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: `url(${mainBg.src})`}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Web development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis libero ut veniam dicta officia corporis
             facilis unde adipisci illo ab quis deserunt, maxime reprehenderit dolorum rerum nulla recusandae quod?
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link href="/my-skills" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-white text-large max-w-[200px]">
              Learn more
            </Link>
            <Link href="/my-projects" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-white text-large max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20">
                My projects
              </div>
            </Link>
            <Link href="/contact-me" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-white text-large max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20">
                Contact me
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 md:hidden gap-5">
        <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-white text-large max-w-[200px]">
          Learn more
        </Link>
        <Link href="/my-projects" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-white text-large max-w-[200px]">
            My projects
        </Link>
        <Link href="/contact-me" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-white text-large max-w-[200px]">
            Contact me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
        src={horse}
        alt="horse" 
        height={300}
        width={300}
        className="absolute right-55 top-40"
        />

        <Image 
        src={cliff}
        alt="cliff"
        width={400}
        height={400}

        />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
        src={trees}
        alt="trees"
        height={200}
        width={200}
        className="h-full w-full"
        />
      </div>

      <Image
        src={stars}
        alt="stars" 
        height={300}
        width={300}
        className="absolute left-0 top-0 z-{10}"
        />
    </main>
  );
}
