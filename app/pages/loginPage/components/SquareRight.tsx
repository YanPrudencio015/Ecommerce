"use client";

import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "./Login";
import RegisterForm from "./Register";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });

interface Props {
  isRegister: boolean;
  setIsRegister: (value: boolean) => void;
}

export default function SquareRight({ isRegister, setIsRegister }: Props) {
  return (
    <div
      className="w-[95%] md:w-[50%] h-screen md:h-[70%] bg-white
        relative before:w-[50em] md:before:hidden before:h-[50em] before:bg-[#068FFF] before:absolute 
        before:bottom-[15em] before:left-[5em] before:rounded-[50em] before:z-[-1] flex justify-center
        items-center flex-col"
    >
      <div
        className="w-full h-[90%] rounded-tl-[1em] rounded-tr-[1em] p-5 flex flex-col 
          items-center bg-white md:bg-transparent md:text-white overflow-auto relative"
      >
        <h1 className={`${orbitron.className} text-[2em] md:text-[1.5em] mb-4`}>
          {!isRegister ? "Login" : "Register"}
        </h1>

        <AnimatePresence mode="wait" initial={false}>
          {" "}
          {/* ← initial={false} evita animação no mount */}
          <motion.div
            key={isRegister ? "register" : "login"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full flex flex-col items-center"
            style={{ willChange: "opacity, transform" }} // ← força aceleração via GPU
          >
            {!isRegister ? (
              <LoginForm
                isRegister={isRegister}
                setIsRegister={setIsRegister}
              />
            ) : (
              <RegisterForm
                isRegister={isRegister}
                setIsRegister={setIsRegister}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
