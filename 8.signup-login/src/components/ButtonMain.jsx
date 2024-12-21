import { Button } from "@nextui-org/react";

export default function ButtonMain({ signUp, logIn }) {
  if (signUp) {
    return (
      <Button color="primary" variant="flat" type="submit">
        {signUp}
      </Button>
    );
  }
  if (logIn) {
    return (
      <Button color="primary" variant="flat" type="submit">
        {logIn}
      </Button>
    );
  }
}
