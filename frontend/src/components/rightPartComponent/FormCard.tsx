import { useState, useEffect } from "react";
import Button from "./Btn";
import LabelledInput from "./LabelledInput";

const FormCard = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invalid, setInvalid] = useState('');

  useEffect(() => {
    if (!(password === confirmPassword)) {
      setInvalid('invalid');
    }
  }, [confirmPassword, password]);

  return (
    <div>
      <form className="">
        <div className="bg-white py-10 px-10 shadow-xl">
          <div className="text-3xl font-semibold">Let's do this</div>
          <div className="mt-5 flex gap-32">
            <div>
              <LabelledInput
                label="First Name"
                type="text"
                placholder="Don"
              />
              <LabelledInput
                label="Email"
                type="email"
                placholder="rinshad@gmail.com"
              />
              <LabelledInput
                label="Password"
                type="password"
                placholder="123938"
                onchange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <LabelledInput
                label="Last Name"
                type="text"
                placholder="email"
              />
              <LabelledInput
                label="Phone number"
                type="text"
                placholder="+91995949599"
              />
              <LabelledInput
                label="Confirm password"
                type="password"
                placholder="123938"
                onchange={(e) => setConfirmPassword(e.target.value)}
                bothTrue={invalid} />
            </div>
          </div>
        </div>
        <div className="my-9 pl-10">
          <Button content={"Create Account"} />
        </div>
        <div className="pl-10 text-lg">
          Already have an account?{" "}
          <a className="cursor-pointer font-semibold">Log in</a>
        </div>
      </form>
    </div>
  );
};

export default FormCard;

