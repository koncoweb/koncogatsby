import * as React from "react"
import { PlasmicCheckbox } from "./plasmic/saa_s_website/PlasmicCheckbox"

function Checkbox_(props, ref) {
  const { plasmicProps, state } = PlasmicCheckbox.useBehavior(props, ref)
  return <PlasmicCheckbox {...plasmicProps} />
}

const Checkbox = React.forwardRef(Checkbox_)

export default Object.assign(Checkbox, {
  __plumeType: "checkbox",
})
