type StatusProps = {
  status: "loading" | "success" | "error";
  // dibuat agar hanya 3 string ini yang bisa dipakai, selain ini tidak ada
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading";
  } else if (props.status === "success") {
    message = "Data fethced successfully!";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
