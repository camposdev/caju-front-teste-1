import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TextField from "~/components/TextField";
import { validateCPF } from "~/utils/validateForms";
import { CPF_SEARCH_PARAM } from "../../constants";
import * as S from './styles';
import { sanitizeCPF } from "~/utils/sanitize";

const SearchCPF = () => {
  const [params, setParams] = useSearchParams();
  const cpfTerm = params.get(CPF_SEARCH_PARAM);
  const [cpf, setCPF] = useState(cpfTerm || "");
  const [cpfError, setCpfError] = useState("");

  useEffect(() => {
    if (!params.has(CPF_SEARCH_PARAM)) {
      setCPF("");
    }
  }, [params]);

  const handleResetFilter = () => {
    setCPF("");
    params.delete(CPF_SEARCH_PARAM);
    setParams(params);
  };

  const updateCPF = (value: string) => {
    setCPF(value);

    const isValidCPF = validateCPF(value);

    if (isValidCPF) {
      setCpfError("");
      setParams({ cpf: sanitizeCPF(value) });
    } else {
      setCpfError("Digite um CPF válido");
    }

    if (value.length < 14) {
      setCpfError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCPF(e.target.value);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    updateCPF(e.clipboardData.getData('text/plain'));
  };

  return (
    <S.Container>
      <TextField
        id="cpf"
        mask="000.000.000-00"
        value={cpf}
        onChange={handleChange}
        onPaste={handlePaste}
        error={cpfError}
        placeholder="Digite um CPF válido"
        aria-label="Buscar por CPF"
      />

      {!!cpfTerm && (
        <S.FilterContent>
          <h3>Filtrando pelo CPF: {cpfTerm}</h3>
          <S.Link onClick={handleResetFilter}>Limpar filtro</S.Link>
        </S.FilterContent>
      )}
    </S.Container>
  );
};

export default SearchCPF;
