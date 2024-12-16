import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Question = {
  question: string;
  answer: string;
};

type FAQProps = {
  questions: Question[];
};

export default function FAQ({ questions }: FAQProps) {
  return (
    <Accordion className="w-full" type="single" collapsible>
      {questions.map((q, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-lg font-medium">
            {q.question}
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-700">
            {q.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
