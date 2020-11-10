import React from 'react';
import { Modal } from 'react-native';
import PropTypes from 'prop-types';

import { isIphone } from '../helpers';

class ModalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  close({ then } = {}) {
    if (isIphone) {
      this.setState({ visible: false, onDismiss: then });
    } else {
      this.setState({ visible: false });
      if (then !== undefined) {
        then();
      }
    }
  }

  show() {
    this.setState({ visible: true });
  }

  render() {
    const { visible, onDismiss } = this.state;
    const { children } = this.props;
    return (
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onDismiss={onDismiss}
        {...this.props}>
        {children}
      </Modal>
    );
  }
}

ModalView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalView;
