import "./App.css";
// import { Container } from "./components/Container";
// import { Button } from "./components/Button";
// import { Input } from "./components/Input";
// import { Greet } from "./components/Greet";
// import { Heading } from "./components/Heading";
// import { Oscar } from "./components/Oscar";
// import { Status } from "./components/Status";
// import { Greet } from "./components/Greet";
// import { Person } from "./components/Person";
// import { PersonList } from "./components/PersonList";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   },
  // ];

  return (
    <div className="App">
      {/* <Greet name="Kevin" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      {/* <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name="Vishwas" isLoggedIn={false} /> */}
      {/* <Button
        handleClick={() => {
          console.log("Button clicked");
        }}
        handleClick={(event) => {
          console.log("Button Click", event);
        }}
        handleClick={(event, id) => {
          console.log("Button Click", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
