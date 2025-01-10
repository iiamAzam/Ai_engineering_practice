import React, { useEffect, useState } from 'react';
import './TextAnimator.css';  // Import the CSS for animation

interface ani {
    text : string
    updateword: (textS1:string) => void
}

const TextAnimator:React.FC<ani> = ({ text,updateword }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
 
  const formatResponse = (response: string): string => {
    return response
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold for **text**
      .replace(/\n\n/g, "<br><br>") // Paragraph breaks
      .replace(/- (.*?)\n/g, "<li>$1</li>") // Convert bullet points to list items
      .replace(/(\d+\.\s)(.*?)\n/g, "<h3 class=' text-[16px] font-bold'>$1 $2</h3>"); // Numbered headings
  };
  useEffect(() => {
    if (text) {
      const pardestext = formatResponse(text)
      const interval = setInterval(() => {
        setDisplayedText((prevText) => prevText + pardestext[index]);
        updateword(displayedText)
        setIndex((prevIndex) => prevIndex + 1);
      }, 10);  // Adjust typing speed here (ms per character)

      
      if (index === pardestext.length) {
        clearInterval(interval);
      }
      
      return () => clearInterval(interval); 
    }
  }, [text, index]);

  return <div  style={{ width: "300px", fontSize:"14px"  }}   dangerouslySetInnerHTML={{ __html: displayedText }} className="text-animation "></div>;
};

export default TextAnimator;