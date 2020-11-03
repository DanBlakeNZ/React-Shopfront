import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import Headline from "../../components/headline/headline.component";
import Modal from "../../components/modal/modal.component";
import Subheading from "../../components/subheading/subheading.component";
import Register from "../../components/register/register.component";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    return (
      <div className="page homepage center-content">
        <div className="hero-block">
          <Headline>
            A better way
            <br /> to enjoy every day.
          </Headline>
          <Subheading>Be the first to know when we launch.</Subheading>
          <CustomButton
            text="Request an invite"
            onClick={this.toggleModal}
            type="primary"
          />
          {this.state.showModal && (
            <Modal toggleModal={this.toggleModal}>
              <Register toggleModal={this.toggleModal} />
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
