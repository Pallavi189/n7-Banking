import Button from "./ui/Button";

function Frame1({ className = "" }) {
  return (
    <Button preset="demo" className={className} icon={false}>
      REQUEST DEMO
    </Button>
  );
}

export default Frame1;
