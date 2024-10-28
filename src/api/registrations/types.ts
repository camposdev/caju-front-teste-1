export type TRegistrationStatus = 'APROVED' | 'REPROVED' | 'REVIEW'

export type TRegistration = {
  admissionDate: string
  email: string
  employeeName: string
  status: TRegistrationStatus
  cpf: string
  id?: string
}

export type TRegistrationUpdate = {
  id: string, 
  body: TRegistration
}