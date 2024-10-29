import { MemoryRouter } from "react-router-dom";
import { fireEvent, render } from "~/utils/test";
import SearchCPF from "./SearchCPF";

describe("SearchCPF", () => {
  it("should render correctly", () => {
    const { getByLabelText } = render(
      <MemoryRouter initialEntries={[`/`]}>
        <SearchCPF />
      </MemoryRouter>
    );

    const input = getByLabelText("Buscar por CPF");

    expect(input).toBeInTheDocument();
  });

  it("should render title filter", () => {
    const cpf = '63903857068';
    const { getByText, queryByText } = render(
      <MemoryRouter initialEntries={[`/?cpf=${cpf}`]}>
        <SearchCPF />
      </MemoryRouter>
    );

    expect(getByText(`Filtrando pelo CPF: ${cpf}`)).toBeInTheDocument();

    const clearBtn = getByText("Limpar filtro");

    fireEvent.click(clearBtn);

    expect(queryByText(`Filtrando pelo CPF: ${cpf}`)).not.toBeInTheDocument();
  });
});