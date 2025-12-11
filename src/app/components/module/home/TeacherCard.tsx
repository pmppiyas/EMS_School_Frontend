/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
type Teacher = {
  id: string;
  firstName: string;
  lastName: string;
  designation?: string | null;
  email: string;
  phoneNumber?: string | null;
  gender?: string | null;
};

export default function TeacherMagnetCard({ teacher }: { teacher: Teacher }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useRouter();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const magnetStrength = 15;
  const rotationFactor = 0.8;
  const scaleFactor = 1.02;

  const handleMouseMove = (e: any) => {
    if (!cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) / (width / 2);
    const y = (e.clientY - (top + height / 2)) / (height / 2);

    setPosition({
      x: x * magnetStrength,
      y: y * magnetStrength,
    });
  };




  return (
    <motion.div

      ref={cardRef}
      className="relative w-full p-5 rounded-xl border border-gray-200 dark:border-white/20 
                 bg-card text-card-foreground backdrop-blur-sm shadow-md 
                 hover:shadow-xl cursor-pointer transition-all"
      animate={{
        x: position.x,
        y: position.y,
        rotateX: position.y * rotationFactor,
        rotateY: position.x * -rotationFactor,
        scale: isHovered ? scaleFactor : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 22,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }}
      onClick={() => navigate.push(`/teacher/${teacher.id}`)}
    >
      {/* Teacher Image */}
      <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border shadow-sm mb-4">
        <Image
          src="/teacher-placeholder.png"
          alt="Teacher"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Title */}
      <h3 className="text-lg font-semibold text-center">
        {teacher.firstName} {teacher.lastName}
      </h3>

      <p className="text-sm text-muted-foreground text-center mb-3">
        {teacher.designation ?? "Teacher"}
      </p>

      {/* Contact */}
      <div className="text-center text-sm text-muted-foreground space-y-1">
        <p>Email: {teacher.email}</p>
        {teacher.phoneNumber && <p>Phone: {teacher.phoneNumber}</p>}
        {teacher.gender && <p>Gender: {teacher.gender}</p>}
      </div>

      {/* Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          opacity: isHovered ? 0.08 : 0,
          background: isHovered
            ? `radial-gradient(circle at 
                ${50 + position.x / 2}% 
                ${50 + position.y / 2}%, 
                rgba(255,255,255,0.3), transparent 40%)`
            : "none",
        }}
        transition={{ duration: 0.25 }}
      />
    </motion.div>
  );
}
