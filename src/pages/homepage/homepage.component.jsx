import React, { useState } from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import Headline from "../../components/headline/headline.component";
import Modal from "../../components/modal/modal.component";
import Subheading from "../../components/subheading/subheading.component";
import RegisterForm from "../../components/register-form/register-form.component";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [hasRegistered, setHasRegistered] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const registrationComplete = () => {
    setHasRegistered(true);
  };

  return (
    <div className="page center-content">
      <div className="hero-block">
        <div>
          <Headline text="A better way to enjoy your day" />
          <Subheading text="Be the first to know when we launch" />
          <CustomButton text="Request an invite" onClick={toggleModal} />
          {showModal && (
            <Modal toggleModal={toggleModal}>
              {hasRegistered ? (
                <p>Registered</p>
              ) : (
                <RegisterForm registrationComplete={registrationComplete} />
              )}
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
