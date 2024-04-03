import { FormEvent, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [auth, setAuth] = useState<"signup" | "signin">("signin");
  const [email, setEamil] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalid, setInvalid] = useState<boolean>(false);
  const { signUp, signIn } = useAuth();
  const { isLoading, user, error } = useAuthStore();

  const toggleAuth = (state: "signup" | "signin") => {
    setAuth(state);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!password.length || !email.length) {
      setInvalid(true);
    }
    setInvalid(false);
    if (auth === "signup") {
      signUp(email, password);
    } else {
      signIn(email, password);
    }
  };

  return (
    <main className="form-signin container text-center mt-4">
      <form className="m-auto w-50" onSubmit={onSubmit}>
        <img className="mb-4" src="" alt="img" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal text-start">
          {auth == "signup" ? "Sign Up" : "Sign in"}
        </h1>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="form-floating">
          <input
            type="email"
            onChange={(e) => setEamil(e.target.value)}
            value={email}
            className={`form-control ${invalid && "is-invalid"}`}
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mt-2">
          <input
            type="password"
            className={`form-control ${invalid && "is-invalid"}`}
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button
          className="btn btn-primary mt-2 w-100 py-2"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? "Loading..." : auth === "signup" ? "Sign Up" : "Sign In"}
        </button>

        <p className="mt-2 fw-bold">
          {auth === "signup" ? "Already have account" : "Not account yet"}{" "}
          {auth == "signup" ? (
            <span
              className="fw-normal text-primary"
              onClick={() => toggleAuth("signin")}
              style={{ cursor: "pointer" }}
            >
              Sign in
            </span>
          ) : (
            <span
              className="fw-normal text-primary"
              onClick={() => toggleAuth("signup")}
              style={{ cursor: "pointer" }}
            >
              Sign up now
            </span>
          )}
        </p>
      </form>
    </main>
  );
};

export default Auth;
