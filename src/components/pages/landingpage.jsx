import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import companies from "@/data/companies";
import faqs from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className=" p-4 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-16 py-8 sm:py-12 lg:py-20 md:p-10 ">
      <section className="text-center mx-auto xl:-mt-20">
        <h1 className="flex flex-col items-center justify-center gradient-title font-bold text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl tracking-tighter py-4">
          Unlock your potential,
          <span className="mt-2 md:mt-3 xl:mb- lg:mt-4 xl:mt-5 mb-3 ">
            land your dream job
          </span>
          <span className="flex items-center gap-2  xl:text-7xl sm:gap-4 md:gap-5 lg:gap-6 ">
            with
            <img
              src="/assets/logo2.png"
              className="h-12 -ml-2  sm:h-14 md:h-20 lg:h-28 xl:h-24 xl:-ml-5"
              alt="Hirez Logo"
            />
          </span>
        </h1>
        <p className="text-gray-300 mt-2 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl  tracking-tighter">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>

      <div className="flex lg:-mt-5 sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8  justify-center mt-4">
        <Link to={"/jobs"}>
          <Button
            variant="blue"
            size="xl"
            className=" items-center w-36 h-20 lg:text-2xl sm:text-2xl "
          >
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button
            variant="destructive"
            size="xl"
            className="items-center w-36 h-20 lg:text-2xl  sm:text-2xl "
          >
            Post a Job
          </Button>
        </Link>
      </div>

      <Carousel>
        <CarouselContent className="flex gap-2 sm:gap-4 md:gap-8 lg:gap-12 items-center z-0 ">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="hidden ">
              <img
                src={path}
                alt={name}
                className="   sm:h-10 md:h-12 lg:h-16 xl:h-20 object-contain mx-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <img
        src="/assets/banner.png"
        className="w-full h-auto object-cover rounded-md xl:p-32 xl:-mt-32"
        alt="Banner"
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:p-10 xl:-mt-32">
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              For Job Seekers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base md:text-lg lg:text-xl">
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              For Employers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base md:text-lg lg:text-xl">
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      <Accordion
        type="multiple"
        className="w-full text-sm xl:-mt-20 md:text-base lg:text-lg xl:text-xl xl:p-10"
      >
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent className="lg:text-lg xl:text-xl">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
