import { TypeAnimation } from "react-type-animation";

const Type = (text) => {
  //   console.log(text);
  return (
    <TypeAnimation
      sequence={[
        text.text,
        2000, // Waits 1s
        () => {
          console.log("Sequence completed"); // Place optional callbacks anywhere in the array
        },
      ]}
      wrapper="span"
      cursor={false}
      repeat={Infinity}
      style={{ fontSize: "1.5rem", display: "inline-block" }}
    />
  );
};

export default Type;
