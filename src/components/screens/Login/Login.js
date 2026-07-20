"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "./Login.module.scss";

import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import AnimatedBackground from "@/components/common/AnimatedBackground/AnimatedBackground";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

export default function Login({ isSignup }) {
  const router = useRouter();

  const isLogin = !isSignup;

  const switchMode = () => {
    if (isLogin) {
      router.push("/login?signup=true");
    } else {
      router.push("/login");
    }
  };

  return (
    <main className={styles.loginPage}>
      <AnimatedBackground className={styles.background}>
        <div className={styles.centerWrapper}>
          <CustomContainer>
            <div className={styles.contentWrapper}>
              {/* Left */}
              <div className={styles.textSide}>
                {isLogin ? (
                  <h1 className={styles.title}>
                    Welcome back to{" "}
                    <span className="text-highlight">Nirvag Pro</span>
                  </h1>
                ) : (
                  <h1 className={styles.title}>
                    Register and start your{" "}
                    <span className="text-highlight">free trial</span>
                  </h1>
                )}

                <ul className={styles.benefitsList}>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    No credit card required
                  </li>

                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Flexible cancellation anytime
                  </li>

                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    14-day free trial period
                  </li>
                </ul>
              </div>

              {/* Right */}
              <div className={styles.formSide}>
                <div className={styles.formBox}>
                  <h2 className={styles.formTitle}>
                    {isLogin ? "Login to Nirvag Pro" : "Signup for Nirvag Pro"}
                  </h2>

                  <form
                    className={styles.loginForm}
                    onSubmit={(e) => e.preventDefault()}
                  >
                    {!isLogin && (
                      <div className={styles.inputGroup}>
                        <input
                          type="text"
                          placeholder="Name"
                          className={styles.input}
                        />
                      </div>
                    )}

                    <div className={styles.inputGroup}>
                      <input
                        type="email"
                        placeholder={isLogin ? "Email" : "Work Email"}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <input
                        type="password"
                        placeholder="Password"
                        className={styles.input}
                      />
                    </div>

                    <CustomButton
                      type="submit"
                      variant="primary"
                      className={styles.submitBtn}
                    >
                      {isLogin ? "Login" : "Signup"}
                    </CustomButton>
                  </form>

                  <div className={styles.signupText}>
                    {isLogin ? (
                      <>
                        Don&apos;t have an account?{" "}
                        <button
                          type="button"
                          onClick={switchMode}
                          className={styles.toggleBtn}
                        >
                          Signup
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account?{" "}
                        <button
                          type="button"
                          onClick={switchMode}
                          className={styles.toggleBtn}
                        >
                          Login
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className={styles.footerText}>
                  © {new Date().getFullYear()} Nirvag Pro. All Rights Reserved.
                </div>
              </div>
            </div>
          </CustomContainer>
        </div>
      </AnimatedBackground>
    </main>
  );
}
