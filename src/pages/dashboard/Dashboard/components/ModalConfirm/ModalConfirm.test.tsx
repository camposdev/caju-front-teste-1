import { fireEvent, render } from "~/utils/test";
import ModalConfirm from "./ModalConfirm";

const confirmFn = jest.fn();
const cancelFn = jest.fn();

describe("ModalConfirm", () => {
  it("should render correctly", () => {
    let id = null;
    const { queryByRole, rerender } = render(<ModalConfirm idToDelete={id} onConfirm={confirmFn} onCancel={cancelFn} />);
    expect(queryByRole("dialog")).not.toBeInTheDocument();

    id = "1";
    rerender(<ModalConfirm idToDelete={id} onConfirm={confirmFn} onCancel={cancelFn} />);
    expect(queryByRole("dialog")).toBeInTheDocument();
  });

  it("should call cancel function", () => {
    const id = "1";
    const { getByRole } = render(<ModalConfirm idToDelete={id} onConfirm={confirmFn} onCancel={cancelFn} />);
    const cancelBtn = getByRole("button", { name: /Cancelar/i });

    fireEvent.click(cancelBtn);

    expect(cancelFn).toHaveBeenCalled();
  });

  it("should call confirm function", () => {
    const id = "1";
    const { getByRole } = render(<ModalConfirm idToDelete={id} onConfirm={confirmFn} onCancel={cancelFn} />);
    const confirmBtn = getByRole("button", { name: /Confirmar/i });

    fireEvent.click(confirmBtn);

    expect(confirmFn).toHaveBeenCalled();
  });
});