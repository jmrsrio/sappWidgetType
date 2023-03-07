// import Classic from "./classic";
import Classics from "./classics";
import Compacts from "./compacts";

function App() {
  let sappConfig = localStorage.getItem("sappConfig");
  let sappConfigP = JSON.parse(sappConfig);

  let product = sappConfigP.product;
  let widgetType = sappConfigP.widgetType;
  let formId = localStorage.getItem("formELementId");
  let widgetList =
    String(widgetType) === "Compact" ? (
      <Compacts product={product} formId={formId} />
    ) : (
      <Classics product={product} formId={formId} />
    );

  return product.selling_plan_groups.length ? <> {widgetList}</> : "";
}

export default App;
