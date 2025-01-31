import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I book a car on SwiftRides?",
      answer:
        "Simply browse our available fleet, select the car of your choice, choose your rental dates, and proceed to checkout. You’ll receive a confirmation email with all the booking details.",
    },
    {
      question: "What documents do I need to rent a car?",
      answer:
        "You’ll need a valid driver's license, a government-issued ID, and a credit card for security deposit purposes.",
    },
    {
      question: "Are there any additional charges?",
      answer:
        "Additional charges may apply for insurance, fuel, or late returns. You can review all costs in the booking summary before payment.",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can cancel or modify your booking up to 24 hours before the rental start time. Please refer to our cancellation policy for more details.",
    },
  ];

  return (
    <section className="mt-24">
      <h4 className="text-center font-semibold">FAQ</h4>
      <h1 className="text-center text-3xl md:text-4xl font-bold">
        Frequently Asked Questions
      </h1>
      <p className="text-center mt-8 text-lg">
        Frequently asked questions about the Car Rental booking process on our
        website.
      </p>
      <div className="max-w-2xl mx-auto shadow-2xl mt-8">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className={`w-full text-left py-4 px-5 focus:outline-none flex justify-between items-center ${
                activeIndex === index ? "bg-orange-400 text-white" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="px-5 py-3 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
