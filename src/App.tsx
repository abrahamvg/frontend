import { useState } from "react";
import JobPostingUI from "./JobPostingUI";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="font-general text-[#3D3D3D]">
      <JobPostingUI/>
    </main>
  );
}

export default App;
