import React, { Component } from 'react';

import { Widget, addResponseMessage, setQuickButtons, toggleMsgLoader, addLinkSnippet, toggleWidget } from '../index';
import { addUserMessage } from '..';

export default class App extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
    addLinkSnippet({ link: 'https://google.com', title: 'Google' });
    addResponseMessage('![](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)');
    addResponseMessage('![vertical](https://d2sofvawe08yqg.cloudfront.net/reintroducing-react/hero2x?1556470143)');
    toggleWidget();
  }

  handleNewUserMessage = (newMessage: any) => {
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();
      if (newMessage === 'fruits') {
        setQuickButtons([{ label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' }]);
      } else {
        addResponseMessage(newMessage);
      }
    }, 2000);
  }

  handleQuickButtonClicked = (e: any) => {
    addResponseMessage('Selected ' + e);
    setQuickButtons([]);
  }

  handleSubmit = (msgText: string) => {
    if (msgText.length < 80) {
      addUserMessage("Uh oh, please write a bit more.");
      return false;
    }
    return true;
  }

  render() {

    const logoImg = require('../assets/custom/logo.jpg') as string;
    const telImg = require('../assets/custom/icon_tel.png') as string;
    const iconWyb = require('../assets/custom/icon_wyb.png') as string;
    const iconXxbg = require('../assets/custom/icon_xxbg.png') as string;
    const iconZy = require('../assets/custom/icon_zy.png') as string;
    const iconFw = require('../assets/custom/icon_fw.png') as string;

    const sideBar = (
      <React.Fragment>
        <div className="tel-info">
          <p>
            太原热线电话</p>

          <p><img src={telImg} width='30' /><span> 0351-2377283</span></p>
        </div>
        <div className="rcw-custom-link">
          <a target="_blank" href="http://wt.ybzx.taiyuan.gov.cn/tyybwt/pc/index.html">
            <img className="rcw-custom-icon" src={iconWyb} />
            <span>网上大厅</span>
          </a>
        </div>
        <div className="rcw-custom-link">
          <a target="_blank" href="http://wt.ybzx.taiyuan.gov.cn/tyybwt/pc/dgfw_1594022707000/index.html">
            <img className="rcw-custom-icon" src={iconXxbg} />
            <span>对公服务</span>
          </a>
        </div>
        <div className="rcw-custom-link">
          <a target="_blank" href="http://wt.ybzx.taiyuan.gov.cn/tyybwt/pc/bzzx_1594022753000/index.html">
            <img className="rcw-custom-icon" src={iconZy} />
            <span>帮助中心</span>
          </a>
        </div>
        <div className="rcw-custom-link">
          <a target="_blank" href="http://gzh.ybzx.taiyuan.gov.cn/wxkf/wx-selfservice/pages/index/index?l=t">
            <img className="rcw-custom-icon" src={iconFw} />
            <span>我要留言</span>
          </a>
        </div>
      </React.Fragment>
    )

    const quickButtons = [{ label: "我要留言", value: "levelMsg" }];
    setQuickButtons(quickButtons);

    return (
      <div>
        <Widget
          title="Bienvenido"
          subtitle="Asistente virtual"
          senderPlaceHolder="Escribe aquí ..."
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          imagePreview
          handleSubmit={this.handleSubmit}
          fullScreenMode={true}
          webMode={true}
          titleAvatar={logoImg}
          sideBar={sideBar}
        />
      </div>
    );
  }
}
