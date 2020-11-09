import React from 'react';
import Link from 'next/link';
import { NextRouter } from 'next/router';

import style from './navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { AR_NAVBAR, EN_NAVBAR } from './translations.constants';
import DropDown from '../shared/dropdown/dropdown.component';

type Props = {
  router: NextRouter;
};
interface navState {
  about: boolean;
  whatWeDo: boolean;
  mediaRoom: boolean;
  resources: boolean;
  explore: boolean;
}

export default class Navbar extends React.Component<Props, navState> {

  constructor(props: Props) {
    super(props);
    this.state = {
      about: false,
      whatWeDo: false,
      mediaRoom: false,
      resources: false,
      explore: false,
    };
    this.toggleComponent = this.toggleComponent.bind(this);
  }

  toggleComponent(name: string): void {
    switch (name) {
      case 'about':
        this.setState({ about: !this.state.about });
        break;
      case 'whatWeDo':
        this.setState({ whatWeDo: !this.state.whatWeDo });
        break;
      case 'mediaRoom':
        this.setState({ mediaRoom: !this.state.mediaRoom });
        break;
      case 'resources':
        this.setState({ resources: !this.state.resources });
        break;
      case 'explore':
        this.setState({ explore: !this.state.explore });
        break;
      default:
        null;
    }
  }

  closeTabsEvent(): void {
    this.setState({ about: false, whatWeDo: false, mediaRoom: false, resources: false, explore: false });
  }

  render() {
    const { about, whatWeDo, mediaRoom, resources, explore } = this.state;
    const tabs = this.props.router.locale === 'en' ? EN_NAVBAR : AR_NAVBAR;
    return (
      <div className={style.navbar + ' py-2 px-5'}>
        <a href="/" className={style.logo}>
          <img src="/Images/ardd-logo.png" height="75" width="52" alt="Ardd logo" />
          <div className="my-auto ml-3">
            <p className={style['logo-font']}>{tabs.titleText1}</p>
            <p className={style['logo-font']}>{tabs.titleText2}</p>
          </div>
        </a>
        <div className={style.tabs + ' px-3'}>
          <div className="mr-4">
            <button onClick={() => this.toggleComponent('about')}>
              {tabs.navParentItem1.title}
              <span className="mx-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            {about && (
              <DropDown
                tab="about"
                itemClicked={this.toggleComponent}
                tabList={tabs.navParentItem1.dropDownItems}
              ></DropDown>
            )}
          </div>
          <div className="mx-4">
            <button onClick={() => this.toggleComponent('whatWeDo')}>
              {tabs.navParentItem2.title}
              <span className="mx-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            {whatWeDo && (
              <DropDown
                tab="whatWeDo"
                itemClicked={this.toggleComponent}
                tabList={tabs.navParentItem2.dropDownItems}
              ></DropDown>
            )}
          </div>
          <div className="mx-4">
            <button>{tabs.navParentItem3.title}</button>
          </div>
          <div className="mx-4">
            <button onClick={() => this.toggleComponent('mediaRoom')}>
              {tabs.navParentItem4.title}
              <span className="mx-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            {mediaRoom && (
              <DropDown
                tab="mediaRoom"
                itemClicked={this.toggleComponent}
                tabList={tabs.navParentItem4.dropDownItems}
              ></DropDown>
            )}
          </div>
          <div className="mx-4">
            <button onClick={() => this.toggleComponent('resources')}>
              {tabs.navParentItem5.title}
              <span className="mx-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            {resources && (
              <DropDown
                tab="resources"
                itemClicked={this.toggleComponent}
                tabList={tabs.navParentItem5.dropDownItems}
              ></DropDown>
            )}
          </div>
          <div className="ml-4">
            <button onClick={() => this.toggleComponent('explore')}>
              {tabs.navParentItem6.title}
              <span className="mx-2">
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            {explore && (
              <DropDown
                tab="explore"
                itemClicked={this.toggleComponent}
                tabList={tabs.navParentItem6.dropDownItems}
              ></DropDown>
            )}
          </div>
        </div>
        <div className={style.options + ' my-auto'}>
          <FontAwesomeIcon className="my-auto" icon={faSearch} />
          <Link href="" locale={this.props.router.locale === 'en' ? 'ar' : 'en'}>
            <a className={style['arabic-translation-word'] + ' ml-3'}>
              {this.props.router.locale === 'en' ? 'عربى' : 'English'}
            </a>
          </Link>
        </div>
      </div>
    );
  }
}
