import { fireEvent, render, screen } from "~/utils/test";
import RegistrationCard from "./RegistrationCard";
import { TRegistration } from "~/api/registrations/types";

const data: TRegistration = {
  "admissionDate": "22/10/2023",
  "email": "luiz@caju.com.br",
  "employeeName": "Luiz Filho",
  "status": "REPROVED",
  "cpf": "56642105087",
  "id": "3"
};

const updateFn = jest.fn();
const deleteFn = jest.fn();

describe("RegistrationCard", () => {
  beforeEach(() => {
    render(<RegistrationCard data={data} onUpdate={updateFn} onDelete={deleteFn} />);
  });

  it("should render correctly", () => {
    expect(screen.getByText("Luiz Filho"));
    expect(screen.getByText("luiz@caju.com.br"));
    expect(screen.getByText("22/10/2023"));
    expect(screen.getByRole("button", { name: /Revisar novamente/i }));
  });

  it("should call update function", () => {
    const updateBtn = screen.getByRole("button", { name: /Revisar novamente/i });

    fireEvent.click(updateBtn);

    expect(updateFn).toHaveBeenCalledWith(data, "REVIEW");
  });

  it("should call delete function", () => {
    const deleteBtn = screen.getByLabelText("Deletar");

    fireEvent.click(deleteBtn);

    expect(deleteFn).toHaveBeenCalledWith(data.id);
  });
});