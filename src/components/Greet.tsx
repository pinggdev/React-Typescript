type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
// tanda tanya dipakai diakhir agar variablenya menjadi opsional untuk dipakai, sehingga tidak ada error yang terjadi, bisa disebut sebagai optional props

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome {props.name}! You have {props.messageCount} unreaed message`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
