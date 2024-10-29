import { render } from "~/utils/test";
import Collumns from "./Collumns";

const registrations = {
  isFetching: false,
  data: [
    {
      "admissionDate": "22/10/2023",
      "email": "luiz@caju.com.br",
      "employeeName": "Luiz Filho",
      "status": "REPROVED",
      "cpf": "56642105087",
      "id": "3"
    },
    {
      "id": "1",
      "admissionDate": "22/10/2023",
      "email": "filipe@caju.com.br",
      "employeeName": "Filipe Marins",
      "status": "APROVED",
      "cpf": "78502270001"
    },
    {
      "id": "2",
      "admissionDate": "22/10/2023",
      "email": "jose@caju.com.br",
      "employeeName": "José Leão",
      "status": "APROVED",
      "cpf": "78502270001"
    },
  ]
};

describe("Collumns", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Collumns registrations={registrations as any} onUpdate={() => jest.fn()} onDelete={() => jest.fn()} />);

    const review = getByText("Pronto para revisar");
    const aproved = getByText("Aprovado");
    const reproved = getByText("Reprovado");

    expect(review).toBeInTheDocument();
    expect(aproved).toBeInTheDocument();
    expect(reproved).toBeInTheDocument();
  });
});