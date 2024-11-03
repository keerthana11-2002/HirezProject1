import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
      <div>
        <nav className="py-4 flex justify-between items-center md:ml-20 xl:ml-32 ">
          <Link to="/">
            <img
              src="/assets/logo2.png"
              className="h-12 md:h-20 md:-ml-10  sm:h-24"
              alt="Hirez Logo"
            />
          </Link>

          <div className="flex gap-8 mr-5 md:-mt-3 xl:mr-36 xl:-mt-1 ">
            <SignedOut>
              <Button
                className="xl:text-2xl"
                variant="outline"
                onClick={() => setShowSignIn(true)}
              >
                Login
              </Button>
            </SignedOut>
            <SignedIn>
              {user?.unsafeMetadata?.role === "recruiter" && (
                <Link to="/post-job">
                  <Button variant="destructive" className="ml-5 rounded-full ">
                    <PenBox size={15} className="mr-2" />
                    Post a Job
                  </Button>
                </Link>
              )}
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "mr-2 w-10 h-10",
                  },
                }}
              >
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="My Jobs"
                    labelIcon={<BriefcaseBusiness size={15} />}
                    href="/myjobs"
                  />

                  <UserButton.Link
                    label="Saved Jobs"
                    labelIcon={<Heart size={15} />}
                    href="/saved-jobs"
                  />
                  <UserButton.Action label="manageAccount" />
                </UserButton.MenuItems>
              </UserButton>
            </SignedIn>
          </div>
        </nav>

        {showSignIn && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleOverlayClick}
          >
            <SignIn
              signUpForceRedirectUrl="/onboarding"
              fallbackRedirectUrl="/onboarding"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
