import { useState } from "react";
import "./App.css";
import TabButton from "./components/TabButton";
import TabContent from "./components/TabContent";
import { CORE_FEATURES, TAB_FEATURE_MENU, TAB_FEATURES } from "./data/features";
import CoreFeature from "./components/CoreFeature";

function App() {
  const [selectedFeature, setSelectedFeature] = useState(
    TAB_FEATURE_MENU[0].key
  );
  function onSelectTabMenu(menuName: string) {
    setSelectedFeature(menuName);
  }
  return (
    <>
      <section id="core-feature">
        <h2 className="text-xl font-semibold">Core Features</h2>
        <div className="flex">
          {CORE_FEATURES.map((feature) => (
            <CoreFeature key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section id="core-feature-detail">
        {TAB_FEATURE_MENU.map((feature) => (
          <>
            <TabButton
              key={feature.key}
              isSelected={selectedFeature === feature.key}
              onClickHandler={() => onSelectTabMenu(feature.key)}
            >
              {feature.menu}
            </TabButton>
          </>
        ))}
        <TabContent
          content={TAB_FEATURES[selectedFeature].content}
        ></TabContent>
      </section>
    </>
  );
}

export default App;
