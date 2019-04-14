import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Step1 from "./PublishSteps/Step1.jsx";
import Step2 from "./PublishSteps/Step2.jsx";
import Step3 from "./PublishSteps/Step3.jsx";

class Publish extends React.Component {
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Wizard
            validate
            steps={[
              {
                stepName: "Upload Artifacts",
                stepComponent: Step1,
                stepId: "artifact"
              },
              {
                stepName: "Licensing Terms",
                stepComponent: Step2,
                stepId: "terms"
              },
              { stepName: "Publish", stepComponent: Step3, stepId: "publish" }
            ]}
            title="Publish Artifacts to Flo and IPFS"
            subtitle="A pretty cool way of protecting your files!"
            finishButtonClick={e => console.log(e)}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default Publish;
