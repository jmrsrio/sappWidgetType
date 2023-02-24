import Classic from "./classic";
import Compact from "./compact";
import {
  ChakraProvider,
} from "@chakra-ui/react";
function App() {
  let sappConfig = localStorage.getItem("sappConfig");
  let sappConfigP = JSON.parse(sappConfig);

  let product = sappConfigP.product;
  let widgetType = sappConfigP.widgetType;
  let formId = localStorage.getItem("formELementId");
  let widgetList =
    String(widgetType) === "Classic" ? (
      <Classic product={product} formId={formId} />
    ) : (
      <Compact product={product} formId={formId} />
    );

  return product.selling_plan_groups.length ? (
    <ChakraProvider>
      <> {widgetList}</>
    </ChakraProvider>
  ) : (
    ""
  );
}

export default App;
