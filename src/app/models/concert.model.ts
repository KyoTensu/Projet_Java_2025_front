import { Lieu } from "./lieu.model"
import { Artiste } from "./artiste.model"

export interface Concert {
  id: bigint
  concertName: string
  debut: Date
  fin: Date
  lieu: Lieu
  artistes: Artiste[]
}
