import { Style } from "./style.model"
import { Nationalite } from "./nationalite.model"
import { Concert } from "./concert.model"

export interface Artiste {
  id: bigint
  name: string
  isGroup: boolean
  birthDate: Date
  style: Style
  nationalite: Nationalite
  concerts: Concert[]
}
