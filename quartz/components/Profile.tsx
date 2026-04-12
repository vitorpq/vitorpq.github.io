import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  const Profile: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div className={classNames(displayClass, "profile")}>
        <img src="attachments/lattes.jpg" alt="Vítor E. Andrade" className="profile-photo" />
        <h2 className="profile-name">Vítor E. Andrade</h2>
        <p className="profile-title">Professor e Consultor Financeiro</p>
      </div>
    )
  }
  return Profile
}) satisfies QuartzComponentConstructor
