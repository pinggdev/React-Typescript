type GreetProps = {
  name: string;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name}! You have 10 unreaed message</h2>
    </div>
  );
};
