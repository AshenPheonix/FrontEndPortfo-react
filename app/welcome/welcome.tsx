import { ImageSet } from "~/routes/components/ImageSet";

export function Welcome() {
  return (
    <main className="items-center justify-center pt-16 pb-4">
      <h1 className="block text-4xl font-bold text-center align-center">
        Brandon Porter
      </h1>
      <section className="image flex align-center justify-center p-4 m-4">
        <ImageSet/>
      </section>
      <section className="discord flex align-center justify-center p-4 m-4">
        <a href="https://discord.gg/3GXgrUS" target="_blank" rel="noopener noreferrer">
          Join My Discord
        </a>
      </section>
      <section className="About flex flex-col align-center p-4 m-4">
        <h2 className="block text-2xl font-bold">About me</h2>
        <p className="p-2">
          I'm a passionate developer with experience in building web applications using modern technologies. I enjoy learning new programming languages and frameworks, and I'm always looking for opportunities to collaborate on exciting projects. 
          In my free time, I like to contribute to open-source projects and share my knowledge with the developer community.
          I'm a gamer at heart and I'm learning to build further on that to become a game developer. 
        </p>
      </section>
    </main>
  );
}
