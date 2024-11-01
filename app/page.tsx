import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Img1 from "@/public/chat-to-pdf-1.png";

const features = [
  {
    name: "Store your PDF documents",
    description:
      "Keep all your important PDF files securely stored and easily accessible anytime, anywhere",
    icon: GlobeIcon,
  },
  {
    name: "Blazing fast responses",
    description:
      "Experience lightning-fast answers to your queries, ensuring you get the information you need when you need it",
    icon: ZapIcon,
  },
  {
    name: "Chat memorisation",
    description:
      "Our intelligent chatbot remembers previous interactions, providing a seamless and personalised experience",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF viewer",
    description:
      "Engage with your PDFs like never before using our intuitive and interactive viewer",
    icon: EyeIcon,
  },
  {
    name: "Cloud backup",
    description:
      "Rest assured knowing your documents are safely backed up on the cloud, protected from loss or damage",
    icon: ServerCogIcon,
  },
  {
    name: "Responsive across devices",
    description:
      "Access and chat with your PDFs seamlessly on any device, whether it's your desktop, tablet or smartphone",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="bg-gradient-to-bl from-white to-indigo-600 flex-1 overflow-scroll p-2 lg:p-5">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm sm:text-base font-semibold leading-7 text-indigo-600">
              Your Interactive Document Companion
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your PDFs Into Interactive Conversations
            </p>
            <p className="mt-6 sm:text-lg leading-8 text-gray-600">
              Introducing {<br />}
              <span className="font-bold text-2xl sm:text-4xl text-indigo-600">
                Chat to PDF
              </span>
              <br />
              <br />
              Upload your document, and our chatbot will answer questions,
              summarise content, and answer all your queries. Ideal for
              everyone, <span className="text-indigo-600">
                Chat to PDF
              </span>{" "}
              turns static documents into{" "}
              <span className="font-bold">dynamic conversations</span>,
              effortlessly enhancing productivity.
            </p>
          </div>
          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="App screenshot"
              src={Img1}
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-1 h-5 w-5 text-indigo-600"
                  />
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
