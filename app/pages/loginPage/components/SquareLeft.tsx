"use client";

type ActiveCondition = {
  props: boolean;
};
export default function SquareLeft({ props }: ActiveCondition) {
  return (
    <div
      // {/* one div will be for the image, it is will be disponible from tablets to desktop screens*/}
      className={`hidden md:inline-block h-[50%] md:h-[70%] bg-blue-800 md:absolute md:rounded-[1em]
            ${props === false ? "animate-back" : "animate-go"} z-20
            `}
    ></div>
  );
}
