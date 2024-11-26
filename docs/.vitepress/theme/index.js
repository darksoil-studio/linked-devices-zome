// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/themes/dark.css";
import "./custom.css";
import "https://js.stripe.com/v3/buy-button.js";

export default DefaultTheme;
