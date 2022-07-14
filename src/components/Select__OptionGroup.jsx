import * as React from "react"
import { PlasmicSelect__OptionGroup } from "./plasmic/saa_s_website/PlasmicSelect__OptionGroup"

function Select__OptionGroup(props) {
  const { plasmicProps } = PlasmicSelect__OptionGroup.useBehavior(props)
  return <PlasmicSelect__OptionGroup {...plasmicProps} />
}

export default Object.assign(Select__OptionGroup, {
  __plumeType: "select-option-group",
})
