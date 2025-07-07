import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Axelo Matthew Terang Barus</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
         Business information system || Tech enthusiast || fullstack developer
        </p>
        <p>
          I love coding , but the most interesting thing about coding is how to make it useful for people. So I like to
          make things that people can use and enjoy.
        </p>
        <p>
          Im also a big fan of astronomy and astrology. So i build my own website to share my knowledge about astronomy and astrology.
          Name is Astroz.
          <a href="#">
           Visit here
          </a>{" "}
        </p>
        <p>
          This website are inspired  by{" "}
          <a href="https://imsirius.xyz/" target="_blank">
            Sirius
          </a>
          .
        </p>
      </div>
    </section>
  );
}
