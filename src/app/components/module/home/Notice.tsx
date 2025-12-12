import Header from '@/app/components/shared/Header';
import notice from "@/assets/notice.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const NoticeBoard = () => {
  const NoticeData = [
    {
      title: "Mid-Term Examination Schedule Published",
      message:
        "The Mid-Term Examination schedule for all programs has officially been published. Students are advised to review the timetable carefully and make necessary preparations ahead of time. Please ensure that you bring your student ID to the examination hall and arrive at least fifteen minutes before your scheduled exam.",
      url: "#",
    },
    {
      title: "Campus Renovation Work Announcement",
      message:
        "Renovation work will begin on different parts of the campus starting next week. Students may experience temporary changes in class locations, walkway restrictions, or noise during daytime hours. The management team is working to ensure that the renovation process causes minimal disruption to academic activities.",
      url: "#",
    },
    {
      title: "Library Membership Renewal Reminder",
      message:
        "All students are reminded to renew their library memberships for the upcoming semester before the deadline. Without renewal, you will lose access to book borrowing, digital resources, and study room reservations. Visit the library help desk with your student ID to complete the process.",
      url: "#",
    },
    {
      title: "Co-Curricular Activities Week Registration",
      message:
        "Registration for Co-Curricular Activities Week is now open for all students. This event includes competitions, workshops, sports activities, and creative showcases designed to help students build confidence and discover new talents. Participation certificates will be provided, which can be valuable for future portfolios and university applications.",
      url: "#",
    },
  ];

  return (
    <div className='bg-primary-foreground w-full mx-auto relative'>


      <section className="py-16 lg:w-11/12 mx-auto relative z-10">
        <div className="container mx-auto px-4">
          <Header title="Notice" title2='Board' />

          {/* Marquee Slider */}
          <div className="slider-container w-full flex-nowrap relative overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)] mb-8">
            <div className="marqueeSliderLeft flex items-center gap-5">
              {NoticeData.map((item, index) => (
                <Link
                  href={item.url}
                  className="py-4 px-6 bg-primary capitalize border text-background rounded font-medium whitespace-nowrap"
                  key={index}
                >
                  {item.message}
                </Link>
              ))}
            </div>
          </div>

          {/* Accordion Section */}
          <div className='px-6 flex flex-col lg:flex-row'>
            <Accordion type="single" collapsible className='flex-1'>
              {NoticeData.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className='text-lg'>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.message}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoticeBoard;