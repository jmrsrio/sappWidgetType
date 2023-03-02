import { Box, Card, Radio, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
function Classic({ product, formId }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [isbackgroundColor, setIsBackgroundColor] = useState("");

  useEffect(() => {
    const addToCartButton = document.querySelector('[name="add"]');
    if (addToCartButton) {
      const backgroundColor = getComputedStyle(addToCartButton).backgroundColor;
      setIsBackgroundColor(backgroundColor);
    }
    // eslint-disable-next-line
  }, []);

  const onHandleClick = () => {
    setChecked(!checked);
    setSelectedValue("");
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    product.selling_plan_groups && (
      <Box className="formContainer">
        <Text fontWeight="bold" fontSize="16px" padding="15px 0">
          Purchase Options
        </Text>
        <Card border="1px solid #C0C0C0">
          <Box padding="15px">
            <Radio
              name="selling_plan"
              className="selling_plan_radio_button"
              value="one_time_purchase"
              isChecked={checked}
              onClick={() => onHandleClick("one_time_purchase")}
              colorScheme={isbackgroundColor}
              size="lg"
            >
              <Text fontSize="16px"> One Time Purchase</Text>
            </Radio>
          </Box>
          {product.selling_plan_groups[0].selling_plans.length && (
            <Box
              padding="15px"
              borderTop="1px solid #C0C0C0"
              backgroundColor="transparent"
            >
              <Text fontWeight="bold"> Subscribe and save</Text>
              <Box padding="10px 0px">
                <Text paddingBottom="15px">Delivery Frequency</Text>
                <Select
                  border="1px solid #C0C0C0"
                  id={`${product.selling_plan_groups[0].selling_plans.id}`}
                  value={selectedValue}
                  onChange={handleSelectChange}
                  h="30px"
                  fontSize="15px"
                  focusBorderColor={isbackgroundColor}
                  variant="filled"
                >
                  {product.selling_plan_groups[0].selling_plans.map(
                    (selling_plan) => (
                      <option
                        key={selling_plan.name}
                        value={`${selling_plan.name}`}
                      >
                        {" "}
                        <input
                          type="hidden"
                          name="selling_plan"
                          className="selling_plan_radio_button"
                          id={`selling_plan_${selling_plan.id}`}
                          value={`${selling_plan.id}`}
                          form={
                            String(selectedValue) === String(selling_plan.name)
                              ? formId
                              : "null"
                          }
                        ></input>
                        {selling_plan.name}
                      </option>
                    )
                  )}
                </Select>
              </Box>
            </Box>
          )}
        </Card>
      </Box>
    )
  );
}

export default Classic;
