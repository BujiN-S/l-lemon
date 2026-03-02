import { render, screen, FireEvent } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import { initializeTimes, timesReducer } from './components/BookingPage';

describe("BookingForm HTML5 validation attributes", () => {
  beforeEach(() => {
    render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} submitForm={() => {}} />);
  });

  test("date input has required attribute", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
  });

  test("time select has required attribute", () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test("guests input has required, min=1 and max=10 attributes", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("occasion select has required attribute", () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });
});

describe("BookingForm React validation behavior", () => {
  test("submit button is disabled when form is invalid", () => {
    render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} submitForm={() => {}} />);
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
  });

  test("submit button is enabled when form is valid", () => {
    render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} submitForm={() => {}} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });

    fireEvent.change(dateInput, { target: { value: "2024-12-31" } });
    fireEvent.change(timeSelect, { target: { value: "17:00" } });
    fireEvent.change(guestsInput, { target: { value: "3" } });

    expect(submitButton).toBeEnabled();
  });
});