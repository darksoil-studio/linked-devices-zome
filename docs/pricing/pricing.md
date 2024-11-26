# Pricing

### darksoil dual licence

In order to use this module in your software, you are required to purchase the commercial licence of this module. When you buy the licence for this module you can use any version released this calendar year in perpetuity. 

If you want to keep using newer versions next year, that requires a new licence purchase for that year. The per year cost of using this module is $1000.

If your project is completely GPL complient you can use this module for free.


# Get the 2024 module licence

<stripe-button-container>
</stripe-button-container>

<script setup>
import { onMounted } from "vue";
import { render } from "lit";
import { html, unsafeStatic } from "lit/static-html.js";

//import { LinkedDevicesClient } from "../.vitepress/theme/buy-button.js";

onMounted(async () => {
  // Elements need to be imported on the client side, not the SSR side
  // Reference: https://vitepress.dev/guide/ssr-compat#importing-in-mounted-hook
  if (!customElements.get('stripe-buy-button')) await import('../.vitepress/theme/buy-button.js');


  render(html`
      <stripe-buy-button
        buy-button-id="buy_btn_1QPNiEEZU356qiCHQGPpS1qS"
        publishable-key="pk_test_51Q9oAsEZU356qiCHy4JHabKGFsAb4wGmtW2bmTSBTG7S3jFYi6z7VwhovQmfkVRgXECStC1LbJ7KMYszx8JA86Y300WHhS8DxP"
      ></stripe-buy-button>
    `, document.querySelector('stripe-button-container'));

  });
</script>