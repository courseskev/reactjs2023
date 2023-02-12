import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
  Divider,
} from "react-bootstrap";

import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ products }) => {
  const { id } = useParams();

  const productFilter = products.filter((product) => product.id === id);
  return (
    <>
      {productFilter.map((product) => (
        <div key={product.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={product.pictureUrl} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{product.title}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Description: {product.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Category: {product.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {product.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Price: U$D {product.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount stock={product.stock} />
                <Center className="btn-center">
                  <Button variant="solid" colorScheme="blue">
                    Buy
                  </Button>
                </Center>
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
