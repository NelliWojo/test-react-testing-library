import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test App", () => {
  test("test 1", () => {
    render(<App />);
    const hiThereElement = screen.getByText(/hi there/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input value/i);

    expect(hiThereElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    // expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test("test 2", () => {
    render(<App />);
    const hiThereElement = screen.queryByText(/hi there 2/i);
    expect(hiThereElement).toBeNull();
  });

  // test("test 3", () => {
  //   render(<App />);
  //   const hiThereElement = screen.findByText(/hi there 2/i);
  //   expect(hiThereElement).toBeNull();
  // });

  // screen.debug();
});
