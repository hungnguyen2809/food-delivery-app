import React, {Component} from 'react';
import {Button, Snackbar} from 'react-native-paper';

type ToastSnackbarProps = Record<string, any>;
type ToastSnackbarState = {visible: boolean; message: string};

type ActionSnack = Omit<React.ComponentProps<typeof Button>, 'children'> & {label: string};
type OptionSnack = {duration?: number; action?: ActionSnack};

const DEFAULT_OPTION = {duration: 3000};

export class ToastSnackbar extends Component<ToastSnackbarProps, ToastSnackbarState> {
  static snackbar: ToastSnackbar;
  private static options?: OptionSnack;

  constructor(props: ToastSnackbarProps) {
    super(props);
    ToastSnackbar.snackbar = this;
    this.state = {message: '', visible: false};
  }

  static openSnackbar = (message: string, options?: OptionSnack) => {
    ToastSnackbar.options = {...DEFAULT_OPTION, ...options};
    ToastSnackbar.snackbar.onOpenSnackbar(message);
  };

  onOpenSnackbar = (message: string) => {
    this.setState({visible: true, message: message});
  };

  onDismissSnackbar = () => {
    ToastSnackbar.options = {...DEFAULT_OPTION};
    this.setState({visible: false, message: ''});
  };

  render() {
    return (
      <Snackbar
        visible={this.state.visible}
        onDismiss={this.onDismissSnackbar}
        action={ToastSnackbar.options?.action}
        duration={ToastSnackbar.options?.duration}
      >
        {this.state.message}
      </Snackbar>
    );
  }
}

export default ToastSnackbar;
