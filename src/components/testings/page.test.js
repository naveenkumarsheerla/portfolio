/* eslint-disable no-unused-vars */
/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Contact from "../Contact";
import Home from "../Home";
import About from "../About";
import Portfolio from "../Portfolio";
import NavBar from "../NavBar";
import Experience from "../Experience";


describe("HomePage",()=>{
   test("for role",()=>{
       render(<Home />);
       const ChildElement = screen.getByText("I'm a Full Stack Developer");
       expect(ChildElement).toBeInTheDocument();
   });
   test("for link",()=>{
       render(<Home />);
       const ChildElement = screen.getByText("Portfolio");
       expect(ChildElement).toBeInTheDocument();
   });
   test("for paragraph",()=>{
       render(<Home />);
       const ChildElement = screen.getByText("I love to work on web application using technologies like HTML CSS Javascript React Mysql Django and Python");
       expect(ChildElement).toBeInTheDocument();
   });


   
})
describe("Navigationpage",()=>{
   test("for name1",()=>{
      render(<NavBar />);
      const childElement = screen.getByText("home");
      expect(childElement).toBeInTheDocument();
   });
   test("for name2",()=>{
      render(<NavBar />);
      const childElement = screen.getByText("about");
      expect(childElement).toBeInTheDocument();
   });
   test("for name3",()=>{
      render(<NavBar />);
      const childElement = screen.getByText("portfolio");
      expect(childElement).toBeInTheDocument();
   });
   test("for name4",()=>{
      render(<NavBar />);
      const childElement = screen.getByText("experience");
      expect(childElement).toBeInTheDocument();
   });
   test("for name5",()=>{
      render(<NavBar />);
      const childElement = screen.getByText("contact");
      expect(childElement).toBeInTheDocument();
   });
})
describe("for About",()=>{
   test("for title",()=>{
      render(<About />);
      const childElement = screen.getByText("About");
      expect(childElement).toBeInTheDocument();
   });
   test("for para1",()=>{
      render(<About />);
      const childElement = screen.getByText("Dedicated engineer with a motive to solve real world problems with the application of technical knowledge. Seeking a entry level job oppurtunity to build a career out of it.");
      expect(childElement).toBeInTheDocument();
   });
   test("for para2",()=>{
      render(<About />);
      const childElement = screen.getByText("I am a 4th year B.Tech student in INFORMATION SCIENCE AND TECHNOLOGY with a passion for IT. I have completed several projects that have helped me develop a strong understanding of Front-end and Some back-end technologies. I am a proactive learner with a keen interest in staying up-to-date with the latest industry trends. I am looking for opportunities to apply my skills and knowledge in real-world projects. I am confident that my passion, dedication and strong work ethic will make me a valuable asset to any team or organization");
      expect(childElement).toBeInTheDocument();
   });
})


describe("Portfolio Page",()=>{
   test("for title",()=>{
      render(<Portfolio />);
      const childElement = screen.getByText("Portfolio");
      expect(childElement).toBeInTheDocument();
   });
   test("for para",()=>{
      render(<Portfolio />);
      const childElement = screen.getByText("Check out some of my work right here");
      expect(childElement).toBeInTheDocument();
   });
 
})

describe("Experience page",()=>{
   test("for title",()=>{
      render(<Experience />);
      const childElement = screen.getByText("Technical Skills");
      expect(childElement).toBeInTheDocument();
   });
   test("for para",()=>{
      render(<Experience />);
      const childElement = screen.getByText("These are the technologies I've worked with");
      expect(childElement).toBeInTheDocument();
   });
   test("for name1",()=>{
      render(<Experience />);
      const childElement = screen.getByText("HTML");
      expect(childElement).toBeInTheDocument();
   });
   test("for name2",()=>{
      render(<Experience />);
      const childElement = screen.getByText("CSS");
      expect(childElement).toBeInTheDocument();
   });
   test("for name3",()=>{
      render(<Experience />);
      const childElement = screen.getByText("JavaScript");
      expect(childElement).toBeInTheDocument();
   });
   test("for name4",()=>{
      render(<Experience />);
      const childElement = screen.getByText("React");
      expect(childElement).toBeInTheDocument();
   });
   test("for name5",()=>{
      render(<Experience />);
      const childElement = screen.getByText("Java");
      expect(childElement).toBeInTheDocument();
   });
   test("for name6",()=>{
      render(<Experience />);
      const childElement = screen.getByText("Tailwind");
      expect(childElement).toBeInTheDocument();
   });
   test("for name7",()=>{
      render(<Experience />);
      const childElement = screen.getByText("Node JS");
      expect(childElement).toBeInTheDocument();
   });
   test("for name8",()=>{
      render(<Experience />);
      const childElement = screen.getByText("Python");
      expect(childElement).toBeInTheDocument();
   });
   test("for name9",()=>{
      render(<Experience />);
      const childElement = screen.getByText("GitHub");
      expect(childElement).toBeInTheDocument();
   });
})
describe("Contactpage",()=>{
   test("for button",()=>{
   render(<Contact />);
   const headelement =screen.getByRole("button");
   expect(headelement).toBeInTheDocument();
    });
    test("for name",()=>{
       render(<Contact />);
       const nameelement = screen.getByPlaceholderText("Enter your name");
       expect(nameelement).toBeInTheDocument();
    });
    test("for emailplaceholder",()=>{
     render(<Contact />);
     const nameelement = screen.getByPlaceholderText("Enter your email");
     expect(nameelement).toBeInTheDocument();
  });
  test("for messageplaceholder",()=>{
     render(<Contact />);
     const nameelement = screen.getByPlaceholderText("Enter your message");
     expect(nameelement).toBeInTheDocument();
  });
    test("for text",()=>{
       render(<Contact />);
       const mailelement = screen.getByText("Submit the form below to get in touch with me");
       expect(mailelement).toBeInTheDocument();
    });
    test("button text",()=>{
     render(<Contact/>);
     const childElement =screen.getByText("Let's talk");
     expect(childElement).toBeInTheDocument();
    });
    test("head",()=>{
     render(<Contact/>);
     const childElement =screen.getByText("Contact");
     expect(childElement).toBeInTheDocument();
    });
    test('submit form', () => {
      const { getByTestId } = render(<Contact />);
      const form = getByTestId('form');
      const button = getByTestId('Talk');
    
      fireEvent.submit(form);
    
      expect(form).toHaveAttribute('action', 'https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6');
      expect(form).toHaveAttribute('method', 'POST');

      expect(button).toHaveAttribute('type', 'submit');
    });



    


})
