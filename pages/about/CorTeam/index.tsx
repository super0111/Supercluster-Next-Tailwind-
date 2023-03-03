import Link from "next/link";
import Image from "next/image";
// import { Partners } from "../Partners";
// import { SignUpForm } from '../SignUpForm';
import twitterLogo from "../../../public/Twitter.svg";
import linkedInLogo from "../../../public/LinkedIn.svg";
import kaiProfile from "../../../public/kai-profile.jpg";
import govProfile from "../../../public/gov-profile.jpg";
// import Button from "../../../components/button";
// import Roadmap from "../../../components/roadmap";

const items = [
  { img: kaiProfile, name: 'Kai Huang', role: 'CEO & Cofounder', description: 'Kai previously worked as a product lead at MetaMask, the leading web3 wallet in the ecosystem today. Since 2020, Kai has participated as a core contributor in various DAOs, including BanklessDAO and RadicleDAO. Prior to web3, he was leading the payments strategy at REI, Inc.' },
  { img: govProfile, name: 'Govind Mohan', role: 'CTO & Cofounder', description: 'Govind is a blockchain developer and researcher who has been in the space since 2014. He has been involved with several start-ups, notably starting Virgil Systems in 2018 where he was developing P2P data storage systems for governments with a strong focus on data integrity and availability. Since 2022, he has done work for various DAOs and open source communities.' },
]

export const CorTeam = () => {
  return (
    <div className="">
      <div className="text-center">
        <h4 className="text-2xl mb-2">Core Team</h4>
        <p className="text-slate-400">
          Say hello to our core team members
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        {
          items.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div>
                <Image
                  src={item.img}
                  alt="Kai Huang profile"
                  height={200}
                  style={{ borderRadius: 24 }} 
                />
              </div>
              <div className="flex flex-col gap-2 w-full text-left">
                <h4 className="text-2xl">{item.name}</h4>
                <h5 className="text-slate-400">{item.role}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
      {/* <div className="grid lg:grid-cols-6 gap-4 mt-8 leading-relaxed"> */}
        {/* {
          items.map((item, i) => (
            <div key={i} className="py-8 px-10 bg-gray-800 rounded-3xl h-full flex flex-col">
              <div className="heading-number flex justify-center align-center mx-auto">
                <h1 className="font-bold text-2xl text-emerald-500 leading-9">{i+1}</h1>
              </div>
              <h1 className="text-center font-bold text-2xl my-4">
                {item.title}
              </h1>
              <p className="mb-4">{item.text1}</p>
              <p className="mb-4">{item.text2}</p>
              <p>{item.text3}</p>
            </div>
          ))
        } */}
      {/* </div> */}
    </div>
  )
}