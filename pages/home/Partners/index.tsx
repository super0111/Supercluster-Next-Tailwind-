import Image from "next/image";
import Link from "next/link";

import protocollabsLogo from "../../../public/protocollabs-white.svg";
import outlierLogo from "../../../public/outlier-white.svg";
import ipfsLogo from "../../../public/IPFS_logo.png";
import filecoinLogo from "../../../public/WhatisFilecoin.png";
import xmtpLogo from "../../../public/xmtp-white.svg";
import banklessLogo from "../../../public/bankless-white.svg";

const items = [
  { img: protocollabsLogo },
  { img: outlierLogo },
  { img: ipfsLogo },
  { img: filecoinLogo },
  { img: xmtpLogo },
  { img: banklessLogo },
]

export const Partners = () => {
  return (
    <section className="mt-20 container mb-96">
      <div className="text-center">
        <h4 className="text-2xl mb-4">Partners</h4>
        <p className="text-slate-400"> Backed by the best in web3 </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-20 mt-8">
        {items.map((item, i) => (
          <div key={i} className="flex justify-center align-center">
            <Image
              src={item.img}
              alt="Outlier Ventures logo"
              height={ i === 3 ? 80 : 60 } />
          </div>
        ))}
      </div>
    </section>
  )
}