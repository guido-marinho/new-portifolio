import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import MainLayout from "../components/MainLayout";

export default function Links() {
  return (
    <MainLayout>
      <section className="mt-32 grid grid-cols-3 grid-rows-3 gap-x-1 gap-y-12 justify-items-center">
        <Link href='https://github.com/guido-marinho' target="_blank">
          <BsGithub 
            size={50}
            color=" rgba(255, 255, 255, 0.2)"
          />
        </Link>
              <Link href='https://github.com/guido-marinho' target="_blank">
          <BsGithub 
            size={50}
            color=" rgba(255, 255, 255, 0.2)"
          />
        </Link>
              <Link href='https://github.com/guido-marinho' target="_blank">
          <BsGithub 
            size={50}
            color=" rgba(255, 255, 255, 0.2)"
          />
        </Link>
              <Link href='https://github.com/guido-marinho' target="_blank">
          <BsGithub 
            size={50}
            color=" rgba(255, 255, 255, 0.2)"
          />
        </Link>
              <Link href='https://github.com/guido-marinho' target="_blank">
          <BsGithub 
              size={50}
              color=" rgba(255, 255, 255, 0.2)"
          />
        </Link>
              <Link href='https://github.com/guido-marinho' target="_blank">
          <BsGithub 
              size={50}
              color=" rgba(255, 255, 255, 0.2)"
          />
        </Link>
      </section>
    </MainLayout>
  )
}
