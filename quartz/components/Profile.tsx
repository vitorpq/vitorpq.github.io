import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export default (() => {
  const Profile: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div className={classNames(displayClass, "profile")}>
        <img src="attachments/lattes.jpg" alt="Vítor E. Andrade" className="profile-photo" />
        <h2 className="profile-name">Vítor Emmmanuel</h2>
        <p className="profile-title">Engineer | Developer
         | AI | Data Analysis</p>
      </div>

    )
  }
  return Profile
}) satisfies QuartzComponentConstructor
