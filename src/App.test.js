import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders makbank header", () => {
  render(<App />);
  const el = screen.getByText(/magbank/);
  expect(el).toBeInTheDocument();
});
