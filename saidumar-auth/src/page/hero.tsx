import { Navbar } from "../components";
import { useAuthStore } from "../store/auth.store";

const Hero = () => {
  const { isLoading, user, error } = useAuthStore();

  console.log(user);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Hero;
