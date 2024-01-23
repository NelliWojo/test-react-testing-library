import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("data", async () => {
    render(<App />);
    screen.debug();
    const data = await screen.findByText(/data/i);
    expect(data).toBeInTheDocument();
    expect(data).toHaveStyle({ color: "red" });
  });

  test("click event", () => {
    render(<App />);
    const btn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-el")).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-el")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-el")).toBeNull();
  });

  test("input event", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId("value-el")).toContainHTML("");
    // Artifical event
    // fireEvent.input(input, {
    //   target: { value: "test value" },
    // });

    // close to user actions (btn click, text input)
    userEvent.type(input, "test value");
    expect(screen.queryByTestId("value-el")).toContainHTML("test value");
  });
});
