import React, { useState, useEffect } from "react";

function Classic({ product, formId }) {
  const [purchaseOption, setPurchaseOption] = useState("one-time");
  const [subscriptionOption, setSubscriptionOption] = useState(
    product.selling_plan_groups[0].selling_plans[0].name
  );
// eslint-disable-next-line
  const handlePurchaseOptionChange = (event) => {
    setPurchaseOption(event.target.value);
  };
  useEffect(() => {
    if (purchaseOption === "one-time") {
      setSubscriptionOption("");
    }
    if (purchaseOption === "save-and-subscribe" && subscriptionOption === "") {
      setSubscriptionOption(
        product.selling_plan_groups[0].selling_plans[0].name
      );
    }
  }, [subscriptionOption, purchaseOption, handlePurchaseOptionChange, product]);

  const handleSubscriptionOptionChange = (event) => {
    setSubscriptionOption(event.target.value);
  };

  return (
    <div>
        <h3 className="title">Purchase Options :</h3>
      <div className="widgetClassicContainer">
        <div className="radio-container">
          <label className="one-time-button">
            <input
              type="radio"
              value="one-time"
              checked={purchaseOption === "one-time"}
              onChange={handlePurchaseOptionChange}
            />
            One-time Purchase
          </label>
          <div className="save-and-subscribe-container">
            <label className="save-and-subscribe-redio">
              <input
                type="radio"
                value="save-and-subscribe"
                checked={purchaseOption === "save-and-subscribe"}
                onChange={handlePurchaseOptionChange}
                form={subscriptionOption ? formId : "null"}
              />
              Subscribe and save
            </label>
            {purchaseOption === "save-and-subscribe" && (
            <div className="select-container">
              <select
                value={subscriptionOption}
                onChange={handleSubscriptionOptionChange}
              >
                {product.selling_plan_groups.map((group) =>
                  group.selling_plans.map((selling_plan) => (
                    <option
                      key={selling_plan.name}
                      value={`${selling_plan.name}`}
                    >
                      <input
                        type="hidden"
                        name="selling_plan"
                        className="selling_plan_radio_button"
                        id={`selling_plan_${selling_plan.id}`}
                        value={`${selling_plan.id}`}
                        form={
                          String(subscriptionOption) ===
                          String(selling_plan.name)
                            ? formId
                            : "null"
                        }
                      ></input>
                      {selling_plan.name}
                    </option>
                  ))
                )}
              </select>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classic;
