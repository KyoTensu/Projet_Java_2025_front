import { Lieu } from "./lieu.model"

export interface Concert {
  id: bigint
  concertName: string
  debut: Date
  fin: Date
  lieu: Lieu
}
