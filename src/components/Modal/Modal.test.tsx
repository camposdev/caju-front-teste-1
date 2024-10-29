import { fireEvent, render, screen } from "~/utils/test";
import Modal from "./Modal";

const closeFn = jest.fn();

describe("Modal", () => {
  beforeEach(() => {
    render(<Modal open={true} title="Title" body="Body" onClose={closeFn} actions="Actions" />);
  });

  it("Should render correctly", () => {
    const { getByRole, getByText } = screen;

    const modal = getByRole('dialog');
    const title = getByText("Title");
    const body = getByText("Body");
    const actions = getByText("Actions");

    expect(modal).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(actions).toBeInTheDocument();
  });

  it("Should call onClose function", () => {
    const { getByTestId } = screen;
    const closeBtn = getByTestId('close-modal');

    fireEvent.click(closeBtn);

    expect(closeFn).toHaveBeenCalled();
  });
});