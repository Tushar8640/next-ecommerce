import Layout from "../layouts/Main";
import Link from "next/link";
import { supabase } from "../supabase/index";
import { FormEvent } from "react";

export default function Register() {
  async function signInWithEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { data } = await supabase.auth.signUp({
        email: "user31@gmail.com",
        password: "123456",
      });
   
      if (data.user) {
        const { data, error } = await supabase
          .from("users")
          .insert([{ name: "someValue1", useremail: "user@gmail.com" }])
          .select();
        console.log(data, error);
      }
    } catch (error:any) {
      console.log(error.message);
    }
  }
  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
                <i className="icon-left"></i> Back to store
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">
              Create an account and discover the benefits
            </h2>
            <p className="form-block__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <form className="form" onSubmit={(e) => signInWithEmail(e)}>
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="First Name"
                  type="text"
                />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="Last Name"
                  type="text"
                />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="Email"
                  type="text"
                />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="Password"
                  placeholder="Password"
                />
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label
                    htmlFor="check-signed-in"
                    className={`checkbox checkbox--sm`}
                  >
                    <input
                      name="signed-in"
                      type="checkbox"
                      id="check-signed-in"
                    />
                    <span className="checkbox__check"></span>
                    <p>
                      I agree to the Google Terms of Service and Privacy Policy
                    </p>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Sign up
              </button>

              <p className="form__signup-link">
                <Link href="/login">
                  <span>Are you already a member?</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
