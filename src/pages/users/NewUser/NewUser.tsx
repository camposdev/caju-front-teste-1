import TextField from "~/components/TextField";
import Button from "~/components/Button";
import { HiOutlineArrowLeft } from "react-icons/hi";
import IconButton from "~/components/IconButton";
import { useNavigate } from "react-router-dom";
import routes from "~/router/paths";
import { SubmitHandler, useForm } from "react-hook-form";
import { validateCPF, validateEmail, validateName } from "~/utils/validateForms";
import { TRegistration } from "~/api/registrations/types";
import * as S from "./styles";
import dayjs from "dayjs";
import useAddRegistration from "~/api/registrations/useAddRegistration";
import { enqueueSnackbar } from "notistack";
import { sanitizeCPF } from "~/utils/sanitize";
import Spinner from "~/components/Spinner";

type TForm = {
  name: string
  email: string
  cpf: string
  date: Date
}

const NewUser = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<TForm>();

  const addRegistration = useAddRegistration(
    () => {
      enqueueSnackbar('Registro adicionado com sucesso!', { variant: 'success' });
      navigate('/dashboard');
    },
    () => enqueueSnackbar('Ops!, algo deu errado.', { variant: 'error' }),
  );

  const onSubmit:SubmitHandler<TForm> = (data) => {
    const body: TRegistration = {
      employeeName: data.name,
      email: data.email,
      status: 'REVIEW',
      cpf: sanitizeCPF(data.cpf),
      admissionDate: dayjs(data.date).format('DD/MM/YYYY')
    };
    addRegistration.mutate(body);
  };

  return (
    <S.Card>
      <IconButton onClick={() => navigate(routes.dashboard)} aria-label="Voltar para dashboard">
        <HiOutlineArrowLeft />
      </IconButton>

      <form onSubmit={handleSubmit(onSubmit)} aria-label="Cadastrar usuário">
        <S.Fields>
          <TextField
            id="name"
            label="Nome completo"
            placeholder="Nome completo"
            {...register('name', { 
              required: "O Nome completo é obrigatório",
              validate: validateName || "Insira seu nome completo (mínimo de duas letras para cada nome)"
            })}
            error={errors && errors.name?.message} 
          />
    
          <TextField
            id="email"
            label="Email" 
            placeholder="E-mail"
            type="email" 
            {...register("email", {
              required: "O campo E-mail é obrigatório",
              validate: validateEmail || "Email inválido"
            })} 
            error={errors && errors.email?.message} 
          />

          <TextField 
            id="cpf"
            mask="000.000.000-00"
            placeholder="CPF"
            label="CPF" 
            {...register("cpf", {
              required: "O campo CPF é obrigatório",
              validate: (value) => validateCPF(value) || "CPF inválido"
            })} 
            error={errors && errors.cpf?.message} 
          />

          <TextField 
            id="date"
            label="Data de admissão" 
            type="date" 
            {...register("date", {
              required: "O campo Data de admissão é obrigatório"
            })} 
            error={errors && errors.date?.message} 
          />
        </S.Fields>
        
        <S.Actions>
          <Button size="large" disabled={addRegistration.isPending} onClick={() => {}}>Cadastrar {addRegistration.isPending && <Spinner />}</Button>
        </S.Actions>
      </form>
    </S.Card>
  );
};

export default NewUser;
