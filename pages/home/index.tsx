import { Header } from "./Header";
import { Features } from "./Features";
import { HowWorks } from "./HowWorks";
import Link from "next/link";
import Image from "next/image";
import { Partners } from "./Partners";
import { SignUpForm } from './SignUpForm';
import twitterLogo from "../../public/Twitter.svg";
import linkedInLogo from "../../public/LinkedIn.svg";
import kaiProfile from "../../public/kai-profile.jpg";
import govProfile from "../../public/gov-profile.jpg";
import Button from "../../components/Button";
import Roadmap from "../../components/RoadMap";

export default function HomePage () {
  return (
    <div className="container max-w-screen-xl  md:px-0">
      <Header />
      <Features />
      <HowWorks />
      <Partners />
      <SignUpForm />
      <section className="mt-20 container">
        <div className="text-center">
          <h4 className="text-2xl mb-4">Roadmap</h4>
          <p className="mb-6 text-slate-400">
            {" "}
            We’re just getting started, and there’s a lot more coming
          </p>
          <Link
            target="_blank"
            href="https://github.com/orgs/SuperclusterLabs/projects/1"
          >
            <Button text="View our technical roadmap" primary={false} />
          </Link>
        </div>
        <div className="flex mx-auto max-w-xl mt-6">
          <Roadmap />
        </div>
      </section>
      <section className="mt-20 container text-center">
        <h4 className="text-2xl mb-4">Our team</h4>
        <p className="mb-6 text-slate-400">Meet our core team members</p>

      </section>
    </div>
  )
}