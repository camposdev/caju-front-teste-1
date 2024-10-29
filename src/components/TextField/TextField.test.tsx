import { fireEvent, render } from "~/utils/test";
import TextField from "./TextField";

describe("TextField", () => {
  it("Should render correctly", () => {
    const { getByText, getByLabelText } = render(<TextField label="Form label" />);
    const label = getByText("Form label");
    const input = getByLabelText("input");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("Should update value on change", () => {
    const { getByLabelText } = render(<TextField label="Form label" />);
    const input = getByLabelText("input") as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Hello, World!' } });

    expect(input.value).toBe('Hello, World!');
  });

  it("Should render error message", () => {
    const { getByText } = render(<TextField error="This field is required!" />);
    const errorMessage = getByText("This field is required!");

    expect(errorMessage).toBeInTheDocument();
  });
});