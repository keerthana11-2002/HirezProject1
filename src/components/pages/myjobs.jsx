import CreatedApplications from "@/components/createdapplication";
import CreatedJobs from "@/components/createdjob";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";

const MyJobs = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="blue" />;
  }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-3xl sm:text-5xl text-center pb-8 mt-10 ">
        {user?.unsafeMetadata?.role === "candidate"
          ? "My Applications"
          : "My Jobs"}
      </h1>
      {user?.unsafeMetadata?.role === "candidate" ? (
        <CreatedApplications />
      ) : (
        <CreatedJobs />
      )}
    </div>
  );
};

export default MyJobs;
