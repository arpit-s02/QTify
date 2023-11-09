import Accordion from "../Accordion/Accordion";
import "./FAQ.css"

const FAQ = () => {

    const questions = [
        {
            id: 1,
            question: 'Is QTify free to use?',
            answer: 'Yes! It is 100% free, and has 0% ads!'
        },
        {
            id: 2,
            question: 'Can I download and listen to songs offline?',
            answer: "Sorry, unfortunately we don't provide the service to download any songs."
        }
    ]

  return (
    <div className="faqContainer">
        <h1 className="faqHeading">FAQs</h1>

        {
            questions.map((item) => {
                return (
                    <Accordion
                        key = {item.id}
                        question = {item.question}
                        answer = {item.answer}
                    />
                )
            })
        }
    </div>
  )
}

export default FAQ;