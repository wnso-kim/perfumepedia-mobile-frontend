import {
  DefaultButton,
  DisabledButton,
  CheckButton,
  SubmitButton,
  ChangeButton,
} from "./test/TestButton";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-red-500">Tailwind TEST</h1>
      {/* button test */}
      <div className="flex flex-col gap-1">
        <DefaultButton />
        <DisabledButton />
        <CheckButton />
        <SubmitButton />
        <ChangeButton />
      </div>
    </div>
  );
}

export default App;
