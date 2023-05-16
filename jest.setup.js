import "@testing-library/jest-dom/extend-expect"
import { jestPreviewConfigure } from "jest-preview"
import { setConfig } from "next/config"
import config from "./next.config"

setConfig(config)
jestPreviewConfigure({
  externalCss: ["styles/globals.scss", "styles/_mixins.scss"]
})
