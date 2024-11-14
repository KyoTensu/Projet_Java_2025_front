import { Concert } from "./concert.model"

export interface Utilisateur {
  id: bigint
  firstName: string
  lastName: string
  password: string
  mail: string
  concerts: Concert[]
}
