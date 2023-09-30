import DefaultLayout from "./components/layout/DefaultLayout";
import Data from "./Data";
import InnerBlocks from "./components/layout/InnerBlocks";

function App() {
  return (
    <DefaultLayout>
      <div>
        <InnerBlocks content={Data?.content} />
      </div>
    </DefaultLayout>
  );
}

export default App;
