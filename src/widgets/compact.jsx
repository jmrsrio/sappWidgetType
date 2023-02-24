import { Box, Card, CardBody, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
function Compact({ product, formId }) {
  const [isSelected, setIsSelected] = useState("");

  const selectedStyle = {
    border: "2px solid #0289E5",
    fontSize: "12px!important",
    transform: "scale(1.1)",
    transition: "0.2s all ease",
  };

  const handleClick = (selling_plan) => {
    setIsSelected(selling_plan);
  };
  return (
    product.selling_plan_groups && (
      <Box className="formContainer">
        <Text fontSize="16" fontWeight="bold" padding="15px 0">
          Purchase Options
        </Text>
        <Box>
          {product.selling_plan_groups[0].selling_plans.length && (
            <Card
              border="1px solid #C0C0C0"
              backgroundColor="#E6F5FF"
              marginTop="0!important"
              padding="15px"
            >
              <Box padding="10px 20px">
                <Text>Renews every :</Text>
                <SimpleGrid
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(105px, 1fr))"
                  mt="10px"
                >
                  <Card
                    onClick={() => handleClick("Just Once")}
                    sx={isSelected === "Just Once" ? selectedStyle : ""}
                  >
                    <CardBody p="10px">
                      <Text fontSize="12px" textAlign="center">
                        Just Once{" "}
                      </Text>
                      <Text fontSize="12px" textAlign="center">
                        Full price
                      </Text>
                    </CardBody>
                  </Card>
                  {product.selling_plan_groups[0].selling_plans.map(
                    (selling_plan, idx) => (
                      <Card
                        key={idx}
                        onClick={() => handleClick(selling_plan.name)}
                        cursor="pointer"
                        sx={
                          isSelected === selling_plan.name ? selectedStyle : ""
                        }
                        id={`selling_plan_${selling_plan.id}`}
                      >
                        <CardBody p="10px" justifyContent="center">
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
                          <Text fontSize="12px">{selling_plan.name}</Text>
                        </CardBody>
                      </Card>
                    )
                  )}
                </SimpleGrid>
              </Box>
            </Card>
          )}
        </Box>
      </Box>
    )
  );
}

export default Compact;
