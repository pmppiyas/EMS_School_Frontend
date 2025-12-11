"use client";

import head from "@/assets/head.png";
import { BookOpen, Calendar, ClipboardList, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Information = () => {
  const cards = [
    { title: "Our Teachers", icon: <Users className="w-6 h-6 text-primary" />, link: "/teacher" },
    { title: "Results", icon: <ClipboardList className="w-6 h-6 text-primary" />, link: "/results" },
    { title: "Exam Schedule", icon: <Calendar className="w-6 h-6 text-primary" />, link: "/exam-schedule" },
    { title: "Routine", icon: <BookOpen className="w-6 h-6 text-primary" />, link: "/routine" },
  ];

  return (
    <section className="py-8 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* MD Info */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="w-full  lg:max-w-[400px] rounded-xl overflow-hidden mx-auto lg:mx-0">
            <Image
              src={head}
              alt="Chairman"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-end">
            <div>      <h2 className="text-4xl font-bold text-foreground">MD Momirul Islam Liton</h2>
              <p className="text-lg text-muted-foreground mb-4">Head & Chairman</p></div>
            <p className="text-muted-foreground max-w-2xl">
              At Dhormopur Model KG School, we believe every child deserves a joyful and inspiring start to their educational journey. Our programs focus on nurturing curiosity, creativity, and social skills in a safe and caring environment. Through play-based learning, hands-on activities, and personalized attention, we help children build a strong foundation for lifelong learning.
            </p>

          </div>
        </div>

        {/* Quick Links Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
          {cards.map((card, idx) => (
            <Link key={idx} href={card.link} className="flex flex-col items-center p-6 bg-card text-card-foreground rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-primary/10">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Information;
