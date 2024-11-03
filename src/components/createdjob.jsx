import { getMyJobs } from "@/api/apijobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";
import JobCard from "./jobCard";
import { useEffect } from "react";

const CreatedJobs = () => {
  const { user } = useUser();

  const {
    loading: loadingCreatedJobs,
    data: createdJobs,
    fn: fnCreatedJobs,
  } = useFetch(getMyJobs, {
    recruiter_id: user.id,
  });

  useEffect(() => {
    fnCreatedJobs();
  }, []);

  return (
    <div>
      {loadingCreatedJobs ? (
        <BarLoader className="mt-4" width={"100%"} color="blue" />
      ) : (
        <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-2 ">
          {createdJobs?.length ? (
            createdJobs.map((job) => {
              return (
                <JobCard
                  key={job.id}
                  job={job}
                  onJobAction={fnCreatedJobs}
                  isMyJob
                />
              );
            })
          ) : (
            <div className="md:ml-72 -mt-5 text-center md:text- text-2xl">
              No Jobs Found😢
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreatedJobs;
