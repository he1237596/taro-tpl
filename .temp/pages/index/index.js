import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { AtForm, AtInput, AtButton } from 'taro-ui';
export default class Index extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: ''
    };
  }
  handleChange(value) {
    this.setState({
      value
    });
  }
  onSubmit(event) {
    console.log(this.state.value);
  }
  onReset(event) {
    this.setState({
      value: ''
    });
  }
  render() {
    return <AtForm onSubmit={this.onSubmit.bind(this)} onReset={this.onReset.bind(this)}>
        <AtInput name="value" title="文本" type="text" placeholder="单行文本" value={this.state.value} onChange={this.handleChange.bind(this, 'value')} />
        <AtButton formType="submit" type="primary">提交</AtButton>
        <AtButton formType="reset">重置</AtButton>
      </AtForm>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}