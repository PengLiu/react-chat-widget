import React from 'react';
import cn from 'classnames';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import QuickButtons from './components/QuickButtons';

import { AnyFunction } from '../../../../utils/types';

import './style.scss';

type Props = {
  title: string;
  subtitle: string;
  senderPlaceHolder: string;
  showCloseButton: boolean;
  disabledInput: boolean;
  autofocus: boolean;
  className: string;
  sendMessage: AnyFunction;
  toggleChat: AnyFunction;
  profileAvatar?: string;
  titleAvatar?: string;
  onQuickButtonClicked?: AnyFunction;
  onTextInputChange?: (event: any) => void;
  sendButtonAlt: string;
  showTimeStamp: boolean;
  webMode: boolean;
};

function Conversation({
  title,
  subtitle,
  senderPlaceHolder,
  showCloseButton,
  disabledInput,
  autofocus,
  className,
  sendMessage,
  toggleChat,
  profileAvatar,
  titleAvatar,
  onQuickButtonClicked,
  onTextInputChange,
  sendButtonAlt,
  showTimeStamp,
  webMode
}: Props) {

  const logoImg = require('../../../../../assets/custom/logo.jpg') as string;

  const iconWyb = require('../../../../../assets/custom/icon_wyb.png') as string;
  const iconXxbg = require('../../../../../assets/custom/icon_xxbg.png') as string;
  const iconZy = require('../../../../../assets/custom/icon_zy.png') as string;
  const iconFw = require('../../../../../assets/custom/icon_fw.png') as string;

  if (webMode) {
    return (
      <div className={cn('rcw-conversation-container', className)} aria-live="polite">
        <Header
          title={title}
          subtitle={subtitle}
          toggleChat={toggleChat}
          showCloseButton={showCloseButton}
          titleAvatar={titleAvatar}
        />
        <div className="rcw-main-wrapper">
          <div className="rcw-left-sidebar">
            <Messages profileAvatar={profileAvatar} showTimeStamp={showTimeStamp} />
            <QuickButtons onQuickButtonClicked={onQuickButtonClicked} />
            <Sender
              sendMessage={sendMessage}
              placeholder={senderPlaceHolder}
              disabledInput={disabledInput}
              autofocus={autofocus}
              onTextInputChange={onTextInputChange}
              buttonAlt={sendButtonAlt}
            />
          </div>
          <div className="rcw-right-sidebar">
            <div>
              <img className="rcw-custom-logo" src={logoImg} />
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
                对公服务
              </a>
            </div>
            <div className="rcw-custom-link">
              <a target="_blank" href="http://wt.ybzx.taiyuan.gov.cn/tyybwt/pc/bzzx_1594022753000/index.html">
                <img className="rcw-custom-icon" src={iconZy} />
                帮助中心
              </a>
            </div>
            <div className="rcw-custom-link">
              <a target="_blank" href="http://gzh.ybzx.taiyuan.gov.cn/wxkf/wx-selfservice/pages/index/index?l=t">
                <img className="rcw-custom-icon" src={iconFw} />我要留言
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={cn('rcw-conversation-container', className)} aria-live="polite">
        <Header
          title={title}
          subtitle={subtitle}
          toggleChat={toggleChat}
          showCloseButton={showCloseButton}
          titleAvatar={titleAvatar}
        />
        <Messages profileAvatar={profileAvatar} showTimeStamp={showTimeStamp} />
        <QuickButtons onQuickButtonClicked={onQuickButtonClicked} />
        <Sender
          sendMessage={sendMessage}
          placeholder={senderPlaceHolder}
          disabledInput={disabledInput}
          autofocus={autofocus}
          onTextInputChange={onTextInputChange}
          buttonAlt={sendButtonAlt}
        />
      </div>
    );
  }
}

export default Conversation;
