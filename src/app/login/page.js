import Login from "@/components/screens/Login/Login";

export const metadata = {
  title: "Login - Nirvag Pro",
  description: "Login to your Nirvag Pro account.",
};

export default async function Page({ searchParams }) {
  const params = await searchParams;

  const isSignup = params.signup === "true";

  return <Login isSignup={isSignup} />;
}
