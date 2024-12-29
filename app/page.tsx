
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center
        justify-between xl:pt-8 xl:pb-24">

          {/* text */}
          <div className="text-center xl:text-left">
            <span>Front-End Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Elnur Guliyev</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I’m a passionate Front-End Developer dedicated to crafting seamless and engaging user experiences.
              With expertise in HTML, CSS, JavaScript, and modern frameworks like React and Next.js,
              I bring designs to life with clean, efficient, and scalable code. I thrive on learning new tools, solving challenges, and creating web solutions that delight users.
              <span className="block mt-4">Let’s build something amazing together!</span>
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-2">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                {/* add contont to the Social file to display  it thorugh here */}
                <Socials />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>Photo</div>
        </div>
      </div>
    </section>
  )
};

export default Home;