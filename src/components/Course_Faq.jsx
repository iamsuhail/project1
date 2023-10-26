import React ,  { useState } from 'react'
import '../styles/Course_Faq.scss';
const Course_Faq = () => {
    const [faqs, setFaqs] = useState([
        { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
        { question: 'How do I create a React app?', answer: 'You can create a React app using create-react-app.' },
        { question: 'What is JSX?', answer: 'JSX stands for JavaScript XML, and it is a syntax extension for JavaScript often used with React.' },
        { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
        { question: 'How do I create a React app?', answer: 'You can create a React app using create-react-app.' },
        { question: 'What is JSX?', answer: 'JSX stands for JavaScript XML, and it is a syntax extension for JavaScript often used with React.' },
        // Add more FAQ items here
      ]);
  return (
    <>
    <div className='faqcontainer'>
 
       <h1>FREQUENTLY ASKED QUESTIONS</h1>
       <div>
         {faqs.map((faq, index) => (
           <div key={index} className='combine'>
             <button className="faq-question">{faq.question}</button>
             <div className="faq-answer">{faq.answer}</div>
           </div>
         ))}
       </div>
     </div>
     </>
  )
}

export default Course_Faq