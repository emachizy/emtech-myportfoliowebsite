import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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

const QnAAccordion = ({ items }) => {
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
};

export default QnAAccordion;
