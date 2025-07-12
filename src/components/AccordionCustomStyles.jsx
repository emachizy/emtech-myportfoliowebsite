import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const items = [
  {
    id: 1,
    question: "Can you provide references or case studies of past projects?",
    answer:
      "Yes, we have case studies available upon request for clients to review our past successes.",
  },
  {
    id: 2,
    question: "How do you ensure the security of our project?",
    answer:
      "We follow industry standards and best practices in security protocols and regularly perform security audits.",
  },
  {
    id: 3,
    question:
      "How do you handle maintenance and support after the project is completed?",
    answer:
      "We offer maintenance packages that include ongoing support, updates, and security patches after project completion.",
  },
  {
    id: 4,
    question: "What kind of projects do you undertake?",
    answer:
      "We take on a variety of projects ranging from web development, mobile apps, blockchain solutions, and more.",
  },
  {
    id: 5,
    question: "How can we get started with a project?",
    answer:
      "Getting started is easy! Simply reach out to us through our website or contact information provided, and our team will schedule a consultation to discuss your project goals.",
  },
];

function AccordionItem({ id, open, handleOpen, question, answer }) {
  const isOpen = open === id;

  return (
    <Accordion
      open={isOpen}
      className="mb-2 rounded-lg border border-secondary px-4"
    >
      <AccordionHeader
        onClick={() => handleOpen(id)}
        className={`flex justify-between items-center border-b-0 transition-colors duration-500 text-primary text-md ${
          isOpen ? "text-blue-500 hover:!text-blue-700" : ""
        }`}
      >
        <span>{question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-500" : "rotate-0 text-gray-500"
          }`}
        />
      </AccordionHeader>
      <AccordionBody className="pt-0 text-sm font-normal text-gray-900 transition-all duration-700">
        {answer}
      </AccordionBody>
    </Accordion>
  );
}

export function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          open={open}
          handleOpen={handleOpen}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </>
  );
}
