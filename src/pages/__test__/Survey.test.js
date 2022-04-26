import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
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
    const submitBtnElement = screen.getByRole("button");
    userEvent.click(submitBtnElement);
  };

describe("Survey testing", () => {

    it("should be able to type into name input", () => {
      render(<Survey />);
      const { nameInputElement } = typeIntoForm({ name: 'miguel' });
      expect(nameInputElement.value).toBe('miguel');
    });

    it("should be able to type into email input", () => {
      render(<Survey />);
      const { emailInputElement } = typeIntoForm({ name: 'miguel', email: 'miguel@pedro.tech' });
      expect(emailInputElement.value).toBe('miguel@pedro.tech');
    });

    it("should be able to type into age input", () => {
      render(<Survey />);
      const ageInputElement = screen.getByLabelText("Age");
      userEvent.type(ageInputElement, "23");
      expect(ageInputElement).toHaveValue(23);
    });

    it("should not have an error message to start with", () => {
      render(<Survey />);
      const errorMsgElement = screen.queryByText(/Name is required./i);
      expect(errorMsgElement).not.toBeInTheDocument();
    }); 

    it("should show error messages if name is not entered", async () => {
        render(<Survey />);
        await clickSubmit();
        const errorMsgElement = screen.getByText(/Name is required./i);
        expect(errorMsgElement).toBeInTheDocument();
    });

    it("should show error messages if the email is not entered", async () => {
      render(<Survey />);
      await typeIntoForm({ name: 'miguel', email: '' });
      await clickSubmit();
      const errorMsgElement = screen.getByText(/the email you input is invalid./i);
      expect(errorMsgElement).toBeInTheDocument();
    });

    it("should show error messages if the email is not valid", async () => {
      render(<Survey />);
      await typeIntoForm({ name: 'miguel', email: 'miguelgmail.test' });
      await clickSubmit();
      const errorMsgElement = screen.getByText(/the email you input is invalid./i);
      expect(errorMsgElement).toBeInTheDocument();
    });

    it("should show no error messages if the name and valid email are entered", async () => {
      render(<Survey />);
      await typeIntoForm({ name: 'miguel', email: 'miguel@gmail.test' });
      await clickSubmit();
      const errorMsgElement = screen.queryByText(/the email you input is invalid./i);
      expect(errorMsgElement).not.toBeInTheDocument();
    });
});