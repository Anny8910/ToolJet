export function changeOption(_ref, option, value) {
  _ref.setState(
    {
      options: {
        ..._ref.state.options,
        [option]: value,
      },
    },
    () => {
      if (!((_ref?.state?.options[option] === undefined || _ref?.state?.options[option] === '') && value === ''))
        _ref.props.optionsChanged(_ref.state.options);
    }
  );
}
