import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { textAlign } from "@mui/system";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const onAdd = () => {
    setCount(count + 1);
  };

  const onSubstract = () => {
    setCount(count - 1);
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {count < 1 ? (
          <Button>
            <FaMinus isDisabled />
          </Button>
        ) : (
          <Button>
            <FaMinus onClick={onSubstract} />
          </Button>
        )}
        <div style={(textAlign = "center")}>{count}</div>
        {count < stock ? (
          <Button>
            <FaPlus onClick={onAdd} />
          </Button>
        ) : (
          <Button>
            <FaPlus isDisabled />
          </Button>
        )}
      </ButtonGroup>
    </>
  );
};

export default ItemCount;
