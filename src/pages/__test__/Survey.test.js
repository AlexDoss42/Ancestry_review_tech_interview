import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Survey from '../Survey';

const typeIntoForm = ({ name, email }) => {
    const nameInputElement = screen.getByLabelText("Name *REQUIRED");
    const emailInputElement = screen.getByLabelText("Email *REQUIRED");
    
    if(name) {
        userEvent.type(nameInputElement, name);
      }
    if(email) {
      userEvent.type(emailInputElement, email);
    }
    
    return {
        nameInputElement,
        emailInputElement
    }
  };

  const clickSubmit = () => {
    const submitBtnElement = screen.getByText("Submit");
    userEvent.click(submitBtnElement);
  };

describe("Survey testing", () => {

    it("should show error messages if name is not entered", () => {
        render(<Survey />)
        clickSubmit();
        console.log(123, screen.getByText(/Name is required./i))
        expect(screen.getByText(/Name is required./i)).toBeInTheDocument();
    }) 
})