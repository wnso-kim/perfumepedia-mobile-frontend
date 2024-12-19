import {
  DefaultButton,
  DisabledButton,
  CheckButton,
  SubmitButton,
  ChangeButton,
} from "../test/TestButton";
import InputTest from "../test/TestInput";
import SearchInputTest from "../test/TestSearchInput";

const Test = () => {
  return (
    <>
      {/* button test */}
      <div className="flex flex-col gap-1">
        <DefaultButton />
        <DisabledButton />
        <CheckButton />
        <SubmitButton />
        <ChangeButton />
      </div>
      {/* input test */}
      <div>
        <InputTest />
        <SearchInputTest />
      </div>
    </>
  );
};
export default Test;
