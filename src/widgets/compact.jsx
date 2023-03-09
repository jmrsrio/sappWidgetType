import { useEffect, useState } from "react";

function Compact({ product, formId }) {
  const [isSelected, setIsSelected] = useState("Just Once");
  const [isbackgroundColor, setIsBackgroundColor] = useState("");
  useEffect(() => {
    const addToCartButton = document.querySelector('[name="add"]');
    if (addToCartButton) {
      const backgroundColor = getComputedStyle(addToCartButton).backgroundColor;
      setIsBackgroundColor(backgroundColor);
    }
    // eslint-disable-next-line
  }, []);

  const selectedStyle = {
    border: `2px solid ${isbackgroundColor}`,
    fontSize: "12px!important",
    transform: "scale(1.1)",
    transition: "0.2s all ease",
  };

  const handleClick = (selling_plan) => {
    setIsSelected(selling_plan);
  };
  return (
    product.selling_plan_groups.length && (
      <div className="formContainer">
        <h3 className="title">Purchase Options :</h3>
        <div>
          <div className="card">
            <div className="options">
              <div
                className="option"
                style={isSelected === "Just Once" ? selectedStyle : {}}
                onClick={() => handleClick("Just Once")}
              >
                <p className="optionText">Just once</p>
                <p className="optionText">Full price</p>
              </div>
              {product.selling_plan_groups.map((group) =>
                group.selling_plans.map((selling_plan) => (
                  <div
                    key={selling_plan.name}
                    className="option"
                    style={
                      isSelected === selling_plan.name ? selectedStyle : {}
                    }
                    onClick={() => handleClick(selling_plan.name)}
                    id={`selling_plan_${selling_plan.id}`}
                  >
                    <input
                      type="hidden"
                      name="selling_plan"
                      className="selling_plan_radio_button"
                      id={`selling_plan_${selling_plan.id}`}
                      value={`${selling_plan.id}`}
                      form={
                        String(isSelected) === String(selling_plan.name)
                          ? formId
                          : ""
                      }
                    ></input>
                    <p className="optionText-name">{selling_plan.name}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Compact;
